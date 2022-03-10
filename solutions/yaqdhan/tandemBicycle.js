function tandemBicycle(redSpeeds, blueSpeeds, fastest) {
    const sortedRed = redSpeeds.sort((a, b) => fastest ? a - b : b - a);
    const sortedBlue = blueSpeeds.sort((a, b) => a - b);
    const combined = sortedRed.map((x, i) => [x, sortedBlue.at(-1 - i)]);
    const result = combined.reduce((p, c) => p + Math.max(...c), 0);

    return result;
}

// dont change the code below
exports.tandemBicycle = tandemBicycle;
