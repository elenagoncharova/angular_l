import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

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

  submitForm(form: NgForm) {
    event.preventDefault();
    console.log('Submited', form);

    this.isSubmited = true;
    this.formData = form.value;

    form.reset();
  }

}
