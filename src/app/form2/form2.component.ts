import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  answers = [{
    type: 'yes',
    text: 'da'
  }, {
    type: 'no',
    text: 'net'
  }];

  form: FormGroup;

  charseCount = 5;


  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
        password: new FormControl('', [Validators.required, this.checkForLenght.bind(this)]),
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('submited', this.form);
  }

  checkForLenght(control: FormControl){
    if (control.value.length <= this.charseCount) {
      return{
        'lengthError': true
      };
    }
    return null;
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru'){
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 300);
    });
  }
}
