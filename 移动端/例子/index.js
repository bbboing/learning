var iNow = 1;
$(document).on('swipeUp',function(){
    $('.page-'+iNow).attr('class','page page-' + iNow + ' moveToTop');
    $('.page-'+(iNow+1)).attr("class","page page-"+(iNow+1)+" moveFromBottom");
    console.log('ok');
    setTimeout(function(){
        $('.page-'+(iNow+1)).children().removeClass('hide');
        $('.page-'+iNow).children().addClass('hide');
        iNow++;
    },600);
})