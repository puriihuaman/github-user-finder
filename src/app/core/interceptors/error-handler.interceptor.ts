import {
  HttpInterceptorFn,
  type HttpErrorResponse,
} from "@angular/common/http";
import { CustomError } from "@models/CustomError";
import { catchError, throwError } from "rxjs";

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
        return throwError(
          (): CustomError =>
            new CustomError(error.error.message, error.status, error.message)
        );
      } else {
        return throwError(
          (): CustomError =>
            new CustomError(error.name, error.status, error.message)
        );
      }
    })
  );
};
