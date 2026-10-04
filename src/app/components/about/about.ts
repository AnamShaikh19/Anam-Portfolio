import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION, EXPERIENCE, FOCUS_AREAS, PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealDirective, SectionHeading],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly focusAreas = FOCUS_AREAS;

  protected readonly facts = [
    { icon: 'pin', label: 'Location', value: PROFILE.location },
    { icon: 'briefcase', label: 'Current role', value: `${EXPERIENCE[0].role}, ${EXPERIENCE[0].company}` },
    { icon: 'graduation', label: 'Education', value: `${EDUCATION[0].degree} in ${EDUCATION[0].field}` },
    { icon: 'mail', label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  ];
}
