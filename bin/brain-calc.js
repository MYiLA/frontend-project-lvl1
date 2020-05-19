#!/usr/bin/env node
import askName from '../src/cli.js';
import playCalc from '../src/games/play-brain-calc.js';

askName(playCalc);
