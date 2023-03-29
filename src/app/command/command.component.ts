import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommandService } from '../command.service';
import { FormGroup, FormControl } from '@angular/forms';
import { commentdata } from '../model/usermodel';
@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnChanges {
  @Input() blogId: number = 0;
  @Input() comments: any;
  comment: commentdata;
  // comments:any=[];

  commentForm = new FormGroup({
    blogId: new FormControl(this.blogId),
    commentAs: new FormControl(''),
    commentContent: new FormControl(''),
    activeStatus: new FormControl('1')

  })

  constructor(private _service: CommandService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.commentForm.get("blogId").patchValue(this.blogId);

  }
  getAllComments() {
    this._service.getallcmdData(this.blogId).subscribe((response) => {
      this.comments = response.data.comments[0];
      console.log(this.comments);
    })
  }
  addComment() {
    this._service.addcmdData(this.commentForm.value).subscribe((response) => {
      this.comment = response;
      this.commentForm.reset();
    })
  }


}
