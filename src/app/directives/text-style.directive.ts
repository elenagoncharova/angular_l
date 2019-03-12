import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTextStyle]'
})
export class TextStyleDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const  {nativeElement} = this.element;

    this.renderer.setStyle(nativeElement, 'color', 'blue');
    this.renderer.addClass(nativeElement, 'text-size');
  }

  @HostListener('mouseenter') mouseEnter() {
    const  {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', 'gainsboro');
  }

  @HostListener('mouseleave') mouseLeave() {
    const  {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
  }

}
