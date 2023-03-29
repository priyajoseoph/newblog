import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { userprofile } from '../model/usermodel';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent {
  updateForm = new FormGroup({
    userName:new FormControl(),
    email:new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl(''),
    name: new FormControl('')

  })
  users:userprofile=new userprofile();
  userName:string;
    userData:any;
  constructor(private _service: UserService,private router:Router,private route:ActivatedRoute) { 
console.log(1225);

  }
  ngOnInit(){
    console.log(12325);
    this.route.queryParamMap
    .subscribe((params) => {
      console.log(params)
      this.userData = params;
    }
    

  );
  
  console.log(this.userData.params.user_name); 
  this.updateForm.controls.userName.patchValue(this.userData.params.userName);
  this.updateForm.controls.email.patchValue(this.userData.params.email);
  this.updateForm.controls.mobile.patchValue(this.userData.params.mobile);
  this.updateForm.controls.password.patchValue(this.userData.params.password);
  this.updateForm.controls.name.patchValue(this.userData.params.name);

// console.log(this.profileForm)
//     this._service.getData().subscribe((data)=>{
//     this.users=data;
//     console.log(this.users)
//     })
    
  }

  onUpdate(){
    console.log(this.users);
    this.users.email = this.updateForm.controls.email.value;
    this.users.userName = this.updateForm.controls.userName.value;
    this.users.mobile = this.updateForm.controls.mobile.value;
    this.users.password = this.updateForm.controls.password.value;
    this.users.name = this.updateForm.controls.name.value;

    console.log(this.users);

    this._service.updateData(this.users)
    .subscribe({
      next:(data) => {
        Swal.fire('Update Successfully');

      },
      error:(err) => {
        console.log(err);
      }
    })

  }
}
