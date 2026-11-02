import {
  Component,
  OnInit,
  AfterViewInit,
  signal,
  computed,
  inject,
  PLATFORM_ID,
  ElementRef
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import {
  PORTFOLIO_DATA,
  SkillCategory,
  FeaturedProject,
  PersonalProject,
  ExperienceItem,
  EducationItem,
  ContactLink
} from './data/portfolio-data';

export interface GithubRepoItem {
  title: string;
  description: string;
  url: string;
  language: string | null;
  stars: number;
  updatedAt: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly el = inject(ElementRef);

  // Centralized portfolio data
  protected readonly profile = PORTFOLIO_DATA.profile;
  protected readonly valuePillars = PORTFOLIO_DATA.valuePillars;
  protected readonly skillCategories = PORTFOLIO_DATA.skillCategories;
  protected readonly featuredProjects = PORTFOLIO_DATA.featuredProjects;
  protected readonly personalProjects = PORTFOLIO_DATA.personalProjects;
  protected readonly experiences = PORTFOLIO_DATA.experiences;
  protected readonly education = PORTFOLIO_DATA.education;
  protected readonly contactLinks = PORTFOLIO_DATA.contactLinks;

  // Modern Angular Signals for UI State
  protected readonly activeSkillCategory = signal<string>('frontend');
  protected readonly projectFilter = signal<string>('all');
  protected readonly emailCopied = signal<boolean>(false);
  protected readonly mobileNavOpen = signal<boolean>(false);
  protected readonly currentLang = signal<'es' | 'en'>('es');
  protected readonly isTranslating = signal<boolean>(false);

  // GitHub Repos dynamic state
  protected readonly githubRepos = signal<GithubRepoItem[]>([]);
  protected readonly reposLoading = signal<boolean>(true);
  protected readonly reposError = signal<boolean>(false);

  // Computed state
  protected readonly currentSkillCategory = computed(() => {
    const id = this.activeSkillCategory();
    return this.skillCategories.find((c) => c.id === id) ?? this.skillCategories[0];
  });

  protected readonly filteredProjects = computed(() => {
    const filter = this.projectFilter().toLowerCase();
    if (filter === 'all') {
      return this.featuredProjects;
    }
    return this.featuredProjects.filter((p) => p.category.toLowerCase().includes(filter));
  });

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (document.cookie.includes('googtrans=/es/en')) {
        this.currentLang.set('en');
      }
      void this.loadGithubRepos();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollReveal();
    }
  }

  protected toggleLanguage(): void {
    const target = this.currentLang() === 'es' ? 'en' : 'es';
    this.translatePage(target);
  }

  private translatePage(targetLang: 'es' | 'en'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isTranslating.set(true);
    this.currentLang.set(targetLang);

    // Configurar la cookie requerida por Google Website Translator
    document.cookie = `googtrans=/es/${targetLang}; path=/;`;
    if (window.location.hostname) {
      document.cookie = `googtrans=/es/${targetLang}; path=/; domain=${window.location.hostname};`;
    }

    if (targetLang === 'es') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      if (window.location.hostname) {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      }
    }

    const triggerSelect = (): boolean => {
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event('change'));
        this.isTranslating.set(false);
        return true;
      }
      return false;
    };

    if (!triggerSelect()) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (triggerSelect() || attempts > 25) {
          clearInterval(interval);
          this.isTranslating.set(false);
        }
      }, 120);
    }
  }

  protected setSkillCategory(id: string): void {
    this.activeSkillCategory.set(id);
  }

  protected setProjectFilter(filter: string): void {
    this.projectFilter.set(filter);
  }

  protected toggleMobileNav(): void {
    this.mobileNavOpen.update((val) => !val);
  }

  protected closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }

  protected async copyEmail(email: string): Promise<void> {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(email);
        this.emailCopied.set(true);
        setTimeout(() => this.emailCopied.set(false), 2600);
      }
    } catch {
      // Fallback silent
    }
  }

  private initScrollReveal(): void {
    if (typeof IntersectionObserver === 'undefined') {
      const elements = this.el.nativeElement.querySelectorAll('.reveal');
      elements.forEach((elem: HTMLElement) => elem.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const targets = this.el.nativeElement.querySelectorAll('.reveal');
    targets.forEach((elem: HTMLElement) => observer.observe(elem));
  }

  private async loadGithubRepos(): Promise<void> {
    this.reposLoading.set(true);
    this.reposError.set(false);

    try {
      const response = await fetch('https://api.github.com/users/martaprad/repos?per_page=12&sort=updated', {
        headers: { Accept: 'application/vnd.github+json' }
      });

      if (!response.ok) {
        this.reposError.set(true);
        return;
      }

      const raw = await response.json();
      if (!Array.isArray(raw)) {
        this.reposError.set(true);
        return;
      }

      const filtered: GithubRepoItem[] = raw
        .filter((r) => !r.fork && !r.archived && r.name !== 'martaprad')
        .map((r) => ({
          title: r.name,
          description: r.description || 'Repositorio de código público en GitHub.',
          url: r.html_url,
          language: r.language,
          stars: r.stargazers_count ?? 0,
          updatedAt: r.updated_at
        }));

      this.githubRepos.set(filtered);
    } catch {
      this.reposError.set(true);
    } finally {
      this.reposLoading.set(false);
    }
  }
}
