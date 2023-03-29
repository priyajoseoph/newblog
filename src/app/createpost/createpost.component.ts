import { Component,OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormGroup,FormControl } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { userprofile } from '../model/usermodel';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {
  
  postForm = new FormGroup({
    blogTitle:new FormControl(''),
    photo:new FormControl(''),
    blogContent: new FormControl(''),
    category: new FormControl(''),
    activeStatus:new FormControl('1')

  })
  fileImage: any;
  imageSrc: string;
  
  constructor(private _services:PostService) {}

  ngOnInit(): void {
  
  }
  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files) {
      this.fileImage = event.target.files[0];

      this.postForm.get('photo').setValue(this.fileImage,{ emitModelToViewChange: false });
      reader.onload = (event: any) => {
        this.imageSrc = event.target.result as string;
        this.postForm.patchValue({
          photo: this.fileImage,
        });
      };
    }
  }





onCreate() {
    console.log(this.postForm.controls.blogTitle.value);
    const formData = new FormData();
    formData.append('blogTitle', this.postForm.controls.blogTitle.value);
    formData.append('blogContent', this.postForm.controls.blogContent.value);
    formData.append('photo', this.postForm.controls.photo.value);
    formData.append('category', this.postForm.controls.category.value);
    formData.append('activeStatus', this.postForm.controls.activeStatus.value);
    
    if (this.fileImage) {
      this._services
        .postData(formData)
        .subscribe(() => {
          Swal.fire('Good job!', 'Mentor Details added!', 'success');
          
        });
    }
  }


//  onCreate(){
//   console.log(this.postForm.value)
//   this._services.postData(this.postForm.value).subscribe((response)=>{
//     this.blogdata=response;
//     console.log(this.blogdata);
//   })

// } 
onDelete(){
  this._services.onDelete(this.postForm.value).subscribe((res)=>{
    console.log()
  })
}
onUpdate(){
  this._services.updateData(this.postForm.value).subscribe((responseDAta)=>{
    console.log()
  })
}
}
