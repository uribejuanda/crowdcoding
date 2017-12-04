import { Attribute, Component, Directive, forwardRef, OnInit} from '@angular/core';
import { FormControl, FormGroupDirective, NG_VALIDATORS, NgForm, Validator, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroup } from '@angular/forms';

export class User {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    user: User;
    userForm: FormGroup;

    constructor() {
        this.user = new User();
    }

    ngOnInit(): void {
        this.userForm = new FormGroup({
            'name': new FormControl(this.user.name, [
                Validators.required
            ]),
            'email': new FormControl(this.user.email, [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl(this.user.password, [
                Validators.required
            ]),
            'passwordConfirmation': new FormControl(this.user.passwordConfirmation, [
                Validators.required
            ]),
        });

        // matcher = new MyErrorStateMatcher();
    }

    get name() {
        return this.userForm.get('name');
    }

    get email() {
        return this.userForm.get('email');
    }

    get password() {
        return this.userForm.get('password');
    }

    get passwordConfirmation() {
        return this.userForm.get('passwordConfirmation');
    }

    onSubmit() {
        console.log('entrando 123 ...', this.user);
    }



}
