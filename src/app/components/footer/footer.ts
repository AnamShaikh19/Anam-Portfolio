import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAV_LINKS, PROFILE } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <footer class="footer">
      <div class="container inner">
        <div class="brand">
          <strong>{{ profile.name }}</strong>
          <span>{{ profile.headline }}</span>
        </div>

        <nav aria-label="Footer">
          <ul>
            @for (link of links; track link.id) {
              <li><a [href]="'#' + link.id">{{ link.label }}</a></li>
            }
          </ul>
        </nav>

        <div class="social">
          <a class="icon-btn" [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub profile">
            <app-icon name="github" [size]="17" />
          </a>
          <a class="icon-btn" [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn profile">
            <app-icon name="linkedin" [size]="17" />
          </a>
          <a class="icon-btn" [href]="'mailto:' + profile.email" aria-label="Send email">
            <app-icon name="mail" [size]="17" />
          </a>
          <a class="icon-btn" [href]="profile.cv" download aria-label="Download CV">
            <app-icon name="download" [size]="17" />
          </a>
        </div>
      </div>

      <div class="container bottom">
        <span>© {{ year }} {{ profile.name }}</span>
        <span>Built with Angular</span>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      border-top: 1px solid var(--border);
      background: var(--surface);
      padding-top: 40px;
    }

    .inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .brand {
      display: grid;
      gap: 2px;

      span {
        font-family: var(--font-mono);
        font-size: 0.78rem;
        color: var(--text-faint);
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px 18px;
    }

    nav a {
      color: var(--text-muted);
      font-size: 0.9rem;

      &:hover {
        color: var(--accent);
      }
    }

    .social {
      display: flex;
      gap: 8px;
    }

    .icon-btn {
      width: 38px;
      height: 38px;
    }

    .bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 8px;
      margin-top: 32px;
      padding-block: 20px;
      border-top: 1px solid var(--border);
      font-size: 0.82rem;
      color: var(--text-faint);
    }

    @media (max-width: 760px) {
      .inner,
      .bottom {
        flex-direction: column;
        text-align: center;
      }

      ul {
        justify-content: center;
      }
    }
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
}
