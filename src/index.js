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
        const last = ten[ten.length - 1];

        return first === "1" && last !== "0"
            ? getAfterTen(ten)
            : getTens(first);
    }

    function getTens(key) {
        return tens[key];
    }

    function getAfterTen(key) {
        return afterTen[key];
    }

    function addUnit(x) {
        const first = x[0];
        const last = x[x.length - 1];

        return first > 1 && last !== "0" ? `${getUnits(last)}` : "";
    }

    function makeHundreds(hundred) {
        const first = hundred[0];
        return `${units[first]} hundred`;
    }

    function addTens(hundred) {
        const ten = hundred[1];
        const last = hundred.slice(1);
        return last === "00" ? "" : addNumber(last);
    }

    function addNumber(x) {
        return x < 10 ? getUnits(x[1]) : makeTens(x);
    }

    switch (numberToString.length) {
        case 1:
            return getUnits(numberToString);
            break;

        case 2:
            return `${makeTens(numberToString)} ${addUnit(
                numberToString
            )}`.trim();
            break;

        case 3:
            return `${makeHundreds(numberToString)} ${addTens(
                numberToString
            )} ${addUnit(numberToString.slice(1))}`.trim();
            break;
    }
};
