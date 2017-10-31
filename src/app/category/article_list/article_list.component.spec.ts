import { TestBed } from '@angular/core/testing';

import { ArticleListComponent } from './article_list.component';

describe('Article List Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ArticleListComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ArticleListComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Article List Works!');
  });

});
