import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {

  @ViewChild('form') form: NgForm; // Декоратор

  answers = [{
    type: 'yes',
    text: 'da'
  }, {
    type: 'no',
    text: 'net'
  }];

  defaultAnswer = 'no'; // по умолчанию установить
  defaultCountry = 'ru';

  formData = {};
  isSubmited = false;

  addRandEmail(){
    const randEmail = 'test@test.ru';

    // this.form.setValue({
    //   user: {
    //     password: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });
    // меняет все поля и это не удобно

    this.form.form.patchValue({
      user: {email: randEmail}
    });
  }


  // submitForm(form: NgForm) { // а тут убрать можно
  //   event.preventDefault();
  //   console.log('Submited', form);  // this.form
  // }

  submitForm() {
    event.preventDefault();
    console.log('Submited', this.form);

    this.isSubmited = true;
    this.formData = this.form.value;

    this.form.reset();
  }

}
