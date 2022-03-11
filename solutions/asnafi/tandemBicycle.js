function tandemBicycle(redSpeeds, blueSpeeds, isFastest) {
  return isFastest ? redSpeeds.sort((a, b) => a - b).reduce((total, num, i) => total + Math.max(num, blueSpeeds.sort((a, b) => b - a)[i]), 0) : redSpeeds.sort((a, b) => a - b).reduce((total, num, i) => total + Math.max(num, blueSpeeds.sort((a, b) => a - b)[i]), 0)
}

// dont change the code below
exports.tandemBicycle = tandemBicycle;