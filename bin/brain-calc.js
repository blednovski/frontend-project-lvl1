#!/usr/bin/env node
import { gameRule, logic } from '../src/games/calc-logic.js';
import newGame from '../src/index.js';

newGame(gameRule, logic);
