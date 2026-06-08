const linkedInUrl = 'https://www.linkedin.com/in/girish-khedikar-6a1136264';
const githubUrl = 'https://github.com/Girish2003-hub';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const NavigationBar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a
          href="#home"
          className="text-base font-bold tracking-wide text-slate-900"
        >
          Girish Khedikar
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 sm:inline-flex"
          >
            GitHub
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 sm:inline-flex"
          >
            LinkedIn
          </a>
          <a
            href="/Girish_Khedikar_Resume.docx"
            download="Girish_Khedikar_Resume.docx"
            className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;