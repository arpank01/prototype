

let maindiv=document.querySelector(".maindiv")
let btn=document.querySelector(".btn")


function addsubject(){
    let i =1;
    let newdiv=document.createElement('div')
    
   let head=document.createElement('div')
    head.classList.add("titlee")
    let str=prompt("Please enter the name of the topic:");
    //if subjectname is empty 
    if(str==""||str===null){}else{
        head.innerText=str
head.addEventListener('mouseenter',function(){head.innerText="Delete Topic? Click To delete ";})
head.addEventListener('mouseleave',function(){head.innerText=str})
head.addEventListener('click',function (){head.classList.add("removed"); setTimeout(() => { maindiv.removeChild(newdiv);
        
    }, 500);})
   newdiv.appendChild(head);
   newdiv.appendChild(document.createElement('div'))

function addchild(){
    let newchild=document.createElement('button')
    newchild.classList.add("btn1")
   newchild.innerText=`${i}`
   newchild.addEventListener('click',function (){newchild.classList.toggle("btn2")})
    newdiv.appendChild(newchild)
    i++
}
but=document.createElement('button')
but.innerText="Quantity"
but.classList.add("buttonscopy")
newdiv.appendChild(but)
but.addEventListener('click',function (){let str=prompt("Number of questions in the topic : ");if(str=="" || str===null){}else{newdiv.removeChild(but);for(let j=0;j<str;j++){addchild()}}})

    maindiv.appendChild(newdiv)
}
}
