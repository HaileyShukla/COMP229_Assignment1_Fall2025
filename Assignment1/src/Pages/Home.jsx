/*
  File: Home.jsx
  Student’s Name: Hailey Shukla
  StudentID: 301487045
  Date: 2025-09-15
  Purpose: Home page with welcome + CTA
*/

import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="stack gap">
            {/* Section: Hero / Welcome */}
            <h1>Welcome to My Portfolio <span className="emoji" role="img" aria-label="sparkles"> ✨</span> </h1>
            <p className="lead">
                I’m a Toronto-based developer who enjoys turning ideas into clean, reliable web apps.
                I work mostly with <strong>React</strong> on the front end and I’m comfortable across the
                stack aka APIs, databases, and the details that make products feel fast and accessible.
            </p>
            <p className="mission">
                <strong>Mission:</strong> I care about readable code, thoughtful UX, and shipping features that help people.
                Lately I’ve been sharpening my <strong>React</strong>, <strong>JavaScript</strong>, and <strong> SQL</strong> skills through hands-on projects and constant iteration.
            </p>

            <ul className="highlights">
                <li>Modern React (hooks, router) + responsive UI</li>
                <li>REST APIs and basic data modeling with SQL</li>
                <li>Focus on accessibility, performance, and clean code</li>
            </ul>


            {/* Calls to action */}
            <div className="row">
                <Link to="/about" className="btn">About Me</Link>
                <Link to="/projects" className="btn secondary">See My Projects</Link>
            </div>
        </section>
    )
}
