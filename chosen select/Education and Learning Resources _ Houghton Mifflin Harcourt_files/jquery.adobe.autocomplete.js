
jQuery.extend(jQuery.ui.autocomplete.prototype, {

	
	getAutocompleteRequest : function(s)
	{
		var g_staged = (document.getElementById("sp_staged") ? document.getElementById("sp_staged").value : 0);
		var protocol = (document.location.protocol == "https:" ? "https:" : "http:");
		var postfix = (g_staged ? "-stage/" : "/");
		var acct = s.account.split("");
		var spid = "";
		var j = 0;
		for (var i = 0; i < acct.length ; i++)
		{
			if (i >= 2)
			{
				j++;
				if (j == 2) 
				{
					j = 0;
					spid += (i != (acct.length - 1)) ? acct[i] + "/" : acct[i];
				}
				else
				{
					spid += acct[i];
				}
			}
			else
			{
					spid += acct[i];
			}

		}
		
		return protocol + "//content.atomz.com/autocomplete/" + spid + postfix + "?callback=?";
	
	}
	

});

jQuery.extend(jQuery.ui.autocomplete.prototype.options, {

    source: function (request, response) {
        s = this.options;
        var req = this.getAutocompleteRequest(this.options);
        req = (s.src) ? s.src : req;

        if (!s.browserAutocomplete) {
            jQuery(s.inputElement).attr("autocomplete", "off");
        }
        request.query = request.term;

        jQuery.ajax({
            url: req,
            dataType: 'jsonp',
            data: request,
            success: function (data, txt, req) {
                var matcher = null;
                var matchcase = (s.queryCaseSensitive) ? "" : "i";

                if (s.startsWith) {
                    matcher = new RegExp("^" + jQuery.ui.autocomplete.escapeRegex(request.term), matchcase);
                }
                else {
                    matcher = new RegExp(jQuery.ui.autocomplete.escapeRegex(request.term), matchcase);

                }
                var str = "";

                var res = 0;
                var max = (s.maxResults) ? s.maxResults : 10000;

                response(jQuery.map(data, function (item) {
                    if (matcher.test(item) && res < max) {
                        res++;
                        return {
                            label: item,
                            value: item
                        }
                    }


                }));

                if (s.maxResults) {
                    data.length = s.maxResults;
                }

            },


            error: function (a, b) {  }  //do nothing - this used to say "alert(b)" which was causing the intermittent "parseerror" in IE



        });

    },

    open: function (event, ui) {

        var acdiv = ".ui-autocomplete.ui-menu.ui-widget.ui-widget-content.ui-corner-all";
        jQuery(acdiv + " > li:first").prepend(adacSettings.header);
        jQuery(acdiv + " > li:last").append(adacSettings.footer);

    },

    select: function (event, ui) {
        jQuery(s.inputElement).val(ui.item.label);
        if (s.searchOnSelect) {
            if (s.inputTriggerElement && s.inputTriggerEvent) {
                jQuery(s.inputTriggerElement).trigger(s.inputTriggerEvent);
            }
            else if (s.inputFormElement) {
                jQuery(s.inputFormElement).submit();
            }
        }
        return false;
    },

    highlightWords: true,

    highlightWordsBegin: false


});


// Let's override the renderItem function to support bolding of matched terms in the list
jQuery.ui.autocomplete.prototype._renderItem = function( ul, item) {

	var t = item.label;

	if (this.options.highlightWords || this.options.highlightWordsBegin)
	{
		var st = (this.options.highlightWordsBegin) ? "^" : "";
		var re = new RegExp(st + this.term) ;
		t = item.label.replace(re,"<strong>" + this.term + "</strong>");
	}		
	
	return jQuery( "<li></li>" )
	.data( "item.autocomplete", item )
	.append( "<a>" + t + "</a>" )
	.appendTo( ul );

};
