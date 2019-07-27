function count_vowels(a){
    let x = a.match(/[aiueo]/gi)
    let y
    if(x===null){
        y = 0
    }
    else {
        y = x.length
    }
    
    console.log(y);
}
count_vowels("programmer");