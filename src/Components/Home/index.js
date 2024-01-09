// Write your code here
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="profile-container">
        <p className="designation">Fullstack Developer</p>

        <h1 className="name">Hello, my name is Venkata Ramana</h1>
        <p className="description">
          Hello ! I am Venkata Ramana , a budding Full Stack Developer with a
          deep passion for creating innovative and user-friendly web
          applications. My journey into the world of programming began out of
          sheer curiosity, and since then, I have embarked on a continuous
          learning adventure. My skills span both front-end and back-end
          development, allowing me to craft seamless and well-rounded digital
          experiences. From designing responsive user interfaces with HTML, CSS,
          and JavaScript to building robust server-side logic using technologies
          like Node.js and Express, I thrive on bringing ideas to life in the
          digital space. In the course of my academic journey, I earned a degree
          in MCA from Jawaharlal Nehru Technological University, where I
          developed a strong foundation in computer science principles. However,
          my true passion lies in applying these concepts to real-world problems
          and creating solutions that make a meaningful impact. I am
          particularly excited about Python,React JS and SQL, and I am always
          eager to explore new tools and frameworks that can enhance my
          development toolkit. My commitment to staying abreast of industry
          trends and my enthusiasm for collaborative problem-solving make me a
          valuable addition to any development team. Outside of coding, you can
          find me exploring the latest developments in the tech world,
          contributing to open-source projects, or experimenting with personal
          projects that push the boundaries of my skills. I am currently seeking
          opportunities to work on exciting projects where I can contribute my
          skills, learn from experienced professionals, and grow as a Full Stack
          Developer. If you have a project or an idea you would like to discuss,
          feel free to reach out. I am always up for a good coding challenge!
        </p>
        <div className="button-container">
          <Link to="/projects">
            <button type="button" className="projects-button">
              Projects
            </button>
          </Link>
          <a
            href="https://www.linkedin.com/in/venkata-ramana-koppisetti-ab2823223/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="linked-in-button">
              LinkedIn
            </button>
          </a>
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/dyoatejew/image/upload/v1704465940/IMG_20210818_205126_1_z1wzwx.jpg"
        className="my-pic"
        alt="my-pic"
      />
    </div>
  </>
)

export default Home
