
function SetupSearchMenuOptions() {

    var opdta = '';
    
    if (typeof xRf.searchMenuData != "undefined") {
        $.each(xRf.searchMenuData[0].menu, function (indx, val) {
            opdta += "<option value=\"" + val.value + "\">" + val.label + "</option>";
        });
        opdta += xRf.menuAssetLibraryOption;
    }

    if (opdta) {
        $('#searchSelect select').empty().append(opdta);
    }

    $('.searchIconButton').click(function (e) {

        e.preventDefault();
        var selectedSegSecParms = $('#searchSelect select').val();
        selectedSegSecParms = selectedSegSecParms || '?segment=All;mm=all';
        var searchTerm = $.trim($('#searchEntry').val());
        Om_TrackSearchTerm(searchTerm);
        if (searchTerm.length > 0) {
            if (selectedSegSecParms == 'Asset Library') {
                window.location.href = xRf.assetLibraryPath + searchTerm;
            }
            else {
                window.location.href = xRf.searchPath + selectedSegSecParms +
                    xRf.searchMiscExtraFmt + ';q=' + searchTerm;
            }
        }
        return false;
    });

    function Om_TrackSearchTerm(searchTerm) {
        var oSearchEntryClick = GetOmObj();
        oSearchEntryClick.events = "event1";
        oSearchEntryClick.prop6 = searchTerm;
        oSearchEntryClick.eVar4 = searchTerm;
        oSearchEntryClick.pageName = ' Search Results:1';
        oSearchEntryClick.linkTrackVars += ",prop6,eVar4";
        oSearchEntryClick.linkTrackEvents += ",event1";
        oSearchEntryClick.tl(true, 'o', 'Search term : ' + searchTerm);
     
    }
    // searchEntry lies inside the div.searchEntry so prevent event propagation
    $('#searchEntry').click(function (e) {
        e.preventDefault();
        // do nothing
        return false;
    });

    $('#searchEntry').bind('keydown', function (e) {
        if (e.which === 13) { // return                        
            e.preventDefault();
            $('.searchIconButton').trigger('click');
            return false;
        }
    })
}

var adacSettings = {
    account: "sp1004efe8",
    searchDomain: "http://stage.hmh.guided.ss-omtrdc.net",
    inputElement: "input#searchEntry",
    inputFormElement: false,
    inputTriggerElement: ".searchTrigger",
    inputTriggerEvent: "click",
    delay: 300,
    minLength: 3,
    maxResults: 10,
    browserAutocomplete: false,
    queryCaseSensitive: false,
    startsWith: false,
    searchOnSelect: false
}

$(document).ready(function () {

    $(adacSettings.inputElement).autocomplete(adacSettings);
    SetupSearchMenuOptions();
});