import { Component } from '@angular/core';
import{FormGroup,FormBuilder,Validators, FormControl}from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  angForm = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    subject:new FormControl(''),
    message: new FormControl('')
  });

createForm(angForm:any){
 console.log(this.angForm);
}

}
