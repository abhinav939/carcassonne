"use strict";
// D = double points (shield)
// J = cities are joined. Assumption is that roads are always joined
Object.defineProperty(exports, "__esModule", { value: true });
var TILESET = {
    'ccccJ': 1,
    'cccfJ': 3,
    'cccfDJ': 1,
    'cccrJ': 1,
    'cccrDJ': 2,
    'ccffJ': 3,
    'ccffDJ': 2,
    'ccff': 2,
    'ccrrJ': 3,
    'ccrrDJ': 2,
    'cfcfJ': 1,
    'cfcfDJ': 2,
    'cfcf': 3,
    'cfff': 5,
    'cfrr': 3,
    'crfr': 4,
    'crrf': 3,
    'crrr': 3,
    'ffff': 4,
    'fffr': 2,
    'ffrr': 9,
    'frfr': 8,
    'frrr': 4,
    'rrrr': 1
};
exports.default = TILESET;
