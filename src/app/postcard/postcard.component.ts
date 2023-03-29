import { Component ,OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { blogprofile } from '../model/usermodel';
import { PostService } from '../post.service';
@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {
  blogData:blogprofile[];
  constructor(private _postService:PostService,private router:Router){}
  ngOnInit(): void {
this._postService.getallData().subscribe((res)=>{
  this.blogData=res.data.rows;
  console.log(this.blogData);
})
  }
  // viewBlogDetails(item:any) {
  //   this.router.navigate(
  //     ['/single-category'],
  //     { queryParams: { blogId: item }}
  //   );
  // }



}
