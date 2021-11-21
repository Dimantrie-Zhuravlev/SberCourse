let ar = [],
    arl = '';
for (let i = 0, j = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') { j++; continue; } else { arl[i] += sentence[i]; }
    ar[j] += arl;
}
console.log(ar);