const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      column_id: "column-1",
      title: "Hello There",
      description: "Take Out the garbage 1",
      labels: ["default", "processing", "warning", "success"],
      due_date: "2020-01-01",
      assignees: ["mark"],
      attachments: [],
      comments: [],
      todos: [],
      editing: false,
      created_at: "2019-01-01",
      updated_at: "",
    },
    "task-2": {
      id: "task-2",
      column_id: "column-1",
      title: "Hello World",
      description: "Let Fix The Task manager using Redux 2",
      labels: ["warning", "error"],
      due_date: "2019-01-01",
      assignees: [],
      attachments: [],
      comments: [],
      todos: [],
      editing: false,
      created_at: "2019-01-01",
      updated_at: "",
    },
    "task-3": {
      id: "task-3",
      column_id: "column-1",
      title: "There",
      description: "Need Some Study Time To Solve The Problem 3",
      labels: ["processing", "warning", "success"],
      due_date: "2019-01-01",
      assignees: ["neamat", "mim"],
      attachments: [],
      comments: [],
      todos: [],
      editing: false,
      created_at: "2019-01-01",
      updated_at: "",
    },
    "task-4": {
      id: "task-4",
      column_id: "column-1",
      title: "Nothing to do",
      description: "Let Learn Formik 4",
      labels: ["warning", "success"],
      due_date: "2019-01-01",
      assignees: [],
      attachments: [],
      comments: [],
      todos: [],
      editing: false,
      created_at: "2019-01-01",
      updated_at: "",
    },
    "task-5": {
      id: "task-5",
      column_id: "column-3",
      title: "Lets Fixed",
      description: "Come on ... 5",
      labels: ["success", "warning"],
      due_date: "2020-01-01",
      assignees: ["bob"],
      attachments: [],
      comments: [],
      todos: [],
      editing: false,
      created_at: "2019-01-01",
      updated_at: "",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      board_id: "board-1",
      task_orders: ["task-1", "task-2", "task-3", "task-4"],
      title: "To Do",
      editing: false,
    },
    "column-2": {
      id: "column-2",
      board_id: "board-2",
      task_orders: [],
      title: "In Progress",
      editing: false,
    },
    "column-3": {
      id: "column-3",
      board_id: "board-1",
      task_orders: ["task-5"],
      title: "Done",
      editing: false,
    },
  },
  boards: {
    "board-1": {
      id: "board-1",
      column_orders: ["column-1", "column-3"],
      title: "Isomorphic",
      category: "Software",
      progress: 50,
      thumb: "",
      open_to_members: false,
      open_to_company: false,
      estimated_time: "",
      editing: false,
      created_at: "2019-01-10",
      updated_at: "",
    },
    "board-2": {
      id: "board-2",
      column_orders: ["column-2"],
      title: "Headless",
      category: "OPs",
      progress: 70,
      thumb: "",
      open_to_members: true,
      open_to_company: true,
      estimated_time: "",
      editing: false,
      created_at: "2019-02-01",
      updated_at: "",
    },
    "board-3": {
      id: "board-3",
      column_orders: [],
      title: "React Next Landing",
      category: "Service Desk",
      progress: 30,
      thumb: "",
      open_to_members: false,
      open_to_company: true,
      estimated_time: "",
      editing: false,
      created_at: "2020-12-03",
      updated_at: "",
    },
  },
  labels: {
    "label-1": {
      id: "label-1",
      title: "default",
      color: "red",
      created_at: "",
      updated_at: "",
      editing: false,
    },
    "label-2": {
      id: "label-2",
      title: "processing",
      color: "red",
      created_at: "",
      updated_at: "",
      editing: false,
    },
    "label-3": {
      id: "label-3",
      title: "warning",
      color: "red",
      created_at: "",
      updated_at: "",
      editing: false,
    },
    "label-4": {
      id: "label-4",
      title: "success",
      color: "red",
      created_at: "",
      updated_at: "",
      editing: false,
    },
    "label-5": {
      id: "label-5",
      title: "error",
      color: "red",
      created_at: "",
      updated_at: "",
      editing: false,
    },
  },
};

export default initialData;
