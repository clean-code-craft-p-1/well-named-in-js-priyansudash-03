const { ColorPair, MajorColorNames, MinorColorNames } = require('./colorPair');

function getColorFromPairNumber(pairNumber) {
    if (pairNumber < 1 || pairNumber > 25) {
        throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
    }
    let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt(zeroBasedPairNumber / MinorColorNames.length);
    let minorIndex = parseInt(zeroBasedPairNumber % MinorColorNames.length);
    let pair = new ColorPair();
    pair.majorColor = MajorColorNames[majorIndex];
    pair.minorColor = MinorColorNames[minorIndex];
    return pair;
}

module.exports = getColorFromPairNumber;