import Project from '../components/Project';

function Portfolio() {
  return (
    <section>
      <h2>My Projects</h2>
      <Project title="Task Manager" imgSrc="assets/Ultimate-Guide-How-to-Set-Priority-Using-Windows-Task-Manager.png" deployedLink="https://juangirelli.github.io/Task-Manager/" repoLink="https://github.com/JuanGirelli/Task-Manager" />
      {/* Repeat <Project /> for each project */}
    </section>
  );
}

export default Portfolio;