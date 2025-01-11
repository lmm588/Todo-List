const projects = [];

const Project = function (projectName) {
  const name = projectName;
  const tasks = [];
  return { name, tasks };
};

export function createProject(projectName) {
  const project = Project(projectName);
  return project;
}

export function addProjectToArray(project) {
  projects.push(project);
}

export function getProjectIndex(projectName) {
  return projects.indexOf(projectName);
}

export function removeProjectFromArray(projectIndex) {
  projects.splice(projectIndex, 1);
}
