import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog1';
  items = ['item1', 'item2', 'item3', 'item4'];

  userName="";

  addItem(newItem: string) {
    this.userName = newItem;
  }

}
