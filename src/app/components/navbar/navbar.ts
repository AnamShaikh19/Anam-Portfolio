import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';
import { NAV_LINKS, PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  protected readonly themeService = inject(ThemeService);

  protected readonly profile = PROFILE;
  protected readonly links = NAV_LINKS;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly active = signal<string>('');

  constructor() {
    const destroyRef = inject(DestroyRef);

    effect(() => {
      this.document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });

    afterNextRender(() => {
      this.onScroll();
      const sections = this.links
        .map((l) => this.document.getElementById(l.id))
        .filter((el): el is HTMLElement => !!el);

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.active.set(entry.target.id);
          }
        },
        // A thin band across the upper middle of the viewport decides the active section.
        { rootMargin: '-40% 0px -55% 0px' },
      );
      sections.forEach((s) => observer.observe(s));
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
    if (window.scrollY < 200) this.active.set('');
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
