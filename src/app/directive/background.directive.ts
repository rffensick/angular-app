import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class BackgroundDirective implements OnInit {
  @HostBinding('style.backgroundColor') background: string;
  @HostBinding('class') helloClass: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    console.log(this.element);
    console.log(this.background);
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.background = 'red';
    this.helloClass = 'some';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.background = '';
    this.helloClass = '';
  }
}
