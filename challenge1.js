/* This is a function that first selects letters of a string
with relation to the length of the string in order to analyse all
the letters. 
The function then checks if a letter is either uppercase or lowercase 
and swaps it to its opposite i.e, if uppercase to lowercase and vice versa*/
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
