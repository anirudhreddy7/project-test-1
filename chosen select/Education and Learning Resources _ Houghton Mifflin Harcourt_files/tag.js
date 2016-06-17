// VDED10188 at 15/09/2015 10:00:09
'use strict';
if (typeof veTagData === 'undefined') {
    var veTagData = (function () {
        var b,
            tag = document.getElementById('veConnect'),
            d = {
                journeycode: 'E208E6C3-DBA5-44BD-B552-2439A17C91F6',
                captureConfigUrl: 'cdsusa.veinteractive.com/CaptureConfigService.asmx/CaptureConfig',
                appsServicesUrl: 'appsapiusa.veinteractive.com',
                veHostDomain: '//configusa.veinteractive.com',
                promoteLanding: 'promotelanding.veinteractive.local',

                captureConfig: {
  CaptureUrl: "cdsusa.veinteractive.com/CaptureConfigService.asmx/CaptureConfig",
  customerid: 1005502,
  datareceiverurl: "cdsusa.veinteractive.com/DataReceiverService.asmx/DataReceiver",
  Forms: [
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "txtSiEmail",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 61064,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2
        },
        {
          ClientFieldName: "txtemail",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 61065,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2
        },
        {
          ClientFieldName: "emailAddress",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 61066,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2
        },
        {
          ClientFieldName: "chatCriteria",
          DomEvent: "OnLoad",
          FieldTypeName: "Name",
          FormMappingId: 61664,
          HtmlAttributeTag: "Value",
          HtmlType: ":hidden",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1
        }
      ],
      FormId: 24415,
      FormTypeId: 1,
      FormURLs: [
        "hmhco-v1.pre.techspa.com/account/sign-in",
        "hmhco-v1.stg.techspa.com/account/sign-in"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".mini-cart-item-image img",
          DomEvent: "DynamicActivity",
          FieldTypeName: "RawSeries",
          FormMappingId: 61067,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13
        },
        {
          ClientFieldName: ".mini-cart-col-details a",
          DomEvent: "DynamicActivity",
          FieldTypeName: "RawSeries",
          FormMappingId: 61072,
          HtmlAttributeTag: "Value",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 11
        },
        {
          ClientFieldName: ".mini-cart-col-origprice strong",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 61073,
          HtmlAttributeTag: "Value",
          HtmlType: "p",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 15
        },
        {
          ClientFieldName: ".item-quantity",
          DomEvent: "DynamicActivity",
          FieldTypeName: "RawSeries",
          FormMappingId: 61076,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1
        },
        {
          ClientFieldName: "#sub-total span",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 61077,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8
        },
        {
          ClientFieldName: "chatCriteria",
          DomEvent: "OnLoad",
          FieldTypeName: "Name",
          FormMappingId: 61675,
          HtmlAttributeTag: "Value",
          HtmlType: ":hidden",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1
        }
      ],
      FormId: 25931,
      FormTypeId: 1,
      FormURLs: [
        "hmhco-v1.pre.techspa.com/hmhstorefront/cart",
        "hmhco-v1.stg.techspa.com/hmhstorefront/cart"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "shipping_email",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 61078,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2
        },
        {
          ClientFieldName: "#sub-total span",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 61079,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8
        },
        {
          ClientFieldName: "promotion.code",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Id",
          FormMappingId: 61083,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 7
        }
      ],
      FormId: 25935,
      FormTypeId: 1,
      FormURLs: [
        "hmhco-v1.pre.techspa.com/hmhstorefront/checkout/multi/checkout-steps",
        "hmhco-v1.stg.techspa.com/hmhstorefront/checkout/multi/checkout-steps"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: null,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".text-order-number",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 61085,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 9
        }
      ],
      FormId: 25937,
      FormTypeId: 2,
      FormURLs: [
        "hmhco-v1.pre.techspa.com/hmhstorefront/checkout/orderConfirmation/*",
        "hmhco-v1.stg.techspa.com/hmhstorefront/checkout/orderConfirmation/*"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    }
  ],
  IdentifyAbandonmentOr: true,
  JourneyCode: "E208E6C3-DBA5-44BD-B552-2439A17C91F6",
  JourneyId: 6277,
  JourneyTimeOut: 1800,
  NumberIdentifiedFields: 0,
  OptOutField: 0
},
                /*
                 * The custom settings are based on the standard defined on Settings.js.
                 */
                settings: { domainsToIgnore: ['hmhco-v1.pre.techspa.com','hmhco-v1.stg.techspa.com' ], consoleMessagesEnabled: true,
 elementsStoppingAppsOnClick: [ ],
 autocompleteInputsHandler: [ ],
 keywordsRegExp: [ { source: 'Example', regexp: / /, notSearchEngine: false, replaceCharactersBySpace: '-', storeSearchTerm: false, showNoProducts: false, ignoreCloses: false } ],
 cookies: { enabled: true , timeToLive: 60}
}
,

                /*
                 * Custom events that allow custom behavior per journey. The standard is defined on CustomEvents.js.
                 */
                customEvents: {
onLoad: function(){  
  var chatCriteriaVar = document.cookie.replace(/(?:(?:^|.*;\s*)chatCriteria\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  //checks if cookie is present
  if(chatCriteriaVar === ""){
    //if no cookie present calls cookie adding function with random number as parameter. change random parameter as required
    veTagData.customEvents.chatCriteriaCookie(Math.floor(Math.random()*2+1));
  }else{
    //if the cookie is present, calls element creating function with cookie value as parameter
    veTagData.customEvents.createElement("chatCriteria", chatCriteriaVar);
  }
},    
//adds new cookie to page with random number value. also adds hidden input to page to criteria chat off
chatCriteriaCookie: function(randomNum){
  //creates 1 hour cookie for user with random number value
  var d = new Date();
  d.setTime(d.getTime() + (3600000));
  var expires = "expires="+d.toGMTString();   
  document.cookie = "chatCriteria=" + randomNum +"; expires=" + expires+"; path=/";

  //hidden input function call with same value as created cookie
  veTagData.customEvents.createElement("chatCriteria", randomNum);      
},   
//creates hidden input tag on page with random number value equivalent to user's cookied value
createElement: function(name, field){
  var input = document.createElement('input');
  input.setAttribute('type','hidden');
  input.setAttribute('name', name);
  input.setAttribute('value', field);
  document.body.appendChild(input);
  
},
	onGetCaptureValue: function(formMappingId, value, controls){
		if(formMappingId === 34856){
		 value = VEjQuery("#body_0_isbn13Span").text().split(':')[1];
		}
                return value;
        }
},

                /*
                 * Criteria filters that are setup by tech team. The types of Criteria filters possible are:
                 *       * Personality - The matching of this criteria filters will defined the personality that the chat will have
                 *       * Variation
                 */
                criteriaFilters: {
  chat: [
    {
      value: "1204",
      criteria: [
        {
          formMappingId: 61675,
          value: "1",
          operator: "=",
          typeName: "String",
          innerGrouping: []
        },
        {
          formMappingId: 61664,
          value: "1",
          operator: "=",
          typeName: "String",
          innerGrouping: []
        }
      ]
    }
  ],
  assist: [],
  promote: []
},

                /*
                 * All the apps that Ve Interactive has with the events
                 */
                appsMappings: {},

                /*
                 * All the apps that Ve Interactive has with the events
                 */
                apps: [
  {
    name: "Chat",
    exit: true,
    inactivity: false,
    backButton: false,
    load: false,
    enabled: true,
    maxActivationsPerSession: null,
    activateOnlyOnLastTab: false,
    minTimeBetweenActivations: null,
    exitIntent: false
  }
]
            };

        if (!tag) {

            // Adding the Capture-apps file to the DOM
            tag = document.createElement('script');
            tag.type = 'text/javascript';
            tag.id = 'veConnect';
            tag.async = true;
            tag.src = window.location.protocol + d.veHostDomain + '/scripts/4.6/capture-apps-4.6.1.js';
            b = document.getElementsByTagName('script')[0];
            b.parentNode.insertBefore(tag, b);
        }
        return d;
    })();
};
