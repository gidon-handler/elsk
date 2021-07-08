import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CURRENT_USER } from 'src/app/app.module';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {

  // form builder can be used as well
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('male', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
    }),
    phoneNumbers: new FormArray([])
  });

  constructor(private dataService: DataService, private router: Router, @Inject(CURRENT_USER) public user: any) {
    if(this.user.currentUser){
      this.user.currentUser.phoneNumbers.forEach((number:any) => {
        this.addNumber();
      });
      this.userForm.patchValue(this.user.currentUser)
    }
  }

  addNumber(){
    (this.userForm.get('phoneNumbers') as FormArray).push(new FormControl(''))
  }

  onSubmit(){

    if(this.user.currentUser)
    this.dataService.putData('user/', this.user.currentUser.email, this.userForm.value).subscribe(console.log);
    else
    this.dataService.postData('user', this.userForm.value).subscribe(() => this.router.navigate(['/']));

    
  }

  deleteUser(){
    this.dataService.deleteData('user/', this.user.currentUser.email).subscribe(() => this.router.navigate(['/']));
  }

}
