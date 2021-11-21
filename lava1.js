let cc = word.length;
for (let i = 1; i <= cc; i++) {
    word[i - 1] = word[cc - 1];
}
console.log(word);