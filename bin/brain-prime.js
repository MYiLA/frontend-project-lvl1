#!/usr/bin/env node
import askName from '../src/cli.js';
import playPrime from '../src/games/play-prime.js';

askName(playPrime);
