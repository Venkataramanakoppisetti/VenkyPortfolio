import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-section">
      <div className="about-container">
        <div className="about">
          <h1 className="about-info">About Me</h1>
          <p className="indicator"> :- </p>
        </div>
        <p className="about-description">
          Hello! I am Vekata Ramana, a passionate Full Stack Developer dedicated
          to creating seamless and innovative web solutions.
        </p>
        <div className="about">
          <h1 className="about-info">Skill & Experience</h1>
          <p className="indicator"> :- </p>
        </div>
        <p className="about-description">
          I specialize in both front-end and back-end development, utilizing
          technologies such as:
        </p>
        <ul className="skills-list">
          <li className="skills">
            <span className="skill-area">Front-end: </span> HTML, CSS,
            JavaScript, React
          </li>
          <li className="skills">
            <span className="skill-area">Back-end: </span> Node JS, Express JS
          </li>
          <li className="skills">
            <span className="skill-area">Programming Languages: </span> Python
          </li>
          <li className="skills">
            <span className="skill-area">Databases: </span> SQL
          </li>
        </ul>
        <div className="about">
          <h1 className="about-info">Education & Experience</h1>
          <p className="indicator"> :- </p>
        </div>
        <p className="about-description">
          Presently, I am pursuing Master of Computer Applications from
          Jawaharlal Nehru Technological University and I hold a degree <br />
          in BSc from Adikavi Nannayya University, graduating in 2021.
          Throughout my academic and professional journey, I have trained <br />{' '}
          in institute name Nxt Wave and gained hands-on knowledge on
          technologies.
        </p>
        <div className="about">
          <h1 className="about-info">Passion & Approach</h1>
          <p className="indicator"> :- </p>
        </div>
        <p className="about-description">
          What excites me most about development is creating a product that will
          be used by world gives me more excitement than any other. <br /> I
          thrive on solving complex problems and continuously seek opportunities
          to learn and grow.
        </p>
        <div className="about">
          <h1 className="about-info">Future Goals</h1>
          <p className="indicator"> :- </p>
        </div>
        <p className="about-description">
          Looking ahead, I am eager to contribute to the world of IT and
          continue to learn and grow with the organization. My wish is to help{' '}
          <br />
          the needy people who wants get the Job, because I know how bitter the
          roots of success and always want to achieve higher altitudes.
        </p>
        <div className="about">
          <h1 className="about-info">Let us connect</h1>
          <p className="indicator"> :- </p>
        </div>
        <p className="about-description">
          I am currently seeking new opportunities to contribute to exciting
          projects. Whether you are interested in collaboration, have a project
          idea,
          <br />
          or just want to connect, feel free to reach out:
        </p>
        <ul className="skills-list">
          <li className="skills">
            <span className="skill-area">Email: </span>{' '}
            <a
              href="https://venkataramanakoppisetti25@gmail.com/"
              target="_blank"
              rel="noreferrer"
            >
              venkataramanakoppisetti25@gmail.com
            </a>
          </li>
          <li className="skills">
            <span className="skill-area">LinkedIn: </span>{' '}
            <a
              href="https://www.linkedin.com/in/venkata-ramana-koppisetti-ab2823223/"
              target="_blank"
              rel="noreferrer"
            >
              venkata-ramana-koppisetti-ab2823223
            </a>
          </li>
          <li className="skills">
            <span className="skill-area">Github: </span>{' '}
            <a
              href="https://github.com/Venkataramanakoppisetti"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Venkataramanakoppisetti
            </a>
          </li>
        </ul>
        <p className="thanks-giving">
          Thank you for visiting my portfolio! I look forward to connecting with
          you.
        </p>
      </div>
    </div>
  </>
)

export default About
