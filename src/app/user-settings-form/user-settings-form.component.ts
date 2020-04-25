import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/userSettings';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
OriginaluserSettings: UserSettings = {
      name:null,
      defaultCheck1:null,
      interface:null,
      subscriptiontype:null,
      notes:null
};

userSettings: UserSettings = {...this.OriginaluserSettings}; 
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  onBlur(field:NgModel){
    console.log('on blur:', field.valid)
  }

  onSubmit(form:NgForm){
    console.log('in on onSubmit:', form.valid);
    this.dataService.postUserSettings(this.userSettings).subscribe(
      result => console.log('success',result),
      error => console.log('error',error)
    )
  }

}