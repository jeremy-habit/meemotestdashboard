import { userRefreshToken } from '@/services/userRefresh.graph';
import store from '@/store';
import { removeUser, setToken } from '@/store/reducers/userReducer';
import { logger } from '@/utils/debug.utils';
import { isValueInObjectDeep } from '@/utils/object.utils';
import axios from 'axios';
import { DEVICE_TYPE } from '@/constants/constants';

const options = {
    baseURL: process.env.REACT_APP_GRAPH_URL,
    headers: {
        locale: 'en',
        'device-type': DEVICE_TYPE,
    },
};

const instance = axios.create(options);

export const setHeaderAuthorization = (token: string) => {
    instance.defaults.headers.Authorization = token;
};

export const removeHeaderAuthorization = () => {
    delete instance.defaults.headers.Authorization;
};

export const fetchData = <TData, TVariables>(query: string, variables?: TVariables): (() => Promise<TData>) => {
    return async () => {
        try {
            const { data } = await instance.post('', {
                query,
                variables,
            });
            if (isValueInObjectDeep(data, 'NotAuthorizedError')) {
                logger('NotAuthorizedError for', query);
                const state = store.getState();
                const { refreshToken } = state.user;
                if (refreshToken) {
                    try {
                        const { data: refreshData } = await instance.post('', {
                            query: userRefreshToken,
                            variables: { refreshToken },
                        });
                        const result = refreshData?.data?.userRefreshToken;
                        if (result.__typename === 'AccessTokenResult') {
                            setHeaderAuthorization(result.accessToken);
                            store.dispatch(setToken(result));
                            logger('new refresh token');
                            // we throw error to let react-query handle the retry of failed requests
                            throw new Error();
                        } else {
                            // if no new accessToken is sent, we logout the user
                            logger('refresh token is obsolete, remove current user');
                            removeHeaderAuthorization();
                            store.dispatch(removeUser());
                        }
                    } catch (e) {
                        logger('interceptor_request', e);
                        throw e;
                    }
                }
            }
            if (data.errors) {
                throw data.errors;
            }
            return data.data;
        } catch (e) {
            throw e;
        }
    };
};

export default instance;
