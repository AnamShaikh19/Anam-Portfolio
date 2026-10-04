import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { EducationSection } from './components/education/education';
import { ExperienceSection } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Hero, About, Skills, ExperienceSection, Projects, EducationSection, Contact, Footer],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <app-navbar />
    <main id="main">
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {}
