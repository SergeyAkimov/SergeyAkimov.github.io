import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  contactTypes: any;

  //добавлять пользователей
  // public addContact(): void {
  //   (<FormArray>this.signUpForm.get('contacts')).push(
  //     new FormGroup({
  //       type: new FormControl(this.contactTypes[0].value),
  //       value: new FormControl('')
  //     })
  //   );

  //   const contactControls = this.signUpForm.get('contacts')['controls'];
  //   const currentContactGroup = contactControls[contactControls.length - 1];

  //   currentContactGroup.get('type').valueChanges.subscribe((type: string) => {
  //     const valueCtrl: FormControl = currentContactGroup.get('value');
  //     valueCtrl.setValidators(this.getContactValidatorsByType(type));
  //     valueCtrl.updateValueAndValidity();
  //   });
  // }

  // //удалить пользователей
  // public removeContact(i: number): void {
  //   (<FormArray>this.signUpForm.get('contacts')).removeAt(i);
  // }

  // //свой валидатор
  // private userNameValidator(): ValidatorFn {
  //   const pattern: RegExp = /[\w\.\$@\*\!]{5,30}$/;
  //   return (control: AbstractControl): {[key: string]: any} => {
  //     if(!(control.dirty || control.touched)) {
  //       return null;
  //     } else {
  //       return pattern.test(control.value) ? null : {custom: `Min length: 5, can't contain whitespaces & special symbols.`};
  //     }
  //   };
  // }

  // private contactsLenValidator(): ValidatorFn {
  //   return (contacts: FormArray): {[key: string]: any} => {
  //     if(contacts.length !== 0) {
  //       return null;
  //     }
  //     return {
  //       custom: 'At least one contact info should be added'
  //     };
  //   };
  // }

  // private phoneValidator(): ValidatorFn {
  //   const pattern: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  //   return (control: AbstractControl): {[key: string]: any} => {
  //     if(!(control.dirty || control.touched)) {
  //       return null;
  //     } else {
  //       return pattern.test(control.value) ? null : {custom: `Invalid phone number`};
  //     }
  //   };
  // }

  // private passwordsArwEqual(): ValidatorFn {
  //   return (group: FormGroup): {[key: string]: any} => {
  //     if(!(group.dirty || group.touched) || group.get('pwd').value === group.get('confirm').value) {
  //       return null;
  //     }
  //     return {
  //       custom: 'Passwords are not equal'
  //     }
  //   }
  // }
  // constructor(private fb: FormBuilder) { 
  //   this.signUpForm = fb.group({
  //     user_name: ['', [Validators.required, this.userNameValidator()]],
  //     contacts: fb.array([], this.contactsLenValidator()),
  //     passwords: fb.group({
  //       pwd: ['', pwdValidators],
  //       confirm: ['', pwdValidators]
  //     }, {validator: this.passwordsArwEqual()}),
  
  //     name: new FormControl(''),
  //     address: fb.group({
  //       country: ['', [
  //         Validators.minLength(2),
  //         Validators.maxLength(10),
  //         Validators.required
  //       ]],
  //       city: ['', [
  //         Validators.minLength(2),
  //         Validators.maxLength(10),
  //         Validators.required
  //       ]]
  //     })
  //   });
    
  // }

  ngOnInit() {
  }

}
