"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTiles = void 0;
// D = double points (shield)
// J = cities are joined. Assumption is that roads are always joined
var BaseTiles = [
    {
        tile: {
            description: 'cccc',
            joined: true
        },
        count: 1
    },
    {
        tile: {
            description: 'cccf',
            joined: true
        },
        count: 3
    },
    {
        tile: {
            description: 'cccfDJ'
        },
        count: 1
    },
    {
        tile: {
            description: 'cccr',
            joined: true
        },
        count: 1
    },
    {
        tile: {
            description: 'cccr',
            joined: true,
            shields: 1
        },
        count: 2
    },
    {
        tile: {
            description: 'ccff',
            joined: true
        },
        count: 3
    },
    {
        tile: {
            description: 'ccff',
            joined: true,
            shields: 1
        },
        count: 2
    },
    {
        tile: {
            description: 'ccff'
        },
        count: 2
    },
    {
        tile: {
            description: 'ccrr',
            joined: true
        },
        count: 3
    },
    {
        tile: {
            description: 'ccrr',
            joined: true,
            shields: 1
        }, count: 2
    },
    {
        tile: {
            description: 'cfcf',
            joined: true
        }, count: 1
    },
    {
        tile: {
            description: 'cfcf',
            joined: true,
            shields: 1
        },
        count: 2
    },
    {
        tile: {
            description: 'cfcf'
        },
        count: 3
    },
    {
        tile: {
            description: 'cfff'
        },
        count: 5
    },
    {
        tile: {
            description: 'cfrr'
        },
        count: 3
    },
    {
        tile: {
            description: 'crfr'
        },
        count: 4
    },
    {
        tile: {
            description: 'crrf'
        },
        count: 3
    },
    {
        tile: {
            description: 'crrr'
        },
        count: 3
    },
    {
        tile: {
            description: 'ffff'
        },
        count: 4
    },
    {
        tile: {
            description: 'fffr'
        },
        count: 2
    },
    {
        tile: {
            description: 'ffrr'
        },
        count: 9
    },
    {
        tile: {
            description: 'frfr'
        },
        count: 8
    },
    {
        tile: {
            description: 'frrr'
        },
        count: 4
    },
    {
        tile: {
            description: 'rrrr'
        },
        count: 1
    }
];
exports.BaseTiles = BaseTiles;
