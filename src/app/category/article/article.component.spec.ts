import { TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';

describe('Article Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ArticleComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ArticleComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Article Works!');
  });

});
