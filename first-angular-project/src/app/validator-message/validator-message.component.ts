import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator-message',
  templateUrl: './validator-message.component.html',
  styleUrls: ['./validator-message.component.less']
})
export class ValidatorMessageComponent implements OnInit {
  @Input() field: FormControl;

  public get validatorMessages() {
    const field = this.field;
    if(!field || !field.errors) {
      return false;
    }
    const errors = [];
    const config = {
      required: 'Обязательное поле',
      requiredTrue: 'Значение должно быть положительным',
      email: 'Обязательно должен быть e-mail',
      pattern: 'Значение не соответствует паттерну'
    };

    if(field.errors.hasOwnProperty('custom')) {
      config['custom'] = (typeof field.errors.custom === 'string' && field.errors.custom.length) ?
      field.errors.custom :
      'Does not match to format';
    }
    if(field.errors.hasOwnProperty('minlength')) {
      config['minlength'] = `Minimum length ${field.errors.minlength.requiredLength}`;
    }
    if(field.errors.hasOwnProperty('maxlength')) {
      config['maxlength'] = `Maximum length ${field.errors.minlength.requiredLength}`;
    }

    Object.keys(field.errors).forEach((error: string) => {
      errors.push(config[error]);
    });

    return errors;
  }
  constructor() { }

  ngOnInit() {
  }

}
