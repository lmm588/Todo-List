import {
  createProject,
  addProjectToArray,
  getProjectIndex,
} from "./projects.js";
import { stringEllipsis } from "./util.js";
import deleteIcon from "/resources/delete_icon.svg";
import handleDeleteEvent from "./projectDeletion.js";

export default function projectsModal() {
  const modalDialog = document.querySelector("dialog");
  const modalForm = document.getElementById("project-form");
  const projectList = document.getElementById("project-list");
  const projectNameInput = document.getElementById("project-name");
  const addProjectIcon = document.getElementById("add-project");
  const closeModalButton = document.querySelector(
    "dialog button[type='reset']"
  );

  const openModal = () => {
    modalDialog.showModal();
  };

  const closeModal = () => {
    modalDialog.close();
    modalForm.reset();
  };

  const appendProjectToProjectList = (projectName) => {
    const projectListItem = document.createElement("li");
    const projectDeleteIcon = createDeleteIconElement(projectName);
    projectListItem.classList.add(
      "transition-[background-color]",
      "hover:bg-blue-950",
      "rounded-sm",
      "ease-in-out",
      "duration-400",
      "flex",
      "pl-2",
      "pr-2",
      "justify-between",
      "project-delete-icon"
    );
    if (projectName.length >= 25) {
      projectListItem.setAttribute("title", projectName);
      projectName = stringEllipsis(projectName, 25);
    }
    projectListItem.textContent = projectName;
    projectListItem.appendChild(projectDeleteIcon);
    projectDeleteIcon.addEventListener("click", (e) => {
      handleDeleteEvent(e);
    });
    projectList.append(projectListItem);
  };

  const createDeleteIconElement = (projectName) => {
    const projectListDeleteIcon = document.createElement("img");
    projectListDeleteIcon.classList.add(
      "hover:sepia",
      "hover:scale-125",
      "transition-transform",
      "duration-300",
      "size-7",
      "xl:size-5",
      "lg:size-4",
      "md:size-3",
      "self-center"
    );
    projectListDeleteIcon.src = deleteIcon;
    projectListDeleteIcon.setAttribute(
      //Sets the project index as a data attribute so we know which list item to delete later.
      "position",
      getProjectIndex(projectName)
    );
    return projectListDeleteIcon;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let projectName = projectNameInput.value.trim();
    createProject(projectName);
    addProjectToArray(projectName);
    appendProjectToProjectList(projectName);
    closeModal();
  };

  const initializeEventListeners = () => {
    addProjectIcon.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);
    modalForm.addEventListener("submit", (event) => handleFormSubmit(event));
  };

  initializeEventListeners();
}
