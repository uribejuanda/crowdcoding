import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    fullNameFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_ ]*$'),
    ]);

    matcher = new MyErrorStateMatcher();

    constructor() {
    }

    ngOnInit() {
    }



}
