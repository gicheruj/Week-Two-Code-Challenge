function swapLetters(string) {
    let l = 0;
    while (l < string.length) {
        if (string[l] === string[l].toUpperCase() && string[l] !== string[l].toLowerCase()) {
            string = `${string.substring(0,l)}${string[l].toLowerCase()}${string.substring(l + 1)}`;
        }else if(string[l] === string[l].toLowerCase() && string[l] !== string[l].toUpperCase){
            string = `${string.substring(0,l)}${string[l].toUpperCase()}${string.substring(1+l)}`;
        }
        l++;
    }
    console.log(string);
}
