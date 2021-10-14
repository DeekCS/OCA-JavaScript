const getDiv = document.querySelectorAll('#colors');
const result = document.querySelector('#selected');


console.log(getDiv);

for (let i = 0; i < getDiv.length; i++) {
    getDiv[i].addEventListener('click', function () {
        result.innerHTML = getDiv[i].style.backgroundColor;
        result.style.backgroundColor = getDiv[i].style.backgroundColor;
    })
}

// console.log(getDiv[i])




