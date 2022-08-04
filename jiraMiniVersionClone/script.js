

 let addBtn = document.querySelector('.add-btn');

const modal_cont = document.querySelector('.modal-cont');

let textarea_cont  = document.querySelector('.textarea-cont')

let main_cont = document.querySelector('.main-cont');

let AllpriorityColors = document.querySelectorAll('.priority-color');

let priorityColor = 'black'

let colorsArray = ['lightpink','lightgreen','lightblue','black'];

let removeBtn = document.querySelector('.remove-btn');

let ticketLock = document.querySelector('.ticket-lock');

let Locked = 'fa-lock'

let Unlocked = 'fa-lock-open'


let removeFlag = false





let addflag = false

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
       ticketCreated(priorityColor,textarea_cont.value,shortid());
       modal_cont.style.display='none'
       textarea_cont.value = ''
       removeDefaultSelected();
    
    }
})

// ticket funciton

function ticketCreated(priorityColor,task,ticketId){

    let ticket_cont = document.createElement('div');

    ticket_cont.setAttribute('class','ticket-cont');

    ticket_cont.innerHTML = ` <div class="ticket-cont">
    <div class="ticket-color ${priorityColor}"></div>
    <div class="ticket-id">#${ticketId}</div>
    <div class="ticket-taskarea">${task}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>
    
  </div>`;

    main_cont.appendChild(ticket_cont);

    
    ticketRemover(ticket_cont);
    handleLock(ticket_cont);
    bandColorHandler(ticket_cont);

   
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
function ticketRemover(ticket){
    
        ticket.addEventListener('click',function(){

            if(removeFlag == true){
                ticket.remove();
                console.log("clicked")
            }
           
        })
    
}

// priority colors function color list

function removeDefaultSelected() {
    AllpriorityColors.forEach(function(select){
        console.log(select)
        if(select.classList.contains('active')) {
            select.classList.remove('active');
        }
    })
}

AllpriorityColors.forEach(function(ele){
   
    ele.addEventListener('click',function(e){
        
        AllpriorityColors.forEach(function(select){
            console.log(select)
            if(select.classList.contains('active')) {
                select.classList.remove('active');
            }
        })

        ele.classList.add('active');
        priorityColor = ele.classList[0];
         console.log(priorityColor)
    })
})


// lock unlock function
function handleLock(ticket){
    let lockElement = ticket.querySelector('.ticket-lock');
   let lockActiveClass = lockElement.children[0];
   let taskTicketArea = ticket.querySelector('.ticket-taskarea');

   lockActiveClass.addEventListener('click',function(){

        if(lockActiveClass.classList.contains(Locked)){
            lockActiveClass.classList.remove(Locked);
            lockActiveClass.classList.add(Unlocked);
            taskTicketArea.setAttribute('contenteditable','true');
            
        }else {
            lockActiveClass.classList.remove(Unlocked);
            lockActiveClass.classList.add(Locked);
            taskTicketArea.setAttribute('contenteditable','false');

        }

   })
   
}

// Stripcolor handler

function bandColorHandler(ticket){
    let StripColor = ticket.querySelector('.ticket-color ');

    StripColor.addEventListener('click',function(){ 


        let currentColor  = StripColor.classList[1];

    let currentColorIdx = colorsArray.findIndex(function(color){
        return currentColor === color;
        
    })
     currentColorIdx++;
    let nextStripColorIdx = currentColorIdx % colorsArray.length;
    let nextStripColor = colorsArray[nextStripColorIdx]


    StripColor.classList.remove(currentColor);

    StripColor.classList.add(nextStripColor);
    console.log(currentColor , nextStripColor);

    })

    
}