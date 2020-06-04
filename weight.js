const randoitCore = require('./core');

/* 
    [
        {from: 1, to: 5, weight: 1} , 
        {from: 6, to: 10, weight: 2}
    ]
    OR
    [
        {from: 'A', to: 'H', weight: 2} ,  >>> 1,2
        {from: 'I', to: 'S', weight: 4},   >>> 3,4,5,6
        {from: 'T', to: 'Z', weight: 3}    >>> 7,8,9
    ]
    AND ...
*/
const byWeight = (randomFuction, segment = []) => {
    let weightArray = [...segment];
    let sum = 0;
    for (let i = 0; i < segment.length; i++) {
        sum += segment[i].weight;
        weightArray[i].accumulated = sum;
    }
    let pickup = randoitCore.numberRange(1, sum);
    let item = weightArray.find(
        (s) => pickup >= s.accumulated - s.weight + 1 && pickup <= s.accumulated
    );
    return randomFuction(item.from, item.to);
};

module.exports = {
    byWeight: byWeight,
};
