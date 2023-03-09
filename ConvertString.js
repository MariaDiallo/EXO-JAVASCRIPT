function Convert(str) {
    let words = str.split(' ');
    let array = [];
    words.forEach(word => {
        let firstletter = word.charAt(0).toUpperCase();
        let replacement = word.replace(word.charAt(0),  firstletter);
        array.push(replacement);
    });
    console.log(array.join(' '))
}
console.log(Convert("salut les gens")) 