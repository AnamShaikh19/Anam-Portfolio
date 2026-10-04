import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealDirective, SectionHeading],
  template: `
    <section id="education" class="section">
      <div class="container">
        <app-section-heading eyebrow="education" title="Education" />

        <div class="edu-grid">
          @for (edu of items; track edu.school; let i = $index) {
            <article class="edu card card-hover" [appReveal]="i * 120">
              <div class="top">
                <span class="icon-tile" [class.ai]="i === 0"><app-icon name="graduation" [size]="22" /></span>
                <div class="badges">
                  @if (edu.status) {
                    <span class="badge badge-ai">{{ edu.status }}</span>
                  }
                  <span class="period">{{ edu.period }}</span>
                </div>
              </div>
              <p class="degree">{{ edu.degree }}</p>
              <h3>{{ edu.field }}</h3>
              <p class="school">{{ edu.school }}</p>
              <p class="loc"><app-icon name="pin" [size]="14" />{{ edu.location }}</p>
              @if (edu.note) {
                <p class="note">{{ edu.note }}</p>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .edu-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }

    .edu {
      padding: clamp(22px, 3vw, 32px);
    }

    .top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 20px;
    }

    .badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
    }

    .period {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-faint);
    }

    .degree {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--accent);
    }

    h3 {
      margin-top: 6px;
      font-size: 1.3rem;
    }

    .school {
      margin-top: 10px;
      font-weight: 600;
      color: var(--text);
    }

    .loc {
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--text-muted);
      font-size: 0.92rem;
    }

    .note {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px dashed var(--border);
      color: var(--text-muted);
      font-size: 0.93rem;
    }

    @media (max-width: 760px) {
      .edu-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class EducationSection {
  protected readonly items = EDUCATION;
}
