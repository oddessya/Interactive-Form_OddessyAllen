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
