import { Component, OnInit } from '@angular/core';
import { userprofile } from '../model/usermodel';
import { UserService } from '../user.service';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {

  user: userprofile=new userprofile();

  userId: number = 1;


  constructor(private _service: UserService, private router:Router) { }

  ngOnInit(): void {
    this._service.getData(this.userId).subscribe((res) => {
      console.log(res);
      this.user = res.data;
      console.log(this.user)
    });
  }

  editUserDetails(user:any) {
    this.router.navigate(
      ['/userprofile'],
      { queryParams: { userName:user.userName,passWord:user.password}}
    );
  }


}
