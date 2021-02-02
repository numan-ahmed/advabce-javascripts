let bonus = 30;

function sum(first, second){
    let result = first + second + bonus;
    console.log(result);
    if(result > 10){
        const mode = 'happy';
        console.log(mode);
    }
    return result;

}

const output =  sum(4,6);
console.log(bonus);
console.log(output);