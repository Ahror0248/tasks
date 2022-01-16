INN = document.getElementById("password");
check = document.getElementById("indikator");
pr = document.getElementById("progress");

function handleChange() {

    if (INN.value.length === 0) {
        check.innerHTML = '';
        pr.style.width = "0%";
        pr.setAttribute('class', 'progress-bar bg-danger')

    } else if(INN.value.length === 1){
        check.innerHTML = "Too weak"
        pr.style.width = "9%";
        pr.setAttribute('class', 'progress-bar bg-danger')
    } 
    else if(INN.value.length === 2){
        check.innerHTML = "Too weak"
        pr.style.width = "17%";
        pr.setAttribute('class', 'progress-bar bg-danger')
    } 
    else if(INN.value.length === 3){
        check.innerHTML = "Too weak"
        pr.style.width = "26%";
        pr.setAttribute('class', 'progress-bar bg-danger')
    } 
    else if(INN.value.length === 4){
        check.innerHTML = "Too weak"
        pr.style.width = "34%";
        pr.setAttribute('class', 'progress-bar bg-danger')
    } 
    else if(INN.value.length === 5){
        check.innerHTML = "Not bad"
        pr.style.width = "40%";
        pr.setAttribute('class', 'progress-bar bg-warning')
    } 
    else if(INN.value.length === 6){
        check.innerHTML = "Not bad"
        pr.style.width = "47%";
        pr.setAttribute('class', 'progress-bar bg-warning')
    } 
    else if(INN.value.length === 7){
        check.innerHTML = "Not bad"
        pr.style.width = "54%";
        pr.setAttribute('class', 'progress-bar bg-warning')
    } 
    else if(INN.value.length === 8){
        check.innerHTML = "Not bad"
        pr.style.width = "65%";
        pr.setAttribute('class', 'progress-bar bg-warning')
    } 
    else if(INN.value.length === 9){
        check.innerHTML = "Strong!"
        pr.style.width = "74%";
        pr.setAttribute('class', 'progress-bar bg-success')
    } 
    else if(INN.value.length === 10){
        check.innerHTML = "Strong!"
        pr.style.width = "83%";
        pr.setAttribute('class', 'progress-bar bg-success')
    } 
    else if(INN.value.length === 11){
        check.innerHTML = "Strong!"
        pr.style.width = "92%";
        pr.setAttribute('class', 'progress-bar bg-success')
    } 
    else if(INN.value.length === 12){
        check.innerHTML = "Strong!"
        pr.style.width = "100%";
        pr.setAttribute('class', 'progress-bar bg-success')
    } 

}

function handleClick() {
    if (INN.getAttribute('type') === 'text') {
        INN.setAttribute('type', 'password');
    } else {
        INN.setAttribute('type', 'text');
    }
}