const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', newPassword);

async function newPassword() {
    let fields = [];

    if(char.checked) {
        fields.push('char=true')
    }

    if(num.checked) {
        fields.push('num=true')
    }

    if(caps.checked) {
        fields.push('caps=true')
    }

    if(len.value !== '') {
        fields.push(`len=${len.value}`)
    }

    let fieldsToString = fields.join('&');
    let params = new URLSearchParams(fieldsToString);

    try {
        let newPwd = await fetch(`https://passwordinator.herokuapp.com/generate?${params.toString()}`);
        let res = await newPwd.json();
        result.innerHTML = `
        <p class="pwd">${res.data}</p>`;
        
    } catch (error) {
        result.innerHTML = `<p>Error in the request, please try again later 🙁</p>`;
        console.log(error);
    }
};