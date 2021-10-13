let select= document.getElementById('font');
let paragraph = document.getElementById('paragraph');
let parg = document.getElementById('parg');

select.addEventListener('change', function(){
    let choice = select.value;
    if (choice == 'Arial') {
        paragraph.style.fontFamily = 'Arial';
    } else if (choice == 'Times New Roman') {
    paragraph.style.fontFamily = 'Times New Roman';
    } else if (choice == 'Courier New') {
        paragraph.style.fontFamily = 'Courier New';
    }

});

let size = document.getElementById('font-size');
size.addEventListener('change', function(){
    let choice = size.value;
    if (choice == 'small') {
        paragraph.style.fontSize = '12px';
    } else if (choice == 'medium') {
    paragraph.style.fontSize = '16px';
    } else if (choice == 'large') {
         paragraph.style.fontSize = '24px';
    }else if (choice == 'x-large') {
        paragraph.style.fontSize = '32px';
    }
});


