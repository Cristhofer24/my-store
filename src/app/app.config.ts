/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {

  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes,withComponentInputBinding()),

  provideHttpClient(),
  provideFirebaseApp(() => initializeApp({"projectId":"app-chocolate-da639","appId":"1:606470027847:web:aeaf26ad63db0bd3cbcf62","storageBucket":"app-chocolate-da639.appspot.com","apiKey":"AIzaSyDBounxyHIudKFOaraIOCjD-xJ8IrBefOo","authDomain":"app-chocolate-da639.firebaseapp.com","messagingSenderId":"606470027847","measurementId":"G-7LS2F1FQJS"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage())
  ]
};
