const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const iconEye = document.getElementById("iconeye");

pass2.addEventListener('input', ()=>{
    if(!pass1.value.startsWith(pass2.value)){
        pass2.classList.add('not-match');
    }else{
        pass2.classList.remove('not-match');
    }
});

iconEye.addEventListener("click",()=>{
  passFunction(pass1,iconEye)  
  passFunction(pass2,iconEye)  
})