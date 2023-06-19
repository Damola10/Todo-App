

const Input = document.querySelector('input')
const Select = document.querySelector('select')
const Button = document.querySelector('button')
const container = document.querySelector('div')

let theText;
let theTime;
Input.addEventListener('click',()=>{
theText = e.target.value;
})


Select.addEventListener("change",(e)=> {
  theTime =  Number(e.target.value)
})

Button.addEventListener("click",()=> {
  // console.log(theText)
  container.innerHTML += `<p>${theText} ${theTime}</p>`
  setTimeout (()=>{
    alert("check to do")
  },1000 * theTime)
})

