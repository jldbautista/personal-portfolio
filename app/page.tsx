import { CatScene } from './components/CatScene'

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 flex-1 min-w-0">
          <section>
            <h1 className="text-3xl font-semibold tracking-tight mb-4">Joseph Lorenzo Bautista</h1>
            <p className="text-zinc-400 leading-relaxed">
              Computer Science Major @{' '}
              <a
                href="https://www.csuchico.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CC0000] hover:text-[#a80000] transition-colors"
              >
                CSU Chico
              </a>
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
              Contact
            </h2>
            <div className="flex flex-col gap-1 text-zinc-300 text-sm">
              <span className="text-[#CC0000]">jdbautista1@csuchico.edu</span>
              <a
                href="https://github.com/jldbautista"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[#2dba4e] hover:text-[#239a3e] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/joseph-lorenzo-bautista-113b92400"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[#0A66C2] hover:text-[#004182] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </div>

        <div className="w-52 shrink-0 self-stretch">
          <CatScene />
        </div>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Projects
        </h2>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-white font-medium">HouseHub</p>
            <p className="text-zinc-400 text-sm mt-1">HouseHub is a web-based household management platform designed to help roommates and families organize daily responsibilities through shared task tracking, scheduling, announcements, and role-based collaboration tools. The application streamlines communication and coordination within a household through a centralized, user-friendly interface.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Django', 'Python', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'SQLite', 'Git/GitHub'].map((tool) => (
                <span key={tool} className="px-2 py-0.5 text-xs rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-medium">CRM Tool</p>
            <p className="text-zinc-400 text-sm mt-1">A customer relationship management (CRM) platform designed to streamline lead tracking, customer management, support ticket handling, and business workflows through centralized dashboards and real-time data management.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['React.js', 'JavaScript', 'Firebase', 'HTML5', 'CSS3', 'Bootstrap', 'Git/GitHub'].map((tool) => (
                <span key={tool} className="px-2 py-0.5 text-xs rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-medium">Calorie Predictor via Machine Learning</p>
            <p className="text-zinc-400 text-sm mt-1">A machine learning application that predicts calories burned during physical activity using biometric and workout data. The project evaluates multiple predictive models and visualizes performance to identify the most accurate solution.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Python', 'scikit-learn', 'TensorFlow/Keras', 'Pandas', 'NumPy', 'Matplotlib'].map((tool) => (
                <span key={tool} className="px-2 py-0.5 text-xs rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {['Python', 'C++', 'C', 'TypeScript', 'JavaScript', 'HTML', 'CSS',' Firebase', 'React', 'Node.js', 'MySQL', 'GitHub', 'Jupyter'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
