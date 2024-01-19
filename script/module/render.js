import createElements from './createElements.js';

const {
  containerStyle,
  titleToDo,
  formToDo,
  tableWrapper,
  createRows,
  // createModal,
} = createElements;

const renderTodo = (app, arr) => {
  containerStyle(app);
  // const {
  //   formModal,
  //   bntSubmit,
  //   inputModal,
  // } = createModal();

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
    // formModal,
    // bntSubmit,
    // inputModal,
  };
};

export default {
  renderTodo,
};
