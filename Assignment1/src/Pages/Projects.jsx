/*
  File: Projects.jsx
  Student’s Name: Hailey Shukla
  StudentID: 301487045
  Date: 2025-09-15
  Purpose: At least 3 highlight projects with image + role/outcome
*/

const projects = [
  {
    title: 'ATM Banking Application on C#',
    image: '/project1.png',
    role: 'Developer',
    outcome: 'Designed and implemented a multi-class Banking System with Checking, Saving, and Visa accounts. Integrated interfaces, enums, custom exceptions, and events to handle transactions, overdrafts, and monthly reports.',
  },
  {
    title: 'Travel Application',
    image: '/project2.png',
    role: 'Front-End Developer & System Designer',
    outcome: 'Built a prototype travel planning app with features for itinerary updates, expense tracking, service requests, and crime heat maps. Applied UML diagrams (use cases, CRC cards, state diagrams) to design the system and present Agile workflows.',
  },
  {
    title: 'Restaurant Website',
    image: '/project3.png',
    role: 'Web Developer',
    outcome: 'Developed a six-page responsive website as part of a web development course project. Focused on layout consistency, interactivity, and accessibility for both desktop and mobile users.',
  },
]

export default function Projects() {
  return (
    <section className="stack gap">
      <h1>Projects</h1>

      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <img src={p.image} alt={`${p.title} screenshot`} className="card-img" />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p><strong>My Role:</strong> {p.role}</p>
              <p><strong>Outcome:</strong> {p.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
