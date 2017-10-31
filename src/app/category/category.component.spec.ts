import { TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';

describe('Category Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [CategoryComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(CategoryComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Category Works!');
  });

});
