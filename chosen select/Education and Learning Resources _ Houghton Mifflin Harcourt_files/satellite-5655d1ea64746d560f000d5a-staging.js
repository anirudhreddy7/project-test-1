_satellite.pushAsyncScript(function(event, target, $variables){
  try{    
    // /at-home/featured-shops/holiday-gift-guide-2015/for-kids
    $.each($('map#m_holidayguidebanner'), function (index, val) {
        ga('prod.ec:addPromo', {
            'id': '2015-HGG',
            'name': '2015 holiday gift guide',
            'creative': 'there\'s no gift like the love of reading',
            'position': 'category page banner'
        });
        ga('prod.send', 'event', 'Enhanced Ecommerce', 'Showed Promotions', undefined, undefined,{'nonInteraction': 1});
    });


   $(document).on('mousedown','map#m_holidayguidebanner area',function(){
        ga('prod.ec:addPromo', {
            'id': '2015-HGG',
            'name': '2015 holiday gift guide',
            'creative': 'there\'s no gift like the love of reading',
            'position': 'category page banner'
        });       
        ga('prod.ec:setAction', 'promo_click');
        ga('prod.send', 'event', 'Promotions', '2015 Holiday Gift Guide', $(this).attr('alt'));          
    });
    // /at-home
    $.each($('map#m_holidayguidemain'), function (index, val) {
        ga('prod.ec:addPromo', {
            'id': '2015-HGG',
            'name': '2015 holiday gift guide',
            'creative': 'give the gift of learning',
            'position': 'at home main splash'
        });
        ga('prod.send', 'event', 'Enhanced Ecommerce', 'Showed Promotions', undefined, undefined,{'nonInteraction': 1});
    });

    $(document).on('mousedown','map#m_holidayguidemain area',function(){
        ga('prod.ec:addPromo', {
            'id': '2015-HGG',
            'name': '2015 holiday gift guide',
            'creative': 'there\'s no gift like the love of reading',
            'position': 'at home main splash'
        });       
        ga('prod.ec:setAction', 'promo_click');
        ga('prod.send', 'event', 'Promotions', '2015 Holiday Gift Guide', $(this).attr('alt'));          
    });

    // /home
    $('#slider img[alt*="Holiday Gift Guide 2015"]:first').each(function(){
        ga('prod.ec:addPromo', {
            'id': '2015-HGG',
            'name': '2015 holiday gift guide',
            'creative': 'give the gift of learning',
            'position': 'homepage slider'
        });
        ga('prod.send', 'event', 'Enhanced Ecommerce', 'Showed Promotions', undefined, undefined,{'nonInteraction': 1});
     });

     $(document).on('mousedown','#slider img[alt*="Holiday Gift Guide 2015"]:first',function(){
        ga('prod.ec:addPromo', {
            'id': '2015-HGG',
            'name': '2015 holiday gift guide',
            'creative': 'give the gift of learning',
            'position': 'homepage slider'
        });       
        ga('prod.ec:setAction', 'promo_click');
        ga('prod.send', 'event', 'Promotions', '2015 Holiday Gift Guide', $(this).attr('alt'));  
     });
}catch(e){    
        ga('prod.send', 'event', 'Error Tracking','VMG - EC - Promotions js '+( e.name ? e.name:e),e.message,null, {'nonInteraction': 1});   
	return;
}
});
