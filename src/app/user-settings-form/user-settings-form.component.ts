import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/userSettings';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
OriginaluserSettings: UserSettings = {
      name:'raja',
      defaultCheck1:true,
      interface:'dark',
      subscriptiontype:'Lifetime',
      notes:'my best form' 
};

userSettings: UserSettings = {...this.OriginaluserSettings}; 
  constructor() { }

  ngOnInit() {
  }

  onBlur(field:ngModel){
    console.log('on blur:', field.valid)
  }

  onSubmit(form:NgForm){
    console.log('in on onSubmit:', form.valid);
  }

}