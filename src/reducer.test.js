import reducer from './reducer';

import { addCategory } from './actions';

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

    context('when category already exists on todos', () => {
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
});
