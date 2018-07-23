$('#sidebarToggle').on('click', function() {
    var collapsed = $('.sidebar').hasClass('collapsed');
    
    if(!collapsed) {
        $('.sidebar').addClass('collapsed')
        $('.sidebar').animate({
            width:'65px'
        },300);
        
        $('main').animate({
            width:window.innerWidth - 65+'px'
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
});
$("#filters, .filters").on('click', function() {
    $(this).parents('.card').find('.card-filters').animate({
        right:'0px'
    },200)
})
$('#closeFilters, .closeFilters').on('click', function() {
    $(this).parents('.card').find('.card-filters').animate({
        right:'-500px'
    },200);
})