function reverseanumber(nbrs) {
    let reverse_array = [];
    let nbrs_str = nbrs + '';
    for(let i = nbrs_str.length; i >= 0; i--){
        reverse_array.push(nbrs_str[i]);
    }
    return reverse_array.join('');
    }
console.log(reverseanumber(3254))