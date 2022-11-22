const initialState = {
  selectedCategory: null,
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

  selectCategory(state, action) {
    const { todos } = state;

    return {
      ...state,
      selectedCategory,
    };
  },

  updateCategory(state, action) {},

  deleteCategory(state, action) {},

  addTodo(state) {
    const { todoFields, todos } = state;

    if (!todoFields.text) {
      // todo 입력란이 공백일 경우
      return state;
    }

    if (
      // todo 입력값이 이미 todos 안에 존재하는 경우
      Object.values(todos)
        .map((category) =>
          category.some((todo) => todo.text === todoFields.text)
        )
        .indexOf(true) !== -1
    ) {
      return state;
    }

    if (todoFields.category in todos) {
      return {
        ...state,
        todoFields: {
          done: false,
          text: '',
          category: '',
        },
        todos: {
          ...todos,
          [todoFields.category]: [
            ...state.todos[todoFields.category],
            { done: todoFields.done, text: todoFields.text },
          ],
        },
      };
    }

    return {
      ...state,
      todoFields: {
        done: false,
        text: '',
        category: '',
      },
      todos: {
        ...todos,
        [todoFields.category]: [
          { done: todoFields.done, text: todoFields.text },
        ],
      },
    };
  },

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
