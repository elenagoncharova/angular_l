import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appTextStyle]'
})
export class TextStyleDirective implements OnInit {

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.style.lineHeight = '2';
    this.element.nativeElement.style.fontSize = '16px';
  }

}
