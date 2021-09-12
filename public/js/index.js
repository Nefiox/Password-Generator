const len = document.querySelector('#len');
const number = document.querySelector('#number');
const char = document.querySelector('#char');
const caps = document.querySelector('#caps');
const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', newPassword);
// ?${params.toString()}
async function newPassword() {
// console.log(len.value);
// console.log(char.checked);
let stringss = []
if(char.checked) {
    stringss.push('char true')
}
if(num.checked) {
    stringss.push('num: true')
}
// console.log(stringss);
let params2 = (stringss).join();
let params = new URLSearchParams({params2});

console.log(`xdddddddd ${params2}`);

    let newPwd = await fetch(`https://passwordinator.herokuapp.com/generate?${params}`);
    let res = await newPwd.json();

    // console.log(`the baseeeee is ${newPwd}`);
    console.log(res);

    result.innerHTML = `<p>The new password is: ${res.data}</p>`
}