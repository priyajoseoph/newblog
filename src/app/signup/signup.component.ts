import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { userprofile } from '../model/usermodel';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  profileForm = new FormGroup({
    userName:new FormControl(''),
    email:new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl(''),
    name:new FormControl('')
  })
  users:userprofile=new userprofile();

  constructor(private _service: UserService,private _route:Router) { }
  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.profileForm.value);
    // this.users=this.profileForm.value;
    this.users.email = this.profileForm.controls.email.value;
    this.users.userName = this.profileForm.controls.userName.value;
    this.users.mobile = this.profileForm.controls.mobile.value;
    this.users.password = this.profileForm.controls.password.value;
    this.users.name = this.profileForm.controls.name.value;;
    console.log(this.profileForm.value);
    console.log(this.users)
    this._service.signup(this.users).subscribe({
        next:(data) => {
          this._route.navigate(["/login"])

         console.log(data);
        },
        error:(err) => {
          console.log('api error');
          console.log(err);
        }
      })
    console.log(this.profileForm)
    }
  }


