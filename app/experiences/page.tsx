type Experience = {
  title: string
  org: string
  period: string
  bullets: string[]
}

const education: Experience[] = [
  {
    title: 'B.S. Computer Science',
    org: 'CSU Chico',
    period: '2024 – 2026',
    bullets: ['GPA: 3.54', 'Relevant Coursework: Data Structures, Algorithms, Databases, Server-side Development, Artificial Intelligence, Machine Learning, Operating Systems'],
  },
  {
    title: 'A.S. Computer Science, Math, Physics',
    org: 'San Joaquin Delta College',
    period: '2022 – 2024',
    bullets: ['GPA: 3.61', 'Relevant Coursework:  Data Structures, Algorithms, Calculus I,II,III, Physics I, II, III, Differential Equations, Linear Algebra'],
  },
]

const work: Experience[] = [
  {
    title: 'Software Engineer Intern',
    org: 'N/A',
    period: 'May 2025 – Aug 2025',
    bullets: [
      'Collaborated with team of engineers on codebase.',
      'Used TypeScript, React, and Node.js.',
    ],
  },
]

function ExperienceEntry({ title, org, period, bullets }: Experience) {
  return (
    <article className="border border-zinc-800 bg-black/35 p-5 transition-colors hover:border-zinc-400">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-sm text-zinc-500">{org}</p>
        </div>
        <span className="text-sm text-zinc-600">{period}</span>
      </div>
      <ul className="mt-4 flex flex-col gap-2">
        {bullets.map((b, i) => {
          const courseworkLabel = 'Relevant Coursework:'
          const isCoursework = b.startsWith(courseworkLabel)

          return (
            <li key={i} className="flex items-start gap-1 text-sm leading-6 text-zinc-400">
              <span className="text-zinc-600">$</span>
              {isCoursework ? (
                <span className="flex min-w-0 items-start">
                  <span className="shrink-0">{courseworkLabel}&nbsp;</span>
                  <span className="min-w-0">{b.slice(courseworkLabel.length).trim()}</span>
                </span>
              ) : (
                <span>{b}</span>
              )}
            </li>
          )
        })}
      </ul>
    </article>
  )
}

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

export default function Experiences() {
  return (
    <div id="resume" className="space-y-14">
      <section className="space-y-5">
        <Prompt command="cat resume.md" />
        <div>
          <h1 className="text-3xl font-semibold text-white">Resume Summary</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            Education and Experience. Computer Science Major @ CSU Chico.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <Prompt command="ls education" />
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
          Education
        </h2>
        {education.map((e) => (
          <ExperienceEntry key={`${e.org}-${e.title}`} {...e} />
        ))}
      </section>

      <section className="space-y-5">
        <Prompt command="ls work" />
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
          Work
        </h2>
        {work.map((e) => (
          <ExperienceEntry key={`${e.org}-${e.title}`} {...e} />
        ))}
      </section>
    </div>
  )
}
