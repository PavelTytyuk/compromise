'use strict';
const uncountables = require('../../../lexicon/data').uncountables;

//certain words can't be plural, like 'peace'
const hasPlural = function(str) {
  for (let i = 0; i < uncountables.length; i++) {
    if (str === uncountables[i]) {
      return false;
    }
  }
  return true;
};

module.exports = hasPlural;