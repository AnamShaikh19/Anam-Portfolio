import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { EXPERIENCE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

const VISIBLE_BULLETS = 4;

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealDirective, SectionHeading],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceSection {
  protected readonly jobs = EXPERIENCE;
  protected readonly visible = VISIBLE_BULLETS;
  protected readonly expanded = signal<ReadonlySet<number>>(new Set());

  protected isExpanded(index: number): boolean {
    return this.expanded().has(index);
  }

  protected toggle(index: number): void {
    this.expanded.update((set) => {
      const next = new Set(set);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }
}
