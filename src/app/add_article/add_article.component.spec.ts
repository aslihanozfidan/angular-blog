import { TestBed } from '@angular/core/testing';

import { AddArticleComponent } from './add_article.component';

describe('AddArticle Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AddArticleComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(AddArticleComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('AddArticle Works!');
  });

});
