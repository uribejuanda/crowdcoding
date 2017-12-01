/**
 * TODO: Mock the translate service to improve the tests accurracy
 */

import {TranslateModule} from '@ngx-translate/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
    let component: HomepageComponent;
    let fixture: ComponentFixture<HomepageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ TranslateModule.forRoot() ],
            declarations: [HomepageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomepageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should render title in a h1 tag', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('h1').textContent).toContain('homepage.welcome');
      }));

    it('Should exist registration button', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        const registrationButton = compiled.querySelector('#registrationButton');
        expect(registrationButton.textContent).toContain('homepage.register');
    }));

});
