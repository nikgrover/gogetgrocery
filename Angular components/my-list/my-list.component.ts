import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent {

  isActive = true;

  // openModal(){
  //   $('#myModal').modal();
  // }

}
