import './index.css'

const ProjectItem = props => {
  const {projectDetails, deleteProject} = props
  const {
    category,
    imageURL,
    title,
    description,
    projectLink,
    projectId,
  } = projectDetails

  const onDeleteProject = () => {
    deleteProject(projectId)
  }

  return (
    <>
      <div className="project-item-container">
        <div className="project-content-container">
          <h1 className="project-title">{title}</h1>
          <p className="project-category">{category}</p>
          <p className="project-description">{description}</p>
          <div className="buttons-container">
            <a href={projectLink} target="_blank" rel="noreferrer">
              <button type="button" className="view-project-button">
                View Project
              </button>
            </a>

            <button
              type="button"
              className="delete-project-button"
              onClick={onDeleteProject}
            >
              Delete Project
            </button>
          </div>
        </div>
        <img src={imageURL} className="project-image" alt="projectImage" />
      </div>
    </>
  )
}

export default ProjectItem
