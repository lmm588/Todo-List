import { createProject } from "./projects.js";

export default function projectsModal() {
  const modalDialog = document.querySelector("dialog");
  const modalForm = document.getElementById("project-form");
  const projectList = document.getElementById("project-list");
  const projectName = document.getElementById("project-name").value;
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

  const modalOpenEventListener = () => {
    addProjectIcon.addEventListener("click", openModal);
  };

  const modalCloseEventListener = () => {
    closeModalButton.addEventListener("click", closeModal);
  };

  modalOpenEventListener();
  modalCloseEventListener();
}
