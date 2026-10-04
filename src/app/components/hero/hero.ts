import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly roles = PROFILE.headline.split('|').map((r) => r.trim());
  /** Falls back to the initials monogram if the photo file is missing. */
  protected readonly photoFailed = signal(false);
}
