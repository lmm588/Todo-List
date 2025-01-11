import { removeProjectFromArray } from "./projects.js";

export default function handleDeleteEvent(event) {
  const projectList = document.getElementById("project-list");

  projectList.removeChild(event.target.parentElement);
  removeProjectFromArray(event.target.getAttribute("position"));
}
