import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero title and full stack role', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.hero-title')?.textContent?.trim() ?? '';
    const role = compiled.querySelector('.hero-role')?.textContent?.trim() ?? '';

    expect(title).toContain('Marta Pradillo');
    expect(role).toBe('Full Stack Developer');
  });

  it('should initialize with frontend skill category by default', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app['activeSkillCategory']()).toBe('frontend');
    expect(app['currentSkillCategory']().id).toBe('frontend');
  });

  it('should filter featured projects accurately', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    // Default 'all'
    expect(app['filteredProjects']().length).toBeGreaterThan(0);

    // Filter 'frontend'
    app['setProjectFilter']('frontend');
    expect(app['filteredProjects']().every(p => p.category.toLowerCase().includes('frontend'))).toBe(true);

    // Filter 'full stack'
    app['setProjectFilter']('full stack');
    expect(app['filteredProjects']().every(p => p.category.toLowerCase().includes('full stack'))).toBe(true);
  });

  it('should render cards when clicking the frontend filter button in template', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const filterButtons = Array.from(compiled.querySelectorAll<HTMLButtonElement>('.filter-btn'));
    const frontendBtn = filterButtons.find(btn => btn.textContent?.toLowerCase().includes('frontend'));

    expect(frontendBtn).toBeTruthy();
    frontendBtn!.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const cards = Array.from(compiled.querySelectorAll('.featured-card'));
    expect(cards.length).toBe(1);
    expect(cards[0].classList.contains('featured-card')).toBe(true);
    expect(cards[0].textContent).toContain('Interactive Portfolio');
  });

  it('should toggle language between es and en when toggleLanguage is called', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app['currentLang']()).toBe('es');

    app['toggleLanguage']();
    expect(app['currentLang']()).toBe('en');

    app['toggleLanguage']();
    expect(app['currentLang']()).toBe('es');
  });

  it('should render the UK flag language button in the navbar and toggle on click', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const langBtn = compiled.querySelector<HTMLButtonElement>('.lang-btn');
    expect(langBtn).toBeTruthy();
    expect(langBtn?.textContent).toContain('English');
    expect(langBtn?.querySelector('svg.flag-icon')).toBeTruthy();

    langBtn?.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(langBtn?.textContent).toContain('Español');
  });
});
