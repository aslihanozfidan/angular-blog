import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-add-article',
  templateUrl: './add_article.component.html',
  styleUrls: ['./add_article.component.scss']
})
export class AddArticleComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Add Article');
  }

}
