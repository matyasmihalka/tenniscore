import { evaluateTennisScore } from './index';
import { describe, it, expect } from 'vitest';

describe('evaluateTennisScore', () => {
    it('1 should return { valid: true, isWin: true }', () => {
        expect(evaluateTennisScore("6:4")).toEqual({ valid: true, isWin: true });
    });

    it('2 should return { valid: true, isWin: false }', () => {
        expect(evaluateTennisScore("3:6, 2:6")).toEqual({ valid: true, isWin: false });
    });

    it('3 should return { valid: true, isWin: true }', () => {
        expect(evaluateTennisScore("7:5, 6:3, 4:6")).toEqual({ valid: true, isWin: true });
    });

    it('4 should return { valid: true, isWin: false }', () => {
        expect(evaluateTennisScore("7:5, 6:8, 4:6")).toEqual({ valid: false, isWin: false });
    });

    it('5 should return { valid: false, isWin: false }', () => {
        expect(evaluateTennisScore("invalid input")).toEqual({ valid: false, isWin: false });
    });
});
