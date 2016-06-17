(function ($) {	
	$(document).on('click', "a.remove", function() {
		var remove_id = $(this).attr('data-item-id');
		removeProduct(remove_id);		     
	});	
})(jQuery);

function normalizeCart(parentId) {
	jQuery(parentId + " #cart_items_tbody .mini-cart-item:visible").reverse().each(function(i, val) {
		var classList = jQuery(this).attr('class').split(/\s+/);
		for (var k = 0; k < classList.length; k++) {
			if (classList[k].indexOf('cart-item-') == 0) {
				jQuery(this).removeClass(classList[k]);
				jQuery(this).addClass('cart-item-' + i);
			}
		}
		jQuery(this).find("a[data-item-id], input[data-item-id]").each(function() {
			//alert("Cart item element:" + jQuery(val).attr('data-id') + " iteration: " + i + " Element data-item-id:" + jQuery(this).attr("data-item-id"));
			jQuery(this).attr("data-item-id", i);
		});
	});
	jQuery(parentId + " #cart_items_tbody .cart-error:visible").reverse().each(function(i, val) {
		var classList = jQuery(this).attr('class').split(/\s+/);
		for (var k = 0; k < classList.length; k++) {
			if (classList[k].indexOf('cart-item-') == 0) {
				jQuery(this).removeClass(classList[k]);
				jQuery(this).addClass('cart-item-' + i);
			}
		}
	});
}

jQuery.fn.reverse = function() {
	return this.pushStack(this.get().reverse(), arguments);
};

//START for dialog box for excess item 
function showExcessItemCartModal (confMsg)
{
	jQuery("#dialog #modal_content").html('');
	jQuery("#dialog #modal_content").append(confMsg);
	
	jQuery("#dialog").reveal({
		closeOnBackgroundClick: false,
		close:  function(){
			//alert("callModalToClose");
			jQuery("#dialog").css('visibility','hidden');
			jQuery(".reveal-modal-bg").css('visibility','hidden');
		},
		dismissModalClass: 'close-reveal-modal'
	});	
	jQuery("#dialog").css({'visibility':'visible','top':'50%'});
	jQuery(".reveal-modal-bg").css('visibility','visible');
}

function closeExcessItemCartModal ()
{
	jQuery('#dialog').trigger('reveal:close');
}

function bindExcessCartItemCheckoutButton () {
	jQuery("#checkoutAnchorDown").click(function() {
		if(totalCartLines>50){				
		var confDeleteMsg = '<div class="row text-center"><div class="twelve columns"><h2 class="brand-color"></h2><h3>You have placed '+totalCartLines+' items in your cart. This can result in longer than usual processing times on checkout</h3><p><input type="submit" id="cart_confirm_checkout_btn" class="button" value="OK"/></p></div></div>';
		showExcessItemCartModal(confDeleteMsg);
		}else{
			window.location=getContextPath()+"/hmhstorefront/checkout";
		}
	});
}

function bindExcessCartItemCheckoutConfirmButton()
{
	jQuery(document).on('click',"#cart_confirm_checkout_btn",function(){
		closeExcessItemCartModal();
		window.location=getContextPath()+"/hmhstorefront/checkout";
		return false;
	});
}		
//END for dialog box for excess item 

function getContextPath()
{
	return window.location.protocol + "//" + window.location.host;
}

function removeProduct(entryNumber)
{
	var removeProductUrl=getContextPath()+"/hmhstorefront/cart/entry/" + entryNumber;
	jQuery.ajax({
		url: removeProductUrl, 
		type : 'POST',
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		success :  function (response){
			var data = response.data;
			var user = response.user;
			if(data.statusCode=="success"){
				jQuery('.cart-item-' + entryNumber).fadeOut("fast", function() {
					//jQuery('.cart-item-' + entryNumber).remove();
					normalizeCart('#cartMini');
					normalizeCart('#cartMain');
					updateMinicart(data);
					tryUpdateMainCart(data);
					refreshMinicartMessages(user,data);
					if(typeof cartData !=undefined && cartData.entries){
						updateErrorMsg(entryNumber);
					}
				});
			}
		}
	});
}

function refreshMinicartMessages(user,updatedCart)
{
	//Not institutional user and standard delivery mode
	if((!user.institutional && user.userType != 'Licensed' && user.userType != 'NonLicensed') && (updatedCart.deliveryMode == null || updatedCart.deliveryMode.code == '01'))
	{
		if(updatedCart.totalUnitCount==0)
		{
			//empty cart - show message
			jQuery('.minicart-shipping').html("Spend between $25 and $200 and get free shipping on your whole order.");
			jQuery('.minicart-shipping').css("display","block");
			
		}
		else if(updatedCart.freeShipping.value>0)
		{
			//show message
			var message = ("You&#39;re only {0} away from Free Shipping!*").replace("{0}",updatedCart.freeShipping.formattedValue);
			jQuery('.minicart-shipping').html(message);
			jQuery('.minicart-shipping').css("display","block");
		}
		else if(updatedCart.freeShipping.value<=0 && updatedCart.totalMinusSubscriptions.value>=25 && updatedCart.totalMinusSubscriptions.value <=200)
		{
			//show message
			var message = ("You&#39;ve earned free shipping !");
			jQuery('.minicart-shipping').html(message);
			jQuery('.minicart-shipping').css("display","block");
		}
		else if(updatedCart.totalMinusSubscriptions.value==0)
		{
			jQuery('.minicart-shipping').html("");
			jQuery('.minicart-shipping').css("display","none");
		}
	}
}

function updateJsTrackRemovedProductInfo(code, title, quantity,price)
{
	var s = GetOmObj();
	
	var removedItems = ';' + code + ':' + title + ';' + quantity + ';' + price;
	
	s.events = 'scRemove';
	s.products = removedItems;
	
	s.linkTrackEvents='scRemove';
	s.linkTrackVars="";  //If you set linkTrackVars to "", then all variables which have values will be sent.
	
	s.tl(true,'o','Remove Link');
}

function updateMinicart(data)
{
	var cartCount = data['totalUnitCount'];
		
	if(cartCount==0)
	{
		jQuery('#sub-total-mini-cart').html('$0.00');
		jQuery('.itemsHeader').fadeOut();
		jQuery('.mini-cart-empty').fadeIn();
		jQuery( "span.cartCount" ).addClass("empty");
		jQuery(".cartCount").html("&nbsp;");
	}
	else
	{
		jQuery('#sub-total-mini-cart').html(data.subTotal.formattedValue);
		jQuery( "span.cartCount" ).removeClass("empty");
		jQuery(".cartCount").text(cartCount>99?"99+":cartCount);
	}
}

function tryUpdateMainCart(data)
{
	if(typeof recalculate == 'function')
	{
		recalculate(data); 
	}
}