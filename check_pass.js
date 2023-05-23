const pass1 = document.getElementById("showpass");
const pass2 = document.getElementById("pass2");

pass2.addEventListener('input', ()=>{
    if(!pass1.value.startsWith(pass2.value)){
        pass2.classList.add('not-match');
    }else{
        pass2.classList.remove('not-match');
    }
});