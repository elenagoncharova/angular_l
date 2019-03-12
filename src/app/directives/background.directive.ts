import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[appBackground]'
})


export class BackgroundDirective implements OnInit {

    @Input('appBackground') hoverColor: string = 'green';
    @Input() defaultColor: string = '#f9bc08';

    @HostBinding('style.backgroundColor') background: string;
    @HostBinding('style.color') color: string;

    constructor(private element: ElementRef) {}

    ngOnInit() {
        this.background = 'red';
        this.color = '#fff';
        this.element.nativeElement.style.textAlign = 'center';
        this.element.nativeElement.style.padding = '15px';
        this.element.nativeElement.style.marginBottom = '15px';
    }

    @HostListener('mouseenter') mouseEnter() {
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave() {
        this.background = this.defaultColor;
    }

}
