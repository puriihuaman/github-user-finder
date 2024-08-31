import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";

import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { errorHandlerInterceptor } from "./core/interceptors/error-handler.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([errorHandlerInterceptor])),
  ],
};
