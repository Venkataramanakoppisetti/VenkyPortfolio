import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Header from '../Header'
import ProjectItem from '../ProjectItem'

import './index.css'

const initialProjectsList = [
  {
    projectId: uuidv4(),
    category: 'RESPONSIVE',
    imageURL:
      'https://img.freepik.com/free-vector/flags-globe_1057-760.jpg?w=740&t=st=1704626986~exp=1704627586~hmac=703df8ab503302914dc2a15a8876bf7099bd0a4bf3e790347ab6b070572c2732',
    title: 'Countries Search',
    description:
      'Developed responsive countries search application which shows all the countries and responsive population in the world',
    projectLink: 'https://ramanacountries.ccbp.tech/',
  },
  {
    projectId: uuidv4(),
    category: 'RESPONSIVE',
    imageURL:
      'https://www.shutterstock.com/shutterstock/photos/2251804043/display_1500/stock-vector-puzzle-globe-education-knowledge-school-icon-web-logo-learn-language-sign-symbol-initial-vector-2251804043.jpg',
    title: 'Wikipedia Search Application',
    description:
      'Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation by clicking on the specific search',
    projectLink: 'https://ramanawiki.ccbp.tech/',
  },
  {
    projectId: uuidv4(),
    category: 'DYNAMIC',
    imageURL:
      'https://media.istockphoto.com/id/116772376/photo/notepad-to-do-list-get-things-done.jpg?s=1024x1024&w=is&k=20&c=P3jWqMRNjtWtFALzzG_kryh0Yv-7rwQ2h3adVeiIswg=',
    title: 'TO-DO List',
    description:
      'A comprehensive todo management tool designed to enhance productivity',
    projectLink: 'https://ramanatodoapp.ccbp.tech/',
  },
  {
    projectId: uuidv4(),
    category: 'DYNAMIC',
    imageURL:
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png',
    title: 'Nxt Trendz Application',
    description:
      'NxtTrendz application is an application which is close to our present e-commerce application where an authenticated user can login and shop whatever he/she feel to buy it later ca add it to the cart and prime user will have have the benefits of prime deals in this application.In this application user can switch between different routes and access functionalities..',
    projectLink: 'https://venkynxtrendz25.ccbp.tech/',
  },
]

class Projects extends Component {
  state = {
    projectsList: initialProjectsList,
    title: '',
    category: '',
    imageURL: '',
    description: '',
    projectLink: '',
  }

  submitForm = event => {
    event.preventDefault()
    const {title, category, description, projectLink, imageURL} = this.state
    console.log('H')
    const newProject = {
      projectId: uuidv4(),
      title,
      category,
      description,
      projectLink,
      imageURL,
    }

    this.setState(prevState => ({
      projectsList: [...prevState.projectsList, newProject],
      title: '',
      category: '',
      imageURL: '',
      description: '',
      projectLink: '',
    }))
  }

  deleteProject = projectId => {
    const {projectsList} = this.state

    const filteredProjectsList = projectsList.filter(
      eachProject => eachProject.projectId !== projectId,
    )

    this.setState({projectsList: filteredProjectsList})
  }

  onChangeProjectName = event => {
    this.setState({title: event.target.value})
  }

  onChangeProjectCategory = event => {
    this.setState({category: event.target.value})
  }

  onChangeProjectDescription = event => {
    this.setState({description: event.target.value})
  }

  onChangeProjectImageURL = event => {
    this.setState({imageURL: event.target.value})
  }

  onChangeProjectLink = event => {
    this.setState({projectLink: event.target.value})
  }

  render() {
    const {projectsList} = this.state
    return (
      <>
        <Header />
        <div className="projects-container">
          <h1 className="projects-heading">Projects</h1>
          <ul className="projects-list">
            {projectsList.map(eachProject => (
              <ProjectItem
                key={eachProject.projectId}
                projectDetails={eachProject}
                deleteProject={this.deleteProject}
              />
            ))}
          </ul>
          <h1 className="add-project-heading">Add Project</h1>
          <form className="add-project-form" onSubmit={this.submitForm}>
            <div className="project-input-container">
              <label htmlFor="projectName" className="name-link-label">
                Project Name
              </label>
              <input
                type="text"
                className="project-input-field"
                id="projectName"
                onChange={this.onChangeProjectName}
              />
            </div>
            <div className="project-input-container">
              <label htmlFor="category" className="name-link-label">
                Project Category
              </label>
              <input
                type="text"
                className="project-input-field"
                id="category"
                onChange={this.onChangeProjectCategory}
              />
            </div>

            <div className="project-input-container">
              <label htmlFor="projectLink" className="name-link-label">
                Project Link
              </label>
              <input
                type="text"
                className="project-input-field"
                id="projectLink"
                onChange={this.onChangeProjectLink}
              />
            </div>
            <div className="project-input-container">
              <label htmlFor="imageURL" className="name-link-label">
                Project ImageURL
              </label>
              <input
                type="text"
                className="project-input-field"
                id="imageURL"
                onChange={this.onChangeProjectImageURL}
              />
            </div>
            <div className="project-description-container">
              <label htmlFor="projectDescription" className="name-link-label">
                Project Description
              </label>
              <textarea
                type="text"
                className="project-description-field"
                id="projectDescription"
                onChange={this.onChangeProjectDescription}
              />
            </div>
            <button type="submit" className="add-project-button">
              Add Project
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default Projects
