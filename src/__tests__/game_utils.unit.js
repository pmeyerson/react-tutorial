import React, { render } from 'react';
import { assert } from 'chai';
import {
    convertSquareNumberToGridPosition,
    calculateWinner,
    calculateSquarePlayed
} from '../game_utils';


// this sets up test adapter

//const adapter = new EnzymeAdapterReact16();
//Enzyme.configure({ adapter });

describe('Game Utils - calculateSquarePlayed()', () => {
    it('calculate square played correctly', () => {
        const current_state = [null, null, 'X']
        const old_state = [null, null, null]
        const expected = 2

        assert.equal(calculateSquarePlayed(current_state, old_state), expected)
    });

    it('calculate square played is null with no history', () => {
        const current_state = [ null, null, null]
        const old_state = [null, null, null]
        const expected = null

        assert.equal(calculateSquarePlayed(current_state, old_state), expected)
    });
});

describe('Game Utils - calculateWinner()', () => {
    it('game not over returns null', () => {
        const state = Array(9).fill(null);
        const expected = null

        assert.equal(calculateWinner(state), expected)
    });

    it('game winner reported correctly as x', () => {
        const state = Array(9).fill('X');
        const expected = 'X'

        assert.equal(calculateWinner(state), expected)
    });

    it('game winner reported correctly as O', () => {
        const state = Array(9).fill('O');
        const expected = 'O'

        assert.equal(calculateWinner(state), expected)
    });    
});

describe('Game Utils - convertSquareNumberToGridPosition()', () => {
    it('null input null output', () => {
        const state = null;
        const expected = null;

        assert.equal(convertSquareNumberToGridPosition(state), expected)
    });

    it('position 2 input output OK', () => {
        const state = 2;
        const expected = '(2, 0)';
 
        assert.equal(convertSquareNumberToGridPosition(state), expected)
    });

    it('position 4 input output OK', () => {
        const state = 4;
        const expected = '(1, 1)';
 
        assert.equal(convertSquareNumberToGridPosition(state), expected)
    });

    it('position 1 input output OK', () => {
        const state = 1;
        const expected = '(1, 0)';
 
        assert.equal(convertSquareNumberToGridPosition(state), expected)
    });
})

