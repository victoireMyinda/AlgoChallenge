var replacements = {
    "ab": "c",
    "ac": "b",
    "bc": "a",
    "ba": "c",
    "ca": "b",
    "cb": "a"
};

function StringReduction(s) {
    var original, key;
    while (s != original) {
        original = s;
        for (key in replacements)
            s = s.replace(key, replacements[key]);
    }
    console.log(s.length);
}

console.log(StringReduction('cccc'))