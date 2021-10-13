let select= document.getElementById('font');
let paragraph = document.getElementById('paragraph');
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



