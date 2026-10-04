import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = PROFILE;

  protected readonly channels = [
    { icon: 'mail', label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, external: false },
    { icon: 'linkedin', label: 'LinkedIn', value: 'in/anam-shaikhh', href: PROFILE.linkedin, external: true },
    { icon: 'github', label: 'GitHub', value: 'AnamShaikh19', href: PROFILE.github, external: true },
    { icon: 'pin', label: 'Location', value: PROFILE.location, href: null, external: false },
  ];
}
