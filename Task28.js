var swap = function(letters){
    var newWord = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newWord += letters[i].toUpperCase();
        }else {
            newWord += letters[i].toLowerCase();
        }
    }
    console.log(newWord);
    return newWord;
}

var text = 'The Scalar Is So AppReciaTabLe';

var swappedText = swap(text);
