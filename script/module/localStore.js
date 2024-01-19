import objForm from './objForm.js';

const {
  obj,
} = objForm;

const setLocalStore = (tasks, valueInput, styleTr, name) => {
  obj.randomID();
  obj.addTask(valueInput);
  obj.addStyleTr(styleTr);
  tasks.push(obj);
  localStorage.setItem(name, JSON.stringify(tasks));
};

const getLocalStore = (name) => {
  const data = localStorage.getItem(name);
  if (data === null) {
    return [];
  } else {
    return JSON.parse(data);
  }
};

const removeLocalStore = (taskId, name) => {
  let data = getLocalStore(name);
  data = data.filter(item => item.id !== taskId);
  localStorage.setItem(name, JSON.stringify(data));
};

const setLocalStoreEditTodo = (data, task, name) => {
  task.status = 'Выполнено';
  task.styleTr = 'table-success';
  task.styleTask = 'text-decoration-line-through';
  const index = data.findIndex(obj => obj.id === task.id);
  if (index !== -1) {
    data[index] = task;
  }
  localStorage.setItem(name, JSON.stringify(data));
};

export default {
  setLocalStore,
  getLocalStore,
  removeLocalStore,
  setLocalStoreEditTodo,
};
