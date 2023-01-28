export function vowels(str='') {
    const vowelsLetters = ['a', 'e', 'i', 'o', 'u'];

    let vowelsCounter = 0;

    for (let letter of str){
        if(vowelsLetters.includes(letter)){
            vowelsCounter++;
        }
    }
    return vowelsCounter;
}