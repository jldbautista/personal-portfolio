import Image from 'next/image'
import VerificationStatus from './components/verification-status'

const projects = [
  {
    name: 'xpense.trk',
    path: '~/projects/xpense.trk',
    description:
      "A pixel art styled expense tracker web app where users log spending, set monthly budgets, and watch a virtual companion's mood react to their financial habits. Features secure authentication, real time budget tracking, and filterable expense history with a playful, retro UI.",
    tools: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Git/GitHub'],
  },
  {
    name: 'HouseHub',
    path: '~/projects/househub',
    description:
      'HouseHub is a web-based household management platform designed to help roommates and families organize daily responsibilities through shared task tracking, scheduling, announcements, and role-based collaboration tools. The application streamlines communication and coordination within a household through a centralized, user-friendly interface.',
    tools: ['Django', 'Python', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'SQLite', 'Git/GitHub'],
  },
  {
    name: 'CRM Tool',
    path: '~/projects/crm-tool',
    description:
      'A customer relationship management (CRM) platform designed to streamline lead tracking, customer management, support ticket handling, and business workflows through centralized dashboards and real-time data management.',
    tools: ['React.js', 'JavaScript', 'Firebase', 'HTML5', 'CSS3', 'Bootstrap', 'Git/GitHub'],
  },
  {
    name: 'Calorie Predictor via Machine Learning',
    path: '~/projects/calorie-predictor',
    description:
      'A machine learning application that predicts calories burned during physical activity using biometric and workout data. The project evaluates multiple predictive models and visualizes performance to identify the most accurate solution.',
    tools: ['Python', 'scikit-learn', 'TensorFlow/Keras', 'Pandas', 'NumPy', 'Matplotlib'],
  },
]

const skills = [
  'Python',
  'C++',
  'C',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Firebase',
  'React',
  'Node.js',
  'MySQL',
  'GitHub',
  'Jupyter',
  'Vercel',
  'Supabase',
]

function Prompt({ command }: { command: string }) {
  return (
    <p className="text-sm text-zinc-500">
      <span className="text-cyan-300">joseph</span>
      <span className="text-zinc-500">@</span>
      <span className="text-emerald-300">portfolio</span>
      <span className="text-emerald-300">:~</span>
      <span className="text-zinc-500">$</span> <span className="text-white">{command}</span>
    </p>
  )
}

function TerminalToken({
  children,
  size = 'sm',
}: {
  children: React.ReactNode
  size?: 'sm' | 'lg'
}) {
  return (
    <span
      className={`cursor-default border border-zinc-700 text-zinc-300 transition-colors hover:border-white hover:bg-white hover:text-black ${
        size === 'lg' ? 'px-3 py-1.5 text-sm sm:text-base' : 'px-2 py-1 text-xs'
      }`}
    >
      {children}
    </span>
  )
}

function ProjectWindow({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group border border-zinc-800 bg-black/45 transition-colors hover:border-zinc-300">
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 text-xs text-zinc-500 group-hover:border-zinc-500">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full border border-red-400/70 bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full border border-amber-300/70 bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full border border-emerald-400/70 bg-emerald-500" />
        </div>
        <span>{project.path}</span>
      </div>
      <div className="space-y-4 p-5">
        <h3 className="text-base font-semibold text-white">{project.name}</h3>
        <p className="text-sm leading-6 text-zinc-400">{project.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Tools:</span>
          {project.tools.map((tool) => (
            <TerminalToken key={tool}>{tool}</TerminalToken>
          ))}
        </div>
      </div>
    </article>
  )
}

function ContactIcon({ type }: { type: 'mail' | 'github' | 'linkedin' }) {
  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0">
        <rect x="2.5" y="5" width="19" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m3 6 9 7 9-7" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m3 18 6.6-6.1M21 18l-6.6-6.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    )
  }

  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.97c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92v2.79c0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
      />
    </svg>
  )
}

