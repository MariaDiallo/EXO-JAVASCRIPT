function combinations(str) {
    for(let i=0; i<str.length; i++) {
        for(let j= 1; j < str.length; j++) {
            if(i!=j && j >= i) {
                return(str.substr(i, j))
            }
        }
    }
}
console.log(combinations(dog))