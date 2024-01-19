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
  // LoginProfile,
} = control;
{
  const init = (selectorApp) => {
    const app = document.querySelector(selectorApp);
    const promptName = prompt('Напишите ваше имя');
    const data = getLocalStore(promptName);
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
    // LoginProfile(formModal,
    //   bntSubmit,
    //   inputModal);
    addTask(form, promptName, saveBtn, tbody);
    clearInput(form, clearBtn, saveBtn);
    deleteTask(promptName, tbody);
    finishTodo(promptName, tbody);
    editTask(promptName, tbody);
  };
  window.ToDo = init;
}
