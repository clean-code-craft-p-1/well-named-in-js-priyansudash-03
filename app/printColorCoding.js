const { MajorColorNames, MinorColorNames } = require('./colorPair');

function printColorCoding() {
    let colorCoding = '';
    for (let i = 0; i < MajorColorNames.length; i++) {
        for (let j = 0; j < MinorColorNames.length; j++) {
            let pairNumber = (i * MinorColorNames.length) + (j + 1);
            colorCoding += `Pair Number: ${pairNumber}, Major Color: ${MajorColorNames[i]}, Minor Color: ${MinorColorNames[j]}\n`;
        }
    }
    return colorCoding;
}

module.exports = printColorCoding;