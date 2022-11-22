import reducer from './reducer';

import { addCategory, addTodo } from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      selectCategory: null,
      todoFields: {
        done: false,
        text: '',
        category: '',
      },
      category: '',
      todos: { '': [] },
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('addCategory', () => {
    context('without category', () => {
      it("state doesn't change", () => {
        const initialState = {
          category: '',
          todos: {
            '': [],
          },
        };

        const state = reducer(initialState, addCategory());

        expect(state.todos).toEqual(initialState.todos);
      });
    });

    context('when category already exists in todos', () => {
      it("state doesn't change", () => {
        const initialState = {
          category: 'work',
          todos: {
            '': [],
            work: [{ done: false, text: 'meeting' }],
          },
        };

        const state = reducer(initialState, addCategory());

        expect(state.todos).toEqual(initialState.todos);
      });
    });

    it('add category', () => {
      const initialState = {
        category: 'work',
        todos: {
          '': [],
        },
      };

      const state = reducer(initialState, addCategory());

      expect(state.category).toBe('');
      expect(state.todos).toEqual({
        '': [],
        work: [],
      });
    });
  });

  describe('addTodo', () => {
    context('when todo input value is empty', () => {
      it("state doesn't change", () => {
        const initialState = {
          todoFields: {
            done: false,
            text: '',
            category: '',
          },
          todos: {
            '': [],
          },
        };

        const state = reducer(initialState, addTodo());

        expect(state.todos).toEqual(initialState.todos);
      });
    });

    context('when todo input value already exists in todos', () => {
      it("state doesn't change", () => {
        const initialState = {
          todoFields: {
            done: false,
            text: 'meeting',
            category: 'work',
          },
          todos: {
            '': [],
            work: [
              {
                done: false,
                text: 'meeting',
              },
            ],
          },
        };

        const state = reducer(initialState, addTodo());

        expect(state.todoFields.text).toBe('meeting');
        expect(state.todoFields.category).toBe('work');
        expect(state.todos.work).toHaveLength(1);
      });
    });

    context("when category doesn't exists", () => {
      it('create category and add todo', () => {
        const initialState = {
          todoFields: {
            done: false,
            text: 'daily scrum',
            category: 'work',
          },
          todos: {
            '': [],
          },
        };

        const state = reducer(initialState, addTodo());

        expect(state.todoFields.text).toBe('');
        expect(state.todoFields.category).toBe('');
        expect(state.todos.work).toHaveLength(1);
        expect(state.todos.work[0].done).toBe(false);
        expect(state.todos.work[0].text).toBe('daily scrum');
      });
    });

    context('when category already exists', () => {
      it('add todo in category', () => {
        const initialState = {
          todoFields: {
            done: false,
            text: 'daily scrum',
            category: 'work',
          },
          todos: {
            '': [],
            work: [
              {
                done: false,
                text: 'meeting',
              },
            ],
          },
        };

        const state = reducer(initialState, addTodo());

        expect(state.todoFields.text).toBe('');
        expect(state.todoFields.category).toBe('');
        expect(state.todos.work).toHaveLength(2);
        expect(state.todos.work[1].done).toBe(false);
        expect(state.todos.work[1].text).toBe('daily scrum');
      });
    });
  });
});