function IdBadgeCard() {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div className="flex items-baseline justify-between gap-4 border-b border-zinc-800 pb-4 text-xs uppercase tracking-widest">
        <div className="flex min-w-0 shrink items-baseline gap-x-4">
          <span className="text-zinc-500">Developer ID</span>
          <span className="truncate text-[0.68rem] text-zinc-600">ID // JB-007 </span>
        </div>
        <VerificationStatus />
      </div>

      <div className="grid gap-6 sm:grid-cols-[8rem_1fr] lg:grid-cols-1 xl:grid-cols-[8rem_1fr]">
        <div className="relative aspect-square overflow-hidden border border-zinc-700 bg-zinc-950">
          <Image
            src="/cat-prof.png"
            alt="Joseph Lorenzo Bautista"
            fill
            sizes="8rem"
            className="object-cover"
            priority
          />
        </div>

        <div className="min-w-0 space-y-3">
          <p className="text-xs uppercase tracking-widest text-zinc-500">Profile</p>
          <h2 className="text-2xl font-semibold leading-tight text-white">Software Engineer & Machine Learning Dev </h2>
          <p className="text-sm leading-6 text-zinc-400">
            Creating clean interfaces, practical data flows, and reliable project foundations.
          </p>
        </div>
      </div>

      <dl className="grid gap-3 text-sm">
        <div className="flex justify-between gap-4 border-t border-zinc-800 pt-3">
          <dt className="text-zinc-500">Role</dt>
          <dd className="text-right text-zinc-200">Student Developer</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-zinc-800 pt-3">
          <dt className="text-zinc-500">Focus</dt>
          <dd className="text-right text-zinc-200">Full Stack Web + ML</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-zinc-800 pt-3">
          <dt className="text-zinc-500">Class</dt>
          <dd className="text-right text-zinc-200">2026</dd>
        </div>
      </dl>
    </div>
  )
}

export default function Home() {
  return (
    <div className="space-y-4">
      <section id="home" className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <Prompt command="whoami" />
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-5xl">
                Joseph Lorenzo Bautista<span className="terminal-cursor ml-3 inline-block h-9 w-4 translate-y-1 bg-white sm:h-11" />
              </h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-400">
                Computer Science Major @{' '}
                <a
                  href="https://www.csuchico.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:bg-white hover:text-black"
                >
                  CSU Chico
                </a>
              </p>
            </div>
          </div>

          <section className="space-y-4" aria-labelledby="contact-heading">
            <Prompt command="cat contact.txt" />
            <h2 id="contact-heading" className="text-lg font-semibold uppercase tracking-widest text-zinc-300">
              Contacts
            </h2>
            <div className="contact-panel">
              <a
                href="mailto:jdbautista1@csuchico.edu"
                className="contact-row"
              >
                <ContactIcon type="mail" />
                jdbautista1@csuchico.edu
              </a>
              <a
                href="https://github.com/jldbautista"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row"
              >
                <ContactIcon type="github" />
                github.com/jldbautista
              </a>
              <a
                href="https://linkedin.com/in/joseph-lorenzo-bautista"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row"
              >
                <ContactIcon type="linkedin" />
                linkedin.com/in/joseph-lorenzo-bautista
              </a>
            </div>
          </section>
        </div>

        <aside
          className="h-[28rem] min-w-0 overflow-hidden border border-zinc-800 bg-black/35 p-5 lg:mt-10 lg:h-[30rem]"
          aria-label="Joseph Lorenzo Bautista ID badge"
        >
          <IdBadgeCard />
        </aside>
      </section>

      <section className="space-y-5" aria-labelledby="projects-heading">
        <Prompt command="ls projects" />
        <div className="flex items-end justify-between gap-4">
          <h2 id="projects-heading" className="text-lg font-semibold uppercase tracking-widest text-zinc-300">
            Projects
          </h2>
          <span className="text-xs text-zinc-600">4 directories</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectWindow key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-5 pt-8" aria-labelledby="skills-heading">
        <Prompt command="grep -r skills resume.md" />
        <h2 id="skills-heading" className="text-lg font-semibold uppercase tracking-widest text-zinc-300">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <TerminalToken key={skill} size="lg">
              {skill}
            </TerminalToken>
          ))}
        </div>
      </section>
    </div>
  )
}
