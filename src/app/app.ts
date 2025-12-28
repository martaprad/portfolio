import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgStyle } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ProjectItem = {
  title: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  updatedAt: string;
  tags: string[];
};

type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

@Component({
  selector: 'app-root',
  imports: [NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef<HTMLElement>;
  @ViewChild('aboutSection', { static: true }) aboutSection!: ElementRef<HTMLElement>;
  @ViewChild('skillsSection', { static: true }) skillsSection!: ElementRef<HTMLElement>;
  @ViewChild('projectsSection', { static: true }) projectsSection!: ElementRef<HTMLElement>;
  @ViewChild('experienceSection', { static: true }) experienceSection!: ElementRef<HTMLElement>;
  @ViewChild('contactSection', { static: true }) contactSection!: ElementRef<HTMLElement>;

  protected readonly profile = {
    name: 'Marta Pradillo Rodriguez',
    role: 'Desarrolladora Full Stack / Data',
    tagline:
      'Experiencia en consultoria: toma de requisitos, analisis de datos con Databricks y SQL Azure, y desarrollo web con Angular y FastAPI.'
  };

  protected readonly aboutBullets = [
    {
      title: 'Consultoria y toma de requisitos',
      copy: 'Analisis funcional con stakeholders y propuestas de solucion orientadas a negocio.'
    },
    {
      title: 'Datos y pipelines en Databricks',
      copy: 'Extraccion, validacion y soporte a reporting con SQL Azure y notebooks.'
    },
    {
      title: 'Desarrollo web full stack',
      copy: 'Angular (PrimeNG, Tailwind), FastAPI, SQLAlchemy y CI/CD en GitLab.'
    }
  ];

  protected readonly skills = [
    'Angular',
    'PrimeNG',
    'Tailwind',
    'JavaScript',
    'Python',
    'FastAPI',
    'Databricks',
    'SQL Azure',
    'SQLAlchemy',
    'Azure Machine Learning',
    'GitLab CI/CD',
    'Azure VMs/VDI'
  ];

  protected projects: ProjectItem[] = [];
  protected projectsLoading = true;
  protected projectsError = false;
  protected activeProjectIndex = 0;

  protected readonly experiences = [
    {
      period: 'ene 2025 - presente',
      role: 'Analista de datos | Full Stack Developer junior',
      company: 'NovaQuality Consulting SL, Alcobendas',
      summary:
        'Consultoria, analisis funcional y soluciones orientadas a negocio. SQL (Databricks/Azure), Angular, FastAPI y GitLab CI/CD.'
    },
    {
      period: 'sep 2018 - dic 2024',
      role: 'Jefe de equipo',
      company: 'Perse Responde SL, Madrid',
      summary:
        'Gestion operativa, coordinacion de un equipo de 15 personas, formacion y reportes de servicio.'
    },
    {
      period: 'ago 2014 - dic 2024',
      role: 'Tramitadora de seguros de hogar',
      company: 'GAB centro peritaciones, SL, Madrid',
      summary:
        'Tramitacion de siniestros, interpretacion de polizas y atencion al cliente. Puesto compatibilizado con rol de jefe de equipo.'
    },
    {
      period: '2009 - 2014',
      role: 'Administrativo / Ventas',
      company: 'Experiencia previa',
      summary: 'Experiencia previa en tareas administrativas y de ventas.'
    }
  ];

  protected readonly contactLinks = [
    {
      label: 'Email',
      value: 'martapradi@gmail.com',
      href: 'mailto:martapradi@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/marta-pradillo',
      href: 'https://www.linkedin.com/in/marta-pradillo'
    },
    {
      label: 'GitHub',
      value: 'github.com/martaprad',
      href: 'https://github.com/martaprad'
    }
  ];

  private reducedMotion = false;
  private isMobile = false;
  private pinDistance = '+=90%';
  private triggers: ScrollTrigger[] = [];
  private animations: gsap.core.Animation[] = [];
  private readonly resizeHandler = () => this.handleResize();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    this.isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    this.pinDistance = this.isMobile ? '+=30%' : '+=40%';

    void this.loadProjects();
  }

  ngAfterViewInit(): void {
    this.setupPinnedSections();
    this.setupHero();
    this.setupSkills();
    this.setupExperience();
    this.setupReveals();
    this.setupParallax();

    window.addEventListener('resize', this.resizeHandler);
    ScrollTrigger.refresh();
  }

  ngOnDestroy(): void {
    this.animations.forEach((animation) => animation.kill());
    this.triggers.forEach((trigger) => trigger.kill());
    window.removeEventListener('resize', this.resizeHandler);
  }

  protected previousProject(): void {
    if (!this.projects.length) {
      return;
    }
    this.setActiveProject(this.activeProjectIndex - 1);
  }

  protected nextProject(): void {
    if (!this.projects.length) {
      return;
    }
    this.setActiveProject(this.activeProjectIndex + 1);
  }

  protected setActiveProject(index: number): void {
    const total = this.projects.length;
    if (!total) {
      return;
    }
    const normalized = ((index % total) + total) % total;
    this.activeProjectIndex = normalized;
  }

  protected getOrbitStyle(index: number): Record<string, string | number> {
    const total = this.projects.length;
    if (!total) {
      return {};
    }

    const offset = this.getOffset(index);
    const absOffset = Math.abs(offset);
    const maxVisible = 3;
    const hidden = absOffset > maxVisible;
    const distance = this.isMobile ? 110 : 160;
    const depth = this.isMobile ? 60 : 120;
    const translateX = offset * distance;
    const translateZ = -absOffset * depth;
    const rotateY = offset * -12;
    const scale = 1 - absOffset * 0.08;

    return {
      transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: hidden ? 0 : 1 - absOffset * 0.15,
      zIndex: 100 - absOffset,
      pointerEvents: hidden ? 'none' : 'auto'
    };
  }

  private setupPinnedSections(): void {
    const sections = [
      this.heroSection,
      this.aboutSection,
      this.skillsSection,
      this.projectsSection,
      this.experienceSection,
      this.contactSection
    ];

    sections.forEach((section) => {
      const trigger = ScrollTrigger.create({
        trigger: section.nativeElement,
        start: 'top top',
        end: this.pinDistance,
        pin: true,
        scrub: this.reducedMotion ? false : true,
        pinSpacing: true
      });
      this.triggers.push(trigger);
    });
  }

  private setupHero(): void {
    if (this.reducedMotion) {
      return;
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.heroSection.nativeElement,
        start: 'top top',
        end: this.pinDistance,
        scrub: true
      }
    });

    timeline
      .from('.hero-title', { y: 80, opacity: 0, duration: 0.8 })
      .from('.hero-role', { y: 40, opacity: 0, duration: 0.6 }, '<0.2')
      .from('.hero-intro', { y: 30, opacity: 0, duration: 0.6 }, '<0.2')
      .from('.hero-cta .btn', { y: 20, opacity: 0, stagger: 0.15 }, '<0.1')
      .to('.hero-orb', { scale: 1.08, opacity: 1 }, 0);

    this.animations.push(timeline);
    this.triggers.push(timeline.scrollTrigger!);
  }

  private setupSkills(): void {
    if (this.reducedMotion) {
      return;
    }

    const chips = Array.from(this.skillsSection.nativeElement.querySelectorAll<HTMLElement>('.chip'));
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.skillsSection.nativeElement,
        start: 'top 70%'
      }
    });

    timeline.from(chips, {
      y: 20,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out'
    });

    chips.forEach((chip) => {
      const tween = gsap.to(chip, {
        y: this.randomRange(-12, 12),
        x: this.randomRange(-8, 8),
        duration: this.randomRange(2.8, 4.6),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      this.animations.push(tween);
    });

    this.animations.push(timeline);
    this.triggers.push(timeline.scrollTrigger!);
  }

  private setupExperience(): void {
    if (this.reducedMotion) {
      return;
    }

    const line = this.experienceSection.nativeElement.querySelector('.timeline-line');
    if (!line) {
      return;
    }

    const tween = gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top',
        scrollTrigger: {
          trigger: this.experienceSection.nativeElement,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: true
        }
      }
    );

    this.animations.push(tween);
    this.triggers.push(tween.scrollTrigger!);
  }

  private setupReveals(): void {
    if (this.reducedMotion) {
      return;
    }

    const items = gsap.utils.toArray<HTMLElement>('.reveal');
    items.forEach((item) => {
      const tween = gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%'
        }
      });
      this.animations.push(tween);
      this.triggers.push(tween.scrollTrigger!);
    });
  }

  private setupParallax(): void {
    if (this.reducedMotion) {
      return;
    }

    const layers = [
      { selector: '.layer-1', offset: -60 },
      { selector: '.layer-2', offset: -120 },
      { selector: '.layer-3', offset: -200 }
    ];

    layers.forEach((layer) => {
      const tween = gsap.to(layer.selector, {
        y: layer.offset,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });
      this.animations.push(tween);
      this.triggers.push(tween.scrollTrigger!);
    });
  }

  private handleResize(): void {
    if (!this.reducedMotion) {
      ScrollTrigger.refresh();
    }
  }

  private getOffset(index: number): number {
    const total = this.projects.length;
    if (!total) {
      return 0;
    }

    let diff = index - this.activeProjectIndex;
    const half = Math.floor(total / 2);

    if (diff > half) {
      diff -= total;
    }

    if (diff < -half) {
      diff += total;
    }

    return diff;
  }

  private async loadProjects(): Promise<void> {
    if (typeof fetch !== 'function') {
      this.projectsLoading = false;
      return;
    }

    this.projectsLoading = true;
    this.projectsError = false;

    try {
      const response = await fetch('https://api.github.com/users/martaprad/repos?per_page=100&sort=updated', {
        headers: {
          Accept: 'application/vnd.github+json'
        }
      });

      if (!response.ok) {
        this.projectsError = true;
        return;
      }

      const data = (await response.json()) as GithubRepo[];
      const repos = data
        .filter((repo) => !repo.fork && !repo.archived)
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

      this.projects = repos.map((repo) => {
        const tags: string[] = [];
        if (repo.language) {
          tags.push(repo.language);
        }
        if (repo.stargazers_count > 0) {
          tags.push(`${repo.stargazers_count} stars`);
        }

        return {
          title: repo.name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          stars: repo.stargazers_count,
          updatedAt: repo.updated_at,
          tags
        };
      });

      this.activeProjectIndex = 0;
    } catch {
      this.projectsError = true;
    } finally {
      this.projectsLoading = false;
      this.cdr.detectChanges();
    }
  }

  private randomRange(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }
}
