import render from './module/render.js';
import localStore from './module/localStore.js';
import control from './module/control.js';
const {
  getLocalStore,
} = localStore;
const {
  renderTodo,
} = render;
const {
  addTask,
  clearInput,
  deleteTask,
  finishTodo,
  editTask,
  loginProfile,
} = control;
{
  const init = (selectorApp) => {
    const app = document.querySelector(selectorApp);
    const loginName = loginProfile();
    const data = getLocalStore(loginName);
    const {
      form,
      tbody,
      saveBtn,
      clearBtn,
      // formModal,
      // bntSubmit,
      // inputModal,
    } = renderTodo(app, data);
    // formModal.showModal();
    // loginProfile(formModal,
    //   bntSubmit,
    //   inputModal);
    addTask(form, loginName, saveBtn, tbody);
    clearInput(form, clearBtn, saveBtn);
    deleteTask(loginName, tbody);
    finishTodo(loginName, tbody);
    editTask(loginName, tbody);
  };
  window.ToDo = init;
}
