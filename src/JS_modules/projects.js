const projects = [];

const Project = function(projectName) {
  const name = projectName;
  const tasks = [];
  return { name, tasks };
}

export function createProject(projectName) {
  const project = Project(projectName);
  return project;
}

export function addProjectToList(project) {
  projects.push(project);
}
