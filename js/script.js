//When the page loads, the text input type is in focus
const username = document.getElementById('name');
username.focus()
/*
    Job role Section
    
    When the "Other" option is selected/deselected from "Job Role" menu,
    the "Other job role" field is visible/hidden on the page.
*/
const otherJobRole = document.querySelector('#other-job-role');
otherJobRole.style.display = 'none';

title.addEventListener('change', (e) => {
    if (e.target.value === 'other'){
        otherJobRole.style.display = 'initial';
    } else {
        otherJobRole.style.display = 'none';
    }
});

/*
    T-Shirt Info Section
    When a theme is selected, the "Color" field is enabled
    and it’s value is updated along with the options in the "Color" 
    drop-down menu.
*/
const designSelectElement = document.getElementById('design');
const colorSelectElement = document.getElementById('color');
const colorOptions = colorSelectElement.children;
colorSelectElement.disabled = true;

designSelectElement.addEventListener('change', (e) =>{
    colorSelectElement.disabled = false;

        for (let i = 0; i < colorOptions.length; i++){
            const value = e.target.value;
            const theme = colorOptions[i].getAttribute('data-theme'); 

            if (value === theme){
                colorOptions[i].hidden = false;
                colorOptions[i].selected = true;
            } else {
                colorOptions[i].hidden = true;
                colorOptions[i].selected = false;
            }
        }
});