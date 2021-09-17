function solution(str){
    let arr = str.split('');
    arr.reverse();
    let reversed = arr.join("");
    return reversed;
}

// One line version
(str) => str.split('').reverse().join("");