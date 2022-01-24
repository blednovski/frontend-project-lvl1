#!/usr/bin/env node
import { gameRule, logic } from '../src/games/progression-logic.js';
import newGame from '../src/index.js';

newGame(gameRule, logic);
