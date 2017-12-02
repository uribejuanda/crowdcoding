import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MAT_PLACEHOLDER_GLOBAL_OPTIONS, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        LoginComponent,
        RegistrationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,

        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
      ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
