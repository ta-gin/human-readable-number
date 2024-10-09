module.exports = function toReadable(number) {
    const units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const numberToString = String(number);

    function getUnits(key) {
        return units[key];
    }

    switch (numberToString.length) {
        case 1:
            return getUnits(numberToString);
    }
};
