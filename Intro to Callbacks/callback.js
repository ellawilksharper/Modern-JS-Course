// setTimeout(callback, delay)
setTimeout(function () { 
  alert("WELCOME!");
}, 5000);

//function runs when button is clicked
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  alert("WHY DID YOU CLICK ME!!??")
})
