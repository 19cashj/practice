function getCount(str) {
    let vowelsCount = 0;
    const vowels = ["a","e","i","o","u"]
    for (i=0;i<str.length - 1;i++) {
      vowelsCount += str.split(vowels[i]).length - 1;
    }
    return vowelsCount;
}