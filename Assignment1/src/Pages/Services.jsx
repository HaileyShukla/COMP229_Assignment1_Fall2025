/*
  File: Services.jsx
  Student’s Name: Hailey Shukla
  StudentID: 301487045
  Date: 2025-09-15
  Purpose: Short list of services 
*/

// src/Pages/Services.jsx
export default function Services() {
  return (
    <section className="stack gap">
      {/* One banner image */}
      <img
        src="/public/banner.png"
        alt="Services banner"
        className="services-hero"
      />

      <h1>Services</h1>

      <ul className="services">
        <li>
          <h3>Web Development</h3>
          <p>Responsive React frontends, REST APIs, integrations.</p>
        </li>
        <li>
          <h3>UI/UX Implementation</h3>
          <p>Accessible, modern interfaces that feel fast and intuitive.</p>
        </li>
        <li>
          <h3>Mobile-friendly Sites</h3>
          <p>Design systems that scale across devices and screens.</p>
        </li>
      </ul>
    </section>
  );
}

