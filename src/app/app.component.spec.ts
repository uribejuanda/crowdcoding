import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from './material/material.module';

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomepageComponent,
        LoginComponent,
        AppComponent,
        RegistrationComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      imports: [ MaterialModule, TranslateModule.forRoot(), AppRoutingModule, BrowserAnimationsModule ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
