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

    const afterTen = {
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const tens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const numberToString = String(number);

    function getUnits(key) {
        return units[key];
    }

    function makeTens(ten) {
        const first = ten[0];

        if (first === "1") {
            getAfterTen(ten);
        } else {
            getTens(first);
        }
    }

    function getTens(key) {
        return tens[key];
    }

    function getAfterTen(key) {
        return afterTen[key];
    }

    function addUnit(x) {
        const last = x[x.length - 1];

        if (x[0] === "1") {
            return "";
        } else {
            return getUnits(last);
        }
    }

    switch (numberToString.length) {
        case 1:
            return getUnits(numberToString);

        case 2:
            return `${makeTens(numberToString)}${addUnit(numberToString)}`;
    }
};
