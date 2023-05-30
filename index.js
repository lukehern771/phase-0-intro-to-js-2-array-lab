// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    let cats2 = [...cats, name];
    return cats2
}

function prependCat(name){
    let cats2 = [name, ...cats];
    return cats2 
}

function removeLastCat(){
    let cats3 = cats.slice(0,-1);
    return cats3
}

function removeFirstCat(){
    let cats3 = cats.slice(1);
    return cats3
}