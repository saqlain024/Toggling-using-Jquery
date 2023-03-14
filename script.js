let count=0;
let toggle = document.getElementById('toggler');  

$('#inner').click( function(event){
    if(count%2 == 0){                 //convert white to  dark mode
        $('#toggler').css("align-items","right");
        $('body').css("background-color","#171A22");
        $('body').css("color","white");

        toggle.style.transform = 'translateX(33px)';
        count++;
    }
    else{                            // convert dark to light mode
        $('#toggler').css("align-items","left");
        $('body').css("background-color","white");
        $('body').css("color","black");

        toggle.style.transform = 'translateX(0px)';
        count++;
    }
});