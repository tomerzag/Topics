import { Directive, ElementRef, HostBinding, Input, SecurityContext, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input("highlight") searchTerm: string | undefined;

  @HostBinding("innerHTML")
  content: string | null | undefined;

  constructor(private el: ElementRef, private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.el?.nativeElement) {
      if ("searchTerm" in changes) {
        const text = (this.el.nativeElement as HTMLElement).textContent;
        if (!this.searchTerm) {
          this.content = text;
        } else {
          const regex = new RegExp(
            this.searchTerm as string,
          );
          const newText = text?.replace(regex, (match: string) => {
            return `<mark>${match}</mark>`;
          });
          const sanitzed = this.sanitizer.sanitize(
            SecurityContext.HTML,
            newText as string
          );
          this.content = sanitzed;
        }
      }
    }
  }
}
