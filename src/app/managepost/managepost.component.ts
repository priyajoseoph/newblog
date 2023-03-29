import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogprofile } from '../model/usermodel';
import { PostService } from '../post.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-managepost',
  templateUrl: './managepost.component.html',
  styleUrls: ['./managepost.component.scss']
})
export class ManagepostComponent implements OnInit {
  managePost = new FormGroup({
    blogTitle:new FormControl(''),
    photo:new FormControl(''),
    blogContent: new FormControl(''),
    category: new FormControl(''),
    activeStatus:new FormControl('1')

  })

  posts: blogprofile[];
blogPost:blogprofile;
delblogPost:blogprofile;
  constructor( private router: Router,private _postservice:PostService) { }

  ngOnInit(): void {
    this._postservice.getallData().subscribe((response) => {
      console.log(response);
      this.posts = response.data;
      console.log(this.posts)
    });
  }
editBlogPost(item:any){
  this._postservice.getData(item).subscribe((res) => {
    console.log(res);
    this.blogPost = res.data;
    console.log(this.blogPost)
    this.managePost.controls.blogTitle.patchValue(this.blogPost.blogTitle);
    this.managePost.controls.blogContent.patchValue(this.blogPost.blogContent);
    this.managePost.controls.category.patchValue(this.blogPost.category);
  
  });

}
deleteBlogPost(item:any){
  console.log(item)
  this._postservice.getData(item).subscribe((resp) => {
    console.log(resp);
    this.delblogPost = resp.data;
  });

}

  onDeleteBlog(){
    console.log(this.delblogPost)
    this._postservice.onDelete(this.delblogPost.blogId).subscribe((res)=>{
      console.log(res)
    })
  }




  onUpdateBlog(){
    this.blogPost.blogTitle = this.managePost.controls.blogTitle.value;
    this.blogPost.blogContent = this.managePost.controls.blogContent.value;
    this.blogPost.category = this.managePost.controls.category.value;

    console.log(this.blogPost)
    this._postservice.updateData(this.blogPost).subscribe((responsedata)=>{
      console.log(responsedata)
      this.blogPost=responsedata.data;
    })
      
  }

}
