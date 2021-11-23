const solution = (numbers) =>
    numbers.map((number) => {
        const binaryNumber = number.toString(2);
        const zeroIndex = binaryNumber
            .padStart(binaryNumber.length + 1, 0)
            .lastIndexOf(0);
        return zeroIndex === binaryNumber.length
            ? number + 1
            : number + 2 ** (binaryNumber.length - zeroIndex - 1);
    });
