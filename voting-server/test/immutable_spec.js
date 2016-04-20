import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('immutability', () => {
  describe('A number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

  describe('A list', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      const state = List.of('Trainspotting', '28 Days Later');
      const nextState = addMovie(state, 'Shunshine');

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Shunshine'
      ));

      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later'
      ));
    });
  });

  describe('A tree', () => {
    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      const state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      const nextState = addMovie(state, 'Shunshine');

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Shunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });
  });
});
