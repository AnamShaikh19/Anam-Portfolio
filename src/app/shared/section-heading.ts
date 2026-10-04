import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <header class="section-heading" appReveal>
      <span class="eyebrow">// {{ eyebrow() }}</span>
      <h2>{{ title() }}</h2>
      @if (intro()) {
        <p class="lead">{{ intro() }}</p>
      }
    </header>
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly intro = input<string>();
}
