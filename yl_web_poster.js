
const general = document.getElementById('general');
const general_text = document.getElementById('general_text');
const program = document.getElementById('program');
const program_text = document.getElementById('program_text');
const seating = document.getElementById('seating');
const seatin_img = document.getElementById('seating_img');

const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');

const seatC = document.getElementById('seatC');
const seatB = document.getElementById('seatB');
const seatA = document.getElementById('seatA');

const get_it = document.getElementById('get_it');
const plus = document.getElementById('plus_button');
const minus = document.getElementById('minus_button');
const display_ticket_num = document.getElementById('ticket_num');


var time1_state = true;
var time2_state = false;
var seatC_state = false;
var seatB_state = false;
var seatA_state = false;

var ticket_num = 0;


program.addEventListener('mouseover', program_hover);
program.addEventListener('mouseleave', program_leave);

seating.addEventListener('mouseover', seating_hover);
seating.addEventListener('mouseleave', seating_leave);


time1.addEventListener('click', time1_click);
time2.addEventListener('click', time2_click);

seatC.addEventListener('click', seatC_click);
seatB.addEventListener('click', seatB_click);
seatA.addEventListener('click', seatA_click);

plus.addEventListener('click', plus_click);
minus.addEventListener('click', minus_click);





function plus_click(){
    ticket_num ++;

    if(ticket_num < 0){
        ticket_num =0;
        minus.style.opacity = 0.6;
    }

    if(ticket_num > 0){
        minus.style.opacity = 1;
    }

    display_ticket_num.innerHTML = ticket_num + " tickets"

    if(seatC_state == true){
        get_it.innerHTML = "$"+ticket_num*30 + " - Get it"
    }

    if(seatB_state == true){
        get_it.innerHTML = "$"+ticket_num*50 + " - Get it"
    }

    if(seatA_state == true){
        get_it.innerHTML = "$"+ticket_num*60 + " - Get it"
    }
    
}

function minus_click(){
    ticket_num --;

    if(ticket_num < 0){
        ticket_num =0;
        minus.style.opacity = 0.6;
    }

    display_ticket_num.innerHTML = ticket_num + " tickets"

    
    if(seatC_state == true){
        get_it.innerHTML = "$"+ticket_num*30 + " - Get it"
    }

    if(seatB_state == true){
        get_it.innerHTML = "$"+ticket_num*50 + " - Get it"
    }

    if(seatA_state == true){
        get_it.innerHTML = "$"+ticket_num*60 + " - Get it"
    }
}




function time1_click(){
    time1_state = !time1_state;

    if (time1_state == true){
        time1.style.opacity = 1;
        time2.style.opacity = 0.6;
        time2_state = false;
    }
}


function time2_click(){
    time2_state = !time2_state;

    if (time2_state == true){
        time2.style.opacity = 1;
        time1.style.opacity = 0.6;
        time1_state = false;
    }
}

function seatC_click(){
    seatC_state = !seatC_state;

    if(seatC_state == true){
        seatC.style.opacity = 1;
        seatB.style.opacity = 0.6;
        seatA.style.opacity = 0.6;
        seatB_state = false;
        seatA_state = false;

        get_it.innerHTML = "$"+ticket_num*30 + " - Get it"
    }
    if(seatC_state == false){
        seatC.style.opacity = 0.6;
        seatC_state = false;
    }
    if(seatB_state == false && seatA_state ==false && seatC == false){
        get_it.innerHTML = "Get it"
    }
}


function seatB_click(){
    seatB_state = !seatB_state;

    if(seatB_state == true){
        seatB.style.opacity = 1;
        seatC.style.opacity = 0.6;
        seatA.style.opacity = 0.6;
        seatC_state = false;
        seatA_state = false;

        get_it.innerHTML = "$"+ticket_num*50 + " - Get it"
    }
    if(seatB_state == false){
        seatB.style.opacity = 0.6;
        seatB_state = false;
    }

    if(seatB_state == false && seatA_state ==false && seatC == false){
        get_it.innerHTML = "Get it"
    }
}

function seatA_click(){
    seatA_state = !seatA_state;

    if(seatA_state == true){
        seatA.style.opacity = 1;
        seatC.style.opacity = 0.6;
        seatB.style.opacity = 0.6;
        seatC_state = false;
        seatB_state = false;

        get_it.innerHTML = "$"+ticket_num*60 + " - Get it"
    }
    if(seatA_state == false){
        seatA.style.opacity = 0.6;
        seatA_state = false;
    }
    if(seatB_state == false && seatA_state ==false && seatC == false){
        get_it.innerHTML = "Get it"
    }
}









function program_hover(){
    program.style.gridColumn = "col-start 5 / span 4";
    general.style.gridColumn = "col-start 2 / span 3";


    program_text.style.opacity = 1;
    program.style.backgroundImage = "none";
    general.style.backgroundImage = "url('https://candlelightexperience.com/assets/img/info-galleries/info-20.5bc26ea2.jpg')"

    general_text.style.opacity = "0";

} 

function program_leave(){
    program.style.gridColumn = "col-start 6 / span 3";
    general.style.gridColumn = "col-start 2 / span 4";

    program_text.style.opacity = 0;
    program.style.backgroundImage = "url('https://candlelightexperience.com/assets/img/info-galleries/info-14.b0eba49f.jpg')";
    general.style.backgroundImage = "none";

    general_text.style.opacity = "1";
} 

function seating_hover(){
    seating.style.gridColumn = "col-start 8 / span 4";
    program.style.gridColumn = "col-start 5 / span 3";
    general.style.gridColumn = "col-start 2 / span 3";

    seating_img.style.opacity = 1;
    seating.style.backgroundImage = "none";
    general.style.backgroundImage = "url('https://candlelightexperience.com/assets/img/info-galleries/info-20.5bc26ea2.jpg')"
    general_text.style.opacity = "0";
} 

function seating_leave(){
    seating.style.gridColumn = "col-start 9 / span 3";
    program.style.gridColumn = "col-start 6 / span 3";
    general.style.gridColumn = "col-start 2 / span 4";

    seatin_img.style.opacity = 0;
    seating.style.backgroundImage = "url('https://candlelightexperience.com/assets/img/info-galleries/info-12.4ec7aaf2.jpg')";
    general.style.backgroundImage = "none";

    general_text.style.opacity = "1";
} 