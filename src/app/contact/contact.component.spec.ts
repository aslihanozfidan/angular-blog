import { TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ContactComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('contact Works!');
  });

});
