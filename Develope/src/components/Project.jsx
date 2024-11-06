function Project({ title, imgSrc, deployedLink, repoLink }) {
    return (
      <div className="project">
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    );
  }
  
  export default Project;