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
    const loginName = 'roman';
    const data = getLocalStore(loginName);
    const {
      form,
      tbody,
      saveBtn,
      clearBtn,
      formModal,
    } = renderTodo(app, data);
    formModal.showModal();
    let login;
    loginProfile((calback) => {
      login = calback;
    });
    console.log('login: ', login);
    addTask(form, loginName, saveBtn, tbody);
    clearInput(form, clearBtn, saveBtn);
    deleteTask(loginName, tbody);
    finishTodo(loginName, tbody);
    editTask(loginName, tbody);
  };
  window.ToDo = init;
}
