import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ResponseFormatMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Intercepta la respuesta antes de que se envíe al cliente
    res.locals.response = (message: string, data: any = null, status: boolean = true, returnStatus: number = 200) => {
      const responseObj = { status, message, data };
      res.status(returnStatus).json(responseObj);
    };
    next();
  }
}
