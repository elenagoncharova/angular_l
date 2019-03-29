import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public signUpForm: FormGroup = null;
  public userData: any = null;

  public contactTypes: { value: string, title: string, validators?: ValidatorFn[] }[] = [
    {value: 'phone', title: 'Phone', validators: [this.phoneValidator(), Validators.required]},
    {value: 'e-mail', title: 'E-mail', validators: [Validators.email, Validators.required]},
    {value: 'skype', title: 'Skype', validators: [Validators.required, this.skypeLoginValidator()]}
  ];

  private getContactValidatorsByType(type: string): ValidatorFn[] {
    return this.contactTypes.filter((el: any) => el.value === type)[0].validators;
  }

  constructor(private fb: FormBuilder) {
    const pwdValidators: ValidatorFn[] = [Validators.required, Validators.minLength(6), Validators.maxLength(20)];

    this.signUpForm = fb.group({
      user_name: ['', [Validators.required, this.userNameValidator()]],
      address: fb.group({
        country: ['', [Validators.minLength(2), Validators.maxLength(50), Validators.required]],
        city: ['', [Validators.minLength(2), Validators.maxLength(50), Validators.required]]
      }),
      contacts: fb.array([], this.contactsLenValidator()),
      passwords: fb.group({
        pwd: ['', pwdValidators],
        confirm: ['', pwdValidators]
      }, {validator: this.passwordsAreEqual()})
    });
  }

  public get contacts(): FormArray {
    return <FormArray>this.signUpForm.get('contacts');
  }

  // methods for contact manipulation
  public addContact(): void {
    const newItemType = this.contactTypes[0].value;
    (<FormArray>this.signUpForm.get('contacts')).push(
        this.fb.group({
          type: [newItemType, Validators.required],
          value: ['', this.getContactValidatorsByType(newItemType)]
        })
    );

    const contactControls = this.signUpForm.get('contacts')['controls'];
    const currentContactGroup = contactControls[contactControls.length - 1];

    currentContactGroup.get('type').valueChanges.subscribe((type: string) => {
      const valueCtrl: FormControl = currentContactGroup.get('value');
      valueCtrl.setValidators(this.getContactValidatorsByType(type));
      valueCtrl.updateValueAndValidity();
    });
  }

  public removeContact(i: number): void {
    (<FormArray>this.signUpForm.get('contacts')).removeAt(i);
  }

  // end methods for contact manipulation


  // custom validators
  private contactsLenValidator(): ValidatorFn {
    return (contacts: FormArray): { [key: string]: any } => {
      if (contacts.length !== 0) {
        return null;
      }
      return {
        custom: 'At least one contact info should be added'
      };
    };
  }

  private passwordsAreEqual(): ValidatorFn {
    console.log('here');

    return (group: FormGroup): { [key: string]: any } => {
      if (!(group.dirty || group.touched) || group.get('pwd').value === group.get('confirm').value) {
        return null;
      }
      return {
        custom: 'Passwords are not equal'
      };
    };
  }

  private skypeLoginValidator(): ValidatorFn {
    const pattern: RegExp = /^[a-z][a-z0-9\.,\-_]{5,31}$/i;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) {
        return null;
      } else {
        return pattern.test(control.value) ? null : {custom: `Invalid skype login`};
      }
    };
  }

  private phoneValidator(): ValidatorFn {
    const pattern: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) {
        return null;
      } else {
        return pattern.test(control.value) ? null : {custom: `Invalid phone number`};
      }
    };
  }

  private userNameValidator(): ValidatorFn {
    const pattern: RegExp = /^[\w\.\$@\*\!]{5,30}$/;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!(control.dirty || control.touched)) {
        return null;
      } else {
        return pattern.test(control.value) ? null : {custom: `Min length:5, can't contain whitespaces & special symbols.`};
      }
    };
  }

  // end custom validators


  ngOnInit() {
    this.addContact();
    // clear user data, if form invalid
    this.signUpForm.statusChanges.subscribe((status) => {
      if (status === 'INVALID' && !!this.userData) {
        this.userData = null;
      }
    });
  }

  private markControlsAsTouched(form) {
    for (let control in form.controls) {
      form.controls[control].markAsTouched();
      if (form.controls[control].controls) {
        this.markControlsAsTouched(form.controls[control]);
      }
    }
  }

  // submit form method
  public submitForm(e: Event) {
    e.preventDefault();

    console.log(this.signUpForm);
    if (this.signUpForm.invalid) {
      this.markControlsAsTouched(this.signUpForm);
      return false;
    }

    this.userData = this.signUpForm.value;
    // todo: send data to server
  }

}
