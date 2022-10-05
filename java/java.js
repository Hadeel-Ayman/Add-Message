
// get All elements
let inputMsg = document.getElementById('input_msg');
let btnMsg = document.getElementById('btn_msg');
let pMsg = document.getElementById('p_msg');

// Events 
btnMsg.addEventListener('click', function () {
    let inputValue = inputMsg.value;
    if (inputValue == "") {
        alert('please fill the msg')
    } else {
        pMsg.innerHTML = inputValue;
        inputMsg.value = "";
    }
})
