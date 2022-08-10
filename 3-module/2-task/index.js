function filterRange(arr, a, b) {
  // ваш код...
    let result = [];
    for (let n of arr) {
      if (n >= a && n <= b) result.push(n);
    }
    return result;}

