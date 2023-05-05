import express from 'express';
import Joi from 'joi';

function validationMiddleware(schema: Joi.Schema): express.RequestHandler {
    return async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ): Promise<void> => {
        const validateOptions = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true,
        };

        try {
            const value = await schema.validateAsync(req.body, validateOptions);
            next();
        } catch (err) {
            const errors: string[] = [];

            if (err instanceof Joi.ValidationError) {
                err.details.forEach((e: Joi.ValidationErrorItem) => errors.push(e.message));
            }

            res.status(400).send({ errors });
        }
    };
}

export default validationMiddleware;
