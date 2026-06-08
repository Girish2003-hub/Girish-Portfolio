const profile = {
  name: 'Girish Khedikar',
  role: 'Frontend Developer',
  location: 'Nagpur, Maharashtra',
  phone: '9850517438',
  email: 'girishKhedikar3399@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/girish-khedikar-6a1136264',
  github: 'https://github.com/Girish2003-hub',
};

const education = [
  {
    institute: 'Government Polytechnic Sakoli',
    period: 'May 2022 - May 2024',
    degree: 'Diploma in Computer Science and Engineering',
    score: '92.40%',
  },
  {
    institute: 'Samarth College, Lakhani',
    period: 'May 2022 - May 2025',
    degree: 'Bachelor of Commerce',
    score: '68.75%',
  },
  {
    institute: 'IIT Madras - Online Degree Programme',
    period: 'Sep 2024 - Present',
    degree: 'BS in Data Science',
    score: 'Current CGPA: 6.57',
  },
];

const achievements = [
  'Secured a full-time offer from Datastack Technologies through a highly competitive off-campus hiring process.',
  'Maintained strong academic performance throughout diploma education, consistently scoring 90% and above.',
];

const experienceHighlights = [
  'Developed and maintained responsive, scalable web applications using React.js and Next.js for multiple business workflows.',
  'Built reusable UI components, integrated REST APIs, and improved frontend performance.',
  'Contributed to frontend architecture decisions, state management, and responsive design standards.',
  'Applied foundational C# knowledge to collaborate effectively with backend teams and understand full-stack workflows.',
];

const projects = [
  {
    title: 'AI Mock Interview Platform',
    period: 'Featured Project',
    summary:
      'Built a project-focused interview practice experience with a clean frontend, structured interaction flow, and deployment-ready setup. This project entry is aligned with the shared live and repository links.',
    tech: 'HTML, CSS, JavaScript, PHP',
    live: 'https://ai-mock-interview-delta-one.vercel.app/',
    github: 'https://github.com/Adi1816/AI-Mock-Interview',
  },
];

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks and Libraries',
    items: ['React.js', 'Next.js', 'HTML', 'CSS'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL'],
  },
  {
    title: 'CS Fundamentals',
    items: [
      'Data Structures',
      'Database Management Systems',
      'Object-Oriented Programming',
      'Computer Networks',
    ],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Visual Studio'],
  },
];

const Home = () => {
  return (
    <main id="home" className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#dbeafe_0,_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 md:px-8 md:pt-36">
          <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-semibold text-sky-800">
            {profile.role}
          </p>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Software Engineer at Datastack Technologies, building performant and
            scalable frontend applications with React.js, Next.js, and
            TypeScript.
          </p>
          <p className="mt-2 max-w-2xl text-sm font-medium text-slate-600 md:text-base">
            {profile.location} | {profile.phone} | {profile.email}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              View Projects
            </a>
            <a
              href="/Girish_Khedikar_Resume.docx"
              download="Girish_Khedikar_Resume.docx"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
            >
              Download Resume
            </a>
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
          About
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Frontend-focused Software Engineer with professional experience in
          building responsive, scalable interfaces and delivering strong user
          experiences across business workflows. I combine practical engineering
          skills with strong fundamentals and continuous learning through my IIT
          Madras Data Science program.
        </p>
      </section>

      <section id="skills" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
            Skills
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
          Projects
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-1">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-sky-700">
                {project.period}
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900 md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {project.summary}
              </p>
              <p className="mt-4 text-sm font-semibold text-sky-700">
                {project.tech}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                >
                  GitHub Repository
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
            Experience
          </h2>
          <article className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-slate-900">
                Datastack Technologies
              </h3>
              <p className="text-sm font-semibold text-slate-600">
                July 2024 - Present
              </p>
            </div>
            <p className="mt-1 text-sm font-semibold text-sky-700">
              Software Engineer | React.js, Next.js, TypeScript, CSS
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              {experienceHighlights.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
          Education
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {education.map((item) => (
            <article
              key={item.institute}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-sky-700">
                {item.period}
              </p>
              <h3 className="mt-2 text-base font-bold text-slate-900">
                {item.institute}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {item.degree}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                {item.score}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
            Achievements
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
            {achievements.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
          Contact
        </h2>
        <p className="mt-4 text-slate-700">
          Reach out on{' '}
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4"
          >
            LinkedIn
          </a>{' '}
          or email at{' '}
          <a
            href={`mailto:${profile.email}`}
            className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4"
          >
            {profile.email}
          </a>{' '}
          for collaboration and opportunities.
        </p>
      </section>
    </main>
  );
};

Home.displayName = 'Home';

export default Home;