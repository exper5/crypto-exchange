import { Directive, SimpleChanges, Input, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlighter]'
})
export class HighlighterDirective {

 elem:ElementRef;
 tempRen: Renderer2;
  constructor(el: ElementRef, ren:Renderer2) { 
    this.elem=el;
    this.tempRen=ren;
  }
  
  @Input('highlighter') highlighter: string;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['highlighter'] && !changes['highlighter'].isFirstChange()) {
      let prev: string = changes['highlighter'].previousValue;
      let cur: string = changes['highlighter'].currentValue;
      
      /**
       * Class change logic
       */

      var newclass= cur < prev ? 'highlight-red' : 'highlight-green';
      
      this.tempRen.addClass(this.elem.nativeElement,newclass);
      //this.elem.nativeElement.addClass(newclass);

      setTimeout(()=>{
        this.tempRen.removeClass(this.elem.nativeElement,newclass);
      },1000)
      

      
      
    }
  }

}
