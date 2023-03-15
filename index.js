
// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

// const destructivelyAppendCat = cat.push('Ralph')//
 function destructivelyAppendCat(name){cats.push(name)//cats.unshift('Ralph')
}
//const destructivelyPrependCat =cat.unpush('Bob')
function destructivelyPrependCat(name){cats.unshift(name)
}
function destructivelyRemoveFirstCat(name){cats.shift(name)
}
function destructivelyRemoveLastCat(name){cats.pop(name)
}
function appendCat(name){return[...cats, name];}
function prependCat(name){return[name,...cats];}
//apendCat('Broom')
function removeLastCat() {return cats.slice(0,-1);}
function removeFirstCat() {return cats.slice(1,cats.length)}

