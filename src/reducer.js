const initialState = {
  selectCategory: null,
  todoFields: {
    done: false,
    text: '',
    category: '',
  },
  category: '',
  todos: {
    '': [],
  },
};

const reducers = {
  addCategory(state) {
    const { category, todos } = state;

    if (!category) {
      // category 입력란이 공백일 경우
      return state; // 변화는 일어나지 않는다.
    }

    if (category in todos) {
      // category 입력값이 이미 존재하는 경우
      return state; // 변화는 일어나지 않는다.
    }

    return {
      ...state,
      category: '',
      todos: {
        ...todos,
        [category]: [],
      },
    };
  },

  selectCategory(state, action) {},

  updateCategory(state, action) {},

  deleteCategory(state, action) {},

  addTodo(state, action) {},

  toggleTodo(state, action) {},

  updateTodo(state, action) {},

  deleteTodo(state, action) {},
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
