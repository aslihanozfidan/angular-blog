import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-component',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Article!');
  }

}
