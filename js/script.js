const txtElements = ['Mobile Developer...', 'FrontEnd Developer...', 'BackEnd Developer...'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
    if(count == txtElements.length){
        count = 0;
    }
    currentTxt = txtElements[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector ('.typing').textContent = words;

    if (words.length === currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);
})();


function updateAge(){
    const birthDate = new Date('2006-09-25');
    
    const currentDate = new Date();

    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if(
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ){
        document.getElementById('age').textContent = age - 1;
    } else {
        document.getElementById('age').textContent = age;
    }
}

setInterval(updateAge, 1000);


const currentYearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();

currentYearElement.textContent = currentYear;