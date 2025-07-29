let divi = document.body.querySelector(".playground")
let subjectname = document.getElementById("inputbox")

//for each child task
function addchild() {
    let name;
    function addname(){
     name=prompt("Enter name of the subject ")
    if(name==""){
     alert("Name shouldn't be empty")
        addname()
    }
    
   }
   addname()

    let seconds=0;
let minutes=0;
let hours=0;
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
    subject.addEventListener("click",function(){let name=prompt("Rename The subject");if(name==""){alert("Name must be present")}else{subject.innerText=name;}})



    //start timer
    let start = document.createElement("button")
    start.innerText = "▶️"
    start.classList.add("btn-child")
    start.addEventListener("click", ticker)

    //cut button
    let cut = document.createElement("button")
    cut.innerText = "❌"
    cut.classList.add("btn-child")
    cut.addEventListener("click", function () { divi.removeChild(parentdiv) })
    //pause button



    let pause = document.createElement("button")
    pause.title="It can only be paused once"
    pause.innerText = "⏸️"
    pause.classList.add("btn-child")
pause.addEventListener("click", pausing)

    //adding

    parentdiv.appendChild(subject)
    parentdiv.appendChild(cut)
    parentdiv.appendChild(timer)
    parentdiv.appendChild(start)



    //mount whole thing to the main list
    divi.appendChild(parentdiv)
    //
    function ticker() {
        parentdiv.removeChild(start);
        parentdiv.appendChild(pause);
        //timer 
        seconds=0;
        minutes=0;
        hours=0;
        function tick() {


            if (seconds <= 59) {
                seconds++;
            } else {

                if (minutes <= 59) {
                    minutes++;
                    seconds = 0;
                } else {
                    hours++
                    seconds = 0
                    minutes = 0;
                }
            }
           
            timer.innerText = `${hours}:${minutes}:${seconds}`
        }

         interval = setInterval(tick, 1000)
    

        
    }
        function pausing() {
            parentdiv.removeChild(pause);
             
            clearInterval(interval);
        }
}

