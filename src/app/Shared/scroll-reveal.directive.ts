import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

type RevealAnimation =
  | 'from-bottom'
  | 'from-left'
  | 'from-right'
  | 'fade'
  | 'zoom'
  | 'flip-up'
  | 'flip-left'
  | 'flip-right'
  | 'spin'
  | 'clip'
  | 'blur';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements OnInit, OnDestroy {

  @Input('appScrollReveal') animation: RevealAnimation = 'from-bottom';
  @Input() revealDelay = 0;
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');
    this.renderer.addClass(this.el.nativeElement, `reveal-${this.animation}`);

    if (this.revealDelay > 0) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transition-delay',
        `${this.revealDelay}ms`
      );
    }

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'reveal-visible');
            if (this.revealOnce) {
              this.observer?.unobserve(this.el.nativeElement);
            }
          } else if (!this.revealOnce) {
            this.renderer.removeClass(this.el.nativeElement, 'reveal-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
