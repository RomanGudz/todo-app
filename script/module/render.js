import createElements from './createElements.js';

const {
  containerStyle,
  titleToDo,
  formToDo,
  tableWrapper,
  createRows,
} = createElements;

const renderTodo = (app, arr) => {
  containerStyle(app);
  const title = titleToDo();
  const {
    form,
    saveBtn,
    clearBtn,
  } = formToDo();
  const {
    divwrapper,
    tbody,
  } = tableWrapper();
  const rows = createRows(arr);
  tbody.append(...rows);
  app.append(title, form, divwrapper);
  return {
    form,
    tbody,
    saveBtn,
    clearBtn,
  };
};

export default {
  renderTodo,
};
