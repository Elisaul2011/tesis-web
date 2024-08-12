import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { baseInterceptor } from './interceptors/Base.interceptor';
import { provideClientHydration } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(), 
    provideHttpClient(
      withFetch(),
      withInterceptors([baseInterceptor])
    ),
    provideAnimationsAsync(),
    importProvidersFrom(MatNativeDateModule)
  ]
};
