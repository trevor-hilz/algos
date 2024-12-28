var mergeAlternately = function(word1, word2) {
    let merged = '';

    for(let i = 0; i < word1.length; i++) {
        merged = merged.concat(word1[i]).concat(word2[i]);
        // merged = merged.concat(word2[i]);
    }
    return merged
};

console.log(mergeAlternately('abc', 'pqr'));