import {RootState} from '@/store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AccessTokenFragment, UserFragment} from "@/generated";

export type UserModel = AccessTokenFragment & UserFragment;
const initialState = {} as UserModel;

const userReducer = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<Partial<UserFragment>>) => {
            return {...state, ...action.payload};
        },
        setToken: (state, action: PayloadAction<AccessTokenFragment>) => {
            return {...state, ...action.payload};
        },
        removeUser: _ => ({...initialState}),
    },
});

export const selectIsUserConnected = (state: RootState) => state.user.accessToken && state.user.isTermsAccepted;

export const {setUser, removeUser, setToken} = userReducer.actions;

export default userReducer;
