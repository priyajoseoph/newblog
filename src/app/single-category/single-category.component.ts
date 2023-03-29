import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { blogprofile } from '../model/usermodel';
import { PostService } from '../post.service';
@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {
  usersBlog:blogprofile=new blogprofile();
  blogData:any;
  blogId:number;
  users:blogprofile=new blogprofile();
  constructor(private _postservice: PostService,private _route:ActivatedRoute) { }
  ngOnInit(): void {
    this._route.queryParamMap
    .subscribe((params) => {
      console.log(params)
      this.blogData = params;
    }
    

  );
  
  console.log(this.blogData.params.blogId)
  this.blogId=this.blogData.params.blogId;
  this._postservice.getData(this.blogData.params.blogId)
  .subscribe({
    next:(data) => {
      console.log(data);
      this.users=data;
      console.log(this.users)
      // Swal.fire(' Successfully');

    },
    error:(err) => {
      console.log(err);
    }
  })

}



}
