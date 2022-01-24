#!/usr/bin/env node
import { gameRule, logic } from '../src/games/even-logic.js';
import newGame from '../src/index.js';

newGame(gameRule, logic);
