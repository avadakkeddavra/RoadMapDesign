$('#sidebarToggle').on('click', function() {
    var collapsed = $('.sidebar').hasClass('collapsed');
    
    if(!collapsed) {
        $('.sidebar').addClass('collapsed')
        $('.sidebar').animate({
            width:'65px'
        },300);
        
        $('main').animate({
            width:'100%'
        },300);
    }else{
        $('.sidebar').removeClass('collapsed')
        $('.sidebar').animate({
            width:'300px'
        },300);
        
        console.log();
        $('main').animate({
           width:window.innerWidth - 300+'px'
        },300);
    }
})