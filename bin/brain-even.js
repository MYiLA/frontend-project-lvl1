#!/usr/bin/env node
import askName from '../src/cli.js';
import playEvenParity from '../src/games/play-even-parity.js';

askName(playEvenParity);
