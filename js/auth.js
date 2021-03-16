//sign up
const signup =document.querySelector('#sign');
signup.addEventListener('submit',(e)=>{
    e.preventDefault();


    //get user info
    const email=signup['fname'].value;
    const password=signup['vmail'].value;
    console.log(email,password)

})