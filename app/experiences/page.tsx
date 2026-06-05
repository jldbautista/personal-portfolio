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
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <span className="font-medium text-white">{title}</span>
          <span className="text-zinc-500"> · {org}</span>
        </div>
        <span className="text-zinc-600 text-sm shrink-0">{period}</span>
      </div>
      <ul className="flex flex-col gap-1 pl-4">
        {bullets.map((b, i) => (
          <li key={i} className="text-zinc-400 text-sm list-disc">
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experiences() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Education
        </h2>
        {education.map((e) => (
          <ExperienceEntry key={`${e.org}-${e.title}`} {...e} />
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Work
        </h2>
        {work.map((e) => (
          <ExperienceEntry key={`${e.org}-${e.title}`} {...e} />
        ))}
      </section>
    </div>
  )
}
