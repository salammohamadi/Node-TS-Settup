import express from 'express';
import HttpException from '@/utils/exceptions/http.exception';

function errorMiddleWare(
    error: HttpException,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
): void {
    const statusCode = error.status || 500;
    const status = statusCode.toString().startsWith('4') ? 'fail' : 'error';
    const message = error.message || 'Something went wrong';

    res.status(statusCode).json({
        status,
        message,
    });
}

export default errorMiddleWare;
