/**
 * TODO: Mock the translate service to improve the tests accurracy
 */

import {TranslateModule} from '@ngx-translate/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
    let component: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ TranslateModule.forRoot() ],
            declarations: [RegistrationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should be the component created', () => {
        expect(component).toBeTruthy();
    });

    it('Should exist the form in the page', async (() => {
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        const registrationForm = compiled.querySelector('form');
        expect(registrationForm).toBeTruthy();
    }));

});
