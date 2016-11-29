// V-U2-DPLY-WS-01 at 29/03/2016 03:38:09
if (typeof veTagData === 'undefined') {
    var veTagData = (function () {
        var b,
            tag = document.getElementById('veConnect'),
            d = {
                journeycode: '37D266AA-04B6-4846-B28E-824D9A4DEB73',
                captureConfigUrl: 'cdsusa.veinteractive.com/CaptureConfigService.asmx/CaptureConfig',
                chatServicesUrl: 'cdsusa.veinteractive.com/ConversationService.asmx/',
                assistServicesUrl: 'appsapiusa.veinteractive.com',
                veHostDomain: '//configusa.veinteractive.com',

                captureConfig: {
  CaptureUrl: "cdsusa.veinteractive.com/CaptureConfigService.asmx/CaptureConfig",
  customerid: 1001499,
  datareceiverurl: "cdsusa.veinteractive.com/DataReceiverService.asmx/DataReceiver",
  Forms: [
    {
      ChatAgentId: 178,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: ".cart-product-img img",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 18125,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".product-name",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 18126,
          HtmlAttributeTag: "Value",
          HtmlType: "h2",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 10,
          HtmlPath: null
        },
        {
          ClientFieldName: ".cart-product-price .price",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 18127,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".cart-product-subtotal .price",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 18128,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 15,
          HtmlPath: null
        },
        {
          ClientFieldName: ".a-center input",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 18129,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".cart-subtotal .price",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 18130,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8,
          HtmlPath: null
        },
        {
          ClientFieldName: "coupon_code",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Name",
          FormMappingId: 18131,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 7,
          HtmlPath: null
        },
        {
          ClientFieldName: ".product-name a",
          DomEvent: "DynamicActivity",
          FieldTypeName: "RawSeries",
          FormMappingId: 18589,
          HtmlAttributeTag: "href",
          HtmlType: "a",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 29,
          HtmlPath: null
        },
        {
          ClientFieldName: ".item-options dt span",
          DomEvent: "OnLoad",
          FieldTypeName: "RawSeries",
          FormMappingId: 34541,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: ""
        },
        {
          ClientFieldName: "#veConnect",
          DomEvent: "OnLoad",
          FieldTypeName: "Raw",
          FormMappingId: 65834,
          HtmlAttributeTag: "Id",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        }
      ],
      FormId: 9483,
      FormTypeId: 1,
      FormURLs: [
        "ploom.com/store/checkout/cart/",
        "ploom.com/checkout/cart/",
        "paxvapor.com/checkout/cart/"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    },
    {
      ChatAgentId: 178,
      EmailOptOut: false,
      FormFields: [
        {
          ClientFieldName: "[name='login[username]']",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 18135,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        },
        {
          ClientFieldName: "[name='billing[email]']",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 18136,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        },
        {
          ClientFieldName: ".total-value .price:first",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 18141,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 8,
          HtmlPath: null
        },
        {
          ClientFieldName: ".product-image img",
          DomEvent: "DynamicActivity",
          FieldTypeName: "RawSeries",
          FormMappingId: 20104,
          HtmlAttributeTag: "src",
          HtmlType: "img",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 13,
          HtmlPath: null
        },
        {
          ClientFieldName: ".total-value .price:eq(1)",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 46150,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".total-value .price:eq(2)",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 46152,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        },
        {
          ClientFieldName: ".total-value .price:last",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 46153,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 1,
          HtmlPath: null
        }
      ],
      FormId: 9484,
      FormTypeId: 1,
      FormURLs: [
        "ploom.com/store/checkout/onepage/",
        "ploom.com/checkout/onepage/",
        "paxvapor.com/checkout/onepage/"
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
          ClientFieldName: "[name='login[username]']",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 18132,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 10453,
      FormTypeId: 1,
      FormURLs: [
        "ploom.com/customer/account/login/",
        "paxvapor.com/customer/account/login/"
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
          ClientFieldName: "[name='email']",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 18133,
          HtmlAttributeTag: "Value",
          HtmlType: ":text",
          IdentifyAbandonment: false,
          isEmail: true,
          FormMappingTypeId: 2,
          HtmlPath: null
        }
      ],
      FormId: 10454,
      FormTypeId: 1,
      FormURLs: [
        "ploom.com/customer/account/create/",
        "paxvapor.com/customer/account/create/"
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
          ClientFieldName: ".title .sub-title",
          DomEvent: "DynamicActivity",
          FieldTypeName: "Raw",
          FormMappingId: 18142,
          HtmlAttributeTag: "Value",
          HtmlType: "span",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 9,
          HtmlPath: null
        },
        {
          ClientFieldName: "veConnect",
          DomEvent: "OnLoad",
          FieldTypeName: "Id",
          FormMappingId: 45359,
          HtmlAttributeTag: "Id",
          HtmlType: "div",
          IdentifyAbandonment: false,
          isEmail: false,
          FormMappingTypeId: 9,
          HtmlPath: null
        }
      ],
      FormId: 10456,
      FormTypeId: 2,
      FormURLs: [
        "ploom.com/checkout/onepage/success/",
        "paxvapor.com/checkout/onepage/success/"
      ],
      IdentifyAbandonmentOr: true,
      NumberIdentifiedFields: 0,
      Name: null,
      OptOuts: [],
      Paremeter: []
    }
  ],
  IdentifyAbandonmentOr: true,
  JourneyCode: "37D266AA-04B6-4846-B28E-824D9A4DEB73",
  JourneyId: 2697,
  JourneyTimeOut: 1800,
  NumberIdentifiedFields: 0,
  OptOutField: 0
},
                /*
                 * The custom settings are based on the standard defined on Settings.js.
                 */
                settings: { domainsToIgnore: ['ploom.com' ], unsupportedBrowsersVersionPlatform: { 'ie' : ['6','7','8'] }, consoleMessagesEnabled: true,
 elementsStoppingAppsOnClick: [ ],
 autocompleteInputsHandler: [ ],
 keywordsRegExp: [ { source: 'Example', regexp: / /, notSearchEngine: false, replaceCharactersBySpace: '-', storeSearchTerm: false, showNoProducts: false, ignoreCloses: false } ],
 cookies: { enabled: true , timeToLive: 60},
}
,

                /*
                 * Custom events that allow custom behavior per journey. The standard is defined on CustomEvents.js.
                 */
                customEvents: {
   
onGetCaptureValue: function(formMappingId, value, controls) {
        if(formMappingId === 45359){
          value = window.universal_variable.transaction.order_id;
        }    
        if( (formMappingId === 18135 || formMappingId === 18136) && VEjQuery('.change_store_cookie').text().trim().toLowerCase().indexOf('ca') > -1 )
        	value = '';

        return value;
    }
},

                /*
                 * Criteria filters that are setup by tech team. The types of Criteria filters possible are:
                 *       * Personality - The matching of this criteria filters will defined the personality that the chat will have
                 *       * Variation
                 */
                criteriaFilters: {},

                /*
                 * All the apps that Ve Interactive has with the events
                 */
                apps: [
  {
    name: "Chat",
    exit: true,
    inactivity: true,
    backButton: true,
    load: true,
    enabled: true,
    maxActivationsPerSession: null,
    activateOnlyOnLastTab: false,
    minTimeBetweenActivations: null,
    exitIntent: true
  }
]
            };
        if (!tag) {

            // Send the request in order to create the cookie session
            if (d.settings.cookies && d.settings.cookies.enabled) {
                var xdr = null;
                if (window.XMLHttpRequest) {
                    xdr = new XMLHttpRequest();
                }

                if (xdr !== null) {
                    var url = d.chatServicesUrl.split('/')[0] + // Getting the rcs URL
                                '/DataReceiverService.asmx/SessionInit?journeyCode=' +
                                d.journeycode +
                                '&timeToLive=' +
                                (d.settings.cookies.timeToLive ? d.settings.cookies.timeToLive : 60); // either the time exist either we use the default time (minutes)

                    xdr.open("GET", location.protocol + "//" + url);
                    xdr.withCredentials = true;
                    xdr.send();
                }
            }


            // Adding the Capture-apps file to the DOM
            tag = document.createElement('script');
            tag.type = 'text/javascript';
            tag.id = 'veConnect';
            tag.async = true;
            tag.src = window.location.protocol + d.veHostDomain +'/scripts/3.0/capture-apps-3.0.1.js';
            b = document.getElementsByTagName('script')[0];
            b.parentNode.insertBefore(tag, b);
        }
        return d;
    })();
};
