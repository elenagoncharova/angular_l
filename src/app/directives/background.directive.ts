import {Directive, ElementRef, HostBinding, OnInit} from '@angular/core';

@Directive({
    selector: '[appBackground]'
})


export class BackgroundDirective implements OnInit {

    @HostBinding('style.backgroundColor') background: string;

    constructor(private element: ElementRef) {}

    ngOnInit() {
        this.background = 'red';
        this.element.nativeElement.style.textAlign = 'center';
        this.element.nativeElement.style.padding = '15px';
        this.element.nativeElement.style.marginBottom = '15px';
    }
}
