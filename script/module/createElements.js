const containerStyle = (app) => {
  app.classList.add('vh-100', 'w-100', 'd-flex',
    'align-items-center', 'justify-content-center', 'flex-column');
  return app;
};

const titleToDo = () => {
  const title = document.createElement('h3');
  title.textContent = 'Todo App';

  return title;
};
const createInput = params => {
  const {
    className,
    type,
    placeholder,
  } = params;
  const input = document.createElement('input');
  input.classList.add(className);
  input.setAttribute('type', type);
  input.setAttribute('placeholder', placeholder);
  return input;
};

const createBtn = params => {
  const {
    className,
    text,
    type,
  } = params;
  const btn = document.createElement('button');
  btn.classList.add(...className);
  btn.textContent = text;
  const attributes = {
    ...(type && { type }),
  };
  for (const [key, value] of Object.entries(attributes)) {
    btn.setAttribute(key, value);
  }
  return btn;
};

const dropDownList = (list) => {
  const dropdown = document.createElement('select');
  dropdown.classList.add('form-select', 'me-3', 'mb-0');
  list.forEach(item => {
    const option = document.createElement('option');
    option.textContent = item.text;
    option.value = item.style;
    dropdown.append(option);
  });
  return dropdown;
};

const formToDo = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');
  label.append(createInput({
    className: 'form-control',
    type: 'text',
    placeholder: 'ввести задачу',
  }));
  const saveBtn = createBtn({
    className: ['btn', 'btn-primary', 'me-3'],
    text: 'Сохранить',
    type: 'submit',
  });
  saveBtn.disabled = true;
  const clearBtn = createBtn({
    className: ['btn', 'btn-warning'],
    text: 'Очистить',
    type: 'reset',
  });
  const list = [{
    style: 'table-light',
    text: 'Обычная',
  }, {
    style: 'table-warning',
    text: 'Важная',
  }, {
    style: 'table-danger',
    text: 'Срочная',
  }];
  const dropdown = dropDownList(list);

  form.append(label, dropdown, saveBtn, clearBtn);
  return {
    form,
    saveBtn,
    clearBtn,
    dropdown,
  };
};

const createRow = (item, index) => {
  const row = document.createElement('tr');
  row.classList.add(item.styleTr);
  row.insertAdjacentHTML('beforeend', `
  <td data-id='${item.id}'>${index}</td>
            <td class="${item.styleTask}" contenteditable="true">
              ${item.task}
            </td>
            <td>${item.status}</td>
            <td>
              <button class="btn btn-danger">
                Удалить
              </button>
              <button class="btn btn-success">
                Завершить
              </button>
            </td>`);
  return row;
};

const createRows = (arr) => {
  const rows = arr.map((item, index) => createRow(item, (index + 1)));
  return rows;
};

const tableWrapper = () => {
  const divwrapper = document.createElement('div');
  divwrapper.classList.add('table-wrapper');
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');
  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `<tr>
            <th>№</th>
            <th>Задача</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>`);
  const tbody = document.createElement('tbody');
  table.append(thead, tbody);
  divwrapper.append(table);
  return {
    divwrapper,
    tbody,
  };
};

export default {
  containerStyle,
  titleToDo,
  formToDo,
  tableWrapper,
  createRows,
  createRow,
};
