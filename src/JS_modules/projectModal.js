import { createProject } from "./projects.js";

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
  };

  const appendProjectToProjectList = (projectName) => {
    const projectListItem = document.createElement("li");
    projectListItem.classList.add("transition-[background-color]", "hover:bg-blue-950", "ease-in-out", "duration-400", "flex", "justify-between");
    projectListItem.textContent = projectName;
    projectList.append(projectListItem);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createProject(projectNameInput.value);
    appendProjectToProjectList(projectNameInput.value);
    closeModal();
  };

  const initializeEventListeners = () => {
    addProjectIcon.addEventListener("click", openModal);
    closeModalButton.addEventListener("click", closeModal);
    modalForm.addEventListener("submit", (event) => handleFormSubmit(event));
  };

  initializeEventListeners();
};
