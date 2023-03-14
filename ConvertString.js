function Convert(str) {
    let str_tab = str.split(' ');
    let array = [];
    for(let x = 0; x < str_tab.length; x++){
        array.push( str_tab[x][0].toUpperCase() + str_tab[x].slice(1) ); 
    }
    return array.join(' ');
}
console.log(Convert("salut les gens")) 