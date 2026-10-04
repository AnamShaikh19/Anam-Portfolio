import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CATEGORY_LABELS, PROFILE, PROJECTS, PROJECT_FILTERS, ProjectCategory } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';
import { Diagram } from './diagram';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealDirective, SectionHeading, Diagram],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly filters = PROJECT_FILTERS;
  protected readonly labels = CATEGORY_LABELS;
  protected readonly github = PROFILE.github;

  protected readonly filter = signal<'all' | ProjectCategory>('all');

  protected readonly visible = computed(() => {
    const f = this.filter();
    return f === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === f);
  });

  protected count(key: 'all' | ProjectCategory): number {
    return key === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.category === key).length;
  }
}
