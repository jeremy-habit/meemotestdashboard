import { DEVICE_TYPE } from '@/constants/constants';

export const logger = (name: string, content?: any) => {
    if (process.env.NODE_ENV === "development") {
        console.log(`${DEVICE_TYPE}${name}`, JSON.stringify(content));
    }
};
