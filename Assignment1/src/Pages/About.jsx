/*
  File: About.jsx
  Student’s Name: Hailey Shukla
  StudentID: 301487045
  Date: 2025-09-15
  Purpose: About Me page (name, image, short bio, resume link)
*/

export default function About() {
  return (
    <section className="stack gap">
      <h1>About Me</h1>

      <div className="about">
        <img
          src="./public/me.jpg"
          alt="Head and shoulders of Your Name"
          className="avatar"
        />

        <div className="about-text">
          <h2>Heer Shukla</h2>
          <p>
            My name is Heer, but I prefer to go by Hailey! I’m a developer based in Toronto, focused on building responsive web apps
            with React, Node, and SQL. I enjoy clean architecture, accessibility,
            and performance.
          </p>

          {/* Resume link to a PDF in /public */}
          <a className="btn" href="./public/resume.pdf" target="_blank" rel="noreferrer">
            View My Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
