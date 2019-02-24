function isPalindrome(word){
    word=word.toLowerCase();
    let aux="";
    for(var e=0;e<word.length;e++){
        if(word[e]==" ")
            continue;
        aux+=word[e];  
    }
    for(var i=0,e=aux.length-1;i<aux.length;i++,e--){
        if(aux[i]!=aux[e])
            return false;
    }
    return true;
}
module.exports.isPalindrome=isPalindrome;