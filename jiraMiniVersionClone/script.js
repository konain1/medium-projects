

 let addBtn = document.querySelector('.add-btn');

const modal_cont = document.querySelector('.modal-cont');

let textarea_cont  = document.querySelector('.textarea-cont')

let main_cont = document.querySelector('.main-cont');

let AllpriorityColors = document.querySelectorAll('.priority-color');


let priorityColor = ['lightpink','lightgreen','lightblue','black'];





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

// text area where tasks have written

textarea_cont.addEventListener('keydown',function(e){
   
    if(e.key === 'Enter'){
       ticketCreated(priorityColor,textarea_cont.value);
       modal_cont.style.display='none'
       textarea_cont.value = ''
    }
})

// ticket funciton

function ticketCreated(priorityColor,task){

    let ticket_cont = document.createElement('div');

    ticket_cont.setAttribute('class','ticket-cont');

    ticket_cont.innerHTML = `<div class="ticket-color ${priorityColor} "></div>
    <div class="ticket-id"></div>
    <div class="ticket-taskarea">${task}</div>`;

    main_cont.appendChild(ticket_cont);

}

// priority colors function color list

AllpriorityColors.forEach(function(ele){
    ele.addEventListener('click',function(e){
        AllpriorityColors.forEach(function(select){
            select.classList.remove('active');
        })

        ele.classList.add('active');
         priorityColor = ele.classList[0];
         console.log(priorityColor)
    })
})