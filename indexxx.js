let divi = document.body.querySelector(".playground")
let subjectname = document.getElementById("inputbox")

//for each child task
function addchild() {
    
    let name;
    function addname(){
     name=prompt("Enter name of the subject ")
    if(name==="" || null){
     alert("Name shouldn't be empty")
        addname()
    }
    
   }
   addname()

   //timer db
   let t={
    second:0,
    minute:0,
    hours:0,
   }
 
let interval;
    //wrapper div
    let parentdiv = document.createElement("div")

    //timer
    let timer = document.createElement("button")
    timer.innerText="0:0:0"
    timer.classList.add("timer")

    //subject div
    let subject = document.createElement("div")



    subject.classList.add("childsss")

    //input
    subject.innerText=`${name}`



    //name change 
    subject.addEventListener("click",function(){let name=prompt("Rename The subject");if(name=="" || name===null){alert("Name must be present");}else{subject.innerText=name;}})



    //start timer
    let start = document.createElement("button")
    start.innerText = "▶️"
    start.classList.add("btn-child")
    start.addEventListener("click", function(){ticker(t)})

    //cut button
    let cut = document.createElement("button")
    cut.innerText = "❌"
    cut.classList.add("btn-child")
    cut.addEventListener("click", function () { parentdiv.classList.add("removed") ; setTimeout(() => { divi.removeChild(parentdiv) 
        
    }, 500);})
    //pause button



    let pause = document.createElement("button")
   
    pause.innerText = "⏸️"
    pause.classList.add("btn-child")
pause.addEventListener("click", pausing)

    //adding

    parentdiv.appendChild(subject)
    
    parentdiv.appendChild(timer)
    parentdiv.appendChild(cut)
    parentdiv.appendChild(start)



    //mount whole thing to the main list
    divi.appendChild(parentdiv)
    //
    function ticker(t) {
        parentdiv.removeChild(start);
        parentdiv.appendChild(pause);
        //timer 
        
        
        function tick() {


            if (t.second <= 59) {
                t.second++;
            } else {

                if (t.minute <= 59) {
                    t.minute++;
                    t.second= 0;
                } else {
                    t.hours++
                    t.second = 0
                    t.minute = 0;
                }
            }
           
            timer.innerText = `${t.hours}:${t.minute}:${t.second}`


        }
    
         interval = setInterval(tick, 1000)
    

    
    }
        function pausing() {
            parentdiv.removeChild(pause);
              parentdiv.appendChild(start);
            clearInterval(interval);
        }
}
//clock for current time

let clockk=document.querySelector(".clock")
function ticksc(){
    let now =new Date()
  clockk.innerText=`Current Time : ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}
let int=setInterval(ticksc,1000)
//remove effect 
