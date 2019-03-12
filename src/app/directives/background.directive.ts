import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[appBackground]'
})


export class BackgroundDirective implements OnInit {
    constructor(private element: ElementRef) {}

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'red';
        this.element.nativeElement.style.textAlign = 'center';
        this.element.nativeElement.style.padding = '15px';
        this.element.nativeElement.style.marginBottom = '15px';
    }
}
