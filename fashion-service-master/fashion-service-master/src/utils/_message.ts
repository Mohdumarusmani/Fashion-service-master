import {IMsg,IError} from 'types/index';

/**
 * Standard message generator
 */
export function createMessage(status: number, message: string, payload?: any): IMsg {
    const msg: IMsg = {
        status: status,
        message: message,
        payload: payload
    }

    return msg;
}

export function createError(status: number, message: string): IError {
    const err: IError = {
        status: status,
        message: message
    }

    return err;
}