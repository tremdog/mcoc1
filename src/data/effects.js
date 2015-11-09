import List from '../util/List';
import Effect from '../model/Effect';

const effects = new List([

    { uid: 'attack', base:5 },
    { uid: 'stun', base:15 },
    { uid: 'critrate', base:5 },
    { uid: 'critdamage', base:15 },
    { uid: 'powergain', base:3 },
    { uid: 'powersteal', base:3 },
    { uid: 'perfectblock', base:3 },
    { uid: 'block', base:10 },
    { uid: 'armor', base:4 },
    { uid: 'health', base:4 },
    { uid: 'healthsteal', base:4 },

], Effect);

export default effects;
