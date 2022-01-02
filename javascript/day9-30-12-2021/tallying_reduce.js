const votes = ['y', 'y', 'n', 'y', 'y', 'y', 'n', 'y', 'y', 'y', 'n', 'n', 'n',
'y', 'y', 'y', 'y', 'y', 'y'];

const tally = votes.reduce((tally, vote) => {
    tally[vote] = (tally[vote] || 0) + 1;
    return tally;
}, {});

console.log(tally);