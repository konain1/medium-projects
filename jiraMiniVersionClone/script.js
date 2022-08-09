

 let addBtn = document.querySelector('.add-btn');

const modal_cont = document.querySelector('.modal-cont');

let textarea_cont  = document.querySelector('.textarea-cont')

let main_cont = document.querySelector('.main-cont');

let AllpriorityColors = document.querySelectorAll('.priority-color');

let priorityColor = 'black'

let colorsArray = ['lightpink','lightgreen','lightblue','black'];

let removeBtn = document.querySelector('.remove-btn');

let ticketLock = document.querySelector('.ticket-lock');

let ToolBoxColors = document.querySelectorAll('.color');

let Locked = 'fa-lock'

let Unlocked = 'fa-lock-open'


let removeFlag = false

let ticketArray = [];

let addflag = false


// getback tickets from local storage

if(localStorage.getItem('tickets')){
    ticketArray = JSON.parse(localStorage.getItem('tickets'))

    ticketArray.forEach(function(e){
        ticketCreated(e.priorityColor,e.task,e.ticketId)
    })
}


// visible modal or invisible
addBtn.addEventListener('click',function(e){

    addflag = !addflag;

    if(addflag == true){
        modal_cont.style.display='flex'
    }else {
        modal_cont.style.display='none';
    }

})

// text area where tasks  have  been written

textarea_cont.addEventListener('keydown',function(e){
   
    if(e.key === 'Enter'){
       ticketCreated(priorityColor,textarea_cont.value);
       modal_cont.style.display='none'
       textarea_cont.value = ''
       removeDefaultSelected();
    
    }
})

// ticket funciton

function ticketCreated(priorityColor,task,ticketId){
    let id = ticketId || shortid();
    let ticket_cont = document.createElement('div');

    ticket_cont.setAttribute('class','ticket-cont');

    ticket_cont.innerHTML = ` <div class="ticket-cont">
    <div class="ticket-color ${priorityColor}"></div>
    <div class="ticket-id">#${id}</div>
    <div class="ticket-taskarea">${task}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>
    
  </div>`;

    main_cont.appendChild(ticket_cont);

    
    ticketRemover(ticket_cont);
    handleLock(ticket_cont,id);
    bandColorHandler(ticket_cont,ticketId);


    if(!ticketId){
        ticketArray.push({priorityColor,task,ticketId:id  });
    }
    
    // local storage
    localStorage.setItem('tickets',JSON.stringify(ticketArray))
    

   
}

// remove modal with remove btn

removeBtn.addEventListener('click',()=>{
    removeFlag = !removeFlag
    console.log(removeFlag)

    if(removeFlag == true){
        removeBtn.style.tramsform = "rotate(7deg)";
        removeBtn.style.color = 'red';
    }else {
        removeBtn.style.color = 'black';
    }

})


// ticket remover function
function ticketRemover(ticket,id){
    
        ticket.addEventListener('click',function(){

            if(!removeFlag)  return


               let idx = getticketidx(id);
            //ticket remove from local storage

            ticketArray.splice(idx,1); // remove array one index from array

            let strticketArray = JSON.stringify(ticketArray); 

            localStorage.setItem('tickets',strticketArray); // updating local storage after removing ticket

            ticket.remove();
               
            
           
        })
    
}

// priority colors function color list

function removeDefaultSelected() {
    AllpriorityColors.forEach(function(select){
        // console.log(select)
        if(select.classList.contains('active')) {
            select.classList.remove('active');
        }
    })
}


// priority color list selector
AllpriorityColors.forEach(function(ele){
   
    ele.addEventListener('click',function(e){
        
        AllpriorityColors.forEach(function(select){
            // console.log(select)
            if(select.classList.contains('active')) {
                select.classList.remove('active');
            }
        })

        ele.classList.add('active');
        priorityColor = ele.classList[0];
        //  console.log(priorityColor)
    })
})


// lock unlock function
function handleLock(ticket,id){
    let lockElement = ticket.querySelector('.ticket-lock');
   let lockActiveClass = lockElement.children[0];
   let taskTicketArea = ticket.querySelector('.ticket-taskarea');

   lockActiveClass.addEventListener('click',function(){

    let taskidx = getticketidx(id);

        if(lockActiveClass.classList.contains(Locked)){
            lockActiveClass.classList.remove(Locked);
            lockActiveClass.classList.add(Unlocked);
            taskTicketArea.setAttribute('contenteditable','true');
            
        }else {
            lockActiveClass.classList.remove(Unlocked);
            lockActiveClass.classList.add(Locked);
            taskTicketArea.setAttribute('contenteditable','false');

        }

        ticketArray[taskidx].task = taskTicketArea.innerText;
        localStorage.setItem('tickets',JSON.stringify(ticketArray))


   })
   
}

// Stripcolor handler

function bandColorHandler(ticket,id){
    let StripColor = ticket.querySelector('.ticket-color ');

    StripColor.addEventListener('click',function(){ 


        let currentColor  = StripColor.classList[1];


        let coloridx = getticketidx(id)
        console.log(coloridx)
 

    let currentColorIdx = colorsArray.findIndex(function(color){
        return currentColor === color;
        
    })
     currentColorIdx++;
    let nextStripColorIdx = currentColorIdx % colorsArray.length;
    let nextStripColor = colorsArray[nextStripColorIdx]


    StripColor.classList.remove(currentColor);

    StripColor.classList.add(nextStripColor);
  

    ticketArray[coloridx].priorityColor = nextStripColor

    localStorage.setItem('tickets',JSON.stringify(ticketArray))

    })

}

// color Toolbox 

for(let i = 0;i<ToolBoxColors.length;i++){
    ToolBoxColors[i].addEventListener('click',function(){
        let currentToolBoxColor = ToolBoxColors[i].classList[1];
        // console.log(currentToolBoxColor)


        let filteredTicket = ticketArray.filter(function(ticketObj){
            return currentToolBoxColor === ticketObj.priorityColor
        })


        // remove all tickets first 

        let allTickets = document.querySelectorAll('.ticket-cont');

        for(let i = 0;i<allTickets.length;i++){
            allTickets[i].remove();
            console.log(allTickets[i])
        }

        // display filtered tickets
        filteredTicket.forEach(function(e){
            ticketCreated(e.priorityColor,e.task,e.ticketId)
            console.log(filteredTicket+"created")

        })

    })


     // all tickets display 
    ToolBoxColors[i].addEventListener('dblclick',function(e){
        let allTickets = document.querySelectorAll('.ticket-cont');

        for(let i = 0;i<allTickets.length;i++){
            allTickets[i].remove();
            
        }
        ticketArray.forEach(function(obj){
            ticketCreated(obj.priorityColor,obj.task,obj.ticketId);
        })

    })
}

function getticketidx(id){
    let ticketidx = ticketArray.findIndex(function(idxobj){
        return idxobj.ticketId === id
    })

    return ticketidx
}