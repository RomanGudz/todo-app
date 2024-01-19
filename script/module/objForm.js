const obj = {
  id: 0,
  task: '',
  status: 'В процессе',
  styleTr: 'table-light',
  styleTask: 'task',
  randomID() {
    this.id = Math.random().toString().substring(2, 10);
  },
  addTask(value) {
    this.task = value;
  },
  addStyleTr(style) {
    this.styleTr = style;
  },
};

export default {
  obj,
};
