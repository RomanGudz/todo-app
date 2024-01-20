import localStore from './localStore.js';
import createElements from './createElements.js';
import objForm from './objForm.js';
import math from './math.js';
const {
  obj,
} = objForm;

const {
  findObj,
} = math;

const {
  setLocalStore,
  getLocalStore,
  removeLocalStore,
  setLocalStoreEditTodo,
} = localStore;

const {
  createRow,
} = createElements;

const changeTableNumber = (tbody) => {
  const rows = tbody.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    row.children[0].textContent = i + 1;
  }
};

const questionDeleteTask = () => {
  const questionTask = confirm('Подтвердите удаление задачи');
  return questionTask;
};

const addTaskPage = (task, tbody) => {
  obj.randomID();
  obj.addTask(task);
  tbody.append(createRow(obj));
  changeTableNumber(tbody);
};
const addTask = (form, name, saveBtn, tbody) => {
  const input = document.querySelector('.form-control');

  input.addEventListener('input', e => {
    const target = e.target;
    if (target.value.length !== 0) {
      saveBtn.disabled = false;
    } else {
      saveBtn.disabled = true;
    }
  });
  saveBtn.addEventListener('click', e => {
    e.preventDefault();
    const task = input.value;
    const styleTr = form.querySelector('.form-select');
    setLocalStore(getLocalStore(name), task, styleTr.value, name);
    addTaskPage(task, tbody);
    saveBtn.disabled = true;
    form.reset();
  });
};

const clearInput = (form, clearBtn, saveBtn) => {
  clearBtn.addEventListener('click', () => {
    saveBtn.disabled = true;
    form.reset();
  });
};

const deleteTask = (name, tbody) => {
  const btnDelete = document.querySelector('.btn-danger');
  if (btnDelete) {
    btnDelete.addEventListener('click', e => {
      const questionTask = questionDeleteTask();
      if (questionTask) {
        const target = e.target;
        const task = target.closest('tr');
        if (target.classList.contains('btn-danger')) {
          const taskID = task.children[0].getAttribute('data-id');
          removeLocalStore(taskID, name);
          task.remove();
          changeTableNumber(tbody);
        }
      }
    });
  }
};

const finishTodo = (name, tbody) => {
  const data = getLocalStore(name);
  tbody.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('btn-success')) {
      const taskTable = target.closest('tr');
      taskTable.classList.remove();
      taskTable.children[1].classList.remove('task');
      taskTable.classList.add('table-success');
      taskTable.children[2].textContent = 'Выполнено';
      taskTable.children[1].classList.add('text-decoration-line-through');
      const taskID = taskTable.children[0].getAttribute('data-id');
      const taskObj = findObj(data, taskID);
      setLocalStoreEditTodo(data, taskObj, name);
    }
  });
};

const editTask = (name, tbody) => {
  const data = getLocalStore(name);
  tbody.addEventListener('input', e => {
    const target = e.target;
    if (target.classList.contains('task')) {
      const taskTable = target.closest('.table-light');
      const newTask = taskTable.children[1].textContent.trim();
      const taskID = taskTable.children[0].getAttribute('data-id');
      const taskObj = findObj(data, taskID);
      taskObj.task = newTask;
      setLocalStoreEditTodo(data, taskObj, name);
    }
  });
};
const loginProfile = (calback) => {
  const input = document.getElementById('loginInput');
  const btnLogin = document.getElementById('logiBtn');
  let loginName;
  input.addEventListener('input', e => {
    const target = e.target;
    if (target.value.length !== 0) {
      btnLogin.disabled = false;
    } else {
      btnLogin.disabled = true;
    }
  });
  btnLogin.addEventListener('click', e => {
    e.preventDefault();
    btnLogin.disabled = true;
    loginName = input.value;
    calback(loginName);
    input.value = '';
    // modal.close();
  });
};
// const loginProfile = () => {
//   const loginName = prompt('Напишите ваше имя');
//   if (loginName === null || loginName.length === 0) {
//     loginProfile();
//   } else {
//     return loginName;
//   }
// };
export default {
  addTask,
  clearInput,
  deleteTask,
  finishTodo,
  editTask,
  loginProfile,
};
