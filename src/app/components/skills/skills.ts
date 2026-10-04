import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/portfolio.data';
import { Icon } from '../../shared/icon';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, RevealDirective, SectionHeading],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <app-section-heading
          eyebrow="skills"
          title="Skills & Competences"
          intro="Technologies and practices I work with across backend, frontend, data, AI, and deployment."
        />

        <div class="skills-grid">
          @for (group of groups; track group.title; let i = $index) {
            <article class="skill card card-hover" [appReveal]="(i % 4) * 80">
              <header>
                <span class="icon-tile" [class.ai]="group.title === 'AI & Data'">
                  <app-icon [name]="group.icon" [size]="20" />
                </span>
                <h3>{{ group.title }}</h3>
              </header>
              <ul class="chip-list">
                @for (item of group.items; track item) {
                  <li class="chip">{{ item }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 18px;
    }

    .skill {
      padding: 22px;

      header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 18px;
      }

      .icon-tile {
        width: 40px;
        height: 40px;
        border-radius: 11px;
      }

      h3 {
        font-size: 1.02rem;
      }
    }
  `,
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
