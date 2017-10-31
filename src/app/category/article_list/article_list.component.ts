import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-list-component',
  templateUrl: './article_list.component.html',
  styleUrls: ['./article_list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Article!');
  }

}
