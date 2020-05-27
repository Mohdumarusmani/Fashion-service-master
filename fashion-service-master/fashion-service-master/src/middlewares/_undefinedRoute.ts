import {NextFunction, Request, Response} from 'express';
import {createError} from 'utils/index';

export const UndefinedRoute = ((req: Request , res: Response, next: NextFunction) => {
    next(createError(404,'Not Found'));
});