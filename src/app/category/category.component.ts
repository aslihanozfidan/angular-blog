import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello category');
  }

}
