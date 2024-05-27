// Copyright 2012 Google Inc. All rights reserved.
(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");
(function () {
  var data = {
    resource: {
      version: "447",

      macros: [
        { function: "__e" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.pageType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "0",
          vtp_name: "viewport.scrollTop",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "0",
          vtp_name: "viewport.height",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "0",
          vtp_name: "viewport.width",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){if("object"!==typeof window.nytAnalytics)return"";var a=',
            ["escape", ["macro", 1], 8, 16],
            '||"";a=a.toLowerCase();window.nytAnalytics.comScorePage=window.nytAnalytics.comScorePage||1;if(!a||"oak"===a||"article"===a){a=window.nytAnalytics.comScorePage;var c=',
            ["escape", ["macro", 2], 8, 16],
            ",b=",
            ["escape", ["macro", 3], 8, 16],
            ",d=768\u003E",
            ["escape", ["macro", 4], 8, 16],
            ';b=d?4*b:2*b;window.nytAnalytics.comScorePage=Math.floor(c/b)+1;return window.nytAnalytics.comScorePage!==a?"track":""}})();',
          ],
        },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "NYT-T" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "nyt-purr" },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__j", vtp_name: "location.search" },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "module.name",
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return!1})();"],
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return!0})();"],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 11],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_defaultValue: ["macro", 12],
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "test-whitelist", "value", ["macro", 13]],
            ["map", "key", "article-complete", "value", ["macro", 13]],
            ["map", "key", "lire-modal", "value", ["macro", 13]],
            ["map", "key", "LogIn", "value", ["macro", 13]],
            ["map", "key", "welcome ad", "value", ["macro", 13]],
            ["map", "key", "review", "value", ["macro", 13]],
            ["map", "key", "Programs", "value", ["macro", 13]],
            ["map", "key", "vi-beta-tools", "value", ["macro", 13]],
            ["map", "key", "inline-message", "value", ["macro", 13]],
            ["map", "key", "newsletters", "value", ["macro", 13]],
            ["map", "key", "video-player-share", "value", ["macro", 13]],
            ["map", "key", "gateway", "value", ["macro", 13]],
            ["map", "key", "audio-player", "value", ["macro", 13]],
            ["map", "key", "share-tools", "value", ["macro", 13]],
            ["map", "key", "comments", "value", ["macro", 13]],
            ["map", "key", "acm", "value", ["macro", 13]],
            ["map", "key", "video-player", "value", ["macro", 13]],
            ["map", "key", "first-scroll", "value", ["macro", 13]],
            ["map", "key", "^games-prototype.*", "value", ["macro", 13]],
            ["map", "key", "[M|m]odal", "value", ["macro", 13]],
            ["map", "key", "settings", "value", ["macro", 13]],
            ["map", "key", "Puzzle", "value", ["macro", 13]],
            ["map", "key", "general", "value", ["macro", 13]],
            ["map", "key", "gameplay", "value", ["macro", 13]],
            ["map", "key", "^interactive.*", "value", ["macro", 13]],
            ["map", "key", "out_bound_clicks", "value", ["macro", 13]],
            ["map", "key", "tap-story", "value", ["macro", 13]],
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.module.name",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "module.ga.eventCategory",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            "||",
            ["escape", ["macro", 11], 8, 16],
            ';return"object"===typeof window.nytAnalytics.gaEvent\u0026\u0026"object"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026"function"===typeof window.nytAnalytics.gaEvent[a].category\u0026\u0026window.nytAnalytics.gaEvent[a].category()||',
            ["escape", ["macro", 16], 8, 16],
            "||a})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.url",
        },
        {
          function: "__u",
          vtp_component: "QUERY",
          vtp_queryKey: "gclid",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "QUERY",
          vtp_queryKey: "dclid",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "application.name",
        },
        {
          function: "__u",
          vtp_component: "QUERY",
          vtp_queryKey: "query",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var b=",
            ["escape", ["macro", 18], 8, 16],
            '||document.location.protocol+"//"+document.location.host+document.location.pathname,a="";',
            ["escape", ["macro", 19], 8, 16],
            '\u0026\u0026(a+="?gclid\\x3d"+',
            ["escape", ["macro", 19], 8, 16],
            ");",
            ["escape", ["macro", 20], 8, 16],
            '\u0026\u0026(a+=(""===a?"?":"\\x26")+"dclid\\x3d"+',
            ["escape", ["macro", 20], 8, 16],
            ');"nyt-help"===',
            ["escape", ["macro", 21], 8, 16],
            "\u0026\u0026",
            ["escape", ["macro", 22], 8, 16],
            '\u0026\u0026(a+=(""===a?"?":"\\x26")+"query\\x3d"+',
            ["escape", ["macro", 22], 8, 16],
            ');return""===a?b:b+a})();',
          ],
        },
        {
          function: "__j",
          vtp_name: "nytAnalytics.campaignMap.campaignSource",
        },
        {
          function: "__j",
          vtp_name: "nytAnalytics.campaignMap.campaignMedium",
        },
        { function: "__j", vtp_name: "nytAnalytics.campaignMap.campaignName" },
        {
          function: "__j",
          vtp_name: "nytAnalytics.campaignMap.campaignContent",
        },
        {
          function: "__j",
          vtp_name: "nytAnalytics.campaignMap.campaignKeyword",
        },
        { function: "__f", vtp_component: "URL" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 29],
          vtp_name: "referrer.url",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 30], 8, 16],
            '\u0026\u0026"null"!==',
            ["escape", ["macro", 30], 8, 16],
            "?",
            ["escape", ["macro", 30], 8, 16],
            ":",
            ["escape", ["macro", 29], 8, 16],
            "})();",
          ],
        },
        { function: "__c", vtp_value: "1" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"object"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.CG?nytAnalytics.pagemeta.CG.toLowerCase():"null"})();',
          ],
        },
        { function: "__c", vtp_value: "2" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"object"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.SCG?nytAnalytics.pagemeta.SCG.toLowerCase():"null"})();',
          ],
        },
        { function: "__c", vtp_value: "3" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"object"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PT?nytAnalytics.pagemeta.PT.toLowerCase():"null"})();',
          ],
        },
        { function: "__c", vtp_value: "4" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"object"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PST?nytAnalytics.pagemeta.PST.toLowerCase():"null"})();',
          ],
        },
        { function: "__c", vtp_value: "1" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.url",
        },
        { function: "__c", vtp_value: "2" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 12],
          vtp_name: "asset.is_refresh",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a;(a=document.location.href)\u0026\u0026"string"===typeof a\u0026\u0026(a=a.replace(/=[!#\\$%\'\\*\\+\\-\\/=\\?\\^_`\\{\\|\\}~;\\.,"\\(\\),:;\u003C\u003E\\[\\\\\\]\\w]+(@|%40)[^.]+\\.[^\u0026]+/g,"\\x3demail_block"));if(',
            ["escape", ["macro", 43], 8, 16],
            '){var b=-1\u003Ca.indexOf("?")?"\\x26":"?";a+=b+"WT.z_jog\\x3d1"}return a})();',
          ],
        },
        { function: "__c", vtp_value: "3" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=document.location.search;",
            ["escape", ["macro", 43], 8, 16],
            '\u0026\u0026(connector=-1\u003CcleanURL.indexOf("?")?"\\x26":"?",a+=connector+"WT.z_jog\\x3d1");return a})();',
          ],
        },
        { function: "__c", vtp_value: "4" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.section",
        },
        { function: "__c", vtp_value: "5" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.paid_post",
        },
        { function: "__c", vtp_value: "6" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.module.name",
        },
        { function: "__c", vtp_value: "7" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.pagetype",
        },
        { function: "__c", vtp_value: "8" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.module.region",
        },
        { function: "__c", vtp_value: "9" },
        { function: "__c", vtp_value: "10" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return nytAnalytics.derivedReferrer.source?nytAnalytics.derivedReferrer.source:"null"})();',
          ],
        },
        { function: "__c", vtp_value: "11" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.collection",
        },
        { function: "__c", vtp_value: "12" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.subsection",
        },
        { function: "__c", vtp_value: "13" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=nytAnalytics.derivedReferrer.subchannel?nytAnalytics.derivedReferrer.subchannel:"null";return a})();',
          ],
        },
        { function: "__c", vtp_value: "14" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "asset.derivedDesk",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 67], 8, 16],
            "?",
            ["escape", ["macro", 67], 8, 16],
            ':"null";return a})();',
          ],
        },
        { function: "__c", vtp_value: "15" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=nytAnalytics.derivedReferrer.type?nytAnalytics.derivedReferrer.type:"null";return a})();',
          ],
        },
        { function: "__c", vtp_value: "16" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=nytAnalytics.derivedReferrer.channel?nytAnalytics.derivedReferrer.channel:"null";return a})();',
          ],
        },
        { function: "__c", vtp_value: "17" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.id",
        },
        { function: "__c", vtp_value: "18" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.authors",
        },
        { function: "__c", vtp_value: "19" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.headline",
        },
        { function: "__c", vtp_value: "20" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.kicker",
        },
        { function: "__c", vtp_value: "21" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.pageType",
        },
        { function: "__c", vtp_value: "22" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.printPublishDate",
        },
        { function: "__c", vtp_value: "23" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.section",
        },
        { function: "__c", vtp_value: "24" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.gatewayViewed",
        },
        { function: "__c", vtp_value: "25" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.subsection",
        },
        { function: "__c", vtp_value: "26" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.publishedTimestamp",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 92], 8, 16],
            "?window.nytAnalytics.formatDates(",
            ["escape", ["macro", 92], 8, 16],
            ',"year"):"null"})();',
          ],
        },
        { function: "__c", vtp_value: "27" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 92], 8, 16],
            "?window.nytAnalytics.formatDates(",
            ["escape", ["macro", 92], 8, 16],
            ',"date"):"null"})();',
          ],
        },
        { function: "__c", vtp_value: "28" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 92], 8, 16],
            "?window.nytAnalytics.formatDates(",
            ["escape", ["macro", 92], 8, 16],
            ',"day"):"null"})();',
          ],
        },
        { function: "__c", vtp_value: "29" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 92], 8, 16],
            "?window.nytAnalytics.formatDates(",
            ["escape", ["macro", 92], 8, 16],
            ',"hours"):"null"})();',
          ],
        },
        { function: "__c", vtp_value: "30" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "null",
          vtp_name: "asset.lastUpdatedTimestamp",
        },
        { function: "__c", vtp_value: "31" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.characterCount",
        },
        { function: "__c", vtp_value: "32" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.collectionName",
        },
        { function: "__c", vtp_value: "33" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.collectionType",
        },
        { function: "__c", vtp_value: "34" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.contentTone",
        },
        { function: "__c", vtp_value: "35" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.series",
        },
        { function: "__c", vtp_value: "36" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "asset.slug",
        },
        { function: "__c", vtp_value: "37" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.wordCount",
        },
        { function: "__c", vtp_value: "38" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.desk",
        },
        { function: "__c", vtp_value: "39" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.typeOfMaterials",
        },
        { function: "__c", vtp_value: "40" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.sourceNewsOrg",
        },
        { function: "__c", vtp_value: "41" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.sourceUSvsIntl",
        },
        { function: "__c", vtp_value: "42" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "application.name",
        },
        { function: "__c", vtp_value: "43" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.desFacets",
        },
        { function: "__c", vtp_value: "44" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.orgFacets",
        },
        { function: "__c", vtp_value: "45" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.perFacets",
        },
        { function: "__c", vtp_value: "46" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.geoFacets",
        },
        { function: "__c", vtp_value: "47" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "marketing.paidPostParameter",
        },
        { function: "__c", vtp_value: "48" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 92], 8, 16],
            "?window.nytAnalytics.formatDates(",
            ["escape", ["macro", 92], 8, 16],
            ',"month"):"null"})();',
          ],
        },
        { function: "__c", vtp_value: "49" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.wordCount",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return 100\u003E",
            ["escape", ["macro", 139], 8, 16],
            '?"blurb_under_100":400\u003E',
            ["escape", ["macro", 139], 8, 16],
            '?"super_short_100_399":800\u003E',
            ["escape", ["macro", 139], 8, 16],
            '?"short_400_799":1200\u003E',
            ["escape", ["macro", 139], 8, 16],
            '?"medium_800_1199":1600\u003E=',
            ["escape", ["macro", 139], 8, 16],
            '?"long_1200_1600":1600\u003C',
            ["escape", ["macro", 139], 8, 16],
            '?"heave_over_1600":""})();',
          ],
        },
        { function: "__c", vtp_value: "50" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.pageSubType",
        },
        { function: "__c", vtp_value: "51" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 21], 8, 16],
            "})();",
          ],
        },
        { function: "__c", vtp_value: "52" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=document.querySelector(\'meta[name\\x3d"applicationName"]\');return a?a.content:""})();',
          ],
        },
        { function: "__c", vtp_value: "53" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.originatingDesk",
        },
        { function: "__c", vtp_value: "54" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 67], 8, 16],
            "?",
            ["escape", ["macro", 67], 8, 16],
            ':"null";return a})();',
          ],
        },
        { function: "__c", vtp_value: "55" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "session.isLoggedIn",
        },
        { function: "__c", vtp_value: "56" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.type",
        },
        { function: "__c", vtp_value: "57" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.type",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"sub"===',
            ["escape", ["macro", 156], 8, 16],
            "?1:0})();",
          ],
        },
        { function: "__c", vtp_value: "58" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.regiId",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 159], 8, 16],
            "?1:0})();",
          ],
        },
        { function: "__c", vtp_value: "59" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.regiId",
        },
        { function: "__c", vtp_value: "60" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.regiId",
        },
        { function: "__c", vtp_value: "61" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "nyt-m" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var g=function(b,a){if((b=(new RegExp(b+"\\x3d([il]{1}).([^\\x26]+)")).exec(a))\u0026\u00263\u003C=b.length)switch(b[1]){case "i":return parseInt(b[2],10);case "l":return b[2].split(".").slice(1).map(function(a){return parseInt(a,10)})}return null},a,d={},e=',
            ["escape", ["macro", 166], 8, 16],
            ';if(e){var c=["v","t"];for(a=0;a\u003Cc.length;a++){var f=g(c[a],e);null!==f\u0026\u0026(d[c[a]]=f)}}return d})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"object"===typeof ',
            ["escape", ["macro", 167], 8, 16],
            "?",
            ["escape", ["macro", 167], 8, 16],
            '.v:""})();',
          ],
        },
        { function: "__c", vtp_value: ["macro", 168] },
        { function: "__c", vtp_value: "62" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.edition",
        },
        { function: "__c", vtp_value: "63" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "nyt-a" },
        { function: "__c", vtp_value: ["macro", 173] },
        { function: "__c", vtp_value: "64" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.isLoggedIn",
        },
        { function: "__c", vtp_value: "65" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.type",
        },
        { function: "__c", vtp_value: "66" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.DMA",
        },
        { function: "__c", vtp_value: "67" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"sub"===',
            ["escape", ["macro", 156], 8, 16],
            "?1:0})();",
          ],
        },
        { function: "__c", vtp_value: "68" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.channels",
        },
        { function: "__c", vtp_value: "69" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.savedArticles",
        },
        { function: "__c", vtp_value: "72" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "marketing.creative",
        },
        { function: "__c", vtp_value: "73" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "marketing.flight",
        },
        { function: "__c", vtp_value: "74" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.slideshow.length",
        },
        { function: "__c", vtp_value: "75" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.slideshow.currentEntry",
        },
        { function: "__c", vtp_value: "76" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.slideshow.title",
        },
        { function: "__c", vtp_value: "79" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.search.process",
        },
        { function: "__c", vtp_value: "80" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.search.mood",
        },
        { function: "__c", vtp_value: "81" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.originalURL",
        },
        { function: "__c", vtp_value: "82" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "marketing.campaignInternal",
        },
        { function: "__c", vtp_value: "83" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "marketing.campaignInternal",
        },
        { function: "__c", vtp_value: "84" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "application.beta",
        },
        { function: "__c", vtp_value: "85" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.audioFranchise",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.mData.series",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 211],
          vtp_name: "video.mData.series",
        },
        {
          function: "__smm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 11],
          vtp_defaultValue: ["macro", 210],
          vtp_map: [
            "list",
            ["map", "key", "audio-player", "value", ["macro", 212]],
          ],
        },
        { function: "__c", vtp_value: "86" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.regiCreateDate",
        },
        { function: "__c", vtp_value: "87" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.newsletter.subscriber",
        },
        { function: "__c", vtp_value: "88" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "search.era",
        },
        { function: "__c", vtp_value: "89" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "search.genre",
        },
        { function: "__c", vtp_value: "90" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "search.subgenre",
        },
        { function: "__c", vtp_value: "91" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.newsletter.subscribeDate",
        },
        { function: "__c", vtp_value: "92" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "marketing.offerID",
        },
        { function: "__c", vtp_value: "93" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.subscription.stopped",
        },
        { function: "__c", vtp_value: "94" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.subscription.corp",
        },
        { function: "__c", vtp_value: "95" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.subscriptions.purchaseDate",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.subscriptions.activeSubscriberSince",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 233], 8, 16],
            "||",
            ["escape", ["macro", 234], 8, 16],
            ';try{var b=nytAnalytics.formatDates(a,"dateAlone")}catch(c){}return b})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 235],
          vtp_name: "user.subscriptions.purchaseDate",
        },
        { function: "__c", vtp_value: "96" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.subscriptions.activeBundles.0",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 238],
          vtp_name: "user.subscriptions.bundle",
        },
        { function: "__c", vtp_value: "97" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.bundeFilter",
        },
        { function: "__c", vtp_value: "98" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "marketing.payflowType",
        },
        { function: "__c", vtp_value: "99" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "market.firstSubLanding",
        },
        { function: "__c", vtp_value: "100" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.IntGraphics",
        },
        { function: "__c", vtp_value: "101" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.multiLingual",
        },
        { function: "__c", vtp_value: "102" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.save_type",
        },
        { function: "__c", vtp_value: "104" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.well.guideTitle",
        },
        { function: "__c", vtp_value: "105" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.well.cardPosition",
        },
        { function: "__c", vtp_value: "109" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.realEstateChannel",
        },
        { function: "__c", vtp_value: "110" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.realEstatePageType",
        },
        { function: "__c", vtp_value: "111" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.realEstateModuleID",
        },
        { function: "__c", vtp_value: "112" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.realEstateModuleType",
        },
        { function: "__c", vtp_value: "113" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.realEstateModuleItemID",
        },
        { function: "__c", vtp_value: "114" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.payflowsProduct",
        },
        { function: "__c", vtp_value: "116" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "payflows.region",
        },
        { function: "__c", vtp_value: "117" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "payflows.rate",
        },
        { function: "__c", vtp_value: "118" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.story_form",
        },
        { function: "__c", vtp_value: "119" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.spotlights",
        },
        { function: "__c", vtp_value: "120" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.krux_segment",
        },
        { function: "__c", vtp_value: "121" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.print_section",
        },
        { function: "__c", vtp_value: "122" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.referrer",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 281],
          vtp_name: "video.referrer",
        },
        { function: "__c", vtp_value: "123" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.contentId",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 284],
          vtp_name: "video.contentId",
        },
        { function: "__c", vtp_value: "124" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.mData.videoAdDuration",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 287],
          vtp_name: "video.mData.videoAdDuration",
        },
        { function: "__c", vtp_value: "125" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.mData.videoAdPosition",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 290],
          vtp_name: "video.mData.videoAdPosition",
        },
        { function: "__c", vtp_value: "126" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.mData.videoDuration",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 293],
          vtp_name: "video.mData.videoDuration",
        },
        { function: "__c", vtp_value: "127" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.durationGroup",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 296],
          vtp_name: "video.durationGroup",
        },
        { function: "__c", vtp_value: "128" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.https_test",
        },
        { function: "__c", vtp_value: "129" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.tracking.sessionStart",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=new Date(",
            ["escape", ["macro", 301], 8, 16],
            ");return a=a.getHours()})();",
          ],
        },
        { function: "__c", vtp_value: "130" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "session.www_testID",
        },
        { function: "__c", vtp_value: "131" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "session.mobileweb_testID",
        },
        { function: "__c", vtp_value: "132" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "session.qa_dimension_three",
        },
        { function: "__c", vtp_value: "133" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "do.we.need.this",
        },
        { function: "__c", vtp_value: "134" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "session.qa_dimension_four",
        },
        { function: "__c", vtp_value: "135" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "asset.column",
        },
        { function: "__c", vtp_value: "136" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "session.optimizely",
        },
        { function: "__c", vtp_value: "137" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "session.optimizely",
        },
        { function: "__c", vtp_value: "138" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "media.mData.videoFranchise",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 320],
          vtp_name: "video.mData.videoFranchise",
        },
        { function: "__c", vtp_value: "139" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.mData.videoSection",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 323],
          vtp_name: "video.mData.videoSection",
        },
        { function: "__c", vtp_value: "140" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "session.adblock_enabled",
        },
        { function: "__c", vtp_value: "141" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.mData.videoPrimaryPlaylistId",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 328],
          vtp_name: "video.mData.videoPrimaryPlaylistId",
        },
        { function: "__c", vtp_value: "142" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.mData.videoPrimaryPlaylistName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 331],
          vtp_name: "video.mData.videoPrimaryPlaylistName",
        },
        { function: "__c", vtp_value: "143" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.real_estate.listing.id",
        },
        { function: "__c", vtp_value: "144" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.real_estate.listing.price",
        },
        { function: "__c", vtp_value: "145" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.real_estate.buildingID",
        },
        { function: "__c", vtp_value: "146" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.real_estate.new",
        },
        { function: "__c", vtp_value: "147" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.real_estate.reduced",
        },
        { function: "__c", vtp_value: "148" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.real_estate.open_house",
        },
        { function: "__c", vtp_value: "149" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "newsletter.interface",
        },
        { function: "__c", vtp_value: "150" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "newsletter.subinterface",
        },
        { function: "__c", vtp_value: "154" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "marketing.campaignID_ecommerce",
        },
        { function: "__c", vtp_value: "160" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.url_path_filter",
        },
        { function: "__c", vtp_value: "162" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.url",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 354],
          vtp_name: "video.url",
        },
        { function: "__c", vtp_value: "163" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.mData.videoType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 357],
          vtp_name: "video.mData.videoType",
        },
        { function: "__c", vtp_value: "164" },
        { function: "__c", vtp_value: ["macro", 173] },
        { function: "__c", vtp_value: "166" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.missing_paper.eligibility",
        },
        { function: "__c", vtp_value: "167" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.missing_paper.resolution_type",
        },
        { function: "__c", vtp_value: "168" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.missing_paper.redelivery_request",
        },
        { function: "__c", vtp_value: "169" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.missing_paper.user_state",
        },
        { function: "__c", vtp_value: "172" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.program.breakpoint.initial",
        },
        { function: "__c", vtp_value: "173" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 370],
          vtp_name: "presentation.program.breakpoint.rendered",
        },
        { function: "__c", vtp_value: "179" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.contentId",
        },
        { function: "__c", vtp_value: "180" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.videoName",
        },
        { function: "__c", vtp_value: "181" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.videoType",
        },
        { function: "__c", vtp_value: "182" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.section",
        },
        { function: "__c", vtp_value: "183" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.subSection",
        },
        { function: "__c", vtp_value: "184" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.duration",
        },
        { function: "__c", vtp_value: "185" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.durationGroup",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){notprod=!document.location.hostname.match(/nytimes\\.com/)||!!document.location.hostname.match(/test\\.|dev\\.|stg\\./);switch(",
            ["escape", ["macro", 21], 8, 16],
            '){case "nyt-help":return"UA-58630905-28";default:return notprod?"UA-58630905-7":"UA-58630905-2"}})();',
          ],
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_fieldsToSet: [
            "list",
            ["map", "fieldName", "cookieName", "value", "walley"],
            ["map", "fieldName", "location", "value", ["macro", 23]],
            ["map", "fieldName", "campaignSource", "value", ["macro", 24]],
            ["map", "fieldName", "campaignMedium", "value", ["macro", 25]],
            ["map", "fieldName", "campaignName", "value", ["macro", 26]],
            ["map", "fieldName", "campaignContent", "value", ["macro", 27]],
            ["map", "fieldName", "campaignKeyword", "value", ["macro", 28]],
            ["map", "fieldName", "referrer", "value", ["macro", 31]],
            ["map", "fieldName", "anonymizeIp", "value", "true"],
          ],
          vtp_useHashAutoLink: false,
          vtp_contentGroup: [
            "list",
            ["map", "index", ["macro", 32], "group", ["macro", 33]],
            ["map", "index", ["macro", 34], "group", ["macro", 35]],
            ["map", "index", ["macro", 36], "group", ["macro", 37]],
            ["map", "index", ["macro", 38], "group", ["macro", 39]],
          ],
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_dimension: [
            "list",
            ["map", "index", ["macro", 40], "dimension", ["macro", 41]],
            ["map", "index", ["macro", 42], "dimension", ["macro", 44]],
            ["map", "index", ["macro", 45], "dimension", ["macro", 46]],
            ["map", "index", ["macro", 47], "dimension", ["macro", 48]],
            ["map", "index", ["macro", 49], "dimension", ["macro", 50]],
            ["map", "index", ["macro", 51], "dimension", ["macro", 52]],
            ["map", "index", ["macro", 53], "dimension", ["macro", 54]],
            ["map", "index", ["macro", 55], "dimension", ["macro", 56]],
            ["map", "index", ["macro", 57], "dimension", ["macro", 57]],
            ["map", "index", ["macro", 58], "dimension", ["macro", 59]],
            ["map", "index", ["macro", 60], "dimension", ["macro", 61]],
            ["map", "index", ["macro", 62], "dimension", ["macro", 63]],
            ["map", "index", ["macro", 64], "dimension", ["macro", 65]],
            ["map", "index", ["macro", 66], "dimension", ["macro", 68]],
            ["map", "index", ["macro", 69], "dimension", ["macro", 70]],
            ["map", "index", ["macro", 71], "dimension", ["macro", 72]],
            ["map", "index", ["macro", 73], "dimension", ["macro", 74]],
            ["map", "index", ["macro", 75], "dimension", ["macro", 76]],
            ["map", "index", ["macro", 77], "dimension", ["macro", 78]],
            ["map", "index", ["macro", 79], "dimension", ["macro", 80]],
            ["map", "index", ["macro", 81], "dimension", ["macro", 82]],
            ["map", "index", ["macro", 83], "dimension", ["macro", 84]],
            ["map", "index", ["macro", 85], "dimension", ["macro", 86]],
            ["map", "index", ["macro", 87], "dimension", ["macro", 88]],
            ["map", "index", ["macro", 89], "dimension", ["macro", 90]],
            ["map", "index", ["macro", 91], "dimension", ["macro", 93]],
            ["map", "index", ["macro", 94], "dimension", ["macro", 95]],
            ["map", "index", ["macro", 96], "dimension", ["macro", 97]],
            ["map", "index", ["macro", 98], "dimension", ["macro", 99]],
            ["map", "index", ["macro", 100], "dimension", ["macro", 101]],
            ["map", "index", ["macro", 102], "dimension", ["macro", 103]],
            ["map", "index", ["macro", 104], "dimension", ["macro", 105]],
            ["map", "index", ["macro", 106], "dimension", ["macro", 107]],
            ["map", "index", ["macro", 108], "dimension", ["macro", 109]],
            ["map", "index", ["macro", 110], "dimension", ["macro", 111]],
            ["map", "index", ["macro", 112], "dimension", ["macro", 113]],
            ["map", "index", ["macro", 114], "dimension", ["macro", 115]],
            ["map", "index", ["macro", 116], "dimension", ["macro", 117]],
            ["map", "index", ["macro", 118], "dimension", ["macro", 119]],
            ["map", "index", ["macro", 120], "dimension", ["macro", 121]],
            ["map", "index", ["macro", 122], "dimension", ["macro", 123]],
            ["map", "index", ["macro", 124], "dimension", ["macro", 125]],
            ["map", "index", ["macro", 126], "dimension", ["macro", 127]],
            ["map", "index", ["macro", 128], "dimension", ["macro", 129]],
            ["map", "index", ["macro", 130], "dimension", ["macro", 131]],
            ["map", "index", ["macro", 132], "dimension", ["macro", 133]],
            ["map", "index", ["macro", 134], "dimension", ["macro", 135]],
            ["map", "index", ["macro", 136], "dimension", ["macro", 137]],
            ["map", "index", ["macro", 138], "dimension", ["macro", 140]],
            ["map", "index", ["macro", 141], "dimension", ["macro", 142]],
            ["map", "index", ["macro", 143], "dimension", ["macro", 144]],
            ["map", "index", ["macro", 145], "dimension", ["macro", 146]],
            ["map", "index", ["macro", 147], "dimension", ["macro", 148]],
            ["map", "index", ["macro", 149], "dimension", ["macro", 150]],
            ["map", "index", ["macro", 151], "dimension", ["macro", 152]],
            ["map", "index", ["macro", 153], "dimension", ["macro", 154]],
            ["map", "index", ["macro", 155], "dimension", ["macro", 157]],
            ["map", "index", ["macro", 158], "dimension", ["macro", 160]],
            ["map", "index", ["macro", 161], "dimension", ["macro", 162]],
            ["map", "index", ["macro", 163], "dimension", ["macro", 164]],
            ["map", "index", ["macro", 165], "dimension", ["macro", 169]],
            ["map", "index", ["macro", 170], "dimension", ["macro", 171]],
            ["map", "index", ["macro", 172], "dimension", ["macro", 174]],
            ["map", "index", ["macro", 175], "dimension", ["macro", 176]],
            ["map", "index", ["macro", 177], "dimension", ["macro", 178]],
            ["map", "index", ["macro", 179], "dimension", ["macro", 180]],
            ["map", "index", ["macro", 181], "dimension", ["macro", 182]],
            ["map", "index", ["macro", 183], "dimension", ["macro", 184]],
            ["map", "index", ["macro", 185], "dimension", ["macro", 186]],
            ["map", "index", ["macro", 187], "dimension", ["macro", 188]],
            ["map", "index", ["macro", 189], "dimension", ["macro", 190]],
            ["map", "index", ["macro", 191], "dimension", ["macro", 192]],
            ["map", "index", ["macro", 193], "dimension", ["macro", 194]],
            ["map", "index", ["macro", 195], "dimension", ["macro", 196]],
            ["map", "index", ["macro", 197], "dimension", ["macro", 198]],
            ["map", "index", ["macro", 199], "dimension", ["macro", 200]],
            ["map", "index", ["macro", 201], "dimension", ["macro", 202]],
            ["map", "index", ["macro", 203], "dimension", ["macro", 204]],
            ["map", "index", ["macro", 205], "dimension", ["macro", 206]],
            ["map", "index", ["macro", 207], "dimension", ["macro", 208]],
            ["map", "index", ["macro", 209], "dimension", ["macro", 213]],
            ["map", "index", ["macro", 214], "dimension", ["macro", 215]],
            ["map", "index", ["macro", 216], "dimension", ["macro", 217]],
            ["map", "index", ["macro", 218], "dimension", ["macro", 219]],
            ["map", "index", ["macro", 220], "dimension", ["macro", 221]],
            ["map", "index", ["macro", 222], "dimension", ["macro", 223]],
            ["map", "index", ["macro", 224], "dimension", ["macro", 225]],
            ["map", "index", ["macro", 226], "dimension", ["macro", 227]],
            ["map", "index", ["macro", 228], "dimension", ["macro", 229]],
            ["map", "index", ["macro", 230], "dimension", ["macro", 231]],
            ["map", "index", ["macro", 232], "dimension", ["macro", 236]],
            ["map", "index", ["macro", 237], "dimension", ["macro", 239]],
            ["map", "index", ["macro", 240], "dimension", ["macro", 241]],
            ["map", "index", ["macro", 242], "dimension", ["macro", 243]],
            ["map", "index", ["macro", 244], "dimension", ["macro", 245]],
            ["map", "index", ["macro", 246], "dimension", ["macro", 247]],
            ["map", "index", ["macro", 248], "dimension", ["macro", 249]],
            ["map", "index", ["macro", 250], "dimension", ["macro", 251]],
            ["map", "index", ["macro", 252], "dimension", ["macro", 253]],
            ["map", "index", ["macro", 254], "dimension", ["macro", 255]],
            ["map", "index", ["macro", 256], "dimension", ["macro", 257]],
            ["map", "index", ["macro", 258], "dimension", ["macro", 259]],
            ["map", "index", ["macro", 260], "dimension", ["macro", 261]],
            ["map", "index", ["macro", 262], "dimension", ["macro", 263]],
            ["map", "index", ["macro", 264], "dimension", ["macro", 265]],
            ["map", "index", ["macro", 266], "dimension", ["macro", 267]],
            ["map", "index", ["macro", 268], "dimension", ["macro", 269]],
            ["map", "index", ["macro", 270], "dimension", ["macro", 271]],
            ["map", "index", ["macro", 272], "dimension", ["macro", 273]],
            ["map", "index", ["macro", 274], "dimension", ["macro", 275]],
            ["map", "index", ["macro", 276], "dimension", ["macro", 277]],
            ["map", "index", ["macro", 278], "dimension", ["macro", 279]],
            ["map", "index", ["macro", 280], "dimension", ["macro", 282]],
            ["map", "index", ["macro", 283], "dimension", ["macro", 285]],
            ["map", "index", ["macro", 286], "dimension", ["macro", 288]],
            ["map", "index", ["macro", 289], "dimension", ["macro", 291]],
            ["map", "index", ["macro", 292], "dimension", ["macro", 294]],
            ["map", "index", ["macro", 295], "dimension", ["macro", 297]],
            ["map", "index", ["macro", 298], "dimension", ["macro", 299]],
            ["map", "index", ["macro", 300], "dimension", ["macro", 302]],
            ["map", "index", ["macro", 303], "dimension", ["macro", 304]],
            ["map", "index", ["macro", 305], "dimension", ["macro", 306]],
            ["map", "index", ["macro", 307], "dimension", ["macro", 308]],
            ["map", "index", ["macro", 309], "dimension", ["macro", 310]],
            ["map", "index", ["macro", 311], "dimension", ["macro", 312]],
            ["map", "index", ["macro", 313], "dimension", ["macro", 314]],
            ["map", "index", ["macro", 315], "dimension", ["macro", 316]],
            ["map", "index", ["macro", 317], "dimension", ["macro", 318]],
            ["map", "index", ["macro", 319], "dimension", ["macro", 321]],
            ["map", "index", ["macro", 322], "dimension", ["macro", 324]],
            ["map", "index", ["macro", 325], "dimension", ["macro", 326]],
            ["map", "index", ["macro", 327], "dimension", ["macro", 329]],
            ["map", "index", ["macro", 330], "dimension", ["macro", 332]],
            ["map", "index", ["macro", 333], "dimension", ["macro", 334]],
            ["map", "index", ["macro", 335], "dimension", ["macro", 336]],
            ["map", "index", ["macro", 337], "dimension", ["macro", 338]],
            ["map", "index", ["macro", 339], "dimension", ["macro", 340]],
            ["map", "index", ["macro", 341], "dimension", ["macro", 342]],
            ["map", "index", ["macro", 343], "dimension", ["macro", 344]],
            ["map", "index", ["macro", 345], "dimension", ["macro", 346]],
            ["map", "index", ["macro", 347], "dimension", ["macro", 348]],
            ["map", "index", ["macro", 349], "dimension", ["macro", 350]],
            ["map", "index", ["macro", 351], "dimension", ["macro", 352]],
            ["map", "index", ["macro", 353], "dimension", ["macro", 355]],
            ["map", "index", ["macro", 356], "dimension", ["macro", 358]],
            ["map", "index", ["macro", 359], "dimension", ["macro", 360]],
            ["map", "index", ["macro", 361], "dimension", ["macro", 362]],
            ["map", "index", ["macro", 363], "dimension", ["macro", 364]],
            ["map", "index", ["macro", 365], "dimension", ["macro", 366]],
            ["map", "index", ["macro", 367], "dimension", ["macro", 368]],
            ["map", "index", ["macro", 369], "dimension", ["macro", 370]],
            ["map", "index", ["macro", 371], "dimension", ["macro", 372]],
            ["map", "index", ["macro", 373], "dimension", ["macro", 374]],
            ["map", "index", ["macro", 375], "dimension", ["macro", 376]],
            ["map", "index", ["macro", 377], "dimension", ["macro", 378]],
            ["map", "index", ["macro", 379], "dimension", ["macro", 380]],
            ["map", "index", ["macro", 381], "dimension", ["macro", 382]],
            ["map", "index", ["macro", 383], "dimension", ["macro", 384]],
            ["map", "index", ["macro", 385], "dimension", ["macro", 386]],
          ],
          vtp_enableEcommerce: false,
          vtp_trackingId: ["macro", 387],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "module.ga.eventAction",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "interaction.module.element.name",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "module.element.name",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            "||",
            ["escape", ["macro", 11], 8, 16],
            ';return"object"===typeof window.nytAnalytics.gaEvent\u0026\u0026"object"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026"function"===typeof window.nytAnalytics.gaEvent[a].action\u0026\u0026window.nytAnalytics.gaEvent[a].action()||',
            ["escape", ["macro", 389], 8, 16],
            "||",
            ["escape", ["macro", 390], 8, 16],
            "||",
            ["escape", ["macro", 391], 8, 16],
            "})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "module.ga.eventLabel",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "interaction.region",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "module.element.label",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "module.label",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            "||",
            ["escape", ["macro", 11], 8, 16],
            ';return"object"===typeof window.nytAnalytics.gaEvent\u0026\u0026"object"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026"function"===typeof window.nytAnalytics.gaEvent[a].label\u0026\u0026window.nytAnalytics.gaEvent[a].label()||',
            ["escape", ["macro", 393], 8, 16],
            "||",
            ["escape", ["macro", 394], 8, 16],
            "||",
            ["escape", ["macro", 395], 8, 16],
            "||",
            ["escape", ["macro", 396], 8, 16],
            "})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "module.ga.eventValue",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 15], 8, 16],
            "||",
            ["escape", ["macro", 11], 8, 16],
            ';return"object"===typeof window.nytAnalytics.gaEvent\u0026\u0026"object"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026"function"===typeof window.nytAnalytics.gaEvent[a].value\u0026\u0026window.nytAnalytics.gaEvent[a].value()||',
            ["escape", ["macro", 398], 8, 16],
            "})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var c=",
            ["escape", ["macro", 395], 8, 16],
            ",a=",
            ["escape", ["macro", 391], 8, 16],
            ",b=",
            ["escape", ["macro", 11], 8, 16],
            ';if("share-tools"===b\u0026\u0026a){if(-1\u003Ca.indexOf("facebook"))return 14;if(-1\u003Ca.indexOf("twitter"))return 15;if(-1\u003Ca.indexOf("email"))return 16;if(-1\u003Ca.indexOf("pinterest"))return 17;if(-1\u003Ca.indexOf("linkedin"))return 18;if(-1\u003Ca.indexOf("google"))return 19;if(-1\u003Ca.indexOf("reddit"))return 20;if(-1\u003Ca.indexOf("whatsapp"))return 21;if(-1\u003Ca.indexOf("save"))return 22;if(-1\u003Ca.indexOf("permalink"))return 23}if("newsletters"===\nb\u0026\u0026"subscribe"===a)return-1\u003Cc.indexOf("opt in")?10:6;if("comments"===b){if("submit-new"===a)return 11;if("submit-reply"===a)return 33}return""})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return 1})();"],
        },
        { function: "__e" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.eventName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 403],
          vtp_name: "video.eventName",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoNonInteractions=window.nytAnalytics.videoNonInteractions||{"cherry-api-request-error":!0,"fw-admanager-load-error":!0,"qos-library-load-failure":!0,"rendition-not-found":!0,"player-load":!0,"video-inview":!0,"imax-countdown-pause":!0,"imax-countdown-complete":!0};return"mediaEvent"===',
            ["escape", ["macro", 402], 8, 16],
            "?window.nytAnalytics.videoNonInteractions[",
            ["escape", ["macro", 403], 8, 16],
            "]||!1:window.nytAnalytics.videoNonInteractions[",
            ["escape", ["macro", 404], 8, 16],
            "]||\n!1})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.mData.videoDeliveryMethod",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "media.version",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.videoDeliveryMethod",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 407],
          vtp_name: "video.version",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"mediaEvent"===',
            ["escape", ["macro", 402], 8, 16],
            '?("live"===',
            ["escape", ["macro", 406], 8, 16],
            '?"Live | ":"Video | ")+',
            ["escape", ["macro", 407], 8, 16],
            ':("live"===',
            ["escape", ["macro", 408], 8, 16],
            '?"Live | ":"Video | ")+',
            ["escape", ["macro", 409], 8, 16],
            "})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoActions=window.nytAnalytics.videoActions||{"ad-complete":"ad complete","ad-pause":"ad pause","ad-resume":"ad resume","ad-start":"ad start","exit-fullscreen":"exit fullscreen","go-fullscreen":"go fullscreen","hd-off":"hd off","hd-on":"hd on",pause:"pause",resume:"resume","skip-ad":"ad skip","video-load":"video load","video-inview":"video inview","auto-play-next":"autoplay next","auto-play-start":"autoplay start","percent-25-viewed":"viewed: 25%",\n"percent-50-viewed":"viewed: 50%","percent-75-viewed":"viewed: 75%","3-seconds-viewed":"3-seconds-viewed","30-seconds-viewed":"30-seconds-viewed","360-drag-start":"360-drag-start","360-drag-stop":"360-drag-stop","360-compass-click":"360-compass-click","share-embed":"share: embed","share-facebook":"share: facebook","share-twitter":"share: twitter",seek:"seek","user-play":"user play","video-complete":"viewed:100%","media-error":"media-error","cherry-api-request-error":"cherry-api-request-error","fw-admanager-load-error":"fw-admanager-load-error",\n"qos-library-load-failure":"qos-library-load-failure","rendition-not-found":"rendition-not-found","player-load":"player load","imax-countdown-pause":"imax-countdown-pause","imax-countdown-complete":"imax-countdown-complete"};return"mediaEvent"===',
            ["escape", ["macro", 402], 8, 16],
            "?window.nytAnalytics.videoActions[",
            ["escape", ["macro", 403], 8, 16],
            "]||",
            ["escape", ["macro", 403], 8, 16],
            ":window.nytAnalytics.videoActions[",
            ["escape", ["macro", 404], 8, 16],
            "]||",
            ["escape", ["macro", 404], 8, 16],
            "})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "media.mData.videoName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 412],
          vtp_name: "video.mData.videoName",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"mediaEvent"===',
            ["escape", ["macro", 402], 8, 16],
            "?decodeURIComponent(",
            ["escape", ["macro", 412], 8, 16],
            "):decodeURIComponent(",
            ["escape", ["macro", 413], 8, 16],
            ")})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoCustomMetrics=window.nytAnalytics.videoCustomMetrics||{"auto-play-next":32,"auto-play-start":31,"percent-25-viewed":24,"percent-50-viewed":25,"percent-75-viewed":26,"3-seconds-viewed":42,"30-seconds-viewed":43,"360-drag-start":58,"360-drag-stop":59,"360-compass-click":60,"share-embed":4,"share-facebook":4,"share-twitter":4,"user-play":1,"video-complete":3,"user-play-audio":34,"percent-25-heard":35,"percent-50-heard":36,\n"percent-75-heard":37,"audio-complete":38,"audio-inview":63};return window.nytAnalytics.videoCustomMetrics[',
            ["escape", ["macro", 404], 8, 16],
            ']||""})();',
          ],
        },
        { function: "__r" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventData.gaAction",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return/OS 10_3_3.*CriOS\\/[\\d\\.]+ Mobile/.test(navigator.userAgent)?1:0})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=navigator.userAgent;if(!/.*(iphone|ipad|ipod|silk).*$/i.test(a)\u0026\u0026(a=/Mac OS X (\\d+)[_\\.](\\d+)([_\\.](\\d+))?/.exec(a))\u0026\u00265\u003C=a.length){var b=parseInt(a[1],10);return 10\u003Eb||10===b\u0026\u00269\u003E=parseInt(a[2],10)?1:0}return 0})();",
          ],
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.subscriberInfo.condensedBundleCodes",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.tracking.lastKnownType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventData.hit.hitType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "eventData.hit.eventValue",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "eventData.hit.eventCategory",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "eventData.hit.metric0Key",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "eventData.hit.metric1Key",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "eventData.hit.metric2Key",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "eventData.hit.eventAction",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "eventData.hit.eventLabel",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "0",
          vtp_name: "eventData.hit.dimension0Key",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "1",
          vtp_name: "eventData.hit.dimension0Value",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "0",
          vtp_name: "eventData.hit.dimension1Key",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "1",
          vtp_name: "eventData.hit.dimension1Value",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "0",
          vtp_name: "eventData.hit.dimension2Key",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "1",
          vtp_name: "eventData.hit.dimension2Value",
        },
        {
          function: "__u",
          vtp_component: "QUERY",
          vtp_queryKey: "register",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__t" },
        { function: "__c", vtp_value: "nzcub" },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 11],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_defaultValue: ["macro", 12],
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "dock", "value", ["macro", 13]],
            ["map", "key", "gateway", "value", ["macro", 13]],
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "media.state",
        },
        { function: "__aev", vtp_varType: "TEXT" },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return!0})();"],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.subscriberInfo.verizonSchool",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 173],
          vtp_name: "session.etAgentId",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.propensity.engagementLevel",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.tracking.adv",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.id",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.propensity.p",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.propensity.c1",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.propensity.c2",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.propensity.c3",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.watSegs",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "DL.user.retentionSegment",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "DL.user.subscriberInfo.coreDigiBundle",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "DL.user.subscriberInfo.coreHDBundle",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "gtm.newUrlFragment",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "gtm.oldUrlFragment",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "0",
          vtp_name: "user.id",
        },
        { function: "__cid" },
        { function: "__ctv" },
        { function: "__c", vtp_value: "Production" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"',
            ["escape", ["macro", 461], 7],
            "-",
            ["escape", ["macro", 462], 7],
            "-",
            ["escape", ["macro", 463], 7],
            '"})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventData.trigger",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.type",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "interaction.module.context",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "interaction.module.element.label",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.module.label",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.module.slug",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "interaction.module.progress",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "newsletter",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "module",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "interaction.module",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventData",
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return{}})();"],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 476],
          vtp_name: "viewport",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 476],
          vtp_name: "pageview.performance",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "presentation",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "5000",
          vtp_name: "pageview.heartbeat.heartbeatInterval",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return navigator.userAgent.match(/Googlebot|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video/i)?1:0})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.module.progress.timeInGame",
        },
        {
          function: "__u",
          vtp_stripWww: false,
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.sectionContent",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.subsection",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.headline",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.authors",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.section",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.desFacets",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "asset.geofacets",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 490],
          vtp_name: "asset.geoFacets",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.orgFacets",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.perFacets",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.subscriberInfo",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.nytdOtherData",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "session.isLoggedIn",
        },
        { function: "__k", vtp_decodeCookie: true, vtp_name: "b2b_cig_opt" },
        { function: "__k", vtp_decodeCookie: true, vtp_name: "edu_cig_opt" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "asset.column",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.collectionName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.type",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.emotions",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.actioniq.audience_split_ids",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return 1;if(",
            ["escape", ["macro", 11], 8, 16],
            "||",
            ["escape", ["macro", 465], 8, 16],
            '==="module")return 1;if(',
            ["escape", ["macro", 483], 8, 16],
            '.indexOf("alpha")\u003E-1)return 1;return 0})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "card",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "block",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "pageview.ad",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 507],
          vtp_name: "ad",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "integration",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "container",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 476],
          vtp_name: "package",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 476],
          vtp_name: "item",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "addon",
        },
        {
          function: "__smm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 11],
          vtp_defaultValue: ["macro", 12],
          vtp_map: [
            "list",
            ["map", "key", "gateway", "value", ["macro", 13]],
            ["map", "key", "article_complete", "value", ["macro", 13]],
            ["map", "key", "mini-modal", "value", ["macro", 13]],
            ["map", "key", "game-modal", "value", ["macro", 13]],
            ["map", "key", "regiwall", "value", ["macro", 13]],
            ["map", "key", "bar1", "value", ["macro", 13]],
            ["map", "key", "growl", "value", ["macro", 13]],
            ["map", "key", "meter", "value", ["macro", 13]],
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "impression_id",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 476],
          vtp_name: "media",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 516],
          vtp_name: "video",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "abtest.test",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "abtest.variant",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "slideshow",
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 463],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_defaultValue: "https://a.et.stg.nytimes.com",
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "Production", "value", "https://a.et.nytimes.com"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 21], 8, 16],
            '||(document.querySelector("meta[name\\x3dsourceApp]")||{}).content;a||(a=/parenting\\./.test(document.location.host)?"nyt-parenting":/^\\/puzzles\\/?|^\\/crosswords\\/?/.test(document.location.pathname)?"games-crosswords":/dg-cookie-policy/.test(document.location.pathname)||/help.nytimes.com/.test(document.location.host)?"help":"nyt-vi");return a})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 476],
          vtp_name: "abtest",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 476],
          vtp_name: "asset",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 476],
          vtp_name: "session",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 476],
          vtp_name: "user",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "version",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return{asset:",
            ["escape", ["macro", 524], 8, 16],
            ",session:",
            ["escape", ["macro", 525], 8, 16],
            ",user:",
            ["escape", ["macro", 526], 8, 16],
            ",version:",
            ["escape", ["macro", 527], 8, 16],
            "}})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "application.releaseVersion",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "allocs",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 530],
          vtp_name: "abtest.batch",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return nyt_et.get_pageview_id()})();",
          ],
        },
        {
          function: "__smm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 463],
          vtp_defaultValue: "https://et.stg.nytimes.com/",
          vtp_map: [
            "list",
            ["map", "key", "Production", "value", "https://et.nytimes.com/"],
          ],
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return"object"===typeof window.navigator\u0026\u0026"string"===typeof window.navigator.userAgent\u0026\u0026/iP(ad|hone|od)/.test(window.navigator.userAgent)?1:0})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "payload",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.subscriberInfo.b2bSubscription",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.subscriberInfo.childSubscription",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.subscriberInfo.gatewayHitLM",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.subscriberInfo.giftSubscriptionRecipient",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.subscriberInfo.newsletterList",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.tracking.a14dv",
        },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.subscriberInfo.condensedBundleCodes",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "marketing.offers.0.id",
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return[]})();"],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 546],
          vtp_name: "capture.others",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "referrer.url",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "application.environment",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.characterCount",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.collectionType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.contentTone",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.desk",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.edition",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.kicker",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.lastUpdatedTimestamp",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.originatingDesk",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.printPublishDate",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.series",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.sourceNewsOrg",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.sourceUSvsIntl",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.geoFacets",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "asset.typeOfMaterials",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.channel",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.collection",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.module.region",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.pagetype",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.source",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "interaction.subchannel",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "marketing.paidPostParameter",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "presentation.pageSubType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.DMA",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.isLoggedIn",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 284],
          vtp_name: "video.contentId",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 296],
          vtp_name: "video.durationGroup",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 287],
          vtp_name: "video.mData.videoAdDuration",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.videoAdPosition",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.videoDuration",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.videoFranchise",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.videoPrimaryPlaylistId",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.videoPrimaryPlaylistName",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.videoSection",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.mData.videoType",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.referrer",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video.url",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return ",
            ["escape", ["macro", 18], 8, 16],
            '||document.location.protocol+"//"+document.location.host+document.location.pathname})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "pageview.id",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 587],
          vtp_name: "interaction.dfp_page_view_id",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "error.type",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "error.errors",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 590], 8, 16],
            "||{};return JSON.stringify(a).substr(0,128)})();",
          ],
        },
        { function: "__c", vtp_value: "70" },
        { function: "__c", vtp_value: "71" },
        { function: "__c", vtp_value: "77" },
        { function: "__c", vtp_value: "78" },
        { function: "__c", vtp_value: "103" },
        { function: "__c", vtp_value: "106" },
        { function: "__c", vtp_value: "107" },
        { function: "__c", vtp_value: "108" },
        { function: "__c", vtp_value: "115" },
        { function: "__c", vtp_value: "151" },
        { function: "__c", vtp_value: "152" },
        { function: "__c", vtp_value: "153" },
        { function: "__c", vtp_value: "155" },
        { function: "__c", vtp_value: "156" },
        { function: "__c", vtp_value: "157" },
        { function: "__c", vtp_value: "158" },
        { function: "__c", vtp_value: "159" },
        { function: "__c", vtp_value: "160" },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return Date.now()})();"],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.tracking.pageIndex",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.tracking.avgSessionTime",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.tracking.sessionIndex",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.tracking.firstReferrer",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.tracking",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "card.id",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "eventData.type",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "pageview.heartbeat",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.tracking.activeDays",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.subscriptions",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.nytdOtherData.subscriptions.0.bundle",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "1",
          vtp_name: "eventData.hit.metric0Value",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "1",
          vtp_name: "eventData.hit.metric2Value",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventData.hit.customMetrics",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventData.hit.customMetric",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "1",
          vtp_name: "eventData.hit.metric1Value",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "module.region",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 420],
          vtp_name: "abtest.url",
        },
        { function: "__c", vtp_value: "nzcu0" },
        {
          function: "__d",
          vtp_elementSelector: "html",
          vtp_attributeName: "data-nyt-ab",
          vtp_selectorType: "CSS",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return encodeURIComponent(",
            ["escape", ["macro", 420], 8, 16],
            ")})();",
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return encodeURIComponent(",
            ["escape", ["macro", 29], 8, 16],
            ")})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "presentation.program.breakpoint.initial",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ["macro", 633],
          vtp_name: "presentation.program.breakpoint.rendered",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return!!(window\u0026\u0026window.NYTD\u0026\u0026window.NYTD.Abra)})();",
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "user.subscriptions.subscriberType",
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return!1})();"],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user.actioniq",
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return!1})();"],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "c1_val",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "c2_val",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "c3_val",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "c4_val",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
          vtp_name: "c5_val",
        },
        {
          function: "__u",
          vtp_component: "QUERY",
          vtp_queryKey: "referrer",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__r" },
        { function: "__hid" },
      ],
      tags: [
        {
          function: "__html",
          priority: 2000,
          metadata: ["map"],
          once_per_load: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(){var c=window.nytAnalytics=window.nytAnalytics||{},h=function(a){return 10\u003Ea?"0"+a:a},m="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),n="January February March April May June July August September October November December".split(" ");c.formattedDates=c.formattedDates||{};c.formatDates=function(a,b){var d=this.formattedDates;if(!a||!b)return"";if("undefined"===typeof d[a]){var e=new Date(a);if("Invalid Date"==e)return"";var l=e,p=l.setTime;var f=e;var k=-5;if(10\u003E\nf.getUTCMonth()\u0026\u00262\u003Cf.getUTCMonth())k=-4;else if(2===f.getUTCMonth()){var g=new Date(f.getUTCFullYear(),2,8,-5);g=0===g.getUTCDay()?8:15-g.getUTCDay();if(f.getUTCDate()\u003Eg||f.getUTCDate()===g\u0026\u00266\u003Cf.getUTCHours())k=-4}else 10===f.getUTCMonth()\u0026\u0026(f.getUTCFullYear(),g=0===g.getUTCDay()?1:8-g.getUTCDay(),f.getUTCDate()\u003Cg||f.getUTCDate()===g\u0026\u00267\u003Ef.getUTCHours())\u0026\u0026(k=-4);f=k;p.call(l,a+36E5*f);d[a]={year:e.getUTCFullYear(),date:[e.getUTCFullYear(),h(e.getUTCMonth()+1),h(e.getUTCDate()),h(e.getUTCHours())].join("-"),\ndateAlone:[e.getUTCFullYear(),h(e.getUTCMonth()+1),h(e.getUTCDate())].join("-"),day:m[e.getUTCDay()],hours:h(e.getUTCHours()),month:n[e.getUTCMonth()]}}return d[a][b]};c.resetPage=function(){this.currQuartile=this.maxQuartile=0;this.scrollComplete=this.scrollStart=!1;this.activeTime=0;this.maxViewport={}};c.resetPage();c.hitQuartile=function(a){var b=this.getData("viewport.documentHeight")||document.getElementById("app").clientHeight;b/=4;this.currQuartile=25*Math.floor(a/b);return this.currQuartile\u003E\nthis.maxQuartile?(this.maxQuartile=this.currQuartile,!0):!1};c.getMaxViewport=function(a){var b=this.maxViewport;if(!b.scrollTop||!b.height||!b.width||(a.scrollTop+a.height)*a.width\u003E(b.scrollTop+b.height)*b.width)this.maxViewport=JSON.parse(JSON.stringify(a));return this.maxViewport};c.pagemeta=function(){var a,b={},d=document.getElementsByTagName("meta");for(a=d.length-1;0\u003C=a;a--)b[d[a].name]=d[a].content;return b}();c.heartbeat=function(a){this.activeTime=this.activeTime||0;this.activeTime+=a.heartbeatInterval;\n(a=a.heartbeatInterval\u0026\u0026(3E4\u003E=this.activeTime||12E4\u003E=this.activeTime\u0026\u00260===this.activeTime%(2*a.heartbeatInterval)||3E5\u003E=this.activeTime\u0026\u00260===this.activeTime%(4*a.heartbeatInterval)||3E5\u003Cthis.activeTime\u0026\u002618E5\u003E=this.activeTime\u0026\u00260===this.activeTime%(6*a.heartbeatInterval)))\u0026\u0026"function"==typeof nyt_et\u0026\u0026nyt_et("send",{subject:"page_update",activeTime:this.activeTime,gtm:',
            ["escape", ["macro", 464], 8, 16],
            '})};c.interaction=function(a){if("function"===typeof nyt_et){var b={subject:"interaction",gtm:',
            ["escape", ["macro", 464], 8, 16],
            '};\na.eventData\u0026\u0026(b.eventData=a.eventData);a.module\u0026\u0026(b.module=a.module,"object"===typeof b.module.element\u0026\u0026"undefined"!==typeof b.module.element.label\u0026\u0026(b.module.element.label=b.module.element.label.toString()));a.card\u0026\u0026(b.card=JSON.parse(JSON.stringify(a.card)),"string"===typeof b.card.index\u0026\u0026(/^\\d+$/.test(b.card.index)?b.card.index=parseInt(b.card.index,10):/\\w+/.test(b.card.index)\u0026\u0026(b.card.index=null)));a.block\u0026\u0026(b.block=a.block);a.newsletter\u0026\u0026(b.newsletter=a.newsletter);a.ad\u0026\u0026(b.ad=a.ad);a["package"]\u0026\u0026\n(b["package"]=a["package"]);a.item\u0026\u0026(b.item=a.item);a.impression_id\u0026\u0026(b.impression_id=a.impression_id);nyt_et("send",JSON.parse(JSON.stringify(b)))}};c.performance=function(a){"function"==typeof nyt_et\u0026\u0026(a={subject:"page_update",performance:a.performance,gtm:',
            ["escape", ["macro", 464], 8, 16],
            '},c.exitPriority?(a.eventData={type:"ob_click"},nyt_et("send",a)):nyt_et(a))};c.impression=function(a,b){var d={event:"impression"},e=!1;a.module\u0026\u0026(d.module=JSON.parse(JSON.stringify(a.module)),e=!0);a.card\u0026\u0026(d.card=JSON.parse(JSON.stringify(a.card)),\n"string"===typeof d.card.index\u0026\u0026(/^\\d+$/.test(d.card.index)?d.card.index=parseInt(d.card.index,10):/\\w+/.test(d.card.index)\u0026\u0026(d.card.index=null)),e=!0);a.block\u0026\u0026(d.block=JSON.parse(JSON.stringify(a.block)),e=!0);a.eventData\u0026\u0026(d.eventData=JSON.parse(JSON.stringify(a.eventData)),e=!0);a.ad\u0026\u0026(d.ad=JSON.parse(JSON.stringify(a.ad)),e=!0);a.newsletter\u0026\u0026(d.newsletter=JSON.parse(JSON.stringify(a.newsletter)),e=!0);a.container\u0026\u0026(d.container=JSON.parse(JSON.stringify(a.container)),e=!0);a["package"]\u0026\u0026(d["package"]=\nJSON.parse(JSON.stringify(a["package"])),e=!0);a.item\u0026\u0026(d.item=JSON.parse(JSON.stringify(a.item)),e=!0);a.integration\u0026\u0026(d.integration=JSON.parse(JSON.stringify(a.integration)),e=!0);a.addon\u0026\u0026(d.addon=JSON.parse(JSON.stringify(a.addon)),e=!0);b\u0026\u0026(d.priority=!0);"function"==typeof nyt_et\u0026\u0026e\u0026\u0026(d.subject="impression",d.gtm=',
            ["escape", ["macro", 464], 8, 16],
            ',b?nyt_et("send",d):nyt_et(d));dataLayer.push({module:void 0,card:void 0,block:void 0,eventData:void 0,ad:void 0,pageview:{ad:void 0},newsletter:void 0,container:void 0,\n"package":void 0,item:void 0,integration:void 0,addon:void 0})};c.scrolling=function(a){a=a.viewport;var b=a.scrollTop+a.height,d=!1;a.activeTime=this.activeTime;c.scrollStart||(d=c.scrollStart=!0,dataLayer.push({event:"gaScrollEvent",eventData:{gaAction:"scroll_start"}}));c.hitQuartile(b)\u0026\u0026100===c.maxQuartile\u0026\u0026dataLayer.push({event:"gaScrollEvent",eventData:{gaAction:"page_complete"}});"function"==typeof nyt_et\u0026\u0026(nyt_et({subject:"page_update",viewport:a,gtm:',
            ["escape", ["macro", 464], 8, 16],
            '}),d\u0026\u0026nyt_et("send",\n{subject:"interaction",gtm:',
            ["escape", ["macro", 464], 8, 16],
            ',eventData:{trigger:"module",type:"scroll"},module:{name:"scroll",element:{name:"first-scroll"}}}))};c.slideshow=function(a){var b={};a.slideshow\u0026\u0026("function"==typeof nyt_et\u0026\u0026(b.slideshowObj=JSON.parse(JSON.stringify(a.slideshow)),b.subject="page_update",b.gtm=',
            ["escape", ["macro", 464], 8, 16],
            ',nyt_et("send",b)),dataLayer.push({slideshow:null}))};c.getData=function(a){return(a=google_tag_manager[',
            ["escape", ["macro", 461], 8, 16],
            '].dataLayer.get(a))?"object"!==typeof a?a:JSON.parse(JSON.stringify(a)):\n""};c.gaEvent={};c.gaEvent["see more"]={category:function(){return c.getData("presentation.pageType")+" - "+c.getData("interaction.type")},action:function(){return c.getData("interaction.module.context")+" - "+c.getData("interaction.module.name")},label:function(){return c.getData("interaction.module.slug")},value:function(){return""}};c.gaEvent["see more"]={category:function(){return c.getData("presentation.pageType")+" - "+c.getData("interaction.type")},action:function(){return c.getData("interaction.module.context")+\n" - "+c.getData("interaction.module.name")},label:function(){return c.getData("interaction.module.slug")},value:function(){return""}};c.gaEvent["games-prototype-spelling-bee"]={value:function(){return c.getData("interaction.module.progress.timeInGame")},label:function(){return c.getData("interaction.module.progress.guess")}}})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 18,
        },
        {
          function: "__html",
          priority: 1000,
          metadata: ["map"],
          once_per_load: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E!function(d,G){function y(){var f,a;if(a=d.crypto||d.msCrypto)a=a.getRandomValues(new Uint8Array(18));else for(a=[];18\u003Ea.length;)a.push(256*Math.random()^255\u0026(f=f||+new Date)),f=Math.floor(f/256);return btoa(String.fromCharCode.apply(String,a)).replace(/\\+/g,"-").replace(/\\//g,"_")}var p,q,k,C,r,l,t=[],h={pv_id:"",ctx_id:"",intra:!1,force_xhr:!1,store_last_response:!1},D="object"==typeof d.navigator\u0026\u0026"string"==typeof d.navigator.userAgent\u0026\u0026/iP(ad|hone|od)/.test(d.navigator.userAgent),z="object"==\ntypeof d.navigator\u0026\u0026d.navigator.sendBeacon,E=z?D?"xhr_ios":"beacon":"xhr";if(d.nyt_et)try{console.warn("et2 snippet should only load once per page")}catch(f){}else d.nyt_et=function(){function f(u){t.length\u0026\u0026(function(b,g,v,w,m){if(!w\u0026\u0026("beacon"===E||z\u0026\u0026v))return b=d.navigator.sendBeacon(b,g),m\u0026\u0026(l=b);var e="undefined"!=typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");e.open("POST",b);e.withCredentials=!0;e.setRequestHeader("Accept","*/*");"string"==typeof g?e.setRequestHeader("Content-Type",\n"text/plain;charset\\x3dUTF-8"):"[object Blob]"==={}.toString.call(g)\u0026\u0026g.type\u0026\u0026e.setRequestHeader("Content-Type",g.type);m\u0026\u0026!e.onload\u0026\u0026(e.onload=function(){l=e.response},e.onerror=function(F){l=!1});e.send(g)}(p+"track",JSON.stringify(t),u,h.force_xhr,h.store_last_response),t.length=0,clearTimeout(r),r=null)}var a,n,A,x,c=arguments;if("string"==typeof c[0]\u0026\u0026/init/.test(c[0])\u0026\u0026(h=function(u,b){var g="",v="",w=!1,m=!1,e=!1;if("string"==typeof u\u0026\u0026"init"==u\u0026\u0026"object"==typeof b\u0026\u0026("boolean"==typeof b.intranet\u0026\u0026\nb.intranet\u0026\u0026(w=!0),"boolean"==typeof b.force_xhr\u0026\u0026b.force_xhr\u0026\u0026(m=!0),"boolean"==typeof b.store_last_response\u0026\u0026b.store_last_response\u0026\u0026(e=!0),"string"==typeof b.pv_id_override\u0026\u0026"string"==typeof b.ctx_id_override))if(24\u003C=b.pv_id_override.length\u0026\u002624\u003C=b.ctx_id_override.length)g=b.pv_id_override,v=b.ctx_id_override;else try{console.warn("override id(s) must be \\x3e\\x3d 24 chars long")}catch(F){}return{pv_id:g,ctx_id:v,intra:w,store_last_response:e,force_xhr:m}}(c[0],c[3]),k=h.pv_id||y(),"init"==c[0]\u0026\u0026\n!q)){if(q=h.ctx_id||y(),"string"!=typeof c[1]||!/^http/.test(c[1]))throw Error("init must include an et host url");if(p=String(c[1]).replace(/([^\\/])$/,"$1/"),"string"!=typeof c[2])throw Error("init must include a source app name");C=c[2]}var B=c.length-1;c[B]\u0026\u0026"object"==typeof c[B]\u0026\u0026(a=c[B]);a||/init/.test(c[0])?a\u0026\u0026!a.subject\u0026\u0026console.warn("event data {} must include a subject"):console.warn("when invoked without \'init\' or \'pageinit\', nyt_et() must include a event data");p\u0026\u0026a\u0026\u0026a.subject\u0026\u0026(n=a.subject,\ndelete a.subject,x="page_exit"==n||"ob_click"==(a.eventData||{}).type,A="page"==n||"page_soft"==n?k:y(),t.push({context_id:q,pageview_id:k,event_id:A,client_lib:"v1.2.0",sourceApp:C,intranet:h.intra?1:void 0,subject:n,how:x\u0026\u0026D\u0026\u0026z?"beacon_ios":E,client_ts:+new Date,data:JSON.parse(JSON.stringify(a))}),"send"==c[0]||A==k||x?f(x):r||(r=setTimeout(f,5500)))},d.nyt_et.get_pageview_id=function(){return k},d.nyt_et.get_context_id=function(){return q},d.nyt_et.get_host=function(){return p},d.nyt_et.get_last_send_response=\nfunction(){var f=l;return f\u0026\u0026(l=null),f}}(window);\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Enyt_et.get_pageview_id()||nyt_et("init",',
            ["escape", ["macro", 521], 8, 16],
            ",",
            ["escape", ["macro", 522], 8, 16],
            ',{subject:"page",canonicalUrl:(document.querySelector("link[rel\\x3dcanonical]")||{}).href,articleId:(document.querySelector("meta[name\\x3darticleid]")||{}).content,pubpEventId:(document.querySelector("meta[name\\x3dpubp_event_id]")||{}).content,nyt_uri:(document.querySelector("meta[name\\x3dnyt_uri]")||{}).content,url:location.href,referrer:"',
            ["escape", ["macro", 31], 7],
            '",client_tz_offset:(new Date).getTimezoneOffset(),gtm:',
            ["escape", ["macro", 464], 8, 16],
            ",\nis_iframe:window.top!=window});nytAnalytics=window.nytAnalytics||{};nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id();\u003C/script\u003E",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 146,
        },
        {
          function: "__html",
          priority: 1000,
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(){if(window.nyt_et){nytAnalytics=window.nytAnalytics||{};var a={subject:"page_soft",canonicalUrl:(document.querySelector("link[rel\\x3dcanonical]")||{}).href,articleId:(document.querySelector("meta[name\\x3darticleid]")||{}).content,nyt_uri:(document.querySelector("meta[name\\x3dnyt_uri]")||{}).content,pubpEventId:(document.querySelector("meta[name\\x3dpubp_event_id]")||{}).content,url:location.href,referrer:',
            ["escape", ["macro", 31], 8, 16],
            "||void 0,client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:",
            ["escape", ["macro", 522], 8, 16],
            ",\ngtm:",
            ["escape", ["macro", 464], 8, 16],
            ',is_iframe:window.top!=window};nytAnalytics.et2_pageview_id===nyt_et.get_pageview_id()?nyt_et("pageinit",',
            ["escape", ["macro", 521], 8, 16],
            ",a):nyt_et(a);nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id()}})();\u003C/script\u003E",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 157,
        },
        {
          function: "__html",
          priority: 1,
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(){if(window.nyt_et){var a={};3\u003CparseInt(navigator.appVersion,10)\u0026\u0026("Microsoft Internet Explorer"===navigator.appName\u0026\u0026document.body?a.size=document.body.offsetWidth+"x"+document.body.offsetHeight:"Netscape"===navigator.appName\u0026\u0026(a.size=window.innerWidth+"x"+window.innerHeight));var b=new Date;a.timeZone=b.getTimezoneOffset()/60*-1;a.timeZoneHour=b.getHours();window.matchMedia\u0026\u0026(!0===window.matchMedia("(orientation: portrait)").matches?a.orientation="port":!0===window.matchMedia("(orientation: landscape)").matches\u0026\u0026\n(a.orientation="land"));a.language="Netscape"===navigator.appName?navigator.language:navigator.userLanguage;b="undefined"!==typeof window.ethereum||"undefined"!==typeof window.web3;nyt_et({subject:"page_update",browser:a,cryptowallet:b,nyt_uri:(document.querySelector("meta[name\\x3dnyt_uri]")||{}).content,url:location.href,referrer:"',
            ["escape", ["macro", 31], 7],
            '",client_tz_offset:(new Date).getTimezoneOffset(),canonicalUrl:(document.querySelector("link[rel\\x3dcanonical]")||{}).href,articleId:(document.querySelector("meta[name\\x3darticleid]")||\n{}).content,pubpEventId:(document.querySelector("meta[name\\x3dpubp_event_id]")||{}).content,nyt_uri:(document.querySelector("meta[name\\x3dnyt_uri]")||{}).content,referrer:"',
            ["escape", ["macro", 31], 7],
            '",gtm:',
            ["escape", ["macro", 464], 8, 16],
            ",is_iframe:window.top!=window})}})();\u003C/script\u003E",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 156,
        },
        {
          function: "__csm",
          metadata: ["map"],
          once_per_event: true,
          vtp_clientId: "3005403",
          tag_id: 12,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_useDebugVersion: false,
          vtp_eventCategory: ["macro", 17],
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 388],
          vtp_eventAction: ["macro", 392],
          vtp_eventLabel: ["macro", 397],
          vtp_overrideGaSettings: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_eventValue: ["macro", 399],
          vtp_metric: [
            "list",
            ["map", "index", ["macro", 400], "metric", ["macro", 401]],
          ],
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: ["macro", 387],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 36,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: ["macro", 405],
          vtp_useDebugVersion: false,
          vtp_eventCategory: ["macro", 410],
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 388],
          vtp_eventAction: ["macro", 411],
          vtp_eventLabel: ["macro", 414],
          vtp_overrideGaSettings: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_metric: ["list", ["map", "index", ["macro", 415], "metric", "1"]],
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: ["macro", 387],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 37,
        },
        {
          function: "__ua",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 111, 0]],
          once_per_event: true,
          vtp_overrideGaSettings: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_gaSettings: ["macro", 388],
          vtp_enableEcommerce: false,
          vtp_trackingId: ["macro", 387],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: false,
          tag_id: 38,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url: "https://www.nytimes.com/svc/comscore/pvc.html",
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 46,
        },
        {
          function: "__ua",
          metadata: ["map"],
          teardown_tags: ["list", ["tag", 109, 0]],
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: true,
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_eventCategory: "scroll",
          vtp_trackType: "TRACK_EVENT",
          vtp_enableLinkId: false,
          vtp_gaSettings: ["macro", 388],
          vtp_eventAction: ["macro", 417],
          vtp_enableEcommerce: false,
          vtp_trackingId: ["macro", 387],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 52,
        },
        {
          function: "__img",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 70, 0]],
          teardown_tags: ["list", ["tag", 69, 0]],
          once_per_load: true,
          vtp_useCacheBuster: true,
          vtp_url: [
            "template",
            "https://stags.bluekai.com/site/50136?limit=1\u0026id=",
            ["escape", ["macro", 173], 12],
          ],
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 93,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_customVariable: [
            "list",
            ["map", "key", "u17", "value", ["macro", 420]],
            ["map", "key", "u5", "value", ["macro", 421]],
            ["map", "key", "u18", "value", ["macro", 422]],
          ],
          vtp_enableConversionLinker: true,
          vtp_enhancedUserData: false,
          vtp_groupTag: "allpa0",
          vtp_useImageTag: false,
          vtp_activityTag: "nyti-0",
          vtp_ordinalType: "UNIQUE",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalUnique: "1",
          vtp_number: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 115,
        },
        {
          function: "__ua",
          metadata: ["map"],
          teardown_tags: ["list", ["tag", 109, 0]],
          once_per_event: true,
          vtp_nonInteraction: false,
          vtp_overrideGaSettings: true,
          vtp_eventValue: ["macro", 424],
          vtp_eventCategory: ["macro", 425],
          vtp_trackType: "TRACK_EVENT",
          vtp_metric: [
            "list",
            ["map", "index", ["macro", 426], "metric", "1"],
            ["map", "index", ["macro", 427], "metric", "1"],
            ["map", "index", ["macro", 428], "metric", "1"],
          ],
          vtp_gaSettings: ["macro", 388],
          vtp_eventAction: ["macro", 429],
          vtp_eventLabel: ["macro", 430],
          vtp_dimension: [
            "list",
            ["map", "index", ["macro", 431], "dimension", ["macro", 432]],
            ["map", "index", ["macro", 433], "dimension", ["macro", 434]],
            ["map", "index", ["macro", 435], "dimension", ["macro", 436]],
            ["map", "index", ["macro", 81], "dimension", ["macro", 82]],
          ],
          vtp_trackingId: ["macro", 387],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 118,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_customVariable: [
            "list",
            ["map", "key", "u9", "value", ["macro", 420]],
          ],
          vtp_enableConversionLinker: true,
          vtp_groupTag: "newsl0",
          vtp_useImageTag: false,
          vtp_activityTag: "nyti-0",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 121,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_customVariable: [
            "list",
            ["map", "key", "u17", "value", ["macro", 420]],
          ],
          vtp_enableConversionLinker: true,
          vtp_groupTag: "conve0",
          vtp_useImageTag: false,
          vtp_activityTag: "regi0",
          vtp_ordinalType: "UNIQUE",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalUnique: "1",
          vtp_number: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 133,
        },
        {
          function: "__twitter_website_tag",
          metadata: ["map"],
          once_per_event: true,
          vtp_event_type: "Signup",
          vtp_twitter_pixel_id: ["macro", 439],
          tag_id: 136,
        },
        {
          function: "__twitter_website_tag",
          metadata: ["map"],
          once_per_event: true,
          vtp_event_type: "CompleteRegistration",
          vtp_twitter_pixel_id: "nzcu8",
          tag_id: 137,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_customVariable: [
            "list",
            ["map", "key", "u17", "value", ["macro", 420]],
          ],
          vtp_enableConversionLinker: true,
          vtp_groupTag: "remar0",
          vtp_useImageTag: false,
          vtp_activityTag: "gatew0",
          vtp_ordinalType: "UNIQUE",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalUnique: "1",
          vtp_number: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 138,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_conversionId: "1008590664",
          vtp_conversionLabel: "15HpCJzjkogBEMi-9-AD",
          vtp_url: ["macro", 10],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableEnhancedConversionVariable: true,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 153,
        },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: false,
          vtp_enableCookieOverrides: false,
          vtp_enableCrossDomainFeature: true,
          vtp_enableCookieFlagsFeature: true,
          tag_id: 159,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url:
            "https://conv-tm.everesttech.net/stats/1/conv?cpk=r8r9vJweeOxyOVE1yJjr\u0026cak=qUqrnV6o1YdrHwpOUDqY",
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 160,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url:
            "https://rtd-tm.everesttech.net/upi/?sid=7hUAYoSZMFEXrlLULNp7\u0026cs=1",
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 161,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: false,
          vtp_eventCategory: "registration",
          vtp_trackType: "TRACK_EVENT",
          vtp_gaSettings: ["macro", 388],
          vtp_eventAction: "register",
          vtp_eventLabel: ["macro", 437],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 163,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_nonInteraction: true,
          vtp_overrideGaSettings: true,
          vtp_eventValue: ["macro", 399],
          vtp_eventCategory: ["macro", 17],
          vtp_trackType: "TRACK_EVENT",
          vtp_metric: [
            "list",
            ["map", "index", ["macro", 400], "metric", ["macro", 401]],
          ],
          vtp_gaSettings: ["macro", 388],
          vtp_eventAction: "impression",
          vtp_eventLabel: ["macro", 397],
          vtp_trackingId: ["macro", 387],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsEvent: true,
          vtp_enableGA4Schema: false,
          tag_id: 165,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "conve0",
          vtp_useImageTag: true,
          vtp_activityTag: "refty",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1223,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "conve0",
          vtp_useImageTag: true,
          vtp_activityTag: "msgnup",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1226,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "landi0",
          vtp_useImageTag: true,
          vtp_activityTag: "podcstq",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1230,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "landi0",
          vtp_useImageTag: true,
          vtp_activityTag: "necovidl",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1233,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "landi0",
          vtp_useImageTag: true,
          vtp_activityTag: "dailylp",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1235,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "landi0",
          vtp_useImageTag: true,
          vtp_activityTag: "fsslp",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1238,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "conve0",
          vtp_useImageTag: true,
          vtp_activityTag: "nwpplay",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1245,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "landi0",
          vtp_useImageTag: true,
          vtp_activityTag: "nwplp",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1246,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "conve0",
          vtp_useImageTag: true,
          vtp_activityTag: "nwpasg",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1250,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "landi0",
          vtp_useImageTag: true,
          vtp_activityTag: "swylp",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1258,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "conve0",
          vtp_useImageTag: true,
          vtp_activityTag: "swyasg",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1260,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "conve0",
          vtp_useImageTag: true,
          vtp_activityTag: "swyplay",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1261,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "newsl0",
          vtp_useImageTag: false,
          vtp_activityTag: "cvidsch",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1265,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableConversionLinker: true,
          vtp_groupTag: "landi0",
          vtp_useImageTag: true,
          vtp_activityTag: "audiolp",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "5290727",
          vtp_ordinalStandard: ["macro", 416],
          vtp_url: ["macro", 10],
          vtp_useImageTagIsTrue: true,
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          tag_id: 1274,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url:
            "https://www.facebook.com/tr?id=365162923822779\u0026ev=RSVPSub",
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 1292,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url:
            "https://insight.adsrvr.org/track/pxl/?adv=bomn82o\u0026ct=0:s2f54xh\u0026fmt=3\u0026ttl=43200",
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 1304,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url:
            "https://insight.adsrvr.org/track/pxl/?adv=bomn82o\u0026ct=0:2ptdgug\u0026fmt=3\u0026ttl=43200",
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 1305,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url:
            "https://a.et.nytimes.com/track/q?subject=noscript\u0026sourceApp=nyt-vi\u0026client_ts=0",
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 1340,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url: "https://www.facebook.com/tr?id=592202027582499\u0026ev=GPV",
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 1368,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url:
            "https://www.facebook.com/tr?id=592202027582499\u0026ev=GPV2",
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 1371,
        },
        {
          function: "__img",
          metadata: ["map"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url:
            "https://pubads.g.doubleclick.net/activity;dc_iu=/29390238/DFPAudiencePixel;ord=1;dc_seg=7264762918?",
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 416],
          tag_id: 1378,
        },
        {
          function: "__zone",
          once_per_event: true,
          vtp_childContainers: [
            "list",
            [
              "map",
              "publicId",
              "GTM-N5P6T9S",
              "nickname",
              "NYT - Zone - Marketing POC Pixels",
            ],
          ],
          vtp_boundaries: [
            "list",
            ["zb", "_re", ["macro", 437], ".*", false, false],
            ["zb", "_sw", ["macro", 6], "out", true, false],
            ["zb", "_re", ["macro", 7], "^.{4}[ep]", true, false],
          ],
          vtp_enableTypeRestrictions: true,
          vtp_whitelistedTypes: [
            "list",
            ["map", "typeId", "hl"],
            ["map", "typeId", "ehl"],
            ["map", "typeId", "sdl"],
            ["map", "typeId", "fsl"],
            ["map", "typeId", "cl"],
            ["map", "typeId", "tg"],
            ["map", "typeId", "tl"],
            ["map", "typeId", "ecl"],
            ["map", "typeId", "jel"],
            ["map", "typeId", "ytl"],
            ["map", "typeId", "lcl"],
            ["map", "typeId", "evl"],
            ["map", "typeId", "vis"],
            ["map", "typeId", "ctv"],
            ["map", "typeId", "remm"],
            ["map", "typeId", "smm"],
            ["map", "typeId", "c"],
            ["map", "typeId", "d"],
            ["map", "typeId", "e"],
            ["map", "typeId", "f"],
            ["map", "typeId", "j"],
            ["map", "typeId", "k"],
            ["map", "typeId", "r"],
            ["map", "typeId", "u"],
            ["map", "typeId", "v"],
            ["map", "typeId", "uv"],
            ["map", "typeId", "dbg"],
            ["map", "typeId", "ev"],
            ["map", "typeId", "cid"],
            ["map", "typeId", "aev"],
            ["map", "typeId", "gas"],
            ["map", "typeId", "img"],
          ],
          vtp_enableConfiguration: false,
          tag_id: 1379,
        },
        { function: "__hl", tag_id: 1380 },
        { function: "__hl", tag_id: 1381 },
        { function: "__hl", tag_id: 1382 },
        { function: "__hl", tag_id: 1383 },
        { function: "__hl", tag_id: 1384 },
        { function: "__hl", tag_id: 1385 },
        { function: "__hl", tag_id: 1386 },
        { function: "__hl", tag_id: 1387 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "2703797_1249",
          tag_id: 1388,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "2703797_1251",
          tag_id: 1389,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "2703797_1252",
          tag_id: 1390,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "2703797_1259",
          tag_id: 1391,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "2703797_1316",
          tag_id: 1392,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "100",
          vtp_uniqueTriggerId: "2703797_1331",
          tag_id: 1393,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Ewindow.facebookPixel=function(g){function m(b){b=b||{};var a=b.pixelName||"PageView";b=f(b,e);fbq("track",a,b)}function f(b,a){var c;b=b||{};a=a||{};for(c in a)b[c]=a[c]\u0026\u0026"object"===typeof a[c]?b[c]\u0026\u0026"object"===typeof b[c]?f(b[c],a[c]):f({},a[c]):a[c];return b}function n(b){for(var a=2166136261,c=0;c\u003Cb.length;++c)a^=b.charCodeAt(c),a+=(a\u003C\u003C1)+(a\u003C\u003C4)+(a\u003C\u003C7)+(a\u003C\u003C8)+(a\u003C\u003C24);return a\u003E\u003E\u003E0}g=',
            ["escape", ["macro", 156], 8, 16],
            ";var l=",
            ["escape", ["macro", 446], 8, 16],
            ",k=",
            ["escape", ["macro", 447], 8, 16],
            ",e={ad:",
            ["escape", ["macro", 448], 8, 16],
            ",articleId:",
            ["escape", ["macro", 449], 8, 16],
            '||\n"",fbk:localStorage.getItem("kxsegs")||"",pScore:',
            ["escape", ["macro", 450], 8, 16],
            ",c1Score:",
            ["escape", ["macro", 451], 8, 16],
            ",c2Score:",
            ["escape", ["macro", 452], 8, 16],
            ",c3Score:",
            ["escape", ["macro", 453], 8, 16],
            ",sourceApp:",
            ["escape", ["macro", 21], 8, 16],
            '||"nyt-vi",watSegs:',
            ["escape", ["macro", 454], 8, 16],
            ',fbBrowser:/\\/FBIOS/i.test(navigator.userAgent),content_ids:[n(window.location.pathname)],content_type:"product",content_category:nytAnalytics.pagemeta["dfp-ad-unit-path"]||"",userAgent:navigator.userAgent,mc:',
            ["escape", ["macro", 168], 8, 16],
            '||"",referrer:',
            ["escape", ["macro", 31], 8, 16],
            ",\npageType:",
            ["escape", ["macro", 1], 8, 16],
            '};g\u0026\u0026"anon"!==g.toLowerCase()\u0026\u0026(e.userType=g,e.retentionRiskSegment=',
            ["escape", ["macro", 455], 8, 16],
            ",e.bundleCoreDigi=",
            ["escape", ["macro", 456], 8, 16],
            ",e.bundleCoreHD=",
            ["escape", ["macro", 457], 8, 16],
            ');l\u0026\u0026(e.agentID=l);"number"==typeof k\u0026\u00260\u003Ck\u0026\u0026(e.engagementLevel=k);window.fbq\u0026\u0026window.nytfbqInitialized||(window.nytfbqInitialized=!0,function(b){!function(a,b,e,g,d,h,f){a.fbq||(d=a.fbq=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)},a._fbq||(a._fbq=d),d.push=d,d.loaded=\n!0,d.version="2.0",d.queue=[],h=b.createElement(e),h.async=!0,h.src=g,f=b.getElementsByTagName(e)[0],f.parentNode.insertBefore(h,f))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","592202027582499")}());return{fire:m}}();',
            ["escape", ["macro", 437], 8, 16],
            '\u0026\u0026window.facebookPixel.fire({pixelName:"CompleteRegistration"});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 6,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E"object"===typeof window.dataLayer\u0026\u0026window.dataLayer.push({video:"",asset:"",viewport:""});"object"===typeof window.nytAnalytics\u0026\u0026window.nytAnalytics.resetPage();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 10,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function etEventModuleInteraction(){var eventObj={},modData={};eventObj.assetUrl=',
            ["escape", ["macro", 18], 8, 16],
            ';eventObj.url=document.location.href;eventObj.subject="module-interactions";modData={"action":"',
            ["escape", ["macro", 466], 7],
            '","context":"',
            ["escape", ["macro", 467], 7],
            '","module":"',
            ["escape", ["macro", 15], 7],
            '","eventName":"',
            ["escape", ["macro", 390], 7],
            '","elementLabel":"',
            ["escape", ["macro", 468], 7],
            '","label":"',
            ["escape", ["macro", 469], 7],
            '","pgtype":"',
            ["escape", ["macro", 1], 7],
            '","region":"',
            ["escape", ["macro", 394], 7],
            '","slug":"',
            ["escape", ["macro", 470], 7],
            '"};if(',
            ["escape", ["macro", 471], 8, 16],
            ")modData.progress=\nJSON.stringify(",
            ["escape", ["macro", 471], 8, 16],
            ");if(",
            ["escape", ["macro", 472], 8, 16],
            ")modData.newsletter=JSON.stringify(",
            ["escape", ["macro", 472], 8, 16],
            ');eventObj.moduleData=JSON.stringify(modData);if(typeof nyt_et==="function"){var et2ModData=JSON.parse(JSON.stringify({subject:"interaction",gtm:',
            ["escape", ["macro", 464], 8, 16],
            ",module:",
            ["escape", ["macro", 473], 8, 16],
            "||",
            ["escape", ["macro", 474], 8, 16],
            ",eventData:",
            ["escape", ["macro", 475], 8, 16],
            "||{type:",
            ["escape", ["macro", 466], 8, 16],
            ",pagetype:",
            ["escape", ["macro", 1], 8, 16],
            ",legacy:1}}));if(!et2ModData.eventData.pagetype\u0026\u0026",
            ["escape", ["macro", 1], 8, 16],
            ")et2ModData.eventData.pagetype=\n",
            ["escape", ["macro", 1], 8, 16],
            ";if(",
            ["escape", ["macro", 472], 8, 16],
            ")et2ModData.newsletter=JSON.parse(JSON.stringify(",
            ["escape", ["macro", 472], 8, 16],
            '));nyt_et("send",et2ModData)}})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 34,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="scrolling_temp" type="text/gtmscript"\u003EnytAnalytics.scrolling({viewport:',
            ["escape", ["macro", 477], 8, 16],
            ",performance:",
            ["escape", ["macro", 478], 8, 16],
            ",presentation:",
            ["escape", ["macro", 479], 8, 16],
            ",assetUrl:",
            ["escape", ["macro", 18], 8, 16],
            '});(function(){var a=document.querySelector("#scrolling_temp");a\u0026\u0026(a.outerHTML="")})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 40,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="heartbeat_temp" type="text/gtmscript"\u003EnytAnalytics.heartbeat({viewport:',
            ["escape", ["macro", 477], 8, 16],
            ",heartbeatInterval:",
            ["escape", ["macro", 480], 8, 16],
            ",performance:",
            ["escape", ["macro", 478], 8, 16],
            ",presentation:",
            ["escape", ["macro", 479], 8, 16],
            '});(function(){var a=document.querySelector("#heartbeat_temp");a\u0026\u0026(a.outerHTML="")})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 41,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="addtrackingparams_temp" type="text/gtmscript"\u003E(function(){var c=function(a,b){var c=a\u0026\u0026a.length;if(c\u0026\u0026"function"===typeof b)if("function"===typeof a.forEach)a.forEach(b);else if("function"===typeof b)for(;c;)c--,b(a[c])},d=function(a,b){b=(-1\u003Ca.indexOf("?")?"\\x26":"?")+b;return a=-1\u003Ca.indexOf("#")?a.replace("#",b+"#"):a+b};c(document.querySelectorAll("section[data-block-tracking-id]:not(.gtm-tagged)"),function(a){var b="";a.classList.add("gtm-tagged");b=a.dataset\u0026\u0026a.dataset.blockTrackingId||"";c(a.querySelectorAll(":not(header) \\x3e a"),function(a){a.href=\nd(a.href,"action\\x3dclick\\x26module\\x3d"+encodeURIComponent(b)+"\\x26pgtype\\x3d"+',
            ["escape", ["macro", 1], 8, 16],
            ')})});c(document.querySelectorAll("#recirc-more-in:not(.gtm-tagged), div[class^\\x3delementStyles-moreInContent]:not(.gtm-tagged)"),function(a){var b=a.parentNode.querySelector("h2");b=b?b.textContent:"";b=b.replace(/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E/g,"");b=b.replace("More in ","");a.classList.add("gtm-tagged");c(a.querySelectorAll("article a"),function(a){a.href=d(a.href,"action\\x3dclick\\x26module\\x3dMoreInSection\\x26pgtype\\x3d',
            ["escape", ["macro", 1], 7],
            '\\x26region\\x3dFooter\\x26contentCollection\\x3d"+\nb)})});c(document.querySelectorAll("div[class^\\x3dTrending-trending]:not(.gtm-tagged)"),function(a){a.classList.add("gtm-tagged");c(a.querySelectorAll("li a"),function(a){a.href=d(a.href,"action\\x3dclick\\x26module\\x3dTrending\\x26pgtype\\x3d',
            ["escape", ["macro", 1], 7],
            '\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending")})});c(document.querySelectorAll("#recirc-collection:not(.gtm-tagged)"),function(a){var b=a.parentNode.querySelector("h2");b=b?b.textContent:"";b=b.replace(/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E/g,"");a.classList.add("gtm-tagged");\nc(a.querySelectorAll("article a"),function(a){a.href=d(a.href,"action\\x3dclick\\x26module\\x3dAssociated\\x26pgtype\\x3d',
            ["escape", ["macro", 1], 7],
            '\\x26region\\x3dFooter\\x26contentCollection\\x3d"+b)})});c(document.querySelectorAll("#recirc-follow-channel:not(.gtm-tagged)"),function(a){a.classList.add("gtm-tagged");var b=a.parentNode.querySelector("h2");b=b?b.textContent:"";b=b.replace(/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E/g,"");c(a.querySelectorAll("article a"),function(a){a.href=d(a.href,"action\\x3dclick\\x26module\\x3dFollow\\x26pgtype\\x3d',
            ["escape", ["macro", 1], 7],
            '\\x26region\\x3dFooter\\x26contentCollection\\x3d"+\nb)})});c(document.querySelectorAll("div[class^\\x3dRecirculation-lonelyTrending]:not(.gtm-tagged)"),function(a){a.classList.add("gtm-tagged");c(a.querySelectorAll("article a"),function(a){a.href=d(a.href,"action\\x3dclick\\x26module\\x3dLonely%20Trending\\x26pgtype\\x3d',
            ["escape", ["macro", 1], 7],
            '\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending")})});c(document.querySelectorAll("div[class^\\x3delementStyles-relatedcoverage]"),function(a){c(a.querySelectorAll("article a"),function(a){a.classList.add("gtm-tagged");\na.href=d(a.href,"action\\x3dclick\\x26module\\x3dRelatedCoverage\\x26pgtype\\x3d',
            ["escape", ["macro", 1], 7],
            '\\x26region\\x3dFooter\\x26contentCollection\\x3dRelated")})});var e=document.querySelector("nav[class^\\x3dRibbon-ribbon]:not(.gtm-tagged)");if(e){var f="Ribbon";e.classList.add("gtm-tagged");c(e.querySelectorAll("a:not(.gtm-tagged)"),function(a){a.classList.add("gtm-tagged");a.href=d(a.href,"action\\x3dclick\\x26module\\x3d"+encodeURIComponent(f)+"\\x26pgtype\\x3d"+',
            ["escape", ["macro", 1], 8, 16],
            ')})}c(document.querySelectorAll("div[class^\\x3delementStyles-editorContent]:not(.gtm-tagged)"),\nfunction(a){a.classList.add("gtm-tagged");c(a.querySelectorAll("article a"),function(a){a.href=d(a.href,"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d',
            ["escape", ["macro", 1], 7],
            '\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending")})});c(document.querySelectorAll(".StoryBodyCompanionColumn aside"),function(a){c(a.querySelectorAll("article a:not(.gtm-tagged)"),function(a){a.classList.add("gtm-tagged");a.href=d(a.href,"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d',
            ["escape", ["macro", 1], 7],
            '\\x26region\\x3dCompanionColumn\\x26contentCollection\\x3dTrending")})});\n(function(){var a=document.querySelector("#addtrackingparams_temp");a\u0026\u0026(a.outerHTML="")})()})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 44,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.dataLayer.push({video:"",asset:""});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 45,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E"object"===typeof nytAnalytics\u0026\u0026(nytAnalytics.activeTime=nytAnalytics.activeTime||0,nytAnalytics.activeTime=1E3*',
            ["escape", ["macro", 482], 8, 16],
            ");\u003C/script\u003E",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 54,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Ewindow.parent===window\u0026\u0026function(){function d(){var a;return a=(a=unescape(document.cookie).match("NYT-Edition\\x3d([^;]+)"))\u0026\u0026a[1]\u0026\u0026-1!==a[1].indexOf("edition|GLOBAL")?"international.nytimes.com":/^\\/(games|crosswords|puzzles)/.test(document.location.pathname)?"games.nytimes.com":"nytimes.com"}function b(){var a;regex=/(^.*)(nytimes.com.*)/;return a=',
            ["escape", ["macro", 18], 8, 16],
            "\u0026\u0026",
            ["escape", ["macro", 18], 8, 16],
            '.match(regex)[2]}function c(){var a=[];"Homepage"===',
            ["escape", ["macro", 1], 8, 16],
            '?a.push("Homepage"):(',
            ["escape", ["macro", 484], 8, 16],
            "\u0026\u0026\na.push(",
            ["escape", ["macro", 484], 8, 16],
            "),",
            ["escape", ["macro", 485], 8, 16],
            "\u0026\u0026a.push(",
            ["escape", ["macro", 485], 8, 16],
            "),",
            ["escape", ["macro", 67], 8, 16],
            "\u0026\u0026a.push(",
            ["escape", ["macro", 67], 8, 16],
            '),/parenting\\./.test(document.location.host)\u0026\u0026a.push("parenting"),0===a.length\u0026\u0026/\\/202\\d\\/\\d\\d\\/\\d\\d\\/us\\/elections\\/results/.test(document.location.href)\u0026\u0026(a.push("us"),a.push("Elections")));return a.join(",")}if("object"==typeof window._sf_async_config\u0026\u0026"object"==typeof pSUPERFLY\u0026\u0026"function"==typeof pSUPERFLY.virtualPage)pSUPERFLY.virtualPage({sections:c(),path:b(),\ntitle:',
            ["escape", ["macro", 486], 8, 16],
            '||document.title});else{window._sf_async_config={uid:16698,domain:d(),pingServer:"pnytimes.chartbeat.net",useCanonical:!0,path:b(),title:',
            ["escape", ["macro", 486], 8, 16],
            "||document.title};_cbq=window._cbq=window._cbq||[];switch(",
            ["escape", ["macro", 156], 8, 16],
            '){case "sub":_cbq.push(["_acct","paid"]);break;case "anon":_cbq.push(["_acct","anon"]);break;case "regi":_cbq.push(["_acct","lgdin"])}try{window._sf_async_config.sections=c()}catch(a){}try{window._sf_async_config.authors=Array.isArray(',
            ["escape", ["macro", 487], 8, 16],
            ")\u0026\u0026\n",
            ["escape", ["macro", 487], 8, 16],
            '.join(",")}catch(a){}window._sf_endpt=(new Date).getTime();firstScript=document.getElementsByTagName("script")[0];cbScript=document.createElement("script");cbScript.async=!0;cbScript.src="https://static.chartbeat.com/js/chartbeat.js";firstScript.parentNode.insertBefore(cbScript,firstScript)}}();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 68,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\n\u003Ciframe name="__bkframe" height="0" width="0" frameborder="0" style="display:none;position:absolute;clip:rect(0px 0px 0px 0px)" src="about:blank"\u003E\u003C/iframe\u003E \n\u003Cscript type="text/gtmscript" data-gtmsrc="https://tags.bkrtx.com/js/bk-coretag.js"\u003E\u003C/script\u003E \n\u003Cscript type="text/gtmscript"\u003E(function(){var d=function(a){var e,b,d=[{name:"Bot",regex:"(GomezAgent|yandex.com/bots|(Googlebot|bingbot|YandexBot|facebookexternalhit)/[\\\\d]+(?:.[\\\\d]+)?)"},{name:"UC Browser",regex:"(UCMini|UCBrowser)/([\\\\d]+)(.[\\\\d]+)*"},{name:"Opera",regex:"(OPR|Opera)[/ ]([\\\\d]+)(.[\\\\d]+)*"},{name:"Sogou Explorer",regex:"(SE) ([\\\\d]+)(.[a-zA-Z\\\\d]+)*"},{name:"",regex:"(Avant Browser)"},{name:"",regex:"((?:Mobile)?Iron|Puffin|Maxthon|Chromium|Sleipnir|Lightning|QQBrowser|Silk|chromeframe|iCab|Arora|Kindle|Midori|rekonq|Vienna|Epiphany|NetFront|konqueror|PhantomJS|YaBrowser|IEMobile|PaleMoon|Thunderbird|SeaMonkey|baidubrowser|NokiaBrowser|Edge|Avant Browser|Iceweasel|K-Meleon)/([\\\\d]+)(.[\\\\d]+)*"},\n{name:"",regex:"(Lunascape)[/ ]([\\\\d]+)(.[\\\\d]+)*"},{name:"Firefox",regex:"(Firefox)/([\\\\d]+)(.[\\\\d]+)*"},{name:"MSIE",regex:"(?:(Windows).* Trident/([\\\\d]+)(.[\\\\d]+)*|(MSIE) ([\\\\d]+)(.[\\\\d]+)*)"},{name:"Chrome",regex:"(Chrome)/([\\\\d]+)(.[\\\\d]+)*"},{name:"Android Browser",regex:"(Android)[ /]([\\\\d]+)(?:.[\\\\d]+.[\\\\d]+)?.*(Mobile )?Safari"},{name:"BlackBerry Browser",regex:"(BlackBerry|BB[\\\\d]+);.*Mobile Safari"},{name:"",regex:"(OmniWeb)/v([\\\\d]+)(?:.[\\\\d]+)"},{name:"Chrome iOS",regex:"(CriOS)/([\\\\d]+)(?:.[\\\\d]+)*"},\n{name:"Safari",regex:"(?:Version/([\\\\d]+)(?:.[\\\\d]+)* )?(Safari)/(?:[\\\\d]+(?:.[\\\\d]+)*)",mobileRegex:"(iPhone; CPU iPhone OS|iPad; CPU OS).*Mobile/"},{name:"Facebook App",regex:"\\\\[(FBAN).*FBAV/([\\\\d]+)(.[\\\\d]+)*.*\\\\]?"},{name:"NYT App",regex:"(NYTimes(-[a-zA-Z]+)?|Crosswords|NYTNow|Cooking|NYTOpinion|)/([\\\\d]+)(.[\\\\d]+)* CFNetwork/([\\\\d]+)(.[\\\\d]+)*"},{name:"AppleWebKit Based Browser",regex:"(AppleWebKit)/([\\\\d]+)(.[\\\\d]+)*"}];for(e=0;e\u003Cd.length;e++){var c=d[e];if((b=(new RegExp(c.regex)).exec(a))\u0026\u0026\n1\u003Cb.length)return e=c.name||b[1],c.mobileRegex\u0026\u0026(new RegExp(c.mobileRegex)).test(a)\u0026\u0026(e+=" Mobile"),e}return"Unknown"},a=function(a){return"object"===typeof a\u0026\u0026a instanceof Array?a.filter(function(a){return""!==a}).map(function(a){return a.replace(/,/g," ")}):[]},h=',
            ["escape", ["macro", 488], 8, 16],
            '||(document.querySelector("meta[name\\x3dCG]")||{}).content,k="";if(!/Homepage/i.test(h)){k=a(',
            ["escape", ["macro", 489], 8, 16],
            ");var l=a(",
            ["escape", ["macro", 491], 8, 16],
            "||",
            ["escape", ["macro", 490], 8, 16],
            "||[]),b=a(",
            ["escape", ["macro", 492], 8, 16],
            ");a=a(",
            ["escape", ["macro", 493], 8, 16],
            ');\nk=k.concat(l).concat(b).concat(a).join(",")}bk_ignore_meta=!0;l=function(a){var b=[];if(null!=a\u0026\u0026""!=a)for(var c in a)null!=a[c]\u0026\u0026"InclusionFlag"in a[c]\u0026\u00261==a[c].InclusionFlag\u0026\u0026b.push(c);return b.join(",")};bk_addPageCtx("regid",',
            ["escape", ["macro", 159], 8, 16],
            ");a=",
            ["escape", ["macro", 494], 8, 16],
            "||{};b=",
            ["escape", ["macro", 495], 8, 16],
            '||{};b=b.subscriptions||[];var c=!1;0\u003Cb.length\u0026\u0026(c="F"==b[0].grace?!1:!0);bk_addPageCtx("usertype",',
            ["escape", ["macro", 156], 8, 16],
            ');bk_addPageCtx("userloggedin",',
            ["escape", ["macro", 496], 8, 16],
            ');bk_addPageCtx("coresubtenure",\na.coreSubscriptionTenure?a.coreSubscriptionTenure:"");bk_addPageCtx("corestop",a.coreStopCode?a.coreStopCode:"");bk_addPageCtx("corepromo",!!a.coreOnPromotion);bk_addPageCtx("ingrace",c);bk_addPageCtx("giftrecipient",!!a.giftSubscriptionRecipient);bk_addPageCtx("childsubrecipient",!!a.childSubscription);bk_addPageCtx("bundlecoredigi",a.coreDigiBundle?a.coreDigiBundle:"");bk_addPageCtx("bundlecorehd",a.coreHDBundle?a.coreHDBundle:"");bk_addPageCtx("bundlexword",a.crosswordStandaloneBundle?a.crosswordStandaloneBundle:\n"");bk_addPageCtx("bundlecooking",a.cookingStandaloneBundle?a.cookingStandaloneBundle:"");bk_addPageCtx("bundleother",a.otherBundle?a.otherBundle:"");bk_addPageCtx("b2bentitle",!!a.b2bSubscription);bk_addPageCtx("marketingoptin",!!a.marketingOptIn);bk_addPageCtx("formercoresub",!!a.formerCoreSubscriber);bk_addPageCtx("formeredusub",!!a.formerEduSubscriber);bk_addPageCtx("formerhdsub",!!a.formerHDSubscriber);bk_addPageCtx("retentionscore",a.retentionSegment||"");bk_addPageCtx("topwatseg",',
            ["escape", ["macro", 454], 8, 16],
            ');\nbk_addPageCtx("sassegment",a.sasSegment||"");bk_addPageCtx("hdstopreasoncode",a.hdStopReasonCode||"");bk_addPageCtx("regitenure",a.regiTenure||"");bk_addPageCtx("cookinggrace",!!a.cookingGrace);bk_addPageCtx("crosswordsgrace",!!a.crosswordsGrace);bk_addPageCtx("gatewayhitlm",!!a.gatewayHitLM);bk_addPageCtx("coregracelevel",!!a.coreGraceLevel);bk_addPageCtx("activedaysengagement",a.engagementActiveDays||"");bk_addPageCtx("authors",(',
            ["escape", ["macro", 487], 8, 16],
            '||[]).join(",")||"");bk_addPageCtx("newsletter",\na.newsletterList||"");b=',
            ["escape", ["macro", 497], 8, 16],
            ';c="";if(null!=b){try{var f=JSON.parse(unescape(b))}catch(e){f={}}f.isCorpUser\u0026\u0026(c=f.orgName)}bk_addPageCtx("businessname",c);bk_addPageCtx("corpadblock",/CORP_ADBLOCK/i.test(b));f=',
            ["escape", ["macro", 498], 8, 16],
            ';c=b="";if(null!=f){try{var g=JSON.parse(unescape(f))}catch(e){g={}}if(c=g.isEduUser||"")b=g.nickName}bk_addPageCtx("isedu",c);bk_addPageCtx("propensityedu",b);bk_addPageCtx("propensityscore",',
            ["escape", ["macro", 450], 8, 16],
            ');bk_addPageCtx("activedays",',
            ["escape", ["macro", 448], 8, 16],
            ");\ng=",
            ["escape", ["macro", 167], 8, 16],
            '||{};bk_addPageCtx("metercount",g.v||"");bk_addPageCtx("propensitysection",',
            ["escape", ["macro", 453], 8, 16],
            ');bk_addPageCtx("propensitytype",',
            ["escape", ["macro", 452], 8, 16],
            ');bk_addPageCtx("propensitysite",',
            ["escape", ["macro", 451], 8, 16],
            ');bk_addPageCtx("url",window.location.href);bk_addPageCtx("referrer",',
            ["escape", ["macro", 31], 8, 16],
            ');bk_addPageCtx("section",h);h=',
            ["escape", ["macro", 485], 8, 16],
            '||"";bk_addPageCtx("subsection",h);bk_addPageCtx("pagetype",',
            ["escape", ["macro", 1], 8, 16],
            ');bk_addPageCtx("keywords",k);bk_addPageCtx("sourceapp",\n',
            ["escape", ["macro", 125], 8, 16],
            ');bk_addPageCtx("browsername",d(navigator.userAgent));bk_addPageCtx("funnelpropensity",',
            ["escape", ["macro", 447], 8, 16],
            ');bk_addPageCtx("column",',
            ["escape", ["macro", 499], 8, 16],
            ");d=",
            ["escape", ["macro", 500], 8, 16],
            '||[];bk_addPageCtx("collectionname",d.join(","));bk_addPageCtx("contenttype",',
            ["escape", ["macro", 501], 8, 16],
            ");d=l(",
            ["escape", ["macro", 502], 8, 16],
            ');bk_addPageCtx("emotions",d);"object"===typeof bk_optly\u0026\u0026bk_optly instanceof Array\u0026\u00260\u003Cbk_optly.length\u0026\u0026(bk_addPageCtx("optlyexpname",bk_optly[0].experience||""),bk_addPageCtx("optlyexpvariant",\nbk_optly[0].variant||""));bk_addPageCtx("xwordstenure",a.crosswordsSubscriptionTenure?a.crosswordsSubscriptionTenure:"");bk_addPageCtx("cookingtenure",a.cookingSubscriptionTenure?a.cookingSubscriptionTenure:"");bk_addPageCtx("xwordsstop",a.crosswordsStopCode?a.crosswordsStopCode:"");bk_addPageCtx("cookingstop",a.cookingStopCode?a.cookingStopCode:"");bk_addPageCtx("productswitch",a.productSwitch?a.productSwitch:"");bk_addPageCtx("giftsubgiver",!!a.giftGiver);bk_addPageCtx("formerxwordsub",!!a.formerCrosswordSubscriber);\nbk_addPageCtx("formercookingsub",!!a.formerCookingSubscriber);bk_addPageCtx("watsegs",a.watString?a.watString:"");bk_addPageCtx("edusub",a.eduSubscriber?a.eduSubscriber:"");bk_addPageCtx("aiqaudience",(',
            ["escape", ["macro", 503], 8, 16],
            '||[]).map(function(a){return a[0]}).join(","));d=50134;navigator.userAgent.match(/Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|RIM/i)\u0026\u0026(d=50747);bk_allow_multiple_calls=!0;bk_doJSTag(d,4)})();\u003C/script\u003E\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 83,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_load: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript" data-gtmsrc="https://tags.bluekai.com/site/50550?ret=js\u0026amp;limit=1"\u003E\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 84,
        },
        {
          function: "__html",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 0, 0]],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="impression_temp" type="text/gtmscript"\u003EnytAnalytics.impression({module:',
            ["escape", ["macro", 473], 8, 16],
            ",card:",
            ["escape", ["macro", 505], 8, 16],
            ",block:",
            ["escape", ["macro", 506], 8, 16],
            ",eventData:",
            ["escape", ["macro", 475], 8, 16],
            ",newsletter:",
            ["escape", ["macro", 472], 8, 16],
            ",ad:",
            ["escape", ["macro", 508], 8, 16],
            ",integration:",
            ["escape", ["macro", 509], 8, 16],
            ",container:",
            ["escape", ["macro", 510], 8, 16],
            ',"package":',
            ["escape", ["macro", 511], 8, 16],
            ",item:",
            ["escape", ["macro", 512], 8, 16],
            ",addon:",
            ["escape", ["macro", 513], 8, 16],
            "},",
            ["escape", ["macro", 514], 8, 16],
            ');(function(){var a=document.querySelector("#impression_temp");a\u0026\u0026(a.outerHTML="")})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 107,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="interaction_temp" type="text/gtmscript"\u003EnytAnalytics.interaction({module:',
            ["escape", ["macro", 473], 8, 16],
            ",card:",
            ["escape", ["macro", 505], 8, 16],
            ",block:",
            ["escape", ["macro", 506], 8, 16],
            ",ad:",
            ["escape", ["macro", 508], 8, 16],
            ",newsletter:",
            ["escape", ["macro", 472], 8, 16],
            ",eventData:",
            ["escape", ["macro", 475], 8, 16],
            ",assetUrl:",
            ["escape", ["macro", 18], 8, 16],
            ",impression_id:",
            ["escape", ["macro", 515], 8, 16],
            ',"package":',
            ["escape", ["macro", 511], 8, 16],
            ",item:",
            ["escape", ["macro", 512], 8, 16],
            '});dataLayer.push({module:void 0,card:void 0,block:void 0,newsletter:void 0,eventData:void 0,ad:void 0,pageview:{ad:void 0},"package":void 0,item:void 0,impression_id:void 0});\n(function(){var a=document.querySelector("#interaction_temp");a\u0026\u0026(a.outerHTML="")})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 109,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_load: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){function c(d,a){var b=document.createElement("script");b.type="text/javascript";a\u0026\u0026(b.onload=a,b.onerror=a);a=document.getElementsByTagName("head")[0];a.appendChild(b);b.src=d}c("https://a1.nyt.com/analytics/show-ads.js",function(){window.nyt_et\u0026\u0026nyt_et({subject:"page_update",adBlockEnabled:!1!==window.adBlockDetected})})})();\u003C/script\u003E  ',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 112,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(a){try{var c=a.ns_,d=a.nyt_streamingAnalytics=a.nyt_streamingAnalytics||new c.ReducedRequirementsStreamingAnalytics({publisherId:"3005403"});a=',
            ["escape", ["macro", 517], 8, 16],
            '||{};var b=a.eventName,f="live"===a.mData.videoDeliveryMethod,h=g(a);"pause"!==b\u0026\u0026"video-complete"!==b\u0026\u0026"ad-pause"!==b\u0026\u0026"ad-complete"!==b||d.stop();if("auto-play-start"===b||"user-play"===b||"resume"===b)return k(h,f);if("ad-start"===b)return l(a);var k=function(a,m){var b=c.ReducedRequirementsStreamingAnalytics.ContentType,e=\nb.ShortFormOnDemand;m\u0026\u0026(e=b.Live);d.playVideoContentPart(a,e)},l=function(b){var a=c.ReducedRequirementsStreamingAnalytics.AdType;d.playVideoContentPart({ns_st_cl:b.videoDuration},a.LinearOnDemandMidRoll)},g=function(b){var a=b.mData||{};return{ns_st_ci:b.contentId||"*null",ns_st_cl:a.videoDuration||"*null",ns_st_pu:a.videoFranchise||"*null",ns_st_pr:decodeURIComponent(a?a.videoName||"*null":"*null"),c3:b.contentCollection,ns_st_tpr:"*null",ns_st_ep:"*null",ns_st_tep:"*null",ns_st_sn:"*null",ns_st_en:"*null",\nns_st_ge:a.videoType||"*null",ns_st_ia:1,ns_st_ddt:"*null",ns_st_tdt:"*null",ns_st_st:"*null",c4:"*null",c6:"*null",ns_st_ce:"*null"}}}catch(e){console.log("gracefully failed to load comscore.")}})(window);\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 113,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_load: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="//a1.nyt.com/analytics/comscore-streaming.js" type="text/gtmscript"\u003E\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 114,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_load: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(b){function f(){if("MozAppearance"in document.documentElement.style){var a=indexedDB.open("test");a.onerror=c;a.onsuccess=d;return!0}}function e(a){b.nyt_et\u0026\u0026nyt_et({subject:"page_update",isIncognito:a})}var c,d;b.nyt_et\u0026\u0026function(a,g){c=a||function(){};d=g||function(){};b.webkitRequestFileSystem?(b.webkitRequestFileSystem(b.TEMPORARY,1,d,c),a=!0):a=void 0;if(!(a=a||f()))a:if(0\u003CObject.prototype.toString.call(b.HTMLElement).indexOf("Constructor")||"[object SafariRemoteNotification]"===(!b.safari||\nsafari.pushNotification).toString()||b.localStorage\u0026\u0026/Safari/.test(b.navigator.userAgent)){try{b.openDatabase(null,null,null,null)}catch(h){c();a=!0;break a}try{localStorage.length||(localStorage.x=1,localStorage.removeItem("x")),d()}catch(h){navigator.cookieEnabled?c():d()}a=!0}else a=void 0;a||(b.indexedDB||!b.PointerEvent\u0026\u0026!b.MSPointerEvent?a=void 0:(c(),a=!0));a||d()}(function(){e(!0)},function(){e(!1)})})(window);\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 120,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(){nyt_et("send",{subject:"ab_alloc",allocs:[{name:',
            ["escape", ["macro", 518], 8, 16],
            ",variant:",
            ["escape", ["macro", 519], 8, 16],
            "}],gtm:",
            ["escape", ["macro", 464], 8, 16],
            "})})();\u003C/script\u003E",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 123,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(b){var d="a.nytimes.com",e=',
            ["escape", ["macro", 31], 8, 16],
            "||encodeURIComponent(document.referrer),f=",
            ["escape", ["macro", 18], 8, 16],
            '||encodeURIComponent(document.location.href),a=new XMLHttpRequest;a.withCredentials=!0;a.open("GET","https://"+d+"/svc/nyt/data-layer?sourceApp\\x3d"+',
            ["escape", ["macro", 21], 8, 16],
            '+"\\x26caller_id\\x3d"+',
            ["escape", ["macro", 21], 8, 16],
            '+"-gtm\\x26referrer\\x3d"+e+"\\x26assetUrl\\x3d"+f+"\\x26jkcd\\x3d"+Date.now(),!0);a.onload=function(){var c=JSON.parse(a.responseText);c.event="pageDataReady";window[b].push(c)};\na.addEventListener("error",function(){window[b].push({event:"pageDataReady"})});a.send()})("dataLayer");\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 124,
        },
        {
          function: "__html",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 60, 0]],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){var a=setInterval(function(){window.facebookPixel\u0026\u0026window.facebookPixel.fire\u0026\u0026(window.facebookPixel.fire({pixelName:"NewsletterSignup"}),clearInterval(a))},1E3)})();\u003C/script\u003E  ',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 134,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript" id="media_temp"\u003E(function(){var a=JSON.parse(JSON.stringify(',
            ["escape", ["macro", 516], 8, 16],
            '));a.subject="media";a.gtm=',
            ["escape", ["macro", 464], 8, 16],
            ';nyt_et("send",a);dataLayer.push({media:null});if(a=document.querySelector("#media_temp"))a.outerHTML=""})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 140,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003EnytAnalytics.slideshow({slideshow:',
            ["escape", ["macro", 520], 8, 16],
            "});\u003C/script\u003E",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 141,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Evar event=',
            ["escape", ["macro", 523], 8, 16],
            ';event.subject="ab_expose";event.gtm=',
            ["escape", ["macro", 464], 8, 16],
            ';(function(){nyt_et("send",event)})();dataLayer.push({abtest:null});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 147,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(){window.nyt_et\u0026\u0026nyt_et("send",{subject:"page_update",jsonKidd:',
            ["escape", ["macro", 528], 8, 16],
            ',canonicalUrl:(document.querySelector("link[rel\\x3dcanonical]")||{}).href,assetId:(document.querySelector("meta[name\\x3darticleid]")||{}).content,nyt_uri:(document.querySelector("meta[name\\x3dnyt_uri]")||{}).content,url:location.href,referrer:"',
            ["escape", ["macro", 31], 7],
            '",client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:',
            ["escape", ["macro", 522], 8, 16],
            ",gtm:",
            ["escape", ["macro", 464], 8, 16],
            ",presentation:",
            ["escape", ["macro", 479], 8, 16],
            ",\nweb_app:{releaseVersion:",
            ["escape", ["macro", 529], 8, 16],
            "}})})();\u003C/script\u003E",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 154,
        },
        {
          function: "__html",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 1, 0]],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(a,b,c){a\u0026\u0026a.length\u0026\u0026(nyt_et("send",{subject:"ab_alloc",allocs:a}),a=window.google_tag_manager[',
            ["escape", ["macro", 461], 8, 16],
            '],a.dataLayer.set("abtest",void 0),a.dataLayer.set("allocs",void 0))})(',
            ["escape", ["macro", 531], 8, 16],
            ",",
            ["escape", ["macro", 532], 8, 16],
            ",",
            ["escape", ["macro", 533], 8, 16],
            ");\u003C/script\u003E\n",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 171,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_load: true,
          vtp_html:
            '\u003Cscript id="gtm_beforeunload_temp" type="text/gtmscript"\u003Ewindow.addEventListener("beforeunload",function(){window.dataLayer.push({event:"beforeunload"});nytAnalytics.exitPriority=!0});(function(){var a=document.querySelector("#gtm_beforeunload_temp");a\u0026\u0026(a.outerHTML="")})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 172,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_load: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Enyt_et.get_pageview_id()\u0026\u0026nyt_et("send",{subject:"page_exit",assetUrl:(document.querySelector("link[rel\\x3dcanonical]")||{}).href,assetId:(document.querySelector("meta[name\\x3darticleid]")||{}).content,nyt_uri:(document.querySelector("meta[name\\x3dnyt_uri]")||{}).content,url:location.href,referrer:"',
            ["escape", ["macro", 31], 7],
            '",client_tz_offset:(new Date).getTimezoneOffset(),activeTime:(window.nytAnalytics||{}).activeTime,exit:!0,gtm:',
            ["escape", ["macro", 464], 8, 16],
            "});\u003C/script\u003E",
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 173,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Ewindow.iterateSettings={apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiNWMwOThiM2QxNjU0YzEwMDAxMmM2OGY5IiwiaWF0IjoxNTQ0MTI5MzQxfQ.UI13nEXGs0udbZxhjyFLruAEed42XwFO4fZlCqOgY1o"};\n(function(a,d,f,g,h){function e(){b=d.createElement(f);b.id=g;b.async=1;b.src="https://platform.iteratehq.com/loader.js";k.parentNode.insertBefore(b,k)}if(!d.getElementById(g)){a.IterateObjectName=h;var c=function(){c.c(arguments)};c.q=[];c.c=function(l){c.q.push(l)};a[h]=c;var b,k=d.getElementsByTagName(f)[0];"complete"===d.readyState?e():a.attachEvent?a.attachEvent("onload",e):a.addEventListener("load",e,!1)}})(window,document,"script","iterate-js","Iterate");\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Etry{if(window.Iterate\u0026\u0026"function"===typeof Iterate){var subscriberInfo="',
            ["escape", ["macro", 494], 7],
            '",uType="',
            ["escape", ["macro", 156], 7],
            '",eduSubscriber="object"===typeof subscriberInfo?subscriberInfo.eduSubscriber:"",userType="string"===typeof uType?uType:"",params={eduSubscriber:eduSubscriber,userType:userType};Iterate("identify",params)}}catch(a){console.log(a)};\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 175,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_load: true,
          vtp_html:
            '\u003Cscript id="gtm_postMessage_tmp" type="text/gtmscript"\u003E(function(){function b(a){var b={pageDataReady:!0,scrollComplete:!0,heartbeat:!0,moduleInteraction:!0,trackVirtualPage:!0,dynamicElementsLoaded:!0,videoEvent:!0,mediaEvent:!0,impression:!0,performance:!0,error:!0,"ab-alloc":!0,"ab-expose":!0,"send-direct":!0};"object"===typeof a.data\u0026\u0026"string"===typeof a.data.event\u0026\u0026b[a.data.event]\u0026\u0026(/nytimes.com/.test(a.origin)\u0026\u0026dataLayer.push(a.data),/googlesyndication.com/.test(a.origin)\u0026\u0026(a=JSON.parse(JSON.stringify(a.data)),"moduleInteraction"===a.event\u0026\u0026(delete a.event,\na.subject="dfp-ad-events",a={event:"send-direct",payload:a}),dataLayer.push(a)))}window.addEventListener("message",b,!1)})();(function(){var b=document.querySelector("#gtm_postMessage_tmp");b\u0026\u0026b.parentNode.removeChild(b)})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 176,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Ciframe name="__bkframe" height="0" width="0" frameborder="0" style="display:none;position:absolute;clip:rect(0px 0px 0px 0px)" src="about:blank"\u003E\u003C/iframe\u003E \n\u003Cscript type="text/gtmscript" data-gtmsrc="https://tags.bkrtx.com/js/bk-coretag.js"\u003E\u003C/script\u003E \n\u003Cscript type="text/gtmscript"\u003E(function(){bk_addPageCtx("url",window.location.href);bk_addPageCtx("gatewayhit",!0);var a=50134;navigator.userAgent.match(/Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|RIM/i)\u0026\u0026(a=50747);bk_allow_multiple_calls=!0;bk_doJSTag(a,4)})();\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 178,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="et2-send-direct" type="text/gtmscript"\u003E"function"===typeof nyt_et\u0026\u0026nyt_et("send",',
            ["escape", ["macro", 536], 8, 16],
            ');(function(a){a.parentNode.removeChild(a)})(document.getElementById("et2-send-direct"));\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 179,
        },
        {
          function: "__html",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 0, 0]],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="performance_temp" type="text/gtmscript"\u003EnytAnalytics.performance({performance:',
            ["escape", ["macro", 478], 8, 16],
            '});(function(){var a=document.querySelector("#performance_temp");a\u0026\u0026(a.outerHTML="")})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 182,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(a,b,c,d,e,f){a.ddjskey=e;a.ddoptions=f||null;a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.src=d;b.parentNode.insertBefore(a,b)}(window,document,"script","https://dd.nytimes.com/tags.js","499AE34129FA4E4FABC31582C3075D",{endpoint:"https://dd.nytimes.com/js/"});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 183,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a="script";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,"https://sc-static.net/scevent.min.js");snaptr("init","e1c4c748-041c-4910-989a-1847d8a95fb2");snaptr("track","Login");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 184,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript" id="et_mediaevent_temp"\u003E(function(){var a=JSON.parse(JSON.stringify(',
            ["escape", ["macro", 516], 8, 16],
            '));"object"===typeof a\u0026\u0026"video-player"==a.module\u0026\u0026"function"==typeof nyt_et\u0026\u0026(a.subject="interaction",nyt_et("send",a));if(a=document.querySelector("#et_mediaevent_temp"))a.outerHTML=""})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 185,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(){var b=',
            ["escape", ["macro", 159], 8, 16],
            '||"",c=',
            ["escape", ["macro", 395], 8, 16],
            '||"",a={};b\u0026\u0026(a.regi_id=b);c\u0026\u0026(a.playaction=c);a["WT.tx_e"]="s";a["WT.si_n"]="MiniGame";a["WT.si_x"]="2";a["WT.si_p"]="GameLoad";ORA.click({data:a})})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1208,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="infinity_marketing_temp" type="text/gtmscript"\u003E(function(){var b=',
            ["escape", ["macro", 159], 8, 16],
            '||"",a={},c=',
            ["escape", ["macro", 537], 8, 16],
            '||"",d=',
            ["escape", ["macro", 538], 8, 16],
            '||"",e=',
            ["escape", ["macro", 421], 8, 16],
            '||"",f=',
            ["escape", ["macro", 539], 8, 16],
            '||"",g=',
            ["escape", ["macro", 445], 8, 16],
            '||"",h=',
            ["escape", ["macro", 540], 8, 16],
            '||"",k=',
            ["escape", ["macro", 541], 8, 16],
            '||"",l=',
            ["escape", ["macro", 542], 8, 16],
            '||"";b\u0026\u0026(a.regi_id=b);a["WT.tx_e"]="v";a["WT.si_n"]="MiniGame";a["WT.si_x"]="1";a["WT.si_p"]="GamePage";c\u0026\u0026(a.b2bsub=c);d\u0026\u0026(a.chldsub=d);e\u0026\u0026(a.condensebundle=e);f\u0026\u0026(a.gtwayHITLM=f);g\u0026\u0026(a.vrzschl=g);h\u0026\u0026(a.giftrecp=h);k\u0026\u0026(a.newletterlist=\nk);l\u0026\u0026(a.a14dv=l);ORA.view({data:a})})();(function(){var b=document.querySelector("#infinity_marketing_temp");b\u0026\u0026(b.outerHTML="")})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1210,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a="script";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,"https://sc-static.net/scevent.min.js");snaptr("init","874326db-7dc3-49c4-a8b2-8e29732a9ff7");snaptr("track","SIGN_UP");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1216,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){dataLayer.push({event:"podcast_link"})})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1248,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(){var a=',
            ["escape", ["macro", 543], 8, 16],
            ';a.referrerPolicy="no-referrer-when-downgrade"})();\u003C/script\u003E ',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1315,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript" data-gtmsrc="https://c.oracleinfinity.io/acs/account/cialth61ui/js/main/odc.js?_ora.context=analytics:production"\u003E\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1318,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="infinity_marketing_temp" type="text/gtmscript"\u003E(function(){var b=',
            ["escape", ["macro", 159], 8, 16],
            '||"",a={},c=',
            ["escape", ["macro", 18], 8, 16],
            '||"",d=',
            ["escape", ["macro", 537], 8, 16],
            '||"",e=',
            ["escape", ["macro", 538], 8, 16],
            '||"",f=',
            ["escape", ["macro", 544], 8, 16],
            '||"",g=',
            ["escape", ["macro", 539], 8, 16],
            '||"",h=',
            ["escape", ["macro", 445], 8, 16],
            '||"",k=',
            ["escape", ["macro", 540], 8, 16],
            '||"",l=',
            ["escape", ["macro", 541], 8, 16],
            '||"",m=',
            ["escape", ["macro", 542], 8, 16],
            '||"";offerID=',
            ["escape", ["macro", 545], 8, 16],
            '||"";b\u0026\u0026(a.regi_id=b);a["WT.tx_e"]="v";a["WT.si_n"]="Registration Flow";a["WT.si_x"]="1";a["WT.si_p"]="Thank You";c\u0026\u0026(a["asset.url"]=c);d\u0026\u0026(a.b2bsub=d);e\u0026\u0026(a.chldsub=e);f\u0026\u0026\n(a.condensebundle=f);g\u0026\u0026(a.gtwayHITLM=g);h\u0026\u0026(a.vrzschl=h);k\u0026\u0026(a.giftrecp=k);l\u0026\u0026(a.newletterlist=l);m\u0026\u0026(a.a14dv=m);offerID\u0026\u0026(a["WT.offerID"]=offerID);ORA.view({data:a})})();(function(){var b=document.querySelector("#infinity_marketing_temp");b\u0026\u0026(b.outerHTML="")})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1320,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(a,e,f,b,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};setTimeout(function(){c=e.createElement("script");d=e.getElementsByTagName("script")[0];c.src=f;d.parentNode.insertBefore(c,d)},0)}(window,document,"https://ext.chtbl.com/trackable.js","trackable");trackable("init","7086cdd56a02cc5b64556972a2a22098");trackable("addToCart");\u003C/script\u003E ',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1324,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Ecapture_others=',
            ["escape", ["macro", 547], 8, 16],
            ";container_id=",
            ["escape", ["macro", 461], 8, 16],
            ';send_to_et={subject:"page_update"};if(Array.isArray(capture_others)\u0026\u00260\u003Ccapture_others.length){for(var i=0;i\u003Ccapture_others.length;i++)send_to_et[capture_others[i]]=google_tag_manager[container_id].dataLayer.get(capture_others[i]);nyt_et(send_to_et)}dataLayer.push({capture:{others:void 0}});\u003C/script\u003E ',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1328,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003Evar google_conversion_id=1008590664,google_conversion_label="8HYJCL-Mht0CEMi-9-AD",google_remarketing_only=!1,google_allow_ad_personalization_signals=!1;\u003C/script\u003E\n\u003Cscript type="text/gtmscript" data-gtmsrc="//www.googleadservices.com/pagead/conversion.js"\u003E\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1349,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="//static.ads-twitter.com/oct.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003Etwttr.conversion.trackPid("o70re",{tw_sale_amount:0,tw_order_quantity:0});\u003C/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=o70re\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003Cimg height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=o70re\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0"\u003E\n\u003C/noscript\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1350,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="infinity_marketing_temp" type="text/gtmscript"\u003E(function(){var b=',
            ["escape", ["macro", 159], 8, 16],
            '||"",a={},c=',
            ["escape", ["macro", 18], 8, 16],
            '||"",d=',
            ["escape", ["macro", 537], 8, 16],
            '||"",e=',
            ["escape", ["macro", 538], 8, 16],
            '||"",f=',
            ["escape", ["macro", 544], 8, 16],
            '||"",g=',
            ["escape", ["macro", 539], 8, 16],
            '||"",h=',
            ["escape", ["macro", 445], 8, 16],
            '||"",k=',
            ["escape", ["macro", 540], 8, 16],
            '||"",l=',
            ["escape", ["macro", 541], 8, 16],
            '||"",m=',
            ["escape", ["macro", 542], 8, 16],
            '||"";offerID=',
            ["escape", ["macro", 545], 8, 16],
            '||"";b\u0026\u0026(a.regi_id=b);a["WT.tx_e"]="s";a["WT.si_n"]="PUMA";a["WT.si_x"]="2";a["WT.si_p"]="Thank You";c\u0026\u0026(a["asset.url"]=c);d\u0026\u0026(a.b2bsub=d);e\u0026\u0026(a.chldsub=e);f\u0026\u0026(a.condensebundle=\nf);g\u0026\u0026(a.gtwayHITLM=g);h\u0026\u0026(a.vrzschl=h);k\u0026\u0026(a.giftrecp=k);l\u0026\u0026(a.newletterlist=l);m\u0026\u0026(a.a14dv=m);offerID\u0026\u0026(a["WT.offerID"]=offerID);ORA.view({data:a})})();(function(){var b=document.querySelector("#infinity_marketing_temp");b\u0026\u0026(b.outerHTML="")})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1360,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript id="infinity_marketing_temp" type="text/gtmscript"\u003E(function(){var b=',
            ["escape", ["macro", 159], 8, 16],
            '||"",a={},c=',
            ["escape", ["macro", 18], 8, 16],
            '||"",d=',
            ["escape", ["macro", 537], 8, 16],
            '||"",e=',
            ["escape", ["macro", 538], 8, 16],
            '||"",f=',
            ["escape", ["macro", 544], 8, 16],
            '||"",g=',
            ["escape", ["macro", 539], 8, 16],
            '||"",h=',
            ["escape", ["macro", 445], 8, 16],
            '||"",k=',
            ["escape", ["macro", 540], 8, 16],
            '||"",l=',
            ["escape", ["macro", 541], 8, 16],
            '||"",m=',
            ["escape", ["macro", 542], 8, 16],
            '||"";offerID=',
            ["escape", ["macro", 545], 8, 16],
            '||"";b\u0026\u0026(a.regi_id=b);a["WT.tx_e"]="v";a["WT.si_n"]="PUMA";a["WT.si_x"]="1";a["WT.si_p"]="Offer View";c\u0026\u0026(a["asset.url"]=c);d\u0026\u0026(a.b2bsub=d);e\u0026\u0026(a.chldsub=e);f\u0026\u0026(a.condensebundle=\nf);g\u0026\u0026(a.gtwayHITLM=g);h\u0026\u0026(a.vrzschl=h);k\u0026\u0026(a.giftrecp=k);l\u0026\u0026(a.newletterlist=l);m\u0026\u0026(a.a14dv=m);offerID\u0026\u0026(a["WT.offerID"]=offerID);ORA.view({data:a})})();(function(){var b=document.querySelector("#infinity_marketing_temp");b\u0026\u0026(b.outerHTML="")})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1362,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript async data-gtmsrc="https://cdn.brandmetrics.com/tag/85a1ebf79602421aa1c2c2f24d32cb6c/nyt.js" type="text/gtmscript"\u003E\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 1373,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){dataLayer.push({module:void 0,card:void 0,block:void 0,eventData:void 0,ad:void 0,pageview:{ad:void 0}})})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 119,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(){var g=function(a){return"string"===typeof a?a.toLowerCase():a},n=function(a){if(!a)return{};a=decodeURI(a);try{return a=\'{"\'+a.replace(/[\u0026]+/g,"\\x26").replace(/([\\?\u0026][^=]+)([\u0026]|$)/g,"$1\\x3d$2").replace(/(^\\?|\u0026$)/g,"").replace(/\u0026/g,\'","\').replace(/=/g,\'":"\')+\'"}\',JSON.parse(a)}catch(c){return{}}},m=function(){var a=window.navigator.userAgent,c=',
            ["escape", ["macro", 31], 8, 16],
            '||document.referrer,e=document.location.href,b=n(document.location.search);-1\u003Cc.indexOf("?")\u0026\u0026n(c.substr(c.indexOf("?")));var d=\nc,f="src smid nl nrx partner campaignid mcid meid".split(" "),h=/^[^:]*:\\/\\/([^\\/]*)/,m=f.length,k;for(k=0;k\u003Cm;k++)if(b[f[k]]){var l=f[k];break}e=l?b[l]:""!==d\u0026\u0026d.match(h)?d.match(h)[1]||"":""===d\u0026\u0026/\\.app/.test(e)?"NYT Mobile Apps":/FBIOS/.test(a)?"FBIOS":/FBAN/.test(a)?"FBAN":"";l=r(e,b);d=e;a=b;f=c;h="NYT Mobile Apps"===d||"cur"===a.smtyp||!!a.nl||"sms"===a.src||a.smprod\u0026\u0026a.smprod.indexOf\u0026\u0026(-1\u003Ca.smprod.indexOf("nytnow")||-1\u003Ca.smprod.indexOf("tools"))||a.partner\u0026\u0026a.partner.indexOf\u0026\u0026(-1\u003Ca.partner.indexOf("rss")||\n-1\u003Ca.partner.indexOf("socialFlow"))||!!a.nrx||d\u0026\u0026d.indexOf\u0026\u0026-1\u003Cd.indexOf("nytimes.com")||g(d)===g("SafariPush");a.mcid||a.meid||"pay"===a.smtyp||/aud_dev/.test(a["WT.mc_id"])||/paid.outbrain.com/.test(f)?d="paid":h?d="owned":(p.test(d)\u0026\u0026d.indexOf("nytimes.com"),d="earned");a=e;f=/naver|aol|lycos|search.netscape|cnn|mamma|terra|search.virgilio|alice|eniro|yahoo|aol|about|voila|baidu|yandex|wp|online.onetcenter|yam|rambler|daum|msn|bing|ask|altavista|alltheweb|bing|najdi|aol|seznam|search|duckduckgo|mynet|ekolay|pchome|kvasir|sesam|ozu|szukacz|google/;\nh=/\\.(facebook|twitter|reddit|pinterest|getpocket|stumbleupon|myspace|fark|digg|linkedin|plus.url.google|disqus|quora|yelp|meetup|goodreads|weibo|tumblr|instagram|urbanspoon|weebly|youtube|ycombinator|vk|meneame)\\./;c=f.test(a)?"search":q(a)||h.test(a)||"t.co"===a?"social":/nytimes.com|nytnow.com/.test(a)||"NYT Mobile Apps"===a?"internal":!b.moc\u0026\u0026!b.meid||null!==c\u0026\u0026""!==c?(b.mcid||b.mc)\u0026\u0026null!==a?"marketing_campaign":b.nl||b.emc?"newsletter":null===a?null:g(a)===g("SafariPush")||"sms"===a?"notifications":\n"referring_links":"marketing_email";b=e;b="string"===typeof b\u0026\u0026"SafariPush"===b?b.toLowerCase():b;return{source:b,subchannel:l,type:d,channel:c}},p=/.*\\..*/,q=function(a){if(a){var c=/^(fb\\-|tw\\-|pin\\-|pi\\-|pinterest\\-|re\\-|go\\-|li\\-|in\\-|kk\\-|ln\\-|wc\\-)/;a=a\u0026\u0026a.match\u0026\u0026a.match(c);if(Array.isArray(a))return a[1]}},r=function(a,c){if(c.meid)return"marketing email";if(c.nl||c.emc)return"Newsletter";if("FBAN"===a||"FBIOS"===a)return"facebook";if("NYT Mobile Apps"==a)return a;if("sms"===a)return"sms notifications";\nif(g(a)===g("SafariPush"))return"safari notifications";if(p.test(a)){var e="stumbleupon typepad blogspot digg disqus facebook fark getpocket google linkedin Social pinterest quora reddit scoop slashdot twitter techmeme tinyurl vk".split(" ");var b={stumbleupon:/corp.stumbleupon.com|stumbleupon.com/,typepad:/delong.typepad.com|economistsview.typepad.com/,blogspot:/digbysblog.blogspot.com/,digg:/digg.com/,disqus:/disqus.com/,facebook:/facebook.com|fb-nytdining|fb-nytimes|fb-nytmetro\u0026smtyp=cur|fb-nytopinion|fb-nytpolitics|fb-nytvideo|fb-share|fb-share?utm_hp_ref=parents|l.facebook.com|lm.facebook.com|m.facebook.com|www.facebook.com/,\nfark:/fark.com/,getpocket:/getpocket.com/,google:/go-share|gp-nytimes|plus.url.google.com/,linkedin:/li-nytimes|li-share|linkedin.com|lnkd.in/,Social:/netvibes.com|news.ycombinator.com|nythealth|nytimesarts|nytimesphoto|nytpolitics|nytscience|paper.li|pl-share/,pinterest:/pi-nytimes|pin-share|pinterest.com/,quora:/quora.com/,reddit:/re-share|re-share/,scoop:/scoop.it/,slashdot:/slashdot.org/,twitter:/t.co$|tw-bna|tw-dealbook|tw-nytdavidbrooks|tw-nytfashion|tw-nytfood|tw-nythealth|tw-nytimes|tw-nytimesbits|tw-nytimesbusiness|tw-nytimeskrugman|tw-nytimesmap|tw-nytimesmusic|tw-nytimesscience|tw-nytimestech|tw-nytimestheater|tw-nytimestravel|tw-nytimeswell|tw-nytimesworld|tw-nytmag|tw-nytmedia|tw-nytmetro|tw-nytmovies|tw-nytnational|tw-nytopinion|tw-nytstyles|tw-nytvideo|tw-share|tw-tmagazine|tw-upshotnyt/,\ntechmeme:/techmeme.com/,tinyurl:/tinyurl.com/,vk:/vk.com/};ln=e.length;for(i=i=0;i\u003Cln;i++)if(b[e[i]].test(a))return rollup=e[i];return a}e={"fb-":"facebook","tw-":"twitter","pin-":"pinterest","pi-":"pinterest","pinterest-":"pinterest","re-":"reddit","go-":"googleplus","li-":"linkedin","in-":"instagram","kk-":"kakao","ln-":"line","wc-":"wechat"};return e[q(a)]};window.nytAnalytics=window.nytAnalytics||{};nytAnalytics.derivedReferrer=m()})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 70,
        },
        {
          function: "__html",
          setup_tags: ["list", ["tag", 110, 0]],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003E(function(){var h="src|smprod|emc|smid|nl|partner|nrx|WT.mc_id|oc|CMP|mc|meid",l=new RegExp("\\\\|("+h+")\\x3d","g"),m=function(a){return function(c,b){var f=a.indexOf(c),e=a.indexOf(b);return f\u003Ee?1:f\u003Ce?-1:0}}(h.split("|")),n=function(a,f){var b={campaignSource:a,campaignMedium:"notifications",campaignContent:c(f,"msgid")};"sms"===a.toLowerCase()\u0026\u0026(b.campaignName=f.subid);return b},c=function(a,c,b){return"object"===typeof a\u0026\u0026a.hasOwnProperty(c)?a[c]:b?b:""},k=function(a){if(!a)return{};a=decodeURI(a);\ntry{return a=\'{"\'+a.replace(/[\u0026]+/g,"\\x26").replace(/([\\?\u0026][^=]+)([\u0026]|$)/g,"$1\\x3d$2").replace(/(^\\?|\u0026$)/g,"").replace(/\u0026/g,\'","\').replace(/=/g,\'":"\')+\'"}\',JSON.parse(a)}catch(f){return{}}};h=function(){var a,f=',
            ["escape", ["macro", 21], 8, 16],
            ",b={},g=",
            ["escape", ["macro", 31], 8, 16],
            ';var e=document.location.search||"";if(g\u0026\u0026/.*\\.nytimes\\.com/.test(g)||!e)return b;var d=k(e);if(a=e.replace(/\\?|\u0026/g,"|").match(l)){a=a.map(function(a){return a.replace(/[\\|=]/g,"")}).sort(m);d=k(e);b.campaignName=c(d,"subid");b.campaignContent=\nc(d,"subid1");b.campaignKeyword=c(d,"subid2")||c(d,"ad-keywords");e=a.shift();"src"===e\u0026\u0026"safaripush"!==c(d,e)\u0026\u0026"sms"!==c(d,e)\u0026\u0026(e=a.shift());if("smprod"===e\u0026\u0026"eta1"===c(d,"emc")||"emc"===e\u0026\u0026"eta1"!==c(d,e)\u0026\u0026"edit_na"!==c(d,e)||"smid"===e\u0026\u0026""!==c(d,"nrx"))e=a.shift();"mc"===e\u0026\u0026""===c(d,"mcid")\u0026\u0026(e=a.shift());if(e)switch(a=c(d,e),e){case "src":b=n(a,d);break;case "nl":b={campaignSource:a,campaignMedium:"email",campaignName:c(d,"emc"),campaignContent:c(d,"em_pos")};break;case "smid":b={campaignSource:a,\ncampaignMedium:"social",campaignName:c(d,"smtyp"),campaignContent:c(d,"smvar")};break;case "smprod":b={campaignSource:function(){if(g){var a=g.match(/https?:\\/\\/([^/]*)/);return a?a[1]:g}return"nyt-fb-native-external-iframe"===f?"m.facebook.com":"null"}(),campaignMedium:"social",campaignName:c(d,"smid"),campaignContent:a};break;case "partner":b.campaignSource=a;b.campaignMedium="rss"===a.toLowerCase()?"RSS":"partner";break;case "emc":b="edit_na"===a?{campaignName:c(d,"emc"),campaignContent:c(d,"empos"),\ncampaignSource:"Breaking News",campaignMedium:"email"}:{campaignSource:"nytnow",campaignMedium:"email share",campaignName:"share tool"};break;case "nrx":b.campaignSource=a;b.campaignMedium="Vanity URL";break;case "WT.mc_id":b.campaignSource=a;b.campaignMedium="Marketing Campaigns";break;case "oc":b.campaignSource=a;b.campaignMedium="Marketing Campaigns";break;case "CMP":b.campaignSource=a;b.campaignMedium="Marketing Campaigns";break;case "mc":b.campaignSource=c(d,"mcid");b.campaignMedium=a;break;\ncase "meid":b.campaignSource=a,b.campaignMedium="marketing email",b.campaignName=c(d,"moc"),b.campaignContent=c(d,"rid"),b.campaignKeyword=c(d,"dt")}}return b};nytAnalytics=window.nytAnalytics||{};nytAnalytics.campaignMap=h()})();\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 66,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.historyChange" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 5], arg1: "track" },
        { function: "_eq", arg0: ["macro", 0], arg1: "scrollComplete" },
        { function: "_sw", arg0: ["macro", 6], arg1: "out" },
        { function: "_re", arg0: ["macro", 7], arg1: "^.{5}s" },
        { function: "_eq", arg0: ["macro", 8], arg1: "/section/learning" },
        { function: "_re", arg0: ["macro", 7], arg1: "^.{4}e" },
        { function: "_re", arg0: ["macro", 7], arg1: "^.{4}p" },
        { function: "_re", arg0: ["macro", 0], arg1: ".*" },
        {
          function: "_re",
          arg0: ["macro", 9],
          arg1: "\\w+\\%40\\w+\\.\\w+|\\w+\\@\\w+\\.\\w+",
        },
        { function: "_eq", arg0: ["macro", 14], arg1: "true" },
        { function: "_eq", arg0: ["macro", 0], arg1: "moduleInteraction" },
        { function: "_sw", arg0: ["macro", 8], arg1: "/real-estate/" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "^\\/(games|crosswords|puzzles)\\/.*wordle",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "videoEvent" },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "^\\/(real-estate|paidpost)\\/",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "mediaEvent" },
        { function: "_eq", arg0: ["macro", 0], arg1: "pageDataReady" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gaScrollEvent" },
        { function: "_eq", arg0: ["macro", 418], arg1: "1" },
        { function: "_eq", arg0: ["macro", 419], arg1: "1" },
        { function: "_eq", arg0: ["macro", 423], arg1: "event" },
        { function: "_re", arg0: ["macro", 0], arg1: "gaEvent" },
        { function: "_eq", arg0: ["macro", 11], arg1: "newsletters" },
        { function: "_eq", arg0: ["macro", 391], arg1: "subscribe" },
        { function: "_eq", arg0: ["macro", 437], arg1: "undefined" },
        { function: "_eq", arg0: ["macro", 11], arg1: "gateway" },
        { function: "_eq", arg0: ["macro", 0], arg1: "impression" },
        { function: "_eq", arg0: ["macro", 440], arg1: "true" },
        { function: "_eq", arg0: ["macro", 8], arg1: "/share" },
        {
          function: "_cn",
          arg0: ["macro", 395],
          arg1: "referral-advocate-landing-page",
        },
        {
          function: "_eq",
          arg0: ["macro", 8],
          arg1: "/newsletters/morning-briefing",
        },
        {
          function: "_ew",
          arg0: ["macro", 8],
          arg1: "/podcasts/daily-newsletter-quarantine-virus.html",
        },
        {
          function: "_eq",
          arg0: ["macro", 8],
          arg1: "/news-event/coronavirus",
        },
        { function: "_cn", arg0: ["macro", 90], arg1: "The Daily" },
        { function: "_cn", arg0: ["macro", 420], arg1: "/the-daily" },
        {
          function: "_cn",
          arg0: ["macro", 420],
          arg1: "universal/introducing-father-soldier-son-a-film-from-the-times-and-netflix.html",
        },
        { function: "_cn", arg0: ["macro", 403], arg1: "user-play" },
        {
          function: "_cn",
          arg0: ["macro", 8],
          arg1: "podcasts/nice-white-parents-serial",
        },
        { function: "_cn", arg0: ["macro", 441], arg1: "playing" },
        {
          function: "_re",
          arg0: ["macro", 442],
          arg1: "Via.*(Apple Podcasts|Spotify|Google)",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.linkClick" },
        {
          function: "_re",
          arg0: ["macro", 443],
          arg1: "(^$|((^|,)2703797_1249($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 443],
          arg1: "(^$|((^|,)2703797_1251($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 443],
          arg1: "(^$|((^|,)2703797_1252($|,)))",
        },
        { function: "_cn", arg0: ["macro", 8], arg1: "opinion/sway-kara" },
        {
          function: "_re",
          arg0: ["macro", 442],
          arg1: "Apple Podcasts|Spotify|Google|Stitcher",
        },
        {
          function: "_re",
          arg0: ["macro", 443],
          arg1: "(^$|((^|,)2703797_1259($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 8],
          arg1: "/newsletters/coronavirus-schools-briefing",
        },
        { function: "_cn", arg0: ["macro", 8], arg1: "/spotlight/podcasts" },
        { function: "_cn", arg0: ["macro", 8], arg1: "books/review/podcast" },
        { function: "_cn", arg0: ["macro", 8], arg1: "modern-love-podcast" },
        {
          function: "_cn",
          arg0: ["macro", 8],
          arg1: "podcasts/still-processing",
        },
        {
          function: "_re",
          arg0: ["macro", 8],
          arg1: "((podcasts|column)/.*rabbit-hole)|rabbit-hole-podcast",
        },
        { function: "_cn", arg0: ["macro", 11], arg1: "live_events_modal" },
        { function: "_cn", arg0: ["macro", 396], arg1: "rsvp-success" },
        { function: "_eq", arg0: ["macro", 444], arg1: "true" },
        { function: "_cn", arg0: ["macro", 420], arg1: "games/wordle" },
        { function: "_re", arg0: ["macro", 7], arg1: ".*" },
        { function: "_cn", arg0: ["macro", 445], arg1: "false" },
        { function: "_re", arg0: ["macro", 7], arg1: "^.{8}s" },
        { function: "_cn", arg0: ["macro", 420], arg1: "/spelling-bee" },
        { function: "_eq", arg0: ["macro", 458], arg1: "commentsContainer" },
        { function: "_eq", arg0: ["macro", 459], arg1: "commentsContainer" },
        {
          function: "_re",
          arg0: ["macro", 465],
          arg1: "module|card|block|ad|package|item",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "heartbeat" },
        { function: "_eq", arg0: ["macro", 481], arg1: "1" },
        { function: "_gt", arg0: ["macro", 482], arg1: "0" },
        { function: "_sw", arg0: ["macro", 483], arg1: "myaccount" },
        { function: "_eq", arg0: ["macro", 504], arg1: "1" },
        { function: "_eq", arg0: ["macro", 465], arg1: "slideshow" },
        { function: "_eq", arg0: ["macro", 0], arg1: "allocation" },
        { function: "_eq", arg0: ["macro", 0], arg1: "trackVirtualPage" },
        { function: "_eq", arg0: ["macro", 0], arg1: "ab-expose" },
        { function: "_eq", arg0: ["macro", 0], arg1: "ab-alloc" },
        { function: "_eq", arg0: ["macro", 0], arg1: "beforeunload" },
        { function: "_re", arg0: ["macro", 534], arg1: "http.+" },
        { function: "_eq", arg0: ["macro", 535], arg1: "1" },
        {
          function: "_re",
          arg0: ["macro", 443],
          arg1: "(^$|((^|,)2703797_1331($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.load" },
        {
          function: "_eq",
          arg0: ["macro", 8],
          arg1: "/interactive/2020/08/27/arts/design/jackson-heights-queens-virtual-walk-tour.html",
        },
        {
          function: "_eq",
          arg0: ["macro", 8],
          arg1: "/interactive/2020/10/12/style/faze-3d-house-tour.html",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "send-direct" },
        { function: "_eq", arg0: ["macro", 0], arg1: "performance" },
        {
          function: "_cn",
          arg0: ["macro", 483],
          arg1: "myaccount.nytimes.com",
        },
        { function: "_sw", arg0: ["macro", 8], arg1: "/crosswords/game/mini" },
        { function: "_re", arg0: ["macro", 0], arg1: "moduleInteraction" },
        {
          function: "_cn",
          arg0: ["macro", 420],
          arg1: "/crosswords/game/mini",
        },
        { function: "_re", arg0: ["macro", 0], arg1: "ora.load" },
        { function: "_sw", arg0: ["macro", 8], arg1: "/games" },
        { function: "_sw", arg0: ["macro", 8], arg1: "/crosswords" },
        {
          function: "_re",
          arg0: ["macro", 534],
          arg1: "https:\\/\\/(?:\\w+\\.)?nytimes.com\\/",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 443],
          arg1: "(^$|((^|,)2703797_1316($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 8],
          arg1: "get-started/free-access",
        },
        { function: "_re", arg0: ["macro", 0], arg1: "pageDataReady" },
        { function: "_eq", arg0: ["macro", 0], arg1: "sendPageUpdate" },
        { function: "_cn", arg0: ["macro", 395], arg1: "activate" },
        { function: "_cn", arg0: ["macro", 391], arg1: "trial redeemed" },
        { function: "_cn", arg0: ["macro", 8], arg1: "/welcome" },
        { function: "_cn", arg0: ["macro", 8], arg1: "/share" },
        { function: "_cn", arg0: ["macro", 8], arg1: "/newsletter" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 4, 61, 66],
        ],
        [
          ["if", 1],
          [
            "add",
            4,
            45,
            0,
            1,
            3,
            85,
            88,
            92,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
          ],
        ],
        [
          ["if", 2, 3],
          ["add", 4, 8],
        ],
        [
          ["if", 11, 12],
          ["add", 5],
        ],
        [
          ["if", 12, 13],
          ["add", 5],
        ],
        [
          ["if", 15],
          ["add", 6, 74],
        ],
        [
          ["if", 16, 17],
          ["add", 6],
        ],
        [
          ["if", 18],
          ["add", 7, 10, 11, 39, 65, 68, 69, 70, 73, 75, 76, 83, 108],
        ],
        [
          ["if", 19],
          ["add", 9],
        ],
        [
          ["if", 22, 23],
          ["add", 12],
        ],
        [
          ["if", 12, 24, 25],
          ["add", 13, 15, 18, 19, 79, 102],
        ],
        [
          ["if", 18],
          ["unless", 26],
          ["add", 14, 16, 22, 40, 60, 93, 100, 104, 105],
        ],
        [
          ["if", 27, 28],
          ["add", 17, 20, 21, 89],
        ],
        [
          ["if", 28, 29],
          ["add", 23],
        ],
        [
          ["if", 13, 28],
          ["add", 23],
        ],
        [
          ["if", 12, 30, 31],
          ["add", 24],
        ],
        [
          ["if", 12, 25, 32],
          ["add", 25],
        ],
        [
          ["if", 18, 33],
          ["add", 26],
        ],
        [
          ["if", 18, 34],
          ["add", 27],
        ],
        [
          ["if", 18, 35, 36],
          ["add", 28, 37],
        ],
        [
          ["if", 18, 37],
          ["add", 29],
        ],
        [
          ["if", 17, 38, 39, 40],
          ["add", 30],
        ],
        [
          ["if", 18, 39],
          ["add", 31, 37],
        ],
        [
          ["if", 39, 41, 42, 43],
          ["add", 32, 98],
        ],
        [
          ["if", 18, 46],
          ["add", 33, 37],
        ],
        [
          ["if", 42, 46, 47, 48],
          ["add", 34],
        ],
        [
          ["if", 17, 38, 40, 46],
          ["add", 35],
        ],
        [
          ["if", 12, 24, 25, 49],
          ["add", 36],
        ],
        [
          ["if", 18, 50],
          ["add", 37],
        ],
        [
          ["if", 18, 51],
          ["add", 37],
        ],
        [
          ["if", 18, 52],
          ["add", 37],
        ],
        [
          ["if", 18, 53],
          ["add", 37],
        ],
        [
          ["if", 18, 54],
          ["add", 37],
        ],
        [
          ["if", 12, 55, 56],
          ["add", 38],
        ],
        [
          ["if", 1],
          ["unless", 57],
          ["add", 41],
        ],
        [
          ["if", 18, 58, 59, 60],
          ["add", 42, 44],
        ],
        [
          ["if", 18, 62],
          ["add", 43],
        ],
        [
          ["if", 12],
          ["add", 62],
        ],
        [
          ["if", 3],
          ["add", 63, 65],
        ],
        [
          ["if", 66],
          ["add", 64],
        ],
        [
          ["if", 12, 68],
          ["add", 67],
        ],
        [
          ["if", 28, 70],
          ["unless", 71],
          ["add", 71],
        ],
        [
          ["if", 12, 65],
          ["add", 72],
          ["block", 62],
        ],
        [
          ["if", 72],
          ["add", 77],
        ],
        [
          ["if", 73],
          ["add", 78, 3, 2],
        ],
        [
          ["if", 17],
          ["add", 80, 94],
        ],
        [
          ["if", 28, 71],
          ["add", 81],
        ],
        [
          ["if", 74],
          ["add", 82],
        ],
        [
          ["if", 75],
          ["add", 84],
        ],
        [
          ["if", 76],
          ["add", 86],
        ],
        [
          ["if", 42, 77, 78, 79],
          ["add", 86],
        ],
        [
          ["if", 80],
          ["add", 87],
        ],
        [
          ["if", 83],
          ["add", 90],
        ],
        [
          ["if", 84],
          ["add", 91],
        ],
        [
          ["if", 86, 87],
          ["add", 95],
        ],
        [
          ["if", 88, 89],
          ["add", 96],
        ],
        [
          ["if", 18, 90],
          ["unless", 26],
          ["add", 97],
        ],
        [
          ["if", 18, 91],
          ["unless", 26],
          ["add", 97],
        ],
        [
          ["if", 42, 92, 93],
          ["add", 99],
        ],
        [
          ["if", 18, 94],
          ["add", 100],
        ],
        [
          ["if", 86, 95],
          ["add", 100],
        ],
        [
          ["if", 89],
          ["unless", 26],
          ["add", 101],
        ],
        [
          ["if", 96],
          ["add", 103],
        ],
        [
          ["if", 12, 97, 98],
          ["add", 106],
        ],
        [
          ["if", 89, 94],
          ["unless", 99, 100, 101],
          ["add", 107],
        ],
        [
          ["if", 1, 4],
          ["block", 4],
        ],
        [
          ["if", 0, 4],
          ["block", 4],
        ],
        [
          ["if", 1, 5],
          ["block", 4],
        ],
        [
          ["if", 0, 5],
          ["block", 4],
        ],
        [
          ["if", 1, 6],
          ["block", 4],
        ],
        [
          ["if", 0, 6],
          ["block", 4],
        ],
        [
          ["if", 0, 7],
          ["block", 4],
        ],
        [
          ["if", 0, 8],
          ["block", 4],
        ],
        [
          ["if", 1, 7],
          ["block", 4],
        ],
        [
          ["if", 1, 8],
          ["block", 4],
        ],
        [
          ["if", 4, 9],
          [
            "block",
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            28,
            29,
            30,
            31,
            33,
            35,
            36,
            37,
            38,
            39,
            40,
            42,
            43,
            44,
            60,
            68,
            69,
            70,
            74,
            75,
            79,
            89,
            93,
            95,
            96,
            97,
            100,
            101,
            102,
            104,
            105,
            106,
            107,
            108,
          ],
        ],
        [
          ["if", 6, 9],
          [
            "block",
            4,
            8,
            10,
            15,
            16,
            18,
            20,
            21,
            38,
            60,
            69,
            70,
            74,
            75,
            79,
            89,
            93,
            102,
            105,
          ],
        ],
        [
          ["if", 7, 9],
          [
            "block",
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            28,
            29,
            30,
            31,
            33,
            35,
            36,
            37,
            38,
            39,
            40,
            42,
            43,
            44,
            60,
            68,
            69,
            70,
            74,
            75,
            79,
            89,
            93,
            95,
            96,
            97,
            100,
            101,
            102,
            104,
            105,
            106,
            107,
            108,
          ],
        ],
        [
          ["if", 8, 9],
          [
            "block",
            4,
            8,
            10,
            15,
            16,
            18,
            20,
            21,
            38,
            42,
            43,
            44,
            60,
            69,
            70,
            74,
            75,
            79,
            89,
            93,
            97,
            102,
            104,
            105,
          ],
        ],
        [
          ["if", 5, 9],
          ["block", 4, 8, 74, 75],
        ],
        [
          ["if", 9, 10],
          ["block", 5, 6, 7, 9, 11, 12, 13, 14, 17, 18, 23, 36, 39, 40, 108],
        ],
        [
          ["if", 9, 14],
          ["block", 5, 6, 7, 9, 12, 22, 23],
        ],
        [
          ["if", 9, 20, 21],
          ["block", 10, 69, 70],
        ],
        [
          ["if", 4, 42, 44],
          ["block", 32, 34],
        ],
        [
          ["if", 7, 42, 45],
          ["block", 32, 34],
        ],
        [
          ["if", 9, 61],
          ["block", 42, 44],
        ],
        [
          ["if", 0, 63],
          ["block", 61],
        ],
        [
          ["if", 0, 64],
          ["block", 61],
        ],
        [
          ["if", 9, 67],
          ["block", 65],
        ],
        [
          ["if", 9, 69],
          ["block", 68],
        ],
        [
          ["if", 80, 81],
          ["block", 87],
        ],
        [
          ["if", 80, 82],
          ["block", 87],
        ],
        [
          ["if", 7, 80],
          ["block", 87],
        ],
        [
          ["if", 69, 80],
          ["block", 87],
        ],
        [
          ["if", 1, 85],
          ["block", 92],
        ],
        [
          ["if", 1, 14],
          ["block", 92],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__twitter_website_tag",
        [46, "a"],
        [
          50,
          "h",
          [46],
          [41, "k"],
          [3, "k", ["c", "twq"]],
          [22, [15, "k"], [46, [36, [15, "k"]]]],
          [
            "g",
            "twq",
            [
              51,
              "",
              [7],
              [52, "m", ["c", "twq.exe.apply"]],
              [
                22,
                [15, "m"],
                [46, ["b", "twq.exe.apply", [45], [15, "arguments"]]],
                [46, ["b", "twq.queue.push", [15, "arguments"]]],
              ],
            ],
            true,
          ],
          ["g", "twq.version", "1", true],
          ["g", "twq.queue", [7], true],
          [52, "l", [51, "", [7]]],
          [
            "d",
            "https://static.ads-twitter.com/uwt.js",
            [15, "l"],
            [15, "l"],
            "twitter_website_tag",
          ],
          [36, ["c", "twq"]],
        ],
        [52, "b", ["require", "callInWindow"]],
        [52, "c", ["require", "copyFromWindow"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "makeString"]],
        [52, "f", ["require", "makeTableMap"]],
        [52, "g", ["require", "setInWindow"]],
        [41, "i"],
        [3, "i", ["h"]],
        ["i", "init", ["e", [17, [15, "a"], "twitter_pixel_id"]]],
        [
          52,
          "j",
          [
            "f",
            [30, [17, [15, "a"], "event_parameters"], [7]],
            "param_table_key_column",
            "param_table_value_column",
          ],
        ],
        [
          22,
          [1, [15, "j"], [2, [15, "j"], "hasOwnProperty", [7, "content_ids"]]],
          [
            46,
            [
              53,
              [41, "k"],
              [3, "k", [16, [15, "j"], "content_ids"]],
              [
                3,
                "k",
                [2, [2, [15, "k"], "split", [7, '"']], "join", [7, "'"]],
              ],
              [41, "l"],
              [
                3,
                "l",
                [
                  2,
                  [
                    2,
                    [15, "k"],
                    "slice",
                    [
                      7,
                      [2, [15, "k"], "indexOf", [7, "["]],
                      [2, [15, "k"], "indexOf", [7, "]"]],
                    ],
                  ],
                  "split",
                  [7, ","],
                ],
              ],
              [
                3,
                "l",
                [
                  2,
                  [15, "l"],
                  "map",
                  [
                    7,
                    [
                      51,
                      "",
                      [7, "m"],
                      [
                        36,
                        [30, [16, [2, [15, "m"], "split", [7, "'"]], 1], ""],
                      ],
                    ],
                  ],
                ],
              ],
              [43, [15, "j"], "content_ids", [15, "l"]],
            ],
          ],
        ],
        ["i", "track", ["e", [17, [15, "a"], "event_type"]], [15, "j"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__csm",
        [46, "a"],
        [41, "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "o"],
        [
          50,
          "l",
          [46, "p", "q"],
          [41, "r", "s", "t", "u"],
          [3, "r", ["f"]],
          [3, "s", [2, [30, [15, "q"], ""], "split", [7, "&"]]],
          [3, "q", ""],
          [3, "t", 0],
          [
            42,
            [23, [15, "t"], [17, [15, "s"], "length"]],
            [33, [15, "t"], [3, "t", [0, [15, "t"], 1]]],
            false,
            [
              46,
              [
                22,
                [16, [15, "s"], [15, "t"]],
                [
                  46,
                  [3, "u", [2, [16, [15, "s"], [15, "t"]], "split", [7, "="]]],
                  [
                    22,
                    [16, [15, "u"], 0],
                    [
                      46,
                      [
                        3,
                        "q",
                        [
                          0,
                          [15, "q"],
                          [
                            0,
                            [0, [0, "&", ["c", [16, [15, "u"], 0]]], "="],
                            [
                              39,
                              [16, [15, "u"], 1],
                              ["c", [16, [15, "u"], 1]],
                              "",
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            36,
            [
              0,
              [
                0,
                [
                  0,
                  [
                    0,
                    [
                      0,
                      [
                        0,
                        [
                          0,
                          [
                            0,
                            [
                              0,
                              [
                                0,
                                [
                                  0,
                                  [
                                    0,
                                    "https://sb.scorecardresearch.com/b?c1=2&c2=",
                                    ["c", [15, "p"]],
                                  ],
                                  "&ns__t=",
                                ],
                                [15, "r"],
                              ],
                              "&ns_c=",
                            ],
                            [30, ["i"], ""],
                          ],
                          "&c8=",
                        ],
                        ["c", [30, ["j"], ""]],
                      ],
                      [15, "q"],
                    ],
                    "&c7=",
                  ],
                  ["c", ["g"]],
                ],
                "&c9=",
              ],
              ["c", ["e"]],
            ],
          ],
        ],
        [
          50,
          "m",
          [46, "p"],
          [41, "q"],
          [
            22,
            [18, [17, [15, "p"], "length"], 2048],
            [
              46,
              [
                3,
                "q",
                [
                  2,
                  [2, [15, "p"], "substring", [7, 0, 2040]],
                  "lastIndexOf",
                  [7, "&"],
                ],
              ],
              [
                3,
                "p",
                [
                  0,
                  [
                    0,
                    [2, [15, "p"], "substring", [7, 0, [15, "q"]]],
                    "&ns_cut=",
                  ],
                  ["c", [2, [15, "p"], "substring", [7, [0, [15, "q"], 1]]]],
                ],
              ],
              [3, "p", [2, [15, "p"], "substring", [7, 0, 2048]]],
            ],
          ],
          [36, [15, "p"]],
        ],
        [
          50,
          "n",
          [46],
          [41, "p"],
          [
            3,
            "p",
            [
              0,
              [
                0,
                "https://sb.scorecardresearch.com/c2/",
                ["c", [17, [15, "a"], "clientId"]],
              ],
              "/cs.js",
            ],
          ],
          [
            "h",
            [15, "p"],
            [17, [15, "a"], "gtmOnSuccess"],
            [17, [15, "a"], "gtmOnFailure"],
          ],
        ],
        [3, "b", ["require", "callOnWindowLoad"]],
        [3, "c", ["require", "encodeUriComponent"]],
        [3, "d", ["require", "getCookieValues"]],
        [3, "e", ["require", "getReferrerUrl"]],
        [3, "f", ["require", "getTimestampMillis"]],
        [3, "g", ["require", "getUrl"]],
        [3, "h", ["require", "injectScript"]],
        [3, "i", ["require", "readCharacterSet"]],
        [3, "j", ["require", "readTitle"]],
        [3, "k", ["require", "sendPixel"]],
        [3, "o", [2, ["d", "comScore", true], "join", [7, "&"]]],
        ["k", ["m", ["l", [17, [15, "a"], "clientId"], [15, "o"]]]],
        ["b", [15, "n"]],
      ],
    ],
    permissions: {
      __twitter_website_tag: {
        access_globals: {
          keys: [
            { key: "twq", read: true, write: true, execute: true },
            { key: "twq.exe", read: true, write: true, execute: true },
            { key: "twq.queue", read: true, write: true, execute: true },
            { key: "twq.queue.push", read: true, write: true, execute: true },
            { key: "twq.version", read: true, write: true, execute: false },
            { key: "twq.exe.apply", read: true, write: true, execute: true },
          ],
        },
        inject_script: { urls: ["https://static.ads-twitter.com/uwt.js"] },
      },
      __csm: {
        send_pixel: { urls: ["https://sb.scorecardresearch.com/b?*"] },
        inject_script: { urls: ["https://sb.scorecardresearch.com/c2/*"] },
        get_cookies: { cookieAccess: "any" },
        get_url: { urlParts: "any" },
        get_referrer: { urlParts: "any" },
        read_character_set: {},
        read_title: {},
        process_dom_events: {
          targets: [{ targetType: "window", eventName: "load" }],
        },
      },
    },

    security_groups: {
      nonGoogleScripts: ["__twitter_website_tag", "__csm"],
    },
  };

  var productSettings = {
    "AW-1008590664": { preAutoPii: true },
    "AW-1055525830": { preAutoPii: true },
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var l,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    da =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = { a: !0 },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.a;
        break a;
      } catch (a) {}
      fa = !1;
    }
    ea = fa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ja = ea,
    ka = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (ja) ja(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.nl = b.prototype;
    },
    la = this || self,
    na = function (a) {
      return a;
    };
  var oa = function (a, b) {
    this.h = a;
    this.s = b;
  };
  var pa = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    },
    qa = function () {
      this.F = {};
      this.D = !1;
      this.J = {};
    },
    ra = function (a, b) {
      var c = [],
        d;
      for (d in a.F)
        if (a.F.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
  qa.prototype.get = function (a) {
    return this.F["dust." + a];
  };
  qa.prototype.set = function (a, b) {
    this.D || ((a = "dust." + a), this.J.hasOwnProperty(a) || (this.F[a] = b));
  };
  qa.prototype.has = function (a) {
    return this.F.hasOwnProperty("dust." + a);
  };
  var sa = function (a, b) {
    b = "dust." + b;
    a.D || a.J.hasOwnProperty(b) || delete a.F[b];
  };
  qa.prototype.Nb = function () {
    this.D = !0;
  };
  var ta = function (a) {
    this.s = new qa();
    this.h = [];
    this.D = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (pa(b) ? (this.h[Number(b)] = a[Number(b)]) : this.s.set(b, a[b]));
  };
  l = ta.prototype;
  l.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof ta
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(d.toString());
    }
    return b.join(",");
  };
  l.set = function (a, b) {
    if (!this.D)
      if ("length" === a) {
        if (!pa(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.h.length = Number(b);
      } else pa(a) ? (this.h[Number(a)] = b) : this.s.set(a, b);
  };
  l.get = function (a) {
    return "length" === a
      ? this.length()
      : pa(a)
      ? this.h[Number(a)]
      : this.s.get(a);
  };
  l.length = function () {
    return this.h.length;
  };
  l.Mb = function () {
    for (var a = ra(this.s, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new ta(a);
  };
  var ua = function (a, b) {
    pa(b) ? delete a.h[Number(b)] : sa(a.s, b);
  };
  l = ta.prototype;
  l.pop = function () {
    return this.h.pop();
  };
  l.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  l.shift = function () {
    return this.h.shift();
  };
  l.splice = function (a, b, c) {
    return new ta(this.h.splice.apply(this.h, arguments));
  };
  l.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  l.has = function (a) {
    return (pa(a) && this.h.hasOwnProperty(a)) || this.s.has(a);
  };
  l.Nb = function () {
    this.D = !0;
    Object.freeze(this.h);
    this.s.Nb();
  };
  var va = function () {
    function a(f, g) {
      if (b[f]) {
        if (b[f].Ce + g > b[f].max) throw Error("Quota exceeded");
        b[f].Ce += g;
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        kk: function (f) {
          c = f;
        },
        Fh: function () {
          c && a(c, 1);
        },
        mk: function (f) {
          d = f;
        },
        Pb: function (f) {
          d && a(d, f);
        },
        Ik: function (f, g) {
          b[f] = b[f] || { Ce: 0 };
          b[f].max = g;
        },
        Ij: function (f) {
          return (b[f] && b[f].Ce) || 0;
        },
        reset: function () {
          b = {};
        },
        vj: a,
      };
    e.onFnConsume = e.kk;
    e.consumeFn = e.Fh;
    e.onStorageConsume = e.mk;
    e.consumeStorage = e.Pb;
    e.setMax = e.Ik;
    e.getConsumed = e.Ij;
    e.reset = e.reset;
    e.consume = e.vj;
    return e;
  };
  var wa = function (a, b) {
    this.D = a;
    this.T = function (c, d, e) {
      return c.apply(d, e);
    };
    this.F = b;
    this.s = new qa();
    this.h = this.J = void 0;
  };
  wa.prototype.add = function (a, b) {
    xa(this, a, b, !1);
  };
  var xa = function (a, b, c, d) {
    if (!a.s.D)
      if (
        (a.D.Pb(
          ("string" === typeof b ? b.length : 1) +
            ("string" === typeof c ? c.length : 1)
        ),
        d)
      ) {
        var e = a.s;
        e.set(b, c);
        e.J["dust." + b] = !0;
      } else a.s.set(b, c);
  };
  wa.prototype.set = function (a, b) {
    this.s.D ||
      (!this.s.has(a) && this.F && this.F.has(a)
        ? this.F.set(a, b)
        : (this.D.Pb(
            ("string" === typeof a ? a.length : 1) +
              ("string" === typeof b ? b.length : 1)
          ),
          this.s.set(a, b)));
  };
  wa.prototype.get = function (a) {
    return this.s.has(a) ? this.s.get(a) : this.F ? this.F.get(a) : void 0;
  };
  wa.prototype.has = function (a) {
    return !!this.s.has(a) || !(!this.F || !this.F.has(a));
  };
  var ya = function (a) {
    var b = new wa(a.D, a);
    a.J && (b.J = a.J);
    b.T = a.T;
    b.h = a.h;
    return b;
  };
  var za = function () {},
    Aa = function (a) {
      return "function" === typeof a;
    },
    m = function (a) {
      return "string" === typeof a;
    },
    Ba = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ca = Array.isArray,
    Da = function (a, b) {
      if (a && Ca(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ga = function (a, b) {
      if (!Ba(a) || !Ba(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ia = function (a, b) {
      for (var c = new Ha(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ja = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    La = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ma = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Na = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Oa = function (a) {
      var b = [];
      if (Ca(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Pa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Qa = function () {
      return new Date(Date.now());
    },
    Ra = function () {
      return Qa().getTime();
    },
    Ha = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ha.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ha.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Sa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ta = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ua = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Va = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Wa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Xa = function (a, b) {
      var c = y;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    Za = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    $a = /^\w{1,9}$/,
    ab = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Ja(a, function (d, e) {
        $a.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    bb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var cb = function (a, b) {
    qa.call(this);
    this.T = a;
    this.sa = b;
  };
  ka(cb, qa);
  cb.prototype.toString = function () {
    return this.T;
  };
  cb.prototype.Mb = function () {
    return new ta(ra(this, 1));
  };
  cb.prototype.h = function (a, b) {
    a.D.Fh();
    return this.sa.apply(
      new db(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  cb.prototype.s = function (a, b) {
    try {
      return this.h.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var fb = function (a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = eb(a, b[d])), c instanceof oa);
        d++
      );
      return c;
    },
    eb = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof cb))
          throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.h.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.J;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
      }
    },
    db = function (a, b) {
      this.s = a;
      this.h = b;
    },
    G = function (a, b) {
      return Ca(b) ? eb(a.h, b) : b;
    },
    H = function (a) {
      return a.s.T;
    };
  var gb = function () {
    qa.call(this);
  };
  ka(gb, qa);
  gb.prototype.Mb = function () {
    return new ta(ra(this, 1));
  };
  var hb = {
    control: function (a, b) {
      return new oa(a, G(this, b));
    },
    fn: function (a, b, c) {
      var d = this.h,
        e = G(this, b);
      if (!(e instanceof ta))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      this.h.D.Pb(a.length + f.length);
      return new cb(
        a,
        (function () {
          return function (g) {
            var h = ya(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var k = Array.prototype.slice.call(arguments, 0), n = 0;
              n < k.length;
              n++
            )
              if (((k[n] = G(this, k[n])), k[n] instanceof oa)) return k[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new ta(k));
            var r = fb(h, f);
            if (r instanceof oa) return "return" === r.h ? r.s : r;
          };
        })()
      );
    },
    list: function (a) {
      var b = this.h.D;
      b.Pb(arguments.length);
      for (var c = new ta(), d = 0; d < arguments.length; d++) {
        var e = G(this, arguments[d]);
        "string" === typeof e && b.Pb(e.length ? e.length - 1 : 0);
        c.push(e);
      }
      return c;
    },
    map: function (a) {
      for (
        var b = this.h.D, c = new gb(), d = 0;
        d < arguments.length - 1;
        d += 2
      ) {
        var e = G(this, arguments[d]) + "",
          f = G(this, arguments[d + 1]),
          g = e.length;
        g += "string" === typeof f ? f.length : 1;
        b.Pb(g);
        c.set(e, f);
      }
      return c;
    },
    undefined: function () {},
  };
  var ib = function () {
      this.D = va();
      this.h = new wa(this.D);
    },
    jb = function (a, b, c) {
      var d = new cb(b, c);
      d.Nb();
      a.h.set(b, d);
    },
    kb = function (a, b, c) {
      hb.hasOwnProperty(b) && jb(a, c || b, hb[b]);
    };
  ib.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.s(c);
  };
  ib.prototype.s = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = eb(this.h, arguments[c]);
    return b;
  };
  ib.prototype.F = function (a, b) {
    var c = ya(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = eb(c, arguments[e]);
    return d;
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var lb,
    mb = function () {
      if (void 0 === lb) {
        var a = null,
          b = la.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: na,
              createScript: na,
              createScriptURL: na,
            });
          } catch (c) {
            la.console && la.console.error(c.message);
          }
          lb = a;
        } else lb = a;
      }
      return lb;
    };
  var ob = function (a, b) {
    this.h = b === nb ? a : "";
  };
  ob.prototype.toString = function () {
    return this.h + "";
  };
  var pb = function (a) {
      return a instanceof ob && a.constructor === ob
        ? a.h
        : "type_error:TrustedResourceUrl";
    },
    nb = {},
    qb = function (a) {
      var b = a,
        c = mb(),
        d = c ? c.createScriptURL(b) : b;
      return new ob(d, nb);
    };
  var rb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function sb() {
    var a = la.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function tb(a) {
    return -1 != sb().indexOf(a);
  }
  function ub() {
    return tb("Firefox") || tb("FxiOS");
  }
  function vb() {
    return ((tb("Chrome") || tb("CriOS")) && !tb("Edge")) || tb("Silk");
  }
  var wb = {},
    xb = function (a, b) {
      this.h = b === wb ? a : "";
    };
  xb.prototype.toString = function () {
    return this.h.toString();
  };
  var yb = function (a) {
      return a instanceof xb && a.constructor === xb
        ? a.h
        : "type_error:SafeHtml";
    },
    zb = function (a) {
      var b = a,
        c = mb(),
        d = c ? c.createHTML(b) : b;
      return new xb(d, wb);
    };
  var Ab = {};
  var Bb = function () {},
    Cb = function (a) {
      this.h = a;
    };
  ka(Cb, Bb);
  Cb.prototype.toString = function () {
    return this.h;
  };
  function Db(a, b) {
    var c = [new Cb(Eb[0].toLowerCase(), Ab)];
    if (0 === c.length) throw Error("No prefixes are provided");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Cb) g = f.h;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Fb(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var y = window,
    I = document,
    Gb = navigator,
    Hb = I.currentScript && I.currentScript.src,
    Jb = function (a, b) {
      var c = y[a];
      y[a] = void 0 === c ? b : c;
      return y[a];
    },
    Kb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Lb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Mb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Nb(a, b, c) {
    b &&
      Ja(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Ob = function (a, b, c, d, e) {
      var f = I.createElement("script");
      Nb(f, d, Lb);
      f.type = "text/javascript";
      f.async = !0;
      var g = qb(a);
      f.src = pb(g);
      var h,
        k,
        n,
        p =
          null ==
          (n = (k = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(k, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      Kb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = I.getElementsByTagName("script")[0] || I.body || I.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Pb = function () {
      if (Hb) {
        var a = Hb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Qb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = I.createElement("iframe")), (h = !0));
      Nb(g, c, Mb);
      d &&
        Ja(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (h) {
        var k = (I.body && I.body.lastChild) || I.body || I.head;
        k.parentNode.insertBefore(g, k);
      }
      Kb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Rb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Sb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Tb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    J = function (a) {
      y.setTimeout(a, 0);
    },
    Ub = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Vb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Wb = function (a) {
      var b = I.createElement("div"),
        c = b,
        d = zb("A<div>" + a + "</div>");
      void 0 !== c.tagName && Fb(c);
      c.innerHTML = yb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Xb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Yb = function (a) {
      var b;
      try {
        b = Gb.sendBeacon && Gb.sendBeacon(a);
      } catch (c) {}
      b || Rb(a);
    },
    Zb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    };
  var $b = function (a, b) {
      return G(this, a) && G(this, b);
    },
    ac = function (a, b) {
      return G(this, a) === G(this, b);
    },
    bc = function (a, b) {
      return G(this, a) || G(this, b);
    },
    cc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    dc = function (a, b) {
      a = String(G(this, a));
      b = String(G(this, b));
      return a.substring(0, b.length) === b;
    },
    gc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      switch (a) {
        case "pageLocation":
          var c = y.location.href;
          b instanceof gb &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var ic = function () {
    this.h = new ib();
    hc(this);
  };
  ic.prototype.execute = function (a) {
    return this.h.s(a);
  };
  var hc = function (a) {
    kb(a.h, "map");
    var b = function (c, d) {
      jb(a.h, c, d);
    };
    b("and", $b);
    b("contains", cc);
    b("equals", ac);
    b("or", bc);
    b("startsWith", dc);
    b("variable", gc);
  };
  var jc = function (a) {
    if (a instanceof jc) return a;
    this.ob = a;
  };
  jc.prototype.toString = function () {
    return String(this.ob);
  };
  var lc = function (a) {
    qa.call(this);
    this.h = a;
    this.set("then", kc(this));
    this.set("catch", kc(this, !0));
    this.set("finally", kc(this, !1, !0));
  };
  ka(lc, gb);
  var kc = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new cb("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof cb || (d = void 0);
      e instanceof cb || (e = void 0);
      var f = ya(this.h),
        g = function (k) {
          return function (n) {
            return c ? (k.h(f), a.h) : k.h(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new lc(h);
    });
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var mc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    nc = function (a) {
      if (null == a) return String(a);
      var b = mc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    oc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    pc = function (a) {
      if (!a || "object" != nc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !oc(a, "constructor") &&
          !oc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || oc(a, b);
    },
    qc = function (a, b) {
      var c = b || ("array" == nc(a) ? [] : {}),
        d;
      for (d in a)
        if (oc(a, d)) {
          var e = a[d];
          "array" == nc(e)
            ? ("array" != nc(c[d]) && (c[d] = []), (c[d] = qc(e, c[d])))
            : pc(e)
            ? (pc(c[d]) || (c[d] = {}), (c[d] = qc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var sc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, k) {
          for (var n = ra(h, 1), p = 0; p < n.length; p++)
            k[n[p]] = g(h.get(n[p]));
        },
        g = function (h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (h instanceof ta) {
            var n = [];
            d.push(h);
            e.push(n);
            for (var p = h.Mb(), q = 0; q < p.length(); q++)
              n[p.get(q)] = g(h.get(p.get(q)));
            return n;
          }
          if (h instanceof lc) return h.h;
          if (h instanceof gb) {
            var r = {};
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          if (h instanceof cb) {
            var t = function () {
              for (
                var v = Array.prototype.slice.call(arguments, 0), x = 0;
                x < v.length;
                x++
              )
                v[x] = rc(v[x], b, c);
              var z = b ? b.D : va(),
                w = new wa(z);
              b && (w.h = b.h);
              return g(h.h.apply(h, [w].concat(v)));
            };
            d.push(h);
            e.push(t);
            f(h, t);
            return t;
          }
          var u = !1;
          switch (c) {
            case 1:
              u = !0;
              break;
            case 2:
              u = !1;
              break;
            case 3:
              u = !1;
              break;
            default:
          }
          if (h instanceof jc && u) return h.ob;
          switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return h;
            case "object":
              if (null === h) return null;
          }
        };
      return g(a);
    },
    rc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, k) {
          for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]));
        },
        g = function (h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (Ca(h) || La(h)) {
            var n = new ta([]);
            d.push(h);
            e.push(n);
            for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
            return n;
          }
          if (pc(h)) {
            var q = new gb();
            d.push(h);
            e.push(q);
            f(h, q);
            return q;
          }
          if ("function" === typeof h) {
            var r = new cb("", function (w) {
              for (
                var A = Array.prototype.slice.call(arguments, 0), B = 0;
                B < A.length;
                B++
              )
                A[B] = sc(G(this, A[B]), b, c);
              return g((0, this.h.T)(h, h, A));
            });
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          var x = typeof h;
          if (null === h || "string" === x || "number" === x || "boolean" === x)
            return h;
          var z = !1;
          switch (c) {
            case 1:
              z = !0;
              break;
            case 2:
              z = !1;
              break;
            default:
          }
          if (void 0 !== h && z) return new jc(h);
        };
      return g(a);
    };
  var tc = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    vc = function (a) {
      if (void 0 === a || Ca(a) || pc(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    };
  var wc = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof ta)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new ta(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
      return new ta(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.h(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
      return new ta(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = tc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : ua(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new ta(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = tc(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.h(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : ua(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var xc =
      "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(
        " "
      ),
    yc = new oa("break"),
    zc = new oa("continue"),
    Ac = function (a, b) {
      return G(this, a) + G(this, b);
    },
    Bc = function (a, b) {
      return G(this, a) && G(this, b);
    },
    Cc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      if (!(c instanceof ta))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't read property " + b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = sc(c.get(0));
            try {
              return a.toString(e);
            } catch (q) {}
          }
          return a.toString();
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (0 <= xc.indexOf(b)) {
          var f = sc(c);
          return rc(a[b].apply(a, f), this.h);
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof ta) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof cb) {
            var h = tc(c);
            h.unshift(this.h);
            return g.h.apply(g, h);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if (0 <= wc.supportedMethods.indexOf(b)) {
          var k = tc(c);
          k.unshift(this.h);
          return wc[b].apply(a, k);
        }
      }
      if (a instanceof cb || a instanceof gb) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof cb) {
            var p = tc(c);
            p.unshift(this.h);
            return n.h.apply(n, p);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof cb ? a.T : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, tc(c));
      }
      if (a instanceof jc && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    Dc = function (a, b) {
      a = G(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = G(this, b);
      c.set(a, d);
      return d;
    },
    Ec = function (a) {
      var b = ya(this.h),
        c = fb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof oa) return c;
    },
    Fc = function () {
      return yc;
    },
    Gc = function (a) {
      for (var b = G(this, a), c = 0; c < b.length; c++) {
        var d = G(this, b[c]);
        if (d instanceof oa) return d;
      }
    },
    Hc = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = G(this, arguments[c + 1]);
          xa(b, d, e, !0);
        }
      }
    },
    Ic = function () {
      return zc;
    },
    Jc = function (a, b, c) {
      var d = new ta();
      b = G(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.h.add(a, G(this, f));
    },
    Kc = function (a, b) {
      return G(this, a) / G(this, b);
    },
    Mc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      var c = a instanceof jc,
        d = b instanceof jc;
      return c || d ? (c && d ? a.ob == b.ob : !1) : a == b;
    },
    Nc = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = G(this, arguments[c]);
      return b;
    };
  function Oc(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = fb(f, d);
      if (g instanceof oa) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Pc(a, b, c) {
    if ("string" === typeof b)
      return Oc(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof gb || b instanceof ta || b instanceof cb) {
      var d = b.Mb(),
        e = d.length();
      return Oc(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Qc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Pc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Rc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Pc(
        function (e) {
          var f = ya(d);
          xa(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Sc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Pc(
        function (e) {
          var f = ya(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Uc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Tc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Vc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Tc(
        function (e) {
          var f = ya(d);
          xa(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Wc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Tc(
        function (e) {
          var f = ya(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Tc(a, b, c) {
    if ("string" === typeof b)
      return Oc(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof ta)
      return Oc(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    throw new TypeError("The value is not iterable.");
  }
  var Xc = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = G(this, a);
      if (!(f instanceof ta))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.h;
      d = G(this, d);
      var h = ya(g);
      for (e(g, h); eb(h, b); ) {
        var k = fb(h, d);
        if (k instanceof oa) {
          if ("break" === k.h) break;
          if ("return" === k.h) return k;
        }
        var n = ya(g);
        e(h, n);
        eb(n, c);
        h = n;
      }
    },
    Yc = function (a) {
      a = G(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Zc = function (a, b) {
      var c;
      a = G(this, a);
      b = G(this, b);
      if (void 0 === a || null === a)
        throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof gb || a instanceof ta || a instanceof cb) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : pa(b) && (c = a[b]);
      else if (a instanceof jc) return;
      return c;
    },
    $c = function (a, b) {
      return G(this, a) > G(this, b);
    },
    ad = function (a, b) {
      return G(this, a) >= G(this, b);
    },
    bd = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      a instanceof jc && (a = a.ob);
      b instanceof jc && (b = b.ob);
      return a === b;
    },
    cd = function (a, b) {
      return !bd.call(this, a, b);
    },
    dd = function (a, b, c) {
      var d = [];
      G(this, a) ? (d = G(this, b)) : c && (d = G(this, c));
      var e = fb(this.h, d);
      if (e instanceof oa) return e;
    },
    ed = function (a, b) {
      return G(this, a) < G(this, b);
    },
    fd = function (a, b) {
      return G(this, a) <= G(this, b);
    },
    gd = function (a, b) {
      return G(this, a) % G(this, b);
    },
    hd = function (a, b) {
      return G(this, a) * G(this, b);
    },
    id = function (a) {
      return -G(this, a);
    },
    jd = function (a) {
      return !G(this, a);
    },
    kd = function (a, b) {
      return !Mc.call(this, a, b);
    },
    ld = function () {
      return null;
    },
    md = function (a, b) {
      return G(this, a) || G(this, b);
    },
    nd = function (a, b) {
      var c = G(this, a);
      G(this, b);
      return c;
    },
    od = function (a) {
      return G(this, a);
    },
    pd = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    qd = function (a) {
      return new oa("return", G(this, a));
    },
    rd = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof cb || a instanceof ta || a instanceof gb) && a.set(b, c);
      return c;
    },
    sd = function (a, b) {
      return G(this, a) - G(this, b);
    },
    td = function (a, b, c) {
      a = G(this, a);
      var d = G(this, b),
        e = G(this, c);
      if (!Ca(d) || !Ca(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === G(this, d[h]))
          if (((f = G(this, e[h])), f instanceof oa)) {
            var k = f.h;
            if ("break" === k) return;
            if ("return" === k || "continue" === k) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = G(this, e[e.length - 1])),
        f instanceof oa && ("return" === f.h || "continue" === f.h))
      )
        return f;
    },
    ud = function (a, b, c) {
      return G(this, a) ? G(this, b) : G(this, c);
    },
    vd = function (a) {
      a = G(this, a);
      return a instanceof cb ? "function" : typeof a;
    },
    wd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    xd = function (a, b, c, d) {
      var e = G(this, d);
      if (G(this, c)) {
        var f = fb(this.h, e);
        if (f instanceof oa) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; G(this, a); ) {
        var g = fb(this.h, e);
        if (g instanceof oa) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        G(this, b);
      }
    },
    yd = function (a) {
      return ~Number(G(this, a));
    },
    zd = function (a, b) {
      return Number(G(this, a)) << Number(G(this, b));
    },
    Ad = function (a, b) {
      return Number(G(this, a)) >> Number(G(this, b));
    },
    Bd = function (a, b) {
      return Number(G(this, a)) >>> Number(G(this, b));
    },
    Cd = function (a, b) {
      return Number(G(this, a)) & Number(G(this, b));
    },
    Dd = function (a, b) {
      return Number(G(this, a)) ^ Number(G(this, b));
    },
    Ed = function (a, b) {
      return Number(G(this, a)) | Number(G(this, b));
    };
  var Gd = function () {
    this.h = new ib();
    Fd(this);
  };
  Gd.prototype.execute = function (a) {
    return Hd(this.h.s(a));
  };
  var Id = function (a, b, c) {
      return Hd(a.h.F(b, c));
    },
    Fd = function (a) {
      var b = function (d, e) {
        kb(a.h, d, String(e));
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function (d, e) {
        jb(a.h, String(d), e);
      };
      c(0, Ac);
      c(1, Bc);
      c(2, Cc);
      c(3, Dc);
      c(53, Ec);
      c(4, Fc);
      c(5, Gc);
      c(52, Hc);
      c(6, Ic);
      c(9, Gc);
      c(50, Jc);
      c(10, Kc);
      c(12, Mc);
      c(13, Nc);
      c(47, Qc);
      c(54, Rc);
      c(55, Sc);
      c(63, Xc);
      c(64, Uc);
      c(65, Vc);
      c(66, Wc);
      c(15, Yc);
      c(16, Zc);
      c(17, Zc);
      c(18, $c);
      c(19, ad);
      c(20, bd);
      c(21, cd);
      c(22, dd);
      c(23, ed);
      c(24, fd);
      c(25, gd);
      c(26, hd);
      c(27, id);
      c(28, jd);
      c(29, kd);
      c(45, ld);
      c(30, md);
      c(32, nd);
      c(33, nd);
      c(34, od);
      c(35, od);
      c(46, pd);
      c(36, qd);
      c(43, rd);
      c(37, sd);
      c(38, td);
      c(39, ud);
      c(40, vd);
      c(41, wd);
      c(42, xd);
      c(58, yd);
      c(57, zd);
      c(60, Ad);
      c(61, Bd);
      c(56, Cd);
      c(62, Dd);
      c(59, Ed);
    };
  function Hd(a) {
    if (
      a instanceof oa ||
      a instanceof cb ||
      a instanceof ta ||
      a instanceof gb ||
      a instanceof jc ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Kd = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      ri: a("consent"),
      Te: a("consent_always_fire"),
      lg: a("convert_case_to"),
      mg: a("convert_false_to"),
      ng: a("convert_null_to"),
      og: a("convert_true_to"),
      pg: a("convert_undefined_to"),
      Sk: a("debug_mode_metadata"),
      Lb: a("function"),
      sf: a("instance_name"),
      dj: a("live_only"),
      ej: a("malware_disabled"),
      fj: a("metadata"),
      jj: a("original_activity_id"),
      bl: a("original_vendor_template_id"),
      al: a("once_on_load"),
      ij: a("once_per_event"),
      mh: a("once_per_load"),
      fl: a("priority_override"),
      il: a("respected_consent_types"),
      sh: a("setup_tags"),
      uh: a("tag_id"),
      vh: a("teardown_tags"),
    };
  })();
  var Ld = [],
    Md = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    Nd = function (a) {
      return Md[a];
    },
    Od = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var Sd = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    Td = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\v": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
    },
    Ud = function (a) {
      return Td[a];
    };
  Ld[7] = function (a) {
    return String(a).replace(Sd, Ud);
  };
  Ld[8] = function (a) {
    if (null == a) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(Sd, Ud) + "'";
    }
  };
  var $d = /['()]/g,
    ae = function (a) {
      return "%" + a.charCodeAt(0).toString(16);
    };
  Ld[12] = function (a) {
    var b = encodeURIComponent(String(a));
    $d.lastIndex = 0;
    return $d.test(b) ? b.replace($d, ae) : b;
  };
  var be =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    ce = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    },
    de = function (a) {
      return ce[a];
    };
  Ld[16] = function (a) {
    return a;
  };
  var fe;
  var ge = [],
    he = [],
    ie = [],
    je = [],
    ke = [],
    le = {},
    me,
    ne,
    oe,
    pe = function (a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    qe = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = le[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_"))
            e && d && d.Eh && d.Eh(a[g]),
              (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === Kd.Te.toString() && a[g]) {
          }
      e && d && d.Dh && (f.vtp_gtmCachedValues = d.Dh);
      if (b) {
        if (null == b.name) {
          var h;
          a: {
            var k = b.index;
            if (null == k) h = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = ge[k];
                  break;
                case 1:
                  n = je[k];
                  break;
                default:
                  h = "";
                  break a;
              }
              var p = n && n[Kd.sf];
              h = p ? String(p) : "";
            }
          }
          b.name = h;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : fe(c, f, b);
    },
    se = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = re(a[e], b, c));
      return d;
    },
    re = function (a, b, c) {
      if (Ca(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(re(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ge[f];
            if (!g || b.Of(g)) return;
            c[f] = !0;
            var h = String(g[Kd.sf]);
            try {
              var k = se(g, b, c);
              k.vtp_gtmEventId = b.id;
              b.priorityId && (k.vtp_gtmPriorityId = b.priorityId);
              d = qe(k, { event: b, index: f, type: 2, name: h });
              oe && (d = oe.wj(d, k));
            } catch (w) {
              b.Rh && b.Rh(w, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[re(a[n], b, c)] = re(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = re(a[q], b, c);
              ne && (p = p || r === ne.pe);
              d.push(r);
            }
            return ne && p ? ne.xj(d) : d.join("");
          case "escape":
            d = re(a[1], b, c);
            if (ne && Ca(a[1]) && "macro" === a[1][0] && ne.Vj(a))
              return ne.sk(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Ld[a[t]] && (d = Ld[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!je[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { Kh: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var x = te(v, b, c),
              z = !!a[4];
            return z || 2 !== x ? z !== (1 === x) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    te = function (a, b, c) {
      try {
        return me(se(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var ue = function (a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.s = a;
    this.h = c;
  };
  ka(ue, Error);
  function ve(a, b) {
    if (Ca(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) ve(a[c], b[c]);
    }
  }
  var we = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.nk = a;
    this.s = b;
    this.h = [];
  };
  ka(we, Error);
  var ye = function () {
    return function (a, b) {
      a instanceof we || (a = new we(a, xe));
      b && a.h.push(b);
      throw a;
    };
  };
  function xe(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Ba(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Ce = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = ze(a), f = 0; f < he.length; f++) {
        var g = he[f],
          h = Ae(g, e);
        if (h) {
          for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < je.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Ae = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    ze = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = te(ie[c], a));
        return b[c];
      };
    };
  var De = {
    wj: function (a, b) {
      b[Kd.lg] &&
        "string" === typeof a &&
        (a = 1 == b[Kd.lg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Kd.ng) && null === a && (a = b[Kd.ng]);
      b.hasOwnProperty(Kd.pg) && void 0 === a && (a = b[Kd.pg]);
      b.hasOwnProperty(Kd.og) && !0 === a && (a = b[Kd.og]);
      b.hasOwnProperty(Kd.mg) && !1 === a && (a = b[Kd.mg]);
      return a;
    },
  };
  var Ee = function () {
    this.h = {};
  };
  function Fe(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e].call(void 0, b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new ue(c, d, g);
      }
  }
  function Ge(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Fe(e, b, d, g);
          Fe(f, b, d, g);
        }
      }
    };
  }
  var Ke = function () {
      var a = data.permissions || {},
        b = He.K,
        c = this;
      this.s = new Ee();
      this.h = {};
      var d = {},
        e = Ge(this.s, b, function () {
          var f = arguments[0];
          return f && d[f]
            ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      Ja(a, function (f, g) {
        var h = {};
        Ja(g, function (k, n) {
          var p = Ie(k, n);
          h[k] = p.assert;
          d[k] || (d[k] = p.aa);
        });
        c.h[f] = function (k, n) {
          var p = h[k];
          if (!p)
            throw Je(
              k,
              {},
              "The requested permission " + k + " is not configured."
            );
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    Me = function (a) {
      return Le.h[a] || function () {};
    };
  function Ie(a, b) {
    var c = pe(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Je;
    try {
      return qe(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new ue(e, {}, "Permission " + e + " is unknown.");
        },
        aa: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Je(a, b, c) {
    return new ue(a, b, c);
  }
  var Ne = !1;
  var Oe = {};
  Oe.Qk = Na("false");
  Oe.zj = Na("true");
  var Pe = Ne,
    Qe = Oe.zj,
    Re = Oe.Qk;
  var gf = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    hf = function (a, b) {
      var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
      gf(b, "/*") && (b = b.slice(0, -2));
      gf(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && 1 === d.length) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (-1 === e || (0 === f && 0 !== e)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var h = d[d.length - 1];
      return a.lastIndexOf(h) === a.length - h.length;
    },
    jf = /^[a-z0-9-]+$/i,
    kf = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
    mf = function (a, b) {
      var c;
      if (!(c = !lf(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (2 > e.length) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!jf.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var h;
        var k = a,
          n = b[g];
        if (!kf.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var t = k.hostname,
          u = q;
        if (0 !== u.indexOf("*.")) r = t.toLowerCase() === u.toLowerCase();
        else {
          u = u.slice(2);
          var v = t.toLowerCase().indexOf(u.toLowerCase());
          r =
            -1 === v
              ? !1
              : t.length === u.length
              ? !0
              : t.length !== u.length + v
              ? !1
              : "." === t[v - 1];
        }
        if (r) {
          var x = p.slice(p.indexOf("/"));
          h = hf(k.pathname + k.search, x) ? !0 : !1;
        } else h = !1;
        if (h) return !0;
      }
      return !1;
    },
    lf = function (a) {
      return "https:" === a.protocol && (!a.port || "443" === a.port);
    };
  var nf =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    of = { Fn: "function", DustMap: "Object", List: "Array" },
    L = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = nf.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          k = c[d];
        if (null == k) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof k;
          k instanceof cb
            ? (n = "Fn")
            : k instanceof ta
            ? (n = "List")
            : k instanceof gb
            ? (n = "DustMap")
            : k instanceof jc && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (of[n] || n) +
                ", which does not match required type " +
                (of[h] || h) +
                "."
            );
        }
      }
    };
  function pf(a) {
    if (a instanceof gb) return a.toString();
    if (a instanceof ta) return "[" + a.toString() + "]";
    if (a instanceof cb) return a.toString() + "()";
    if (m(a)) return '"' + a + '"';
    return "" + a;
  }
  function qf(a, b) {
    var c = [];
    var d = [],
      e = [],
      f = function () {
        return 0 === e.length ? "" : "Property " + e.join(".") + ": ";
      },
      g = function (h, k) {
        if (0 <= d.indexOf(k))
          c.push(f() + "Expected value contained a cycle.");
        else if (h !== k)
          if (k instanceof ta)
            if (h instanceof ta)
              if (h.length() !== k.length())
                c.push(
                  f() +
                    "Expected array to contain " +
                    k.length() +
                    " item(s), actually " +
                    h.length() +
                    "."
                );
              else
                for (var n = 0; n < k.length(); n++)
                  e.push(n), d.push(k), g(h.get(n), k.get(n)), d.pop(), e.pop();
            else
              c.push(f() + "Expected to be an array, actually " + pf(h) + ".");
          else if (k instanceof gb)
            if (h instanceof gb) {
              for (var p = ra(h, 1), q = {}, r = 0; r < p.length; r++)
                q[p[r]] = !0;
              for (var t = ra(k, 1), u = [], v = 0; v < t.length; v++) {
                var x = t[v];
                q[x]
                  ? (u.push(x), (q[x] = !1))
                  : c.push(
                      f() +
                        'Expected property "' +
                        x +
                        '" was not found in actual.'
                    );
              }
              for (var z = 0; z < p.length; z++)
                q[p[z]] &&
                  c.push(
                    f() + 'Unexpected property "' + p[z] + '" found in actual.'
                  );
              for (var w = 0; w < u.length; w++) {
                var A = u[w];
                e.push(A);
                d.push(k);
                g(h.get(A), k.get(A));
                d.pop();
                e.pop();
              }
            } else
              c.push(f() + "Expected to be an object, actually " + pf(h) + ".");
          else c.push(f() + "Expected " + pf(k) + ", actually " + pf(h) + ".");
      };
    g(a, b);
    return c;
  }
  var rf = function (a, b) {
      var c = new cb(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = G(this, d[e]);
        var f = this.h.h;
        f && f.Za && ((f.Za.md[a] = f.Za.md[a] || []), f.Za.md[a].push(d));
        return b.apply(this, d);
      });
      c.Nb();
      return c;
    },
    sf = function (a, b) {
      var c = new gb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Aa(e)
            ? c.set(d, rf(a + "_" + d, e))
            : (Ba(e) || m(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Nb();
      return c;
    };
  var tf = function (a, b) {
    L(H(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new gb();
    return (d = sf("AssertApiSubject", c));
  };
  var uf = function (a, b) {
    L(H(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof lc)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new gb();
    return (d = sf("AssertThatSubject", c));
  };
  function vf(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(sc(arguments[d], c));
      return rc(a.apply(null, b));
    };
  }
  var xf = function () {
    for (var a = Math, b = wf, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = vf(a[e].bind(a)));
    }
    return c;
  };
  var yf = function (a) {
    var b;
    return b;
  };
  var zf = function (a) {
    var b;
    return b;
  };
  var Af = function (a) {
    return encodeURI(a);
  };
  var Bf = function (a) {
    return encodeURIComponent(a);
  };
  var Cf = function (a) {
    L(H(this), ["message:?string"], arguments);
  };
  var Df = function (a, b) {
    L(H(this), ["min:!number", "max:!number"], arguments);
    return Ga(a, b);
  };
  var N = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    d.rj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var Ef = function () {
    N(this, "read_container_data");
    var a = new gb();
    a.set("containerId", "GTM-P528B3");
    a.set("version", "447");
    a.set("environmentName", "Production");
    a.set("debugMode", Pe);
    a.set("previewMode", Re);
    a.set("environmentMode", Qe);
    a.Nb();
    return a;
  };
  var Ff = {};
  Ff.enable1pScripts = !0;
  Ff.enableGlobalEventDeveloperIds = !1;
  Ff.enableGlobalEventDeveloperIds = !0;
  Ff.enableGa4OnoRemarketing = !1;
  Ff.omitAuidIfWbraidPresent = !1;
  Ff.reconcileCampaignFields = !1;
  Ff.reconcileCampaignFields = !0;
  Ff.enableEmFormCcd = !1;
  Ff.enableEmFormCcd = !0;
  Ff.enableEmFormCcdPart2 = !1;
  Ff.enableLandingPageDeduplication = !0;
  Ff.enableFloodlightPrerenderingBypass = !1;
  Ff.analyticsPrivateParamsExcluded = !1;
  Ff.ipOverrideExperiment = !1;
  Ff.ipOverrideExperiment = !0;
  Ff.enableAdsConsentedConversionsOnly = !1;
  Ff.enableAdsConsentedConversionsOnly = !0;
  Ff.enableFlConsentedConversionsOnly = !1;
  Ff.enableFlConsentedConversionsOnly = !0;
  Ff.enableAdsHistoryChangeEvents = !1;
  Ff.enableAdsHistoryChangeEvents = !0;
  Ff.enableEValue = !1;
  Ff.enableEuidAutoMode = !1;
  Ff.requireGtagUserDataTos = !0;
  Ff.sendBeaconEnableExperimentPercentage = Number("0") || 0;
  function Gf() {
    return rc(Ff);
  }
  Gf.N = "internal.getFlags";
  var Hf = function () {
    return new Date().getTime();
  };
  var If = function (a) {
    if (null === a) return "null";
    if (a instanceof ta) return "array";
    if (a instanceof cb) return "function";
    if (a instanceof jc) {
      a = a.ob;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Jf = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Pe || Re) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return rc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(sc(c));
      }),
    };
  };
  var Pf = function (a) {
    return Ma(sc(a, this.h));
  };
  var Qf = function (a) {
    return Number(sc(a, this.h));
  };
  var Rf = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var Sf = function (a, b, c) {
    var d = null,
      e = !1;
    L(
      H(this),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new gb();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof gb &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  };
  var wf = "floor ceil round max min abs pow sqrt".split(" ");
  var Tf = function () {
      var a = {};
      return {
        Kj: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Jk: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Uf = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return cb.prototype.h.apply(a, c);
      };
    },
    Vf = function (a, b) {
      L(H(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var Wf = {};
  Wf.keys = function (a) {
    return new ta();
  };
  Wf.values = function (a) {
    return new ta();
  };
  Wf.entries = function (a) {
    return new ta();
  };
  Wf.freeze = function (a) {
    return a;
  };
  Wf.delete = function (a, b) {
    return !1;
  };
  var Yf = function () {
    this.h = {};
    this.s = {};
  };
  Yf.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    c = Zf(a, b) || c;
    return c;
  };
  Yf.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.s.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.h[a] = c ? void 0 : Aa(b) ? rf(a, b) : sf(a, b);
  };
  function Zf(a, b) {
    var c = void 0;
    var d = b.h.h;
    d && d.Za && (c = d.Za.Uf.Kj(a));
    return c;
  }
  function $f() {
    var a = {};
    return a;
  }
  var bg = function (a) {
      return ag ? I.querySelectorAll(a) : null;
    },
    cg = function (a, b) {
      if (!ag) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!I.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    dg = !1;
  if (I.querySelectorAll)
    try {
      var eg = I.querySelectorAll(":root");
      eg && 1 == eg.length && eg[0] == I.documentElement && (dg = !0);
    } catch (a) {}
  var ag = dg;
  var fg = {},
    gg = function (a, b) {
      fg[a] = fg[a] || [];
      fg[a][b] = !0;
    },
    hg = function (a) {
      for (var b = [], c = fg[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    },
    ig = function () {
      for (var a = [], b = fg.GA4_EVENT || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var jg = function (a) {
    gg("GTM", a);
  };
  var kg = function (a) {
      return null == a ? "" : m(a) ? Pa(String(a)) : "e0";
    },
    mg = function (a) {
      return a.replace(lg, "");
    },
    og = function (a) {
      return ng(a.replace(/\s/g, ""));
    },
    ng = function (a) {
      return Pa(a.replace(pg, "").toLowerCase());
    },
    rg = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return qg.test(a) ? a : "e0";
    },
    tg = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (sg.test(c)) return c;
      }
      return "e0";
    },
    wg = function (a, b) {
      window.Promise || b([]);
      Promise.all(
        a.map(function (c) {
          return c.value && -1 !== ug.indexOf(c.name)
            ? vg(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          b(a);
        })
        .catch(function () {
          b([]);
        });
    },
    vg = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (y.crypto && y.crypto.subtle)
        try {
          var b = xg(a);
          return y.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return y
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      else return Promise.resolve("e1");
    },
    xg = function (a) {
      var b;
      if (y.TextEncoder) b = new y.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    pg = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    sg = /^\S+@\S+\.\S+$/,
    qg = /^\+\d{10,15}$/,
    lg = /[.~]/g,
    yg = {},
    zg =
      ((yg.email = "em"),
      (yg.phone_number = "pn"),
      (yg.first_name = "fn"),
      (yg.last_name = "ln"),
      (yg.street = "sa"),
      (yg.city = "ct"),
      (yg.region = "rg"),
      (yg.country = "co"),
      (yg.postal_code = "pc"),
      (yg.error_code = "ec"),
      yg),
    Ag = function (a, b) {
      function c(n, p, q) {
        var r = n[p];
        Ca(r) || (r = [r]);
        for (var t = 0; t < r.length; ++t) {
          var u = kg(r[t]);
          "" !== u && f.push({ name: p, value: q(u), index: void 0 });
        }
      }
      function d(n, p, q, r) {
        var t = kg(n[p]);
        "" !== t && f.push({ name: p, value: q(t), index: r });
      }
      function e(n) {
        return function (p) {
          jg(64);
          return n(p);
        };
      }
      var f = [];
      if ("https:" === y.location.protocol) {
        c(a, "email", tg);
        c(a, "phone_number", rg);
        c(a, "first_name", e(og));
        c(a, "last_name", e(og));
        var g = a.home_address || {};
        c(g, "street", e(ng));
        c(g, "city", e(ng));
        c(g, "postal_code", e(mg));
        c(g, "region", e(ng));
        c(g, "country", e(mg));
        var h = a.address || {};
        Ca(h) || (h = [h]);
        for (var k = 0; k < h.length; k++)
          d(h[k], "first_name", og, k),
            d(h[k], "last_name", og, k),
            d(h[k], "street", ng, k),
            d(h[k], "city", ng, k),
            d(h[k], "postal_code", mg, k),
            d(h[k], "region", ng, k),
            d(h[k], "country", mg, k);
        wg(f, b);
      } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f);
    },
    Bg = function (a, b) {
      Ag(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            h = c[f].value,
            k = c[f].index,
            n = zg[g];
          n &&
            h &&
            (-1 === ug.indexOf(g) ||
              /^e\d+$/.test(h) ||
              /^[0-9A-Za-z_-]{43}$/.test(h)) &&
            (void 0 !== k && (n += k), d.push(n + "." + h), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    Cg = function (a) {
      if (y.Promise)
        try {
          return new Promise(function (b) {
            Bg(a, function (c, d) {
              b({ Ed: c, ml: d });
            });
          });
        } catch (b) {}
    },
    ug = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var P = {
      g: {
        I: "ad_storage",
        V: "analytics_storage",
        Ue: "region",
        Rk: "consent_updated",
        kg: "wait_for_update",
        vi: "app_remove",
        wi: "app_store_refund",
        xi: "app_store_subscription_cancel",
        yi: "app_store_subscription_convert",
        zi: "app_store_subscription_renew",
        qg: "add_payment_info",
        Ai: "add_shipping_info",
        fc: "add_to_cart",
        hc: "remove_from_cart",
        Bi: "view_cart",
        Eb: "begin_checkout",
        We: "select_item",
        Fb: "view_item_list",
        Xe: "select_promotion",
        ic: "view_promotion",
        Ca: "purchase",
        jc: "refund",
        Ma: "view_item",
        rg: "add_to_wishlist",
        Ci: "first_open",
        Di: "first_visit",
        Da: "gtag.config",
        Sa: "gtag.get",
        Ei: "in_app_purchase",
        Lc: "page_view",
        Fi: "session_start",
        Mc: "user_engagement",
        Nc: "gclid",
        la: "ads_data_redaction",
        ba: "allow_ad_personalization_signals",
        Ye: "allow_custom_scripts",
        Gi: "allow_display_features",
        Oc: "allow_enhanced_conversions",
        Pc: "allow_google_signals",
        Ea: "allow_interest_groups",
        Ze: "auid",
        Hi: "auto_detection_enabled",
        tb: "aw_remarketing",
        Ud: "aw_remarketing_only",
        Qc: "discount",
        Rc: "aw_feed_country",
        Sc: "aw_feed_language",
        fa: "items",
        Tc: "aw_merchant_id",
        sg: "aw_basket_type",
        Vd: "campaign_content",
        Wd: "campaign_id",
        Xd: "campaign_medium",
        Yd: "campaign_name",
        Uc: "campaign",
        Zd: "campaign_source",
        ae: "campaign_term",
        Fa: "client_id",
        Ii: "content_group",
        Ji: "content_type",
        Na: "conversion_cookie_prefix",
        Vc: "conversion_id",
        jb: "conversion_label",
        xa: "conversion_linker",
        af: "conversion_api",
        ya: "cookie_domain",
        Ga: "cookie_expires",
        Ta: "cookie_flags",
        kc: "cookie_name",
        ub: "cookie_path",
        Oa: "cookie_prefix",
        Gb: "cookie_update",
        mc: "country",
        va: "currency",
        Wc: "customer_lifetime_value",
        Xc: "custom_map",
        Ki: "debug_mode",
        ca: "developer_id",
        ug: "disable_merchant_reported_purchases",
        Li: "dc_custom_params",
        Mi: "dc_natural_search",
        bf: "dynamic_event_settings",
        Ni: "affiliation",
        vg: "checkout_option",
        wg: "checkout_step",
        Oi: "coupon",
        cf: "list_name",
        Pi: "promotions",
        Yc: "shipping",
        xg: "tax",
        be: "engagement_time_msec",
        vb: "enhanced_client_id",
        Zc: "enhanced_conversions",
        yg: "enhanced_conversions_automatic_settings",
        zg: "enhanced_conversions_mode",
        ad: "estimated_delivery_date",
        bd: "euid_logged_in_state",
        nc: "event_callback",
        oc: "event_developer_id_string",
        Ag: "event",
        ce: "event_settings",
        de: "event_timeout",
        Qi: "experiments",
        df: "firebase_id",
        cd: "first_party_collection",
        ee: "_x_20",
        Hb: "_x_19",
        Bg: "fledge",
        Cg: "gac_gclid",
        fe: "gac_wbraid",
        Dg: "gac_wbraid_multiple_conversions",
        dd: "ga_restrict_domain",
        ef: "ga_temp_client_id",
        Eg: "gdpr_applies",
        Fg: "geo_granularity",
        kb: "value_callback",
        cb: "value_key",
        qc: "global_developer_id_string",
        Tk: "google_ono",
        wb: "google_signals",
        he: "google_tld",
        ie: "groups",
        Gg: "gsa_experiment_id",
        Hg: "iframe_state",
        je: "ignore_referrer",
        ff: "internal_traffic_results",
        Ig: "is_passthrough",
        Ua: "language",
        hf: "legacy_developer_id_string",
        za: "linker",
        sc: "accept_incoming",
        uc: "decorate_forms",
        X: "domains",
        ed: "url_position",
        Jg: "method",
        fd: "new_customer",
        Kg: "non_interaction",
        Ri: "optimize_id",
        Va: "page_location",
        jf: "page_path",
        eb: "page_referrer",
        vc: "page_title",
        Lg: "passengers",
        Mg: "phone_conversion_callback",
        Si: "phone_conversion_country_code",
        Ng: "phone_conversion_css_class",
        Ti: "phone_conversion_ids",
        Og: "phone_conversion_number",
        Pg: "phone_conversion_options",
        Qg: "quantity",
        kf: "redact_device_info",
        Rg: "redact_enhanced_user_id",
        Ui: "redact_ga_client_id",
        Vi: "redact_user_id",
        ke: "referral_exclusion_definition",
        xb: "restricted_data_processing",
        Wi: "retoken",
        Sg: "screen_name",
        Ib: "screen_resolution",
        Xi: "search_term",
        Ha: "send_page_view",
        Jb: "send_to",
        gd: "session_duration",
        hd: "session_engaged",
        me: "session_engaged_time",
        lb: "session_id",
        jd: "session_number",
        wc: "delivery_postal_code",
        Tg: "tc_privacy_string",
        Ug: "temporary_client_id",
        Yi: "tracking_id",
        lf: "traffic_type",
        Pa: "transaction_id",
        ia: "transport_url",
        Vg: "trip_type",
        ne: "update",
        nb: "url_passthrough",
        Uk: "_user_agent_architecture",
        Vk: "_user_agent_bitness",
        Wk: "_user_agent_full_version_list",
        Xk: "_user_agent_model",
        Yk: "_user_agent_platform",
        Zk: "_user_agent_platform_version",
        Aa: "user_data",
        Wg: "user_data_auto_latency",
        Xg: "user_data_auto_meta",
        Yg: "user_data_auto_multi",
        Zg: "user_data_auto_selectors",
        ah: "user_data_auto_status",
        Kb: "user_data_settings",
        Ia: "user_id",
        Wa: "user_properties",
        bh: "us_privacy_string",
        qa: "value",
        oe: "wbraid",
        dh: "wbraid_multiple_conversions",
        fh: "_is_linker_valid",
        gh: "_is_passthrough_cid",
        kh: "non_personalized_ads",
      },
    },
    Dg = {},
    Eg = Object.freeze(
      ((Dg[P.g.ba] = 1),
      (Dg[P.g.Oc] = 1),
      (Dg[P.g.Pc] = 1),
      (Dg[P.g.fa] = 1),
      (Dg[P.g.ya] = 1),
      (Dg[P.g.Ga] = 1),
      (Dg[P.g.Ta] = 1),
      (Dg[P.g.kc] = 1),
      (Dg[P.g.ub] = 1),
      (Dg[P.g.Oa] = 1),
      (Dg[P.g.Gb] = 1),
      (Dg[P.g.Xc] = 1),
      (Dg[P.g.ca] = 1),
      (Dg[P.g.bf] = 1),
      (Dg[P.g.nc] = 1),
      (Dg[P.g.ce] = 1),
      (Dg[P.g.de] = 1),
      (Dg[P.g.cd] = 1),
      (Dg[P.g.dd] = 1),
      (Dg[P.g.wb] = 1),
      (Dg[P.g.he] = 1),
      (Dg[P.g.ie] = 1),
      (Dg[P.g.ff] = 1),
      (Dg[P.g.za] = 1),
      (Dg[P.g.ke] = 1),
      (Dg[P.g.xb] = 1),
      (Dg[P.g.Ha] = 1),
      (Dg[P.g.Jb] = 1),
      (Dg[P.g.gd] = 1),
      (Dg[P.g.me] = 1),
      (Dg[P.g.wc] = 1),
      (Dg[P.g.ia] = 1),
      (Dg[P.g.ne] = 1),
      (Dg[P.g.Kb] = 1),
      (Dg[P.g.Wa] = 1),
      Dg)
    ),
    Fg = Object.freeze([
      P.g.Va,
      P.g.eb,
      P.g.vc,
      P.g.Ua,
      P.g.Sg,
      P.g.Ia,
      P.g.df,
      P.g.Ii,
    ]),
    Gg = {},
    Hg = Object.freeze(
      ((Gg[P.g.vi] = 1),
      (Gg[P.g.wi] = 1),
      (Gg[P.g.xi] = 1),
      (Gg[P.g.yi] = 1),
      (Gg[P.g.zi] = 1),
      (Gg[P.g.Ci] = 1),
      (Gg[P.g.Di] = 1),
      (Gg[P.g.Ei] = 1),
      (Gg[P.g.Fi] = 1),
      (Gg[P.g.Mc] = 1),
      Gg)
    ),
    Ig = {},
    Jg = Object.freeze(
      ((Ig[P.g.qg] = 1),
      (Ig[P.g.Ai] = 1),
      (Ig[P.g.fc] = 1),
      (Ig[P.g.hc] = 1),
      (Ig[P.g.Bi] = 1),
      (Ig[P.g.Eb] = 1),
      (Ig[P.g.We] = 1),
      (Ig[P.g.Fb] = 1),
      (Ig[P.g.Xe] = 1),
      (Ig[P.g.ic] = 1),
      (Ig[P.g.Ca] = 1),
      (Ig[P.g.jc] = 1),
      (Ig[P.g.Ma] = 1),
      (Ig[P.g.rg] = 1),
      Ig)
    ),
    Kg = Object.freeze([P.g.ba, P.g.Pc, P.g.Gb]),
    Lg = Object.freeze([].concat(Kg)),
    Mg = Object.freeze([P.g.Ga, P.g.de, P.g.gd, P.g.me, P.g.be]),
    Ng = Object.freeze([].concat(Mg)),
    Og = {},
    Pg = ((Og[P.g.I] = "1"), (Og[P.g.V] = "2"), Og),
    Qg = {},
    Rg = Object.freeze(
      ((Qg[P.g.ba] = 1),
      (Qg[P.g.Oc] = 1),
      (Qg[P.g.Ea] = 1),
      (Qg[P.g.tb] = 1),
      (Qg[P.g.Ud] = 1),
      (Qg[P.g.Qc] = 1),
      (Qg[P.g.Rc] = 1),
      (Qg[P.g.Sc] = 1),
      (Qg[P.g.fa] = 1),
      (Qg[P.g.Tc] = 1),
      (Qg[P.g.Na] = 1),
      (Qg[P.g.xa] = 1),
      (Qg[P.g.ya] = 1),
      (Qg[P.g.Ga] = 1),
      (Qg[P.g.Ta] = 1),
      (Qg[P.g.Oa] = 1),
      (Qg[P.g.va] = 1),
      (Qg[P.g.Wc] = 1),
      (Qg[P.g.ca] = 1),
      (Qg[P.g.ug] = 1),
      (Qg[P.g.Zc] = 1),
      (Qg[P.g.ad] = 1),
      (Qg[P.g.df] = 1),
      (Qg[P.g.cd] = 1),
      (Qg[P.g.Ua] = 1),
      (Qg[P.g.fd] = 1),
      (Qg[P.g.Va] = 1),
      (Qg[P.g.eb] = 1),
      (Qg[P.g.Mg] = 1),
      (Qg[P.g.Ng] = 1),
      (Qg[P.g.Og] = 1),
      (Qg[P.g.Pg] = 1),
      (Qg[P.g.xb] = 1),
      (Qg[P.g.Ha] = 1),
      (Qg[P.g.Jb] = 1),
      (Qg[P.g.wc] = 1),
      (Qg[P.g.Pa] = 1),
      (Qg[P.g.ia] = 1),
      (Qg[P.g.ne] = 1),
      (Qg[P.g.nb] = 1),
      (Qg[P.g.Aa] = 1),
      (Qg[P.g.Ia] = 1),
      (Qg[P.g.qa] = 1),
      Qg)
    );
  Object.freeze(P.g);
  var Sg = {},
    R = (y.google_tag_manager = y.google_tag_manager || {}),
    Tg = Math.random();
  Sg.ue = "7i0";
  Sg.ka = "dataLayer";
  Sg.ui =
    "ChAI8PLjlgYQwuH3o/jmjaNrEiMADPQ65Gc1sB0unK0bVQLpzU7P0g5AQg9zcqQWfP+M0tWuvxoCniY\x3d";
  var Ug = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Vg = { __paused: !0, __tg: !0 },
    Wg;
  for (Wg in Ug) Ug.hasOwnProperty(Wg) && (Vg[Wg] = !0);
  Sg.Kc = "www.googletagmanager.com";
  var Xg,
    Yg = Sg.Kc + "/gtm.js";
  Xg = Yg;
  var Zg = Na(""),
    $g = Na(""),
    ah = null,
    bh = null,
    ch = {},
    dh = {},
    eh = function () {
      var a = R.sequence || 1;
      R.sequence = a + 1;
      return a;
    };
  Sg.si = "";
  var fh = "";
  Sg.ve = fh;
  var gh = new Ha(),
    hh = {},
    ih = {},
    lh = {
      name: Sg.ka,
      set: function (a, b) {
        qc(Za(a, b), hh);
        jh();
      },
      get: function (a) {
        return kh(a, 2);
      },
      reset: function () {
        gh = new Ha();
        hh = {};
        jh();
      },
    },
    kh = function (a, b) {
      return 2 != b ? gh.get(a) : mh(a);
    },
    mh = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = hh, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    nh = function (a, b) {
      ih.hasOwnProperty(a) || (gh.set(a, b), qc(Za(a, b), hh), jh());
    },
    oh = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = kh(c, 1);
        if (Ca(d) || pc(d)) d = qc(d);
        ih[c] = d;
      }
    },
    jh = function (a) {
      Ja(ih, function (b, c) {
        gh.set(b, c);
        qc(Za(b), hh);
        qc(Za(b, c), hh);
        a && delete ih[b];
      });
    },
    ph = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? mh(a) : gh.get(a);
      "array" === nc(d) || "object" === nc(d) ? (c = qc(d)) : (c = d);
      return c;
    };
  var qh,
    rh = !1;
  function sh() {
    rh = !0;
    (qh = productSettings), (productSettings = void 0);
    qh = qh || {};
  }
  var th = function (a) {
    rh || sh();
    return qh[a];
  };
  var uh = function () {
      var a = y.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    vh = function (a) {
      if (I.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !y.getComputedStyle)
        return !0;
      var c = y.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = y.getComputedStyle(d, null));
      }
      return !1;
    };
  var Eh = /:[0-9]+$/,
    Fh = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
          var k = h.slice(1).join("=");
          if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
          e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    Ih = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Gh(a.protocol) || Gh(y.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : y.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || y.location.hostname)
            .replace(Eh, "")
            .toLowerCase());
      return Hh(a, b, c, d, e);
    },
    Hh = function (a, b, c, d, e) {
      var f,
        g = Gh(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Jh(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Eh, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || gg("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var k = f.split("/");
          0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
          f = k.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Fh(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Gh = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Jh = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Kh = function (a) {
      var b = I.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || gg("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Eh, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Lh = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Kh(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var k = "" + f + g + h;
      "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
      return k;
    };
  var Mh = {};
  var Oh = function (a, b, c) {
      if (a) {
        var d = a.element,
          e = { ab: a.ab, tagName: d.tagName, type: 1 };
        b && (e.querySelector = Nh(d));
        c && (e.isVisible = !vh(d));
        return e;
      }
    },
    Rh = function (a) {
      if (0 != a.length) {
        var b;
        b = Ph(a, function (c) {
          return !Qh.test(c.ab);
        });
        b = Ph(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = Ph(b, function (c) {
          return !vh(c.element);
        });
        return b[0];
      }
    },
    Ph = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    Nh = function (a) {
      var b;
      if (a === I.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = Nh(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    Sh = !0,
    ci = !1;
  Mh.ni = "true";
  var di = function (a) {
      if ("false" === Mh.ni || !Sh) return !1;
      if (ci) return !0;
      var b = th("AW-" + a);
      return !!b && !!b.preAutoPii;
    },
    ei = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    fi = new RegExp(/@(gmail|googlemail)\./i),
    Qh = new RegExp(/support|noreply/i),
    gi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "),
    hi = ["BR"],
    ii = {},
    ji = function (a) {
      a = a || { Sb: !0, Tb: !0 };
      a.Bb = a.Bb || { email: !0, phone: !0, Bh: !0 };
      var b,
        c = a,
        d = !!c.Sb + "." + !!c.Tb;
      c && c.ud && c.ud.length && (d += "." + c.ud.join("."));
      c && c.Bb && (d += "." + c.Bb.email + "." + c.Bb.phone + "." + c.Bb.Bh);
      b = d;
      var e = ii[b];
      if (e && 200 > Ra() - e.timestamp) return e.result;
      var f;
      var g = [],
        h = I.body;
      if (h) {
        for (
          var k = h.querySelectorAll("*"), n = 0;
          n < k.length && 1e4 > n;
          n++
        ) {
          var p = k[n];
          if (
            !(0 <= gi.indexOf(p.tagName.toUpperCase())) &&
            p.children instanceof HTMLCollection
          ) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= hi.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || g.push(p);
          }
        }
        f = { elements: g, status: 1e4 < k.length ? "2" : "1" };
      } else f = { elements: g, status: "4" };
      var t = f,
        u = t.status,
        v = [],
        x;
      if (a.Bb && a.Bb.email) {
        for (var z = t.elements, w = [], A = 0; A < z.length; A++) {
          var B = z[A],
            C = B.textContent;
          "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
          if (C) {
            var E = C.match(ei);
            if (E) {
              var D = E[0],
                F;
              if (y.location) {
                var O = Hh(y.location, "host", !0);
                F = 0 <= D.toLowerCase().indexOf(O);
              } else F = !1;
              F || w.push({ element: B, ab: D });
            }
          }
        }
        var M = a && a.ud;
        if (M && 0 !== M.length) {
          for (var S = [], Y = 0; Y < w.length; Y++) {
            for (var Q = !0, K = 0; K < M.length; K++) {
              var Z = M[K];
              if (Z && cg(w[Y].element, Z)) {
                Q = !1;
                break;
              }
            }
            Q && S.push(w[Y]);
          }
          v = S;
        } else v = w;
        x = Rh(v);
        10 < w.length && (u = "3");
      }
      var aa = [];
      !a.ci && x && (v = [x]);
      for (var V = 0; V < v.length; V++) aa.push(Oh(v[V], a.Sb, a.Tb));
      var ma = { elements: aa.slice(0, 10), Uh: Oh(x, a.Sb, a.Tb), status: u };
      ii[b] = { timestamp: Ra(), result: ma };
      return ma;
    },
    ki = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.ab.length + ":" + fi.test(a.ab)
      );
    };
  var li = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var g = e.split(","), h = 0; h < g.length; h++) {
            var k = g[h].trim();
            if (k) {
              if (0 === k.indexOf("dataLayer.")) f = kh(k.substring(10));
              else {
                var n = k.split(".");
                f = y[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ("css_selector" === d && ag) {
          var q = bg(e);
          if (q && 0 < q.length) {
            f = [];
            for (
              var r = 0;
              r < q.length &&
              r < ("email" === b || "phone_number" === b ? 5 : 1);
              r++
            )
              f.push(Vb(q[r]) || Pa(q[r].value));
            f = 1 === f.length ? f[0] : f;
          }
        }
        f && (a[b] = f);
      }
    },
    mi = function (a) {
      if (a) {
        var b = {};
        li(b, "email", a.email);
        li(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          li(e, "first_name", c[d].first_name);
          li(e, "last_name", c[d].last_name);
          li(e, "street", c[d].street);
          li(e, "city", c[d].city);
          li(e, "region", c[d].region);
          li(e, "country", c[d].country);
          li(e, "postal_code", c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    ni = function (a) {
      var b = a.remoteConfig[P.g.Kb];
      return b
        ? "auto_detect" === b.mode ||
            "selectors" === b.mode ||
            "code" === b.mode
        : !1;
    },
    oi = function (a) {
      if (a)
        switch (a.mode) {
          case "selectors":
            return mi(a.selectors);
          case "auto_detect":
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = ji({
                  Sb: !1,
                  Tb: !1,
                  ud: c.exclude_element_selectors,
                  Bb: { email: !!c.email, phone: !!c.phone, Bh: !!c.address },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var g = d[f];
                  if (1 === g.type) {
                    e.email = g.ab;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    };
  var pi = function (a) {
      var b = (Gb && Gb.userAgent) || "";
      if (
        0 > b.indexOf("Safari") ||
        /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)
      )
        return !1;
      var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
      if ("" === c) return !1;
      for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
        if (void 0 === d[f]) return !0;
        if (e[f] != d[f]) return Number(e[f]) > Number(d[f]);
      }
      return e.length >= d.length;
    },
    qi = function () {
      return !0 === y._gtmpcm ? !0 : pi("14.1.1");
    };
  var si = function (a, b) {
      var c;
      if (a)
        a: {
          switch (a.enhanced_conversions_mode) {
            case "manual":
              if (b && pc(b)) {
                c = b;
                break a;
              }
              var d = a.enhanced_conversions_manual_var;
              c = void 0 !== d ? d : y.enhanced_conversion_data;
              break a;
            case "automatic":
              c = mi(a[P.g.yg]);
              break a;
          }
          c = void 0;
        }
      else c = y.enhanced_conversion_data;
      var e = c,
        f = (a || {}).enhanced_conversions_mode,
        g;
      if (!e) return { ab: e, Ac: void 0 };
      if ("manual" === f)
        switch (e._tag_mode) {
          case "CODE":
            g = "c";
            break;
          case "AUTO":
            g = "a";
            break;
          case "MANUAL":
            g = "m";
            break;
          default:
            g = "c";
        }
      else g = "automatic" === f ? (ri(a) ? "a" : "m") : "c";
      return { ab: e, Ac: g };
    },
    ti = function (a, b) {
      if (y.Promise) {
        var c = si(a, b),
          d = c.ab,
          e = c.Ac;
        try {
          return d
            ? Cg(d).then(function (f) {
                f.Ac = e;
                return f;
              })
            : Promise.resolve({ Ed: "", Ac: e });
        } catch (f) {}
      }
    },
    ri = function (a) {
      var b = a && a[P.g.yg];
      return b && b[P.g.Hi];
    },
    ui = function () {
      return -1 !== Gb.userAgent.toLowerCase().indexOf("firefox");
    },
    vi = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date
            ? b.push("" + d.estimated_delivery_date)
            : b.push("");
        }
        return b.join(",");
      }
    };
  var wi = {},
    xi = function (a, b) {
      if (y._gtmexpgrp && y._gtmexpgrp.hasOwnProperty(a))
        return y._gtmexpgrp[a];
      void 0 === wi[a] && (wi[a] = Math.floor(Math.random() * b));
      return wi[a];
    };
  var yi = function () {
    if (Zg || (!0 !== y._gtmdgs && !pi("11"))) return -1;
    var a = Ma("1");
    return xi(1, 100) < a ? xi(2, 2) : -1;
  };
  var zi = { Df: "CA", Yh: "CA-ON" };
  var Ai = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Bi = function (a) {
    Bi[" "](a);
    return a;
  };
  Bi[" "] = function () {};
  var Di = function () {
    var a = Ci,
      b = "Mf";
    if (a.Mf && a.hasOwnProperty(b)) return a.Mf;
    var c = new a();
    a.Mf = c;
    a.hasOwnProperty(b);
    return c;
  };
  var Ci = function () {
    var a = {};
    this.h = function () {
      var b = Ai.h,
        c = Ai.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[Ai.h] = !0;
    };
  };
  var Ei = [];
  function Fi() {
    var a = Jb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Gi,
        update: Hi,
        addListener: Ii,
        notifyListeners: Ji,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Gi(a, b, c, d, e, f) {
    var g = Fi();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries,
        k = h[a] || {},
        n = k.region,
        p = c && m(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === k.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: k.update,
            quiet: q,
          };
        if ("" !== d || !1 !== k.initial) h[a] = r;
        q &&
          y.setTimeout(function () {
            h[a] === r &&
              r.quiet &&
              ((r.quiet = !1), Ki(a), Ji(), gg("TAGGING", 2));
          }, f);
      }
    }
  }
  function Hi(a, b) {
    var c = Fi();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Li(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Li(c, a);
      f.quiet ? ((f.quiet = !1), Ki(a)) : g !== d && Ki(a);
    }
  }
  function Ii(a, b) {
    Ei.push({ Bf: a, Dj: b });
  }
  function Ki(a) {
    for (var b = 0; b < Ei.length; ++b) {
      var c = Ei[b];
      Ca(c.Bf) && -1 !== c.Bf.indexOf(a) && (c.Vh = !0);
    }
  }
  function Ji(a, b) {
    for (var c = 0; c < Ei.length; ++c) {
      var d = Ei[c];
      if (d.Vh) {
        d.Vh = !1;
        try {
          d.Dj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Li(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var Mi = function (a) {
      var b = Fi();
      b.accessedAny = !0;
      return Li(b, a);
    },
    Ni = function (a) {
      var b = Fi();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    Oi = function (a) {
      var b = Fi();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Pi = function () {
      if (!Di().h()) return !1;
      var a = Fi();
      a.accessedAny = !0;
      return a.active;
    },
    Qi = function () {
      var a = Fi();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Ri = function (a, b) {
      Fi().addListener(a, b);
    },
    Si = function (a, b) {
      Fi().notifyListeners(a, b);
    },
    Ti = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Oi(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Ri(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Ui = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          !1 === Mi(h) || e[h] || (f.push(h), (e[h] = !0));
        }
        return f;
      }
      var d = m(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Ri(d, function (f) {
          var g = c();
          0 < g.length && ((f.Bf = g), a(f));
        });
    };
  function Vi() {}
  function Wi() {}
  function Xi(a) {
    for (var b = [], c = 0; c < Yi.length; c++) {
      var d = a(Yi[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Yi = [P.g.I, P.g.V],
    Zi = function (a) {
      var b = a[P.g.Ue];
      b && jg(40);
      var c = a[P.g.kg];
      c && jg(41);
      for (
        var d = Ca(b) ? b : [b], e = { Fc: 0 };
        e.Fc < d.length;
        e = { Fc: e.Fc }, ++e.Fc
      )
        Ja(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== P.g.Ue && g !== P.g.kg) {
                var k = d[f.Fc],
                  n = zi.Df,
                  p = zi.Yh;
                Fi().set(g, h, k, n, p, c);
              }
            };
          })(e)
        );
    },
    $i = 0,
    aj = function (a, b) {
      Ja(a, function (e, f) {
        Fi().update(e, f);
      });
      Si(b.eventId, b.priorityId);
      var c = Ra(),
        d = c - $i;
      $i && 0 <= d && 1e3 > d && jg(66);
      $i = c;
    },
    bj = function (a) {
      var b = Mi(a);
      return void 0 != b ? b : !0;
    },
    cj = function () {
      return "G1" + Xi(Mi);
    },
    dj = function (a, b) {
      Ri(a, b);
    },
    ej = function (a, b) {
      Ui(a, b);
    },
    fj = function (a, b) {
      Ti(a, b);
    };
  var gj = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var hj = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var k = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        k && c && (k = decodeURIComponent(k));
        d.push(k);
      }
    }
    return d;
  };
  var ij = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    jj = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function kj(a) {
    return "null" !== a.origin;
  }
  var nj = function (a, b, c, d) {
      return lj(d) ? hj(a, String(b || mj()), c) : [];
    },
    qj = function (a, b, c, d, e) {
      if (lj(e)) {
        var f = oj(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = pj(
            f,
            function (g) {
              return g.De;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = pj(
            f,
            function (g) {
              return g.Fd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function rj(a, b, c, d) {
    var e = mj(),
      f = window;
    kj(f) && (f.document.cookie = a);
    var g = mj();
    return e != g || (void 0 != c && 0 <= nj(b, g, !1, d).indexOf(c));
  }
  var vj = function (a, b, c, d) {
      function e(x, z, w) {
        if (null == w) return delete h[z], x;
        h[z] = w;
        return x + "; " + z + "=" + w;
      }
      function f(x, z) {
        if (null == z) return delete h[z], x;
        h[z] = !0;
        return x + "; " + z;
      }
      if (!lj(c.hb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = sj(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      g = e(g, "expires", k);
      g = e(g, "max-age", c.hk);
      g = e(g, "samesite", c.Bk);
      c.Dk && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = tj(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (x) {
            q = x;
            continue;
          }
          r = !0;
          if (!uj(u, c.path) && rj(v, a, b, c.hb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return uj(n, c.path) ? 1 : rj(g, a, b, c.hb) ? 0 : 1;
    },
    wj = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return vj(a, b, c);
    };
  function pj(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        k = b(h);
      k === c
        ? d.push(h)
        : void 0 === f || k < f
        ? ((e = [h]), (f = k))
        : k === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function oj(a, b, c) {
    for (var d = [], e = nj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = g.shift();
        k &&
          ((k = k.split("-")),
          d.push({ id: g.join("."), De: 1 * k[0] || 1, Fd: 1 * k[1] || 1 }));
      }
    }
    return d;
  }
  var sj = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    xj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    yj = /(^|\.)doubleclick\.net$/i,
    uj = function (a, b) {
      return (
        yj.test(window.document.location.hostname) || ("/" === b && xj.test(a))
      );
    },
    mj = function () {
      return kj(window) ? window.document.cookie : "";
    },
    tj = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      yj.test(e) || xj.test(e) || a.push("none");
      return a;
    },
    lj = function (a) {
      if (!Di().h() || !a || !Pi()) return !0;
      if (!Oi(a)) return !1;
      var b = Mi(a);
      return null == b ? !0 : !!b;
    };
  var zj = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (gj(a) & 2147483647)) : String(b);
    },
    Aj = function (a) {
      return [zj(a), Math.round(Ra() / 1e3)].join(".");
    },
    Dj = function (a, b, c, d, e) {
      var f = Bj(b);
      return qj(a, f, Cj(c), d, e);
    },
    Ej = function (a, b, c, d) {
      var e = "" + Bj(c),
        f = Cj(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Bj = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Cj = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Fj = function () {
    R.dedupe_gclid || (R.dedupe_gclid = "" + Aj());
    return R.dedupe_gclid;
  };
  var Gj = function () {
    var a = !1;
    return a;
  };
  var He = { K: "GTM-P528B3", Jc: "2703797" },
    Hj = { Th: "GTM-P528B3", ag: "GTM-P528B3" },
    Ij = function () {
      var a = [He.K];
      Hj.Th && (a = Hj.Th.split("|"));
      return a;
    },
    Jj = function () {
      var a = [He.K];
      0 === Hj.ag.length && jg(84);
      (a = []), Hj.ag && (a = Hj.ag.split("|"));
      return a;
    },
    Kj = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    Mj = function (a) {
      return Lj().container.hasOwnProperty(a);
    };
  function Lj() {
    var a = R.tidr;
    a || ((a = new Kj()), (R.tidr = a));
    return a;
  }
  var Nj;
  if (3 === Sg.ue.length) Nj = "g";
  else {
    var Oj = "G";
    Nj = Oj;
  }
  var Pj = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: Nj,
      OPT: "o",
    },
    Qj = function (a) {
      var b = He.K.split("-"),
        c = b[0].toUpperCase(),
        d = Pj[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Sg.ue.length) {
        var g = "w";
        f = "2" + g;
      } else f = "";
      return f + d + Sg.ue + e;
    };
  function Rj(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Sj = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function Tj() {
    return tb("iPhone") && !tb("iPod") && !tb("iPad");
  }
  function Uj() {
    Tj() || tb("iPad") || tb("iPod");
  }
  tb("Opera");
  tb("Trident") || tb("MSIE");
  tb("Edge");
  !tb("Gecko") ||
    (-1 != sb().toLowerCase().indexOf("webkit") && !tb("Edge")) ||
    tb("Trident") ||
    tb("MSIE") ||
    tb("Edge");
  -1 != sb().toLowerCase().indexOf("webkit") && !tb("Edge") && tb("Mobile");
  tb("Macintosh");
  tb("Windows");
  tb("Linux") || tb("CrOS");
  var Vj = la.navigator || null;
  Vj && (Vj.appVersion || "").indexOf("X11");
  tb("Android");
  Tj();
  tb("iPad");
  tb("iPod");
  Uj();
  sb().toLowerCase().indexOf("kaios");
  var Wj = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Xj = /#|$/,
    Yj = function (a, b) {
      var c = a.search(Xj),
        d = Wj(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Zj = /[?&]($|#)/,
    ak = function (a, b, c) {
      for (
        var d, e = a.search(Xj), f = 0, g, h = [];
        0 <= (g = Wj(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(Zj, "$1");
      var k,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? ((t = r), (u = "")) : (u = d.substring(t + 1, r));
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        k = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else k = d;
      return k;
    };
  function bk(a) {
    if (!a || !I.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    I.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var ck = function () {
    var a = y;
    if (a.top == a) return 0;
    var b = a.location.ancestorOrigins;
    if (b) return b[b.length - 1] == a.location.origin ? 1 : 2;
    var c;
    var d = a.top;
    try {
      var e;
      if ((e = !!d && null != d.location.href))
        b: {
          try {
            Bi(d.foo);
            e = !0;
            break b;
          } catch (f) {}
          e = !1;
        }
      c = e;
    } catch (f) {
      c = !1;
    }
    return c ? 1 : 2;
  };
  var dk = function () {};
  var ek = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    fk = function (a, b, c) {
      this.s = a;
      this.h = null;
      this.J = {};
      this.sa = 0;
      this.T = void 0 === b ? 500 : b;
      this.F = void 0 === c ? !1 : c;
      this.D = null;
    };
  ka(fk, dk);
  fk.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.F },
      d = jj(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.T));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = ek(c)),
          (c.internalBlockOnErrors = b.F),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      gk(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  fk.prototype.removeEventListener = function (a) {
    a && a.listenerId && gk(this, "removeEventListener", null, a.listenerId);
  };
  var ik = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var k;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = hk(a.vendor.consents, void 0 === d ? "755" : d);
          k =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && hk(a.purpose.consents, b);
        } else k = !0;
      else
        k =
          1 === h
            ? a.purpose && a.vendor
              ? hk(a.purpose.legitimateInterests, b) &&
                hk(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return k;
    },
    hk = function (a, b) {
      return !(!a || !a[b]);
    },
    gk = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (jk(a)) {
        kk(a);
        var f = ++a.sa;
        a.J[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    jk = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.s, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    kk = function (a) {
      a.D ||
        ((a.D = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.J[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Sj(a.s, a.D));
    };
  var lk = !0;
  lk = !1;
  var mk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    nk = Rj("", 550),
    ok = Rj("", 500);
  function pk() {
    var a = R.tcf || {};
    return (R.tcf = a);
  }
  var uk = function () {
    var a = pk(),
      b = new fk(y, lk ? 3e3 : -1);
    if (
      !0 === y.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof y.__tcfapi ||
        "function" === typeof b.s.__tcfapi ||
        null != jk(b))
    ) {
      a.active = !0;
      a.Id = {};
      qk();
      var c = null;
      lk
        ? (c = y.setTimeout(function () {
            rk(a);
            sk(a);
            c = null;
          }, ok))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) rk(a), sk(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = tk()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in mk)
                if (mk.hasOwnProperty(g))
                  if ("1" === g) {
                    var h = d,
                      k = !0;
                    k = void 0 === k ? !1 : k;
                    var n;
                    var p = h;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = ek(p)),
                        (n =
                          "error" === p.cmpStatus || 0 !== p.internalErrorState
                            ? !p.internalBlockOnErrors
                            : "loaded" !== p.cmpStatus ||
                              ("tcloaded" !== p.eventStatus &&
                                "useractioncomplete" !== p.eventStatus)
                            ? !1
                            : !0));
                    f["1"] = n
                      ? !1 === h.gdprApplies ||
                        "tcunavailable" === h.tcString ||
                        (void 0 === h.gdprApplies && !k) ||
                        "string" !== typeof h.tcString ||
                        !h.tcString.length
                        ? !0
                        : ik(h, "1", 0)
                      : !1;
                  } else f[g] = ik(d, g, mk[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.Id = e), sk(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), rk(a), sk(a);
      }
    }
  };
  function rk(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    lk && (a.Id = tk());
  }
  function qk() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = nk), a);
    Zi(b);
  }
  function tk() {
    var a = {},
      b;
    for (b in mk) mk.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function sk(a) {
    var b = {},
      c = ((b.ad_storage = a.Id["1"] ? "granted" : "denied"), b);
    aj(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: vk() }
    );
  }
  var vk = function () {
      var a = pk();
      return a.active ? a.tcString || "" : "";
    },
    wk = function () {
      var a = pk();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    xk = function (a) {
      if (!mk.hasOwnProperty(String(a))) return !0;
      var b = pk();
      return b.active && b.Id ? !!b.Id[String(a)] : !0;
    };
  function yk(a, b, c) {
    var d,
      e = Number(null != a.Wb ? a.Wb : void 0);
    0 !== e && (d = new Date((b || Ra()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var zk = ["1"],
    Ak = {},
    Bk = {},
    Dk = function (a) {
      return Ak[Ck(a)];
    },
    Gk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Ck(a.prefix);
      if (!Ak[c] && !Ek(c, a.path, a.domain) && b) {
        var d = Ck(a.prefix),
          e = Aj();
        if (0 === Fk(d, e, a)) {
          var f = Jb("google_tag_data", {});
          f._gcl_au ? gg("GTM", 57) : (f._gcl_au = e);
        }
        Ek(c, a.path, a.domain);
      }
    };
  function Fk(a, b, c, d) {
    var e = Ej(b, "1", c.domain, c.path),
      f = yk(c, d);
    f.hb = "ad_storage";
    return wj(a, e, f);
  }
  function Ek(a, b, c) {
    var d = Dj(a, b, c, zk, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((Ak[a] = e.slice(0, 2).join(".")),
        (Bk[a] = { id: e.slice(2, 4).join("."), Qh: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (Bk[a] = { id: e.slice(0, 2).join("."), Qh: Number(e[2]) || 0 })
      : (Ak[a] = d);
    return !0;
  }
  function Ck(a) {
    return (a || "_gcl") + "_au";
  }
  function Hk() {
    for (var a = Ik, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Jk() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Ik, Kk;
  function Lk(a) {
    function b(k) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Kk[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return k;
    }
    Ik = Ik || Jk();
    Kk = Kk || Hk();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var Mk;
  var Qk = function () {
      var a = Nk,
        b = Ok,
        c = Pk(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Sb(I, "mousedown", d);
        Sb(I, "keyup", d);
        Sb(I, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Rk = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Pk().decorators.push(f);
    },
    Sk = function (a, b, c) {
      for (var d = Pk().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var k = g.domains,
              n = a,
              p = !!g.sameHost;
            if (k && (p || n !== I.location.hostname))
              for (var q = 0; q < k.length; q++)
                if (k[q] instanceof RegExp) {
                  if (k[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(k[q]) ||
                  (p && 0 <= k[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Ua(e, g.callback());
        }
      }
      return e;
    };
  function Pk() {
    var a = Jb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Tk = /(.*?)\*(.*?)\*(.*)/,
    Uk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Vk = /^(?:www\.|m\.|amp\.)+/,
    Wk = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Xk(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Zk = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            h = String(d);
          Ik = Ik || Jk();
          Kk = Kk || Hk();
          for (var k = [], n = 0; n < h.length; n += 3) {
            var p = n + 1 < h.length,
              q = n + 2 < h.length,
              r = h.charCodeAt(n),
              t = p ? h.charCodeAt(n + 1) : 0,
              u = q ? h.charCodeAt(n + 2) : 0,
              v = r >> 2,
              x = ((r & 3) << 4) | (t >> 4),
              z = ((t & 15) << 2) | (u >> 6),
              w = u & 63;
            q || ((w = 64), p || (z = 64));
            k.push(Ik[v], Ik[x], Ik[z], Ik[w]);
          }
          g = k.join("");
          f.call(e, g);
        }
      }
    var A = b.join("*");
    return ["1", Yk(A), A].join("*");
  };
  function Yk(a, b) {
    var c = [
        y.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Gb.userLanguage || Gb.language,
        Math.floor(Ra() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = Mk)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Mk = d;
    for (var k = 4294967295, n = 0; n < c.length; n++)
      k = (k >>> 8) ^ Mk[(k ^ c.charCodeAt(n)) & 255];
    return ((k ^ -1) >>> 0).toString(36);
  }
  function $k() {
    return function (a) {
      var b = Kh(y.location.href),
        c = b.search.replace("?", ""),
        d = Fh(c, "_gl", !1, !0) || "";
      a.query = al(d) || {};
      var e = Ih(b, "fragment").match(Xk("_gl"));
      a.fragment = al((e && e[3]) || "") || {};
    };
  }
  function bl(a, b) {
    var c = Xk(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var cl = function (a, b) {
      b || (b = "_gl");
      var c = Wk.exec(a);
      if (!c) return "";
      var d = c[1],
        e = bl(b, (c[2] || "").slice(1)),
        f = bl(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    dl = function (a) {
      var b = $k(),
        c = Pk();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ua(d, e.query), a && Ua(d, e.fragment));
      return d;
    },
    al = function (a) {
      try {
        var b = el(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = Lk(d[e + 1]);
            c[f] = g;
          }
          gg("TAGGING", 6);
          return c;
        }
      } catch (h) {
        gg("TAGGING", 8);
      }
    };
  function el(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Tk.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          k;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Yk(h, p)) {
              k = !0;
              break a;
            }
          k = !1;
        }
        if (k) return h;
        gg("TAGGING", 7);
      }
    }
  }
  function fl(a, b, c, d) {
    function e(p) {
      p = bl(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Wk.exec(c);
    if (!f) return "";
    var g = f[1],
      h = f[2] || "",
      k = f[3] || "",
      n = a + "=" + b;
    d ? (k = "#" + e(k.substring(1))) : (h = "?" + e(h.substring(1)));
    return "" + g + h + k;
  }
  function gl(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Sk(b, 1, c),
      e = Sk(b, 2, c),
      f = Sk(b, 3, c);
    if (Va(d)) {
      var g = Zk(d);
      c ? hl("_gl", g, a) : il("_gl", g, a, !1);
    }
    if (!c && Va(e)) {
      var h = Zk(e);
      il("_gl", h, a, !0);
    }
    for (var k in f)
      if (f.hasOwnProperty(k))
        a: {
          var n = k,
            p = f[k],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              il(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              hl(n, p, q);
              break a;
            }
          }
          "string" == typeof q && fl(n, p, q);
        }
  }
  function il(a, b, c, d) {
    if (c.href) {
      var e = fl(a, b, c.href, void 0 === d ? !1 : d);
      rb.test(e) && (c.href = e);
    }
  }
  function hl(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var k = I.createElement("input");
          k.setAttribute("type", "hidden");
          k.setAttribute("name", a);
          k.setAttribute("value", b);
          c.appendChild(k);
        }
      } else if ("post" === d) {
        var n = fl(a, b, c.action);
        rb.test(n) && (c.action = n);
      }
    }
  }
  function Nk(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || gl(e, e.hostname);
      }
    } catch (g) {}
  }
  function Ok(a) {
    try {
      if (a.action) {
        var b = Ih(Kh(a.action), "host");
        gl(a, b);
      }
    } catch (c) {}
  }
  var jl = function (a, b, c, d) {
      Qk();
      Rk(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    kl = function (a, b) {
      Qk();
      Rk(a, [Hh(y.location, "host", !0)], b, !0, !0);
    },
    ll = function () {
      var a = I.location.hostname,
        b = Uk.exec(I.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Vk, ""),
        k = e.replace(Vk, ""),
        n;
      if (!(n = h === k)) {
        var p = "." + k;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    ml = function (a, b) {
      return !1 === a ? !1 : a || b || ll();
    };
  var nl = {};
  var ol = function (a) {
    for (
      var b = [],
        c = I.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          ig: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function pl(a, b) {
    var c = ol(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].ig] || (d[c[e].ig] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), na: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].ig].push(g);
      }
    }
    return d;
  }
  var ql = /^\w+$/,
    rl = /^[\w-]+$/,
    sl = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    tl = function () {
      if (!Di().h() || !Pi()) return !0;
      var a = Mi("ad_storage");
      return null == a ? !0 : !!a;
    },
    ul = function (a, b) {
      Oi("ad_storage")
        ? tl()
          ? a()
          : Ui(a, "ad_storage")
        : b
        ? gg("TAGGING", 3)
        : Ti(
            function () {
              ul(a, !0);
            },
            ["ad_storage"]
          );
    },
    wl = function (a) {
      return vl(a).map(function (b) {
        return b.na;
      });
    },
    vl = function (a) {
      var b = [];
      if (!kj(y) || !I.cookie) return b;
      var c = nj(a, I.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Qd: d.Qd }, e++) {
        var f = xl(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.Qd = g.na;
          var k = g.timestamp,
            n = g.labels,
            p = Da(
              b,
              (function (q) {
                return function (r) {
                  return r.na === q.Qd;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, k)),
              (p.labels = yl(p.labels, n || [])))
            : b.push({ version: h, na: d.Qd, timestamp: k, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return zl(b);
    };
  function yl(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Al(a) {
    return a && "string" == typeof a && a.match(ql) ? a : "_gcl";
  }
  var Cl = function () {
      var a = Kh(y.location.href),
        b = Ih(a, "query", !1, void 0, "gclid"),
        c = Ih(a, "query", !1, void 0, "gclsrc"),
        d = Ih(a, "query", !1, void 0, "wbraid"),
        e = Ih(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Fh(f, "gclid", !1);
        c = c || Fh(f, "gclsrc", !1);
        d = d || Fh(f, "wbraid", !1);
      }
      return Bl(b, c, e, d);
    },
    Bl = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && rl.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(rl))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    El = function (a) {
      var b = Cl();
      ul(function () {
        Dl(b, !1, a);
      });
    };
  function Dl(a, b, c, d, e) {
    function f(x, z) {
      var w = Fl(x, g);
      w && (wj(w, z, h), (k = !0));
    }
    c = c || {};
    e = e || [];
    var g = Al(c.prefix);
    d = d || Ra();
    var h = yk(c, d, !0);
    h.hb = "ad_storage";
    var k = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var z = ["GCL", n, x];
        0 < e.length && z.push(e.join("."));
        return z.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == nl.enable_gbraid_cookie_write
        ? 0
        : nl.enable_gbraid_cookie_write) &&
      !k &&
      a.gb
    ) {
      var q = a.gb[0],
        r = Fl("gb", g),
        t = !1;
      if (!b)
        for (var u = vl(r), v = 0; v < u.length; v++)
          u[v].na === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Hl = function (a, b) {
      var c = dl(!0);
      ul(function () {
        for (var d = Al(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== sl[f]) {
            var g = Fl(f, d),
              h = c[g];
            if (h) {
              var k = Math.min(Gl(h), Ra()),
                n;
              b: {
                var p = k;
                if (kj(y))
                  for (
                    var q = nj(g, I.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (Gl(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = yk(b, k, !0);
                t.hb = "ad_storage";
                wj(g, h, t);
              }
            }
          }
        }
        Dl(Bl(c.gclid, c.gclsrc), !1, b);
      });
    },
    Fl = function (a, b) {
      var c = sl[a];
      if (void 0 !== c) return b + c;
    },
    Gl = function (a) {
      return 0 !== Il(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function xl(a) {
    var b = Il(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          na: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Il(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !rl.test(a[2])
      ? []
      : a;
  }
  var Jl = function (a, b, c, d, e) {
      if (Ca(b) && kj(y)) {
        var f = Al(e),
          g = function () {
            for (var h = {}, k = 0; k < a.length; ++k) {
              var n = Fl(a[k], f);
              if (n) {
                var p = nj(n, I.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        ul(function () {
          jl(g, b, c, d);
        });
      }
    },
    zl = function (a) {
      return a.filter(function (b) {
        return rl.test(b.na);
      });
    },
    Kl = function (a, b) {
      if (kj(y)) {
        for (var c = Al(b.prefix), d = {}, e = 0; e < a.length; e++)
          sl[a[e]] && (d[a[e]] = sl[a[e]]);
        ul(function () {
          Ja(d, function (f, g) {
            var h = nj(c + g, I.cookie, void 0, "ad_storage");
            h.sort(function (t, u) {
              return Gl(u) - Gl(t);
            });
            if (h.length) {
              var k = h[0],
                n = Gl(k),
                p = 0 !== Il(k.split(".")).length ? k.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Il(k.split(".")).length ? k.split(".")[2] : void 0;
              q[f] = [r];
              Dl(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Ll(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Ml = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Pi()) {
        var c = Cl();
        if (Ll(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          kl(function () {
            return d;
          }, 3);
          kl(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Nl = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!tl()) return e;
      var f = vl(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var h = f[0],
          k = f[0].timestamp,
          n = [h.version, Math.round(k / 1e3), h.na]
            .concat(h.labels || [], [b])
            .join("."),
          p = yk(c, k, !0);
        p.hb = "ad_storage";
        wj(a, n, p);
      }
      return e;
    };
  function Ol(a, b) {
    var c = Al(b),
      d = Fl(a, c);
    if (!d) return 0;
    for (var e = vl(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Pl(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Ql = function (a) {
    var b = Math.max(Ol("aw", a), Pl(tl() ? pl() : {}));
    return Math.max(Ol("gb", a), Pl(tl() ? pl("_gac_gb", !0) : {})) > b;
  };
  var Rl = function (a, b) {
      var c = a && !bj(P.g.I);
      return b && c ? "0" : b;
    },
    Vl = function (a) {
      function b(u) {
        var v;
        R.reported_gclid || (R.reported_gclid = {});
        v = R.reported_gclid;
        var x,
          z = g;
        x =
          !g || (Pi() && !bj(P.g.I))
            ? k + (u ? "gcu" : "gcs")
            : k + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs");
        if (!v[x]) {
          v[x] = !0;
          var w = [],
            A = {},
            B = function (M, S) {
              S && (w.push(M + "=" + encodeURIComponent(S)), (A[M] = !0));
            },
            C = "https://www.google.com";
          if (Pi()) {
            var E = bj(P.g.I);
            B("gcs", cj());
            u && B("gcu", "1");
            Qi() && B("gcd", "G1" + Xi(Ni));
            B("rnd", Fj());
            if ((!k || (n && "aw.ds" !== n)) && bj(P.g.I)) {
              var D = wl("_gcl_aw");
              B("gclaw", D.join("."));
            }
            B("url", String(y.location).split(/[?#]/)[0]);
            B("dclid", Rl(d, p));
            E || (C = "https://pagead2.googlesyndication.com");
          }
          B("gdpr_consent", vk());
          B("gdpr", wk());
          "1" === dl(!1)._up && B("gtm_up", "1");
          B("gclid", Rl(d, k));
          B("gclsrc", n);
          if (
            !(A.gclid || A.dclid || A.gclaw) &&
            (B("gbraid", Rl(d, q)),
            A.gbraid && Tl && (z = !1),
            !A.gbraid && Pi() && bj(P.g.I))
          ) {
            var F = wl("_gcl_gb");
            0 < F.length && (B("gclgb", F.join(".")), Tl && (z = !1));
          }
          B("gtm", Qj(!e));
          g && bj(P.g.I) && (Gk(f || {}), z && B("auid", Dk(f.prefix) || ""));
          Ul || (a.rd && B("did", a.rd)),
            a.Ke && B("gdid", a.Ke),
            a.Ge && B("edid", a.Ge);
          var O = C + "/pagead/landing?" + w.join("&");
          Yb(O);
        }
      }
      var c = !!a.Be,
        d = !!a.Cc,
        e = a.W,
        f = void 0 === a.Ab ? {} : a.Ab,
        g = void 0 === a.Cd ? !0 : a.Cd,
        h = Cl(),
        k = h.gclid || "",
        n = h.gclsrc,
        p = h.dclid || "",
        q = h.gbraid || "",
        r = !c && ((!k || (n && "aw.ds" !== n) ? !1 : !0) || q),
        t = Pi();
      if (r || t)
        t
          ? fj(
              function () {
                b();
                bj(P.g.I) ||
                  ej(function (u) {
                    return b(!0, u.consentEventId, u.consentPriorityId);
                  }, P.g.I);
              },
              [P.g.I]
            )
          : b();
    },
    Sl = function (a) {
      var b = String(y.location).split(/[?#]/)[0],
        c = Sg.ui || y._CONSENT_MODE_SALT;
      return a ? (c ? String(gj(b + a + c)) : "0") : "";
    },
    Ul = !1;
  var Tl = !1;
  var Wl = /[A-Z]+/,
    Xl = /\s/,
    Yl = function (a) {
      if (m(a)) {
        a = Pa(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Wl.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (Xl.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], P: d };
          }
        }
      }
    },
    $l = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Yl(a[c]);
        d && (b[d.id] = d);
      }
      Zl(b);
      var e = [];
      Ja(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function Zl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.P[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var tm = function (a, b, c, d) {
      return (2 === sm() || d || "http:" != y.location.protocol ? a : b) + c;
    },
    sm = function () {
      var a = Pb(),
        b;
      if (1 === a)
        a: {
          var c = Xg;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = I.getElementsByTagName("script"),
              h = 0;
            h < g.length && 100 > h;
            h++
          ) {
            var k = g[h].src;
            if (k) {
              k = k.toLowerCase();
              if (0 === k.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === k.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var vm = function (a, b, c) {
      if (y[a.functionName]) return b.Wf && J(b.Wf), y[a.functionName];
      var d = um();
      y[a.functionName] = d;
      if (a.ze)
        for (var e = 0; e < a.ze.length; e++) y[a.ze[e]] = y[a.ze[e]] || um();
      a.Le && void 0 === y[a.Le] && (y[a.Le] = c);
      Ob(tm("https://", "http://", a.gg), b.Wf, b.lk);
      return d;
    },
    um = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    wm = {
      functionName: "_googWcmImpl",
      Le: "_googWcmAk",
      gg: "www.gstatic.com/wcm/loader.js",
    },
    xm = {
      functionName: "_gaPhoneImpl",
      Le: "ga_wpid",
      gg: "www.gstatic.com/gaphone/loader.js",
    },
    ym = { oi: "", kj: "5" },
    zm = {
      functionName: "_googCallTrackingImpl",
      ze: [xm.functionName, wm.functionName],
      gg:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (ym.oi || ym.kj) +
        ".js",
    },
    Am = {},
    Bm = function (a, b, c, d) {
      jg(22);
      if (c) {
        d = d || {};
        var e = vm(wm, d, a),
          f = { ak: a, cl: b };
        void 0 === d.pb && (f.autoreplace = c);
        e(2, d.pb, f, c, 0, Qa(), d.options);
      }
    },
    Cm = function (a, b, c, d) {
      jg(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Qa(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          Am[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.P.length
              ? ((e.adData = { ak: g.P[0], cl: g.P[1] }), (Am[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.containerId }), (Am[g.id] = !0)));
        }
        (e.gaData || e.adData) && vm(zm, d)(d.pb, e, d.options);
      }
    },
    Dm = function () {
      var a = !1;
      return a;
    },
    Em = function (a, b) {
      if (a)
        if (Gj()) {
        } else {
          if (m(a)) {
            var c = Yl(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(P.g.Ti);
          if (f && Ca(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var h = Yl(f[g]);
              h &&
                (d.push(h),
                (a.id === h.id ||
                  (a.id === a.containerId &&
                    a.containerId === h.containerId)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var k = b.getWithConfig(P.g.Og),
              n;
            if (k) {
              Ca(k) ? (n = k) : (n = [k]);
              var p = b.getWithConfig(P.g.Mg),
                q = b.getWithConfig(P.g.Ng),
                r = b.getWithConfig(P.g.Pg),
                t = b.getWithConfig(P.g.Si),
                u = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var x = 0; x < n.length; x++)
                if (x < v)
                  if (d) Cm(d, n[x], t, { pb: u, options: r });
                  else if ("AW" === a.prefix && a.P[1])
                    Dm()
                      ? Cm([a], n[x], t || "US", { pb: u, options: r })
                      : Bm(a.P[0], a.P[1], n[x], { pb: u, options: r });
                  else if ("UA" === a.prefix)
                    if (Dm()) Cm([a], n[x], t || "US", { pb: u });
                    else {
                      var z = a.containerId,
                        w = n[x],
                        A = { pb: u };
                      jg(23);
                      if (w) {
                        A = A || {};
                        var B = vm(xm, A, z),
                          C = {};
                        void 0 !== A.pb ? (C.receiver = A.pb) : (C.replace = w);
                        C.ga_wpid = z;
                        C.destination = w;
                        B(2, Qa(), C);
                      }
                    }
            }
          }
        }
    };
  var Fm = function (a, b, c) {
      this.da = a;
      this.eventName = b;
      this.B = c;
      this.C = {};
      this.metadata = qc(c.eventMetadata || {});
      this.U = !1;
    },
    Gm = function (a, b, c) {
      var d = a.B.getWithConfig(b);
      void 0 !== d ? (a.C[b] = d) : void 0 !== c && (a.C[b] = c);
    },
    Hm = function (a, b, c) {
      var d = th(a.da);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Im(a) {
    return {
      getDestinationId: function () {
        return a.da;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.C[b];
      },
      setHitData: function (b, c) {
        return void (a.C[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.C[b] && (a.C[b] = c);
      },
      copyToHitData: function (b, c) {
        Gm(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.U = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
    };
  }
  var Km = function (a) {
      var b = Jm[a.da];
      if (!a.U && b)
        for (var c = Im(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.U = !0;
          }
          if (a.U) break;
        }
    },
    Lm = function (a, b) {
      var c = Jm[a];
      c || (c = Jm[a] = []);
      c.push(b);
    },
    Jm = {};
  var Om = function (a) {
      a = a || {};
      var b;
      if (!Pi() || Mi(Mm)) {
        (b = Nm(a)) || (b = Aj());
        var c = a,
          d = Ck(c.prefix),
          e = Ck(c.prefix),
          f = Ak[e];
        if (f) {
          var g = f.split(".");
          if (2 === g.length) {
            var h = Number(g[1]) || 0;
            if (h) {
              var k = f;
              b && (k = f + "." + b + "." + Math.floor(Ra() / 1e3));
              Fk(e, k, c, 1e3 * h);
            }
          }
        }
        delete Ak[d];
        delete Bk[d];
        Ek(d, c.path, c.domain);
        return Nm(a);
      }
    },
    Nm = function (a) {
      if (!Pi() || Mi(Mm)) {
        a = a || {};
        Gk(a, !1);
        var b = Bk[Ck(Al(a.prefix))];
        if (b && !(18e5 < Ra() - 1e3 * b.Qh)) {
          var c = b.id,
            d = c.split(".");
          if (2 === d.length && !(864e5 < Ra() - 1e3 * (Number(d[1]) || 0)))
            return c;
        }
      }
    },
    Mm = P.g.I;
  var Pm = [];
  Pm[10] = !0;
  Pm[12] = !0;
  Pm[20] = !0;
  Pm[21] = !0;
  Pm[22] = !0;
  var Qm = function (a) {
      var b = [];
      Ja(a, function (c, d) {
        d = zl(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].na);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Tm = function (a, b, c) {
      if ("aw" === a || "dc" === a || "gb" === a) {
        var d = Rm("gcl" + a);
        if (d) return d.split(".");
      }
      var e = Al(b);
      if ("_gcl" == e) {
        c = void 0 === c ? !0 : c;
        var f = !bj(Sm) && c,
          g;
        g = Cl()[a] || [];
        if (0 < g.length) return f ? ["0"] : g;
      }
      var h = Fl(a, e);
      return h ? wl(h) : [];
    },
    Rm = function (a) {
      var b = Kh(y.location.href),
        c = Ih(b, "host", !1);
      if (c && c.match(Um)) {
        var d = Ih(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    },
    Vm = function (a, b) {
      Oi(Sm)
        ? bj(Sm)
          ? a()
          : Ui(a, Sm)
        : b
        ? jg(42)
        : fj(
            function () {
              Vm(a, !0);
            },
            [Sm]
          );
    },
    Um = /^\d+\.fls\.doubleclick\.net$/,
    Sm = P.g.I,
    Wm = !1;
  var Xm = function (a, b) {
      return Tm("aw", a, b);
    },
    Ym = function (a, b) {
      return Tm("dc", a, b);
    },
    Zm = function (a) {
      var b = Rm("gac");
      return b
        ? !bj(Sm) && a
          ? "0"
          : decodeURIComponent(b)
        : Qm(tl() ? pl() : {});
    },
    $m = function (a) {
      var b = Rm("gacgb");
      return b
        ? !bj(Sm) && a
          ? "0"
          : decodeURIComponent(b)
        : Qm(tl() ? pl("_gac_gb", !0) : {});
    },
    an = function (a) {
      var b = Cl(),
        c = [],
        d = b.gclid,
        e = b.dclid,
        f = b.gclsrc || "aw";
      !d ||
        ("aw.ds" !== f && "aw" !== f && "ds" !== f) ||
        c.push({ na: d, Jf: f });
      e && c.push({ na: e, Jf: "ds" });
      if (!Wm) {
      }
      Vm(function () {
        Gk(a);
        var g = Dk(a.prefix);
        if (g && 0 < c.length)
          for (
            var h = (R.joined_auid = R.joined_auid || {}), k = 0;
            k < c.length;
            k++
          ) {
            var n = c[k],
              p = n.na,
              q = n.Jf,
              r = (a.prefix || "_gcl") + "." + q + "." + p;
            if (!h[r]) {
              var t = "https://adservice.google.com/pagead/regclk";
              t =
                "gb" === q
                  ? t + "?gbraid=" + p + "&auid=" + g
                  : t + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + q;
              Yb(t);
              h[r] = !0;
            }
          }
      });
    },
    bn = function (a) {
      return Rm("gclaw") || Rm("gac") || 0 < (Cl().aw || []).length
        ? !1
        : 0 < (Cl().gb || []).length
        ? !0
        : Ql(a);
    };
  var dn = function (a, b) {
      var c = a.Tf,
        d = a.jg;
      a.Cf && (ml(c[P.g.sc], !!c[P.g.X]) && Hl(cn, b), El(b), Kl(cn, b), an(b));
      c[P.g.X] && Jl(cn, c[P.g.X], c[P.g.ed], !!c[P.g.uc], b.prefix);
      d && Ml(["aw", "dc", "gb"]);
    },
    en = function (a, b, c, d) {
      var e = a.ii,
        f = a.callback,
        g = a.Sh;
      if ("function" === typeof f)
        if (e === P.g.Nc && void 0 === g) {
          var h = d(b.prefix, c);
          0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h);
        } else e === P.g.Ze ? (jg(65), Gk(b, !1), f(Dk(b.prefix))) : f(g);
    },
    cn = ["aw", "dc", "gb"];
  function fn() {
    return "attribution-reporting";
  }
  function gn(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var hn = !1;
  function jn() {
    if (gn("join-ad-interest-group") && Aa(Gb.joinAdInterestGroup)) return !0;
    hn ||
      (bk(
        "A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (hn = !0));
    return gn("join-ad-interest-group") && Aa(Gb.joinAdInterestGroup);
  }
  function kn(a, b) {
    var c = void 0;
    try {
      c = I.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ra() - d) {
        gg("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          I.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          gg("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Qb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ra() },
      c
    );
  }
  var ln = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    mn = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    nn = /^\d+\.fls\.doubleclick\.net$/,
    on = /;gac=([^;?]+)/,
    pn = /;gacgb=([^;?]+)/,
    qn = /;gclaw=([^;?]+)/,
    rn = /;gclgb=([^;?]+)/;
  function sn(a, b) {
    if (nn.test(I.location.host)) {
      var c = I.location.href.match(b);
      return c && 2 == c.length && c[1].match(ln)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].na);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var tn = function (a, b, c) {
    var d = tl() ? pl("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = Nl("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (k) {
            return 1 === k;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { Gj: f ? e.join(";") : "", Fj: sn(d, pn) };
  };
  function un(a, b, c) {
    if (nn.test(I.location.host)) {
      var d = I.location.href.match(c);
      if (d && 2 == d.length && d[1].match(mn)) return [{ na: d[1] }];
    } else return vl((a || "_gcl") + b);
    return [];
  }
  var vn = function (a) {
      return un(a, "_aw", qn)
        .map(function (b) {
          return b.na;
        })
        .join(".");
    },
    wn = function (a) {
      return un(a, "_gb", rn)
        .map(function (b) {
          return b.na;
        })
        .join(".");
    },
    xn = function (a, b) {
      var c = Nl(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var yn = function () {
    if (Aa(y.__uspapi)) {
      var a = "";
      try {
        y.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };

  var eo = function (a) {
      var b = !1;
      return b;
    },
    ho = function (a, b) {
      var c;
      return c;
    },
    ko = function (a) {},
    oo = function (a) {},
    po = function () {
      return (
        "&tc=" +
        je.filter(function (a) {
          return a;
        }).length
      );
    },
    so = function () {
      2022 <= qo().length && ro();
    },
    to = function (a) {
      return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
    },
    vo = function () {
      uo || (uo = y.setTimeout(ro, 500));
    },
    ro = function (a) {
      uo && (y.clearTimeout(uo), (uo = void 0));
      if (void 0 !== bo && (!wo[bo] || xo || yo || eo(a)))
        if (void 0 === go[bo] && (zo[bo] || Ao.Xj() || 0 >= Bo--))
          jg(1), (zo[bo] = !0);
        else {
          void 0 === go[bo] && Ao.wk();
          var b = qo(!0, a);
          a ? Yb(b) : Rb(b);
          if (Co || (Do && 0 < Eo.length)) {
            var c = b.replace("/a?", "/td?");
            Rb(c);
          }
          wo[bo] = !0;
          Do = Co = Fo = Go = Ho = yo = xo = "";
          Eo = [];
        }
    },
    qo = function (a, b) {
      var c = bo;
      if (void 0 === c) return "";
      var d = hg("GTM"),
        e = hg("TAGGING");
      return [
        Io,
        wo[c] ? "" : "&es=1",
        Jo[c],
        ko(c),
        d ? "&u=" + d : "",
        e ? "&ut=" + e : "",
        po(),
        xo,
        yo,
        Ho,
        Go,
        oo(a),
        Fo,
        Co,
        ho(a, b),
        Do ? "&dl=" + encodeURIComponent(Do) : "",
        0 < Eo.length ? "&tdp=" + Eo.join(".") : "",
        "&z=0",
      ].join("");
    },
    Lo = function () {
      Io = Ko();
    },
    Ko = function () {
      return [Mo, "&v=3&t=t", "&pid=" + Ga(), "&rv=" + Sg.ue].join("");
    },
    no = ["L", "S", "Y"],
    jo = ["S", "E"],
    No = { sampleRate: "0.005000", ki: "", ji: Number("5") },
    Oo =
      0 <= I.location.search.indexOf("?gtm_latency=") ||
      0 <= I.location.search.indexOf("&gtm_latency="),
    Po;
  if (!(Po = Oo)) {
    var Qo = Math.random(),
      Ro = No.sampleRate;
    Po = Qo < Ro;
  }
  var So = Po,
    Mo = "https://www.googletagmanager.com/a?id=" + He.K + "&cv=447",
    To = {
      label: He.K + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Io = Ko(),
    wo = {},
    xo = "",
    yo = "",
    Fo = "",
    Go = "",
    Co = "",
    Eo = [],
    Do = "",
    mo = {},
    lo = !1,
    io = {},
    Uo = {},
    Ho = "",
    bo = void 0,
    Jo = {},
    zo = {},
    uo = void 0,
    Vo = 5;
  0 < No.ji && (Vo = No.ji);
  var Ao = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Xj: function () {
          return c < a ? !1 : Ra() - d[c % a] < b;
        },
        wk: function () {
          var f = c++ % a;
          d[f] = Ra();
        },
      };
    })(Vo, 1e3),
    Bo = 1e3,
    Xo = function (a, b) {
      if (So && void 0 !== a && !zo[a] && bo !== a) {
        ro();
        bo = a;
        Fo = xo = "";
        Jo[a] = "&e=" + to(b) + "&eid=" + a;
        vo();
      }
    },
    Yo = function (a, b, c, d) {
      if (So && b) {
        var e,
          f = String(b[Kd.Lb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!zo[a]) {
          a !== bo && (ro(), (bo = a));
          xo = xo ? xo + "." + g : "&tr=" + g;
          var h = b["function"];
          if (!h)
            throw Error("Error: No function name given for function call.");
          var k = (le[h] ? "1" : "2") + e;
          Fo = Fo ? Fo + "." + k : "&ti=" + k;
          vo();
          so();
        }
      }
    };
  var ep = function (a, b, c) {
      if (So && void 0 !== a && !zo[a]) {
        a !== bo && (ro(), (bo = a));
        var d = c + b;
        yo = yo ? yo + "." + d : "&epr=" + d;
        vo();
        so();
      }
    },
    fp = function (a, b, c) {},
    fo = ["S", "P", "C", "Z"],
    gp = {},
    hp = ((gp[1] = 5), (gp[2] = 5), (gp[3] = 5), gp),
    co = {},
    go = {},
    ip = function (a, b) {
      var c = !1;
      return c;
    },
    jp = function (a, b, c) {},
    kp = function () {
      if (So) {
        y.setInterval(Lo, 864e5);
      }
    };
  var lp = function (a, b, c) {
    var d,
      e = a.GooglebQhCsO;
    e || ((e = {}), (a.GooglebQhCsO = e));
    d = e;
    if (d[b]) return !1;
    d[b] = [];
    d[b][0] = c;
    return !0;
  };
  var mp = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  ub();
  Tj() || tb("iPod");
  tb("iPad");
  !tb("Android") || vb() || ub() || tb("Opera") || tb("Silk");
  vb();
  !tb("Safari") ||
    vb() ||
    tb("Coast") ||
    tb("Opera") ||
    tb("Edge") ||
    tb("Edg/") ||
    tb("OPR") ||
    ub() ||
    tb("Silk") ||
    tb("Android") ||
    Uj();
  var np = {},
    op = null,
    pp = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!op) {
        op = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            k = 0;
          5 > k;
          k++
        ) {
          var n = g.concat(h[k].split(""));
          np[k] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === op[q] && (op[q] = p);
          }
        }
      }
      for (
        var r = np[f],
          t = Array(Math.floor(b.length / 3)),
          u = r[64] || "",
          v = 0,
          x = 0;
        v < b.length - 2;
        v += 3
      ) {
        var z = b[v],
          w = b[v + 1],
          A = b[v + 2],
          B = r[z >> 2],
          C = r[((z & 3) << 4) | (w >> 4)],
          E = r[((w & 15) << 2) | (A >> 6)],
          D = r[A & 63];
        t[x++] = "" + B + C + E + D;
      }
      var F = 0,
        O = u;
      switch (b.length - v) {
        case 2:
          (F = b[v + 1]), (O = r[(F & 15) << 2] || u);
        case 1:
          var M = b[v];
          t[x] = "" + r[M >> 2] + r[((M & 3) << 4) | (F >> 4)] + O + u;
      }
      return t.join("");
    };
  var qp = function (a, b) {
    var c = y,
      d = Yj(a, "fmt");
    if (b) {
      var e = Yj(a, "random"),
        f = Yj(a, "label") || "";
      if (!e) return !1;
      var g = pp(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!lp(c, g, b)) return !1;
    }
    d && 4 != d && (a = ak(a, "rfmt", d));
    var h = ak(a, "fmt", 4);
    Ob(
      h,
      function () {
        c.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((c.google_noFurtherRedirects = null), b());
      },
      void 0,
      void 0,
      I.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var yp = function (a) {
    if (bj(P.g.I)) return a;
    a = a.replace(/&url=([^&#]+)/, function (b, c) {
      var d = Lh(decodeURIComponent(c));
      return "&url=" + encodeURIComponent(d);
    });
    return (a = a.replace(/&ref=([^&#]+)/, function (b, c) {
      var d = Lh(decodeURIComponent(c));
      return "&ref=" + encodeURIComponent(d);
    }));
  };
  var zp = !1;
  var Ap = function () {
      this.h = {};
    },
    Bp = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Cp = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    Ep = function (a, b, c, d, e) {
      if (!Pi()) {
        Dp(a, b, c, d, e);
        return;
      }
      fj(
        function () {
          bj(P.g.I) ? Dp(a, b, c, d, e) : d && d();
        },
        [P.g.I]
      );
    };

  var Fp = function (a, b, c) {
      c = void 0 === c ? !0 : c;
      var d = {
          gclgb: function () {
            return Tm("gb", b, c).join(".");
          },
          gacgb: function () {
            return $m(c);
          },
          gclaw: function () {
            return Xm(b, c).join(".");
          },
          gac: function () {
            return Zm(c);
          },
        },
        e = bn(b);
      zp && (e = !1);
      var f = e ? "gclgb" : "gclaw",
        g = e ? "gacgb" : "gac",
        h = d[g],
        k = (0, d[f])(),
        n = "_gcl" !== b ? "" : h();
      k && Bp(a, f, k);
      n && Bp(a, g, n);
    },
    Dp = function (a, b, c, d, e) {
      c = c || {};
      var f = c.Ab || {},
        g = new Ap();
      Bg(b, function (h, k) {
        Bp(g, "em", h);
        Bp(g, "gtm", Qj());
        Pi() && (Bp(g, "gcs", cj()), Bp(g, "gcd", "G1" + Xi(Ni)));
        Fp(g, Al(f.prefix), c.Cc);
        Bp(g, "auid", Dk(f.prefix));
        e && e.Ie && Bp(g, "gdid", e.Ie);
        e && e.Ee && Bp(g, "edid", e.Ee);
        var p = Cp(g);
        Yb("https://google.com/pagead/form-data/" + a + "?" + p);
        d && d();
      });
    };
  var Gp = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Hp = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Ip = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Jp =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var Kp = function () {
      var a = !1;
      return a;
    },
    Mp = function (a) {
      var b = kh("gtm.allowlist") || kh("gtm.whitelist");
      b && jg(9);
      Kp() && (b = ["google", "gtagfl", "lcl", "zone"]);
      var c = b && Wa(Oa(b), Hp),
        d = kh("gtm.blocklist") || kh("gtm.blacklist");
      d || ((d = kh("tagTypeBlacklist")) && jg(3));
      d ? jg(8) : (d = []);
      Lp() &&
        ((d = Oa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Oa(d).indexOf("google") && jg(2);
      var e = d && Wa(Oa(d), Ip),
        f = {};
      return function (g) {
        var h = g && g[Kd.Lb];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var k = dh[h] || [],
          n = a(h, k);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (k && 0 < k.length)
                  for (var q = 0; q < k.length; q++) {
                    if (0 > c.indexOf(k[q])) {
                      jg(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var t = 0 <= e.indexOf(h);
          if (t) r = t;
          else {
            var u = Ia(e, k || []);
            u && jg(10);
            r = u;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= k.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = Ia(e, Jp));
        return (f[h] = v);
      };
    },
    Lp = function () {
      return Gp.test(y.location && y.location.hostname);
    };
  var Np = { initialized: 11, complete: 12, interactive: 13 },
    Op = {},
    Pp = Object.freeze(((Op[P.g.Ha] = !0), Op)),
    Qp =
      0 <= I.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= I.location.search.indexOf("&gtm_diagnostics="),
    Sp = function (a, b, c) {
      if ("config" !== a || 1 < Yl(b).P.length) return;
      var d,
        e = Jb("google_tag_data", {});
      e.td || (e.td = {});
      d = e.td;
      var f = qc(c.globalConfig);
      qc(c.eventModel, f);
      var g = [],
        h;
      for (h in d) {
        var k = Rp(d[h], f);
        k.length && (Qp && console.log(k), g.push(h));
      }
      if (g.length) {
        if (g.length) {
          var n = b + "*" + g.join(".");
          Co = Co ? Co + "!" + n : "&tdc=" + n;
        }
        gg("TAGGING", Np[I.readyState] || 14);
      }
      d[b] = f;
    };
  function Tp(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Rp(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Pp[q] : t;
      },
      f;
    for (f in Tp(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        k = e(f, b),
        n = "object" === nc(h) || "array" === nc(h),
        p = "object" === nc(k) || "array" === nc(k);
      if (n && p) Rp(h, k, c, g);
      else if (n || p || h !== k) c[g] = !0;
    }
    return Object.keys(c);
  }
  var Up = !1,
    Vp = 0,
    Wp = [];
  function Xp(a) {
    if (!Up) {
      var b = I.createEventObject,
        c = "complete" == I.readyState,
        d = "interactive" == I.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Up = !0;
        for (var e = 0; e < Wp.length; e++) J(Wp[e]);
      }
      Wp.push = function () {
        for (var f = 0; f < arguments.length; f++) J(arguments[f]);
        return 0;
      };
    }
  }
  function Yp() {
    if (!Up && 140 > Vp) {
      Vp++;
      try {
        I.documentElement.doScroll("left"), Xp();
      } catch (a) {
        y.setTimeout(Yp, 50);
      }
    }
  }
  var Zp = function (a) {
    Up ? a() : Wp.push(a);
  };
  var aq = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: He.K,
    };
  };
  var cq = function (a, b) {
      this.h = !1;
      this.F = [];
      this.J = { tags: [] };
      this.T = !1;
      this.s = this.D = 0;
      bq(this, a, b);
    },
    dq = function (a, b, c, d) {
      if (Vg.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      pc(d) && (e = qc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.J.tags.push(e) - 1;
    },
    eq = function (a, b, c, d) {
      var e = a.J.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    fq = function (a) {
      if (!a.h) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.F.length = 0;
      }
    },
    bq = function (a, b, c) {
      void 0 !== b && a.xe(b);
      c &&
        y.setTimeout(function () {
          return fq(a);
        }, Number(c));
    };
  cq.prototype.xe = function (a) {
    var b = this,
      c = Ta(function () {
        return J(function () {
          a(He.K, b.J);
        });
      });
    this.h ? c() : this.F.push(c);
  };
  var gq = function (a) {
      a.D++;
      return Ta(function () {
        a.s++;
        a.T && a.s >= a.D && fq(a);
      });
    },
    hq = function (a) {
      a.T = !0;
      a.s >= a.D && fq(a);
    };
  var iq = function () {
      function a(d) {
        return !Ba(d) || 0 > d ? 0 : d;
      }
      if (!R._li && y.performance && y.performance.timing) {
        var b = y.performance.timing.navigationStart,
          c = Ba(lh.get("gtm.start")) ? lh.get("gtm.start") : 0;
        R._li = { cst: a(c - b), cbt: a(bh - b) };
      }
    },
    jq = function (a) {
      y.performance && y.performance.mark(He.K + "_" + a + "_start");
    },
    kq = function (a) {
      if (y.performance) {
        var b = He.K + "_" + a + "_start",
          c = He.K + "_" + a + "_duration";
        y.performance.measure(c, b);
        var d = y.performance.getEntriesByName(c)[0];
        y.performance.clearMarks(b);
        y.performance.clearMeasures(c);
        var e = R._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (R._p = e));
        return d.duration;
      }
    },
    lq = function () {
      if (y.performance && y.performance.now) {
        var a = R._p || {};
        a.PAGEVIEW = y.performance.now();
        R._p = a;
      }
    };
  var mq = {},
    nq = function () {
      return y.GoogleAnalyticsObject && y[y.GoogleAnalyticsObject];
    },
    oq = !1;
  var pq = function (a) {
      y.GoogleAnalyticsObject || (y.GoogleAnalyticsObject = a || "ga");
      var b = y.GoogleAnalyticsObject;
      if (y[b]) y.hasOwnProperty(b) || jg(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Qa());
        y[b] = c;
      }
      iq();
      return y[b];
    },
    qq = function (a) {
      if (Pi()) {
        var b = nq();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function rq() {
    return y.GoogleAnalyticsObject || "ga";
  }
  var sq = function (a) {},
    tq = function (a, b) {
      return function () {
        var c = nq(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              k = 0 > g.indexOf("&tid=" + b);
            k &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            k &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function yq(a, b, c, d) {
    var e = je[a],
      f = zq(a, b, c, d);
    if (!f) return null;
    var g = re(e[Kd.sh], c, []);
    if (g && g.length) {
      var h = g[0];
      f = yq(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.Kh ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function zq(a, b, c, d) {
    function e() {
      if (f[Kd.ej]) h();
      else {
        var x = se(f, c, []);
        var z = x[Kd.ri];
        if (null != z)
          for (var w = 0; w < z.length; w++)
            if (!bj(z[w])) {
              h();
              return;
            }
        var A = dq(c.zb, String(f[Kd.Lb]), Number(f[Kd.uh]), x[Kd.fj]),
          B = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var D = Ra() - E;
            Yo(c.id, je[a], "5", D);
            eq(c.zb, A, "success", D);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var D = Ra() - E;
            Yo(c.id, je[a], "6", D);
            eq(c.zb, A, "failure", D);
            h();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        Yo(c.id, f, "1");
        var C = function () {
          var D = Ra() - E;
          Yo(c.id, f, "7", D);
          eq(c.zb, A, "exception", D);
          B || ((B = !0), h());
        };
        var E = Ra();
        try {
          qe(x, { event: c, index: a, type: 1 });
        } catch (D) {
          C(D);
        }
      }
    }
    var f = je[a],
      g = b.onSuccess,
      h = b.onFailure,
      k = b.terminate;
    if (c.Of(f)) return null;
    var n = re(f[Kd.vh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = yq(p.index, { onSuccess: g, onFailure: h, terminate: k }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.Kh ? k : q;
    }
    if (f[Kd.mh] || f[Kd.ij]) {
      var r = f[Kd.mh] ? ke : c.Kk,
        t = g,
        u = h;
      if (!r[a]) {
        e = Ta(e);
        var v = Aq(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Aq(a, b, c) {
    var d = [],
      e = [];
    b[a] = Bq(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Cq;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Dq;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Bq(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Cq(a) {
    a();
  }
  function Dq(a, b) {
    b();
  }
  function Eq(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Kh("" + c + b).href;
    }
  }
  function Fq(a, b) {
    return Gq() ? Eq(a, b) : void 0;
  }
  function Gq() {
    var a = !1;
    return a;
  }
  function Hq() {
    return !!Sg.ve && "SGTM_TOKEN" !== Sg.ve.split("@@").join("");
  }
  var Jq = function (a, b, c) {
      if (!Iq() && !Mj(a)) {
        var d = c ? "/gtag/js" : "/gtm.js",
          e = "?id=" + encodeURIComponent(a) + "&l=" + Sg.ka,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        var g = Hq();
        g && (e += "&sign=" + Sg.ve);
        var h = Fq(b, d + e);
        if (!h) {
          var k = Sg.Kc + d;
          g &&
            Hb &&
            f &&
            (k = Hb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          h = tm("https://", "http://", k + e);
        }
        Lj().container[a] = !0;
        Ob(h);
      }
    },
    Kq = function (a, b) {
      var c;
      if ((c = !Iq())) c = !Lj().destination.hasOwnProperty(a);
      if (c) {
        var d =
          "/gtag/destination?id=" +
          encodeURIComponent(a) +
          "&l=" +
          Sg.ka +
          "&cx=c";
        Hq() && (d += "&sign=" + Sg.ve);
        var e = Fq(b, d);
        e || (e = tm("https://", "http://", Sg.Kc + d));
        Lj().destination[a] = !0;
        Ob(e);
      }
    };
  function Iq() {
    if (Gj()) {
      return !0;
    }
    return !1;
  }
  var Mq = function (a, b) {
      return 1 === arguments.length ? Lq("set", a) : Lq("set", a, b);
    },
    Nq = function (a, b) {
      return 1 === arguments.length ? Lq("config", a) : Lq("config", a, b);
    },
    Oq = function (a, b, c) {
      c = c || {};
      c[P.g.Jb] = a;
      return Lq("event", b, c);
    };
  function Lq(a) {
    return arguments;
  }
  var Pq = function () {
    this.h = [];
    this.s = [];
  };
  Pq.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.s.length; f++)
      try {
        this.s[f](e);
      } catch (g) {}
  };
  Pq.prototype.listen = function (a) {
    this.s.push(a);
  };
  Pq.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Pq.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Rq = function (a, b, c) {
      Qq().enqueue(a, b, c);
    },
    Tq = function () {
      var a = Sq;
      Qq().listen(a);
    };
  function Qq() {
    var a = R.mb;
    a || ((a = new Pq()), (R.mb = a));
    return a;
  }
  var Vq = function () {
      var a = R.zones;
      a || (a = R.zones = new Uq());
      return a;
    },
    Wq = {
      zone: !0,
      cn: !0,
      css: !0,
      ew: !0,
      eq: !0,
      ge: !0,
      gt: !0,
      lc: !0,
      le: !0,
      lt: !0,
      re: !0,
      sw: !0,
      um: !0,
    },
    Xq = { cl: ["ecl"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"] },
    Uq = function () {
      this.h = {};
      this.s = {};
      this.D = 0;
    };
  l = Uq.prototype;
  l.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.Zf], b)) return !1;
    for (var e = 0; e < c.Nd.length; e++) if (this.s[c.Nd[e]].Bc(b)) return !0;
    return !1;
  };
  l.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Nd.length; f++) {
      var g = this.s[c.Nd[f]];
      g.Bc(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var h = this.getIsAllowedFn([c.Zf], b);
    return function (k, n) {
      n = n || [];
      if (!h(k, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].D(k, n)) return !0;
      return !1;
    };
  };
  l.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.h[a[b]];
  };
  l.createZone = function (a, b) {
    var c = String(++this.D);
    this.s[c] = new Yq(a, b);
    return c;
  };
  l.updateZone = function (a, b, c) {
    var d = this.s[a];
    d && d.F(b, c);
  };
  l.registerChild = function (a, b, c) {
    var d = this.h[a];
    if ((!d && R[a]) || (!d && Mj(a)) || (d && d.Zf !== b)) return !1;
    if (d) return d.Nd.push(c), !1;
    this.h[a] = { Zf: b, Nd: [c] };
    return !0;
  };
  var Yq = function (a, b) {
    this.h = [{ eventId: a, Bc: !0 }];
    this.s = null;
    if (b) {
      this.s = {};
      for (var c = 0; c < b.length; c++) this.s[b[c]] = !0;
    }
  };
  Yq.prototype.F = function (a, b) {
    var c = this.h[this.h.length - 1];
    a <= c.eventId || (c.Bc !== b && this.h.push({ eventId: a, Bc: b }));
  };
  Yq.prototype.Bc = function (a) {
    for (var b = this.h.length - 1; 0 <= b; b--)
      if (this.h[b].eventId <= a) return this.h[b].Bc;
    return !1;
  };
  Yq.prototype.D = function (a, b) {
    b = b || [];
    if (!this.s || Wq[a] || this.s[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.s[b[c]]) return !0;
    return !1;
  };
  var Zq = function (a, b, c, d, e) {
      var f = Vq();
      c = c && Wa(c, Xq);
      for (var g = f.createZone(a, c), h = 0; h < b.length; h++) {
        var k = String(b[h]);
        if (f.registerChild(k, He.K, g)) {
          var n = a,
            p = d,
            q = e;
          if (0 === k.indexOf("GTM-")) Jq(k, void 0, !1);
          else {
            var r = Lq("js", Qa());
            Jq(k, void 0, !0);
            var t = { originatingEntity: q };
            Rq(r, n, t);
            Rq(Nq(k, p), n, t);
          }
        }
      }
      return g;
    },
    $q = function (a, b, c) {
      Vq().updateZone(a, b, c);
    };
  var ar = function (a) {
      var b = R.zones;
      return b
        ? b.getIsAllowedFn(Ij(), a)
        : function () {
            return !0;
          };
    },
    br = function (a) {
      var b = R.zones;
      return b ? b.isActive(Ij(), a) : !0;
    };
  var er = function (a, b) {
    for (var c = [], d = 0; d < je.length; d++)
      if (a[d]) {
        var e = je[d];
        if (e[Kd.dj]) continue;
        var f = gq(b.zb);
        try {
          var g = yq(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = c,
              k = h.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = le[p];
            k.call(h, {
              fi: n,
              Wh: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else cr(d, b), f();
        } catch (t) {
          f();
        }
      }
    c.sort(dr);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  function dr(a, b) {
    var c,
      d = b.Wh,
      e = a.Wh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.fi,
        h = b.fi;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function cr(a, b) {
    if (!So) return;
    var c = function (d) {
      var e = b.Of(je[d]) ? "3" : "4",
        f = re(je[d][Kd.sh], b, []);
      f && f.length && c(f[0].index);
      Yo(b.id, je[d], e);
      var g = re(je[d][Kd.vh], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var hr = !1,
    fr;
  var nr = function (a) {
    var b = Ra(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (hr) return !1;
      hr = !0;
    }
    var h,
      k = !1;
    if (br(c)) h = ar(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      k = !0;
      h = ar(Number.MAX_SAFE_INTEGER);
    }
    Xo(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        Of: Mp(h),
        Kk: [],
        Rh: function () {
          jg(6);
        },
        Dh: jr(),
        Eh: kr(c),
        zb: new cq(q, p),
      },
      t = Ce(r);
    k && (t = lr(t));
    var u = er(t, r),
      v = !1;
    hq(r.zb);
    ("gtm.js" !== e && "gtm.sync" !== e) || sq(He.K);
    return mr(t, u) || v;
  };
  function kr(a) {
    return function (b) {
      So && (vc(b) || fp(a, "input", b));
    };
  }
  function jr() {
    var a = {};
    a.event = ph("event", 1);
    a.ecommerce = ph("ecommerce", 1);
    a.gtm = ph("gtm");
    a.eventModel = ph("eventModel");
    return a;
  }
  function lr(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] &&
        (Ug[String(je[c][Kd.Lb])] && (b[c] = !0),
        void 0 !== je[c][Kd.jj] && (b[c] = !0));
    return b;
  }
  function mr(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && je[c] && !Vg[String(je[c][Kd.Lb])]) return !0;
    return !1;
  }
  var or = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.dataLayerConfig = {};
      this.remoteConfig = {};
      this.eventMetadata = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.isGtmEvent = !1;
    },
    pr = function (a, b) {
      a.eventModel = b;
      return a;
    },
    qr = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    rr = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    sr = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    tr = function (a, b) {
      a.dataLayerConfig = b;
      return a;
    },
    ur = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    vr = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    wr = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    xr = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    yr = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    zr = function (a, b) {
      a.onFailure = b;
      return a;
    };
  or.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    Ar(this, this.globalConfig[a], this.dataLayerConfig[a]) && (jg(71), jg(79));
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  or.prototype.getTopLevelKeys = function () {
    function a(f) {
      for (var g = Object.keys(f), h = 0; h < g.length; ++h) b[g[h]] = 1;
    }
    var b = {};
    a(this.eventModel);
    a(this.targetConfig);
    a(this.containerConfig);
    a(this.globalConfig);
    for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
      var e = c[d];
      if (
        "event" !== e &&
        "gtm" !== e &&
        "tagTypeBlacklist" !== e &&
        !b.hasOwnProperty(e)
      ) {
        jg(71);
        jg(80);
        break;
      }
    }
    return Object.keys(b);
  };
  or.prototype.getMergedValues = function (a, b) {
    function c(h) {
      pc(h) &&
        Ja(h, function (k, n) {
          e = !0;
          d[k] = n;
        });
    }
    var d = {},
      e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.globalConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    var f = e,
      g = d;
    d = {};
    e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.dataLayerConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    if (e !== f || Ar(this, d, g)) jg(71), jg(81);
    e = f;
    d = g;
    return e ? d : void 0;
  };
  or.prototype.getKeysFromFirstOfAnyScope = function (a) {
    var b = {},
      c = !1,
      d = function (g) {
        for (var h = 0; h < a.length; h++)
          void 0 !== g[a[h]] && ((b[a[h]] = g[a[h]]), (c = !0));
        return c;
      };
    if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
      return b;
    d(this.globalConfig);
    var e = b,
      f = c;
    b = {};
    c = !1;
    d(this.dataLayerConfig);
    Ar(this, b, e) && (jg(71), jg(82));
    b = e;
    c = f;
    if (c) return b;
    d(this.remoteConfig);
    return b;
  };
  var Ar = function (a, b, c) {
    try {
      if (b === c) return !1;
      var d = nc(b);
      if (d !== nc(c) || !((pc(b) && pc(c)) || "array" === d)) return !0;
      if ("array" === d) {
        if (b.length !== c.length) return !0;
        for (var e = 0; e < b.length; e++) if (Ar(a, b[e], c[e])) return !0;
      } else {
        for (var f in c) if (!b.hasOwnProperty(f)) return !0;
        for (var g in b)
          if (!c.hasOwnProperty(g) || Ar(a, b[g], c[g])) return !0;
      }
    } catch (h) {
      jg(72);
    }
    return !1;
  };
  var Cr = function () {
      var a = R.floc;
      if (a) {
        var b = a.ts,
          c = a.floc;
        if (b && c && 1e3 > Ra() - b) return Promise.resolve(c);
      }
      try {
        return Promise.race([
          I.interestCohort().then(function (d) {
            R.floc = { ts: Ra(), floc: d };
            return d;
          }),
          new Promise(function (d) {
            y.setTimeout(function () {
              return d();
            }, Br);
          }),
        ]).catch(function () {});
      } catch (d) {}
    },
    Er = function () {
      if (!y.Promise) return !1;
      Aa(I.interestCohort) ||
        Dr ||
        ((Dr = !0),
        bk(
          "A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        ));
      return Aa(I.interestCohort);
    },
    Br = Number("200"),
    Dr = !1;
  var Fr = function (a, b, c, d, e) {
      if (!b && !a.h && !a.isGtmEvent && ni(a.D)) {
        var f = a.M(P.g.Aa);
        if (null !== f) {
          var g;
          f && pc(f) ? (g = f) : (g = oi(a.getRemoteConfig(P.g.Kb)));
          g && Ep(a.T, g, { Ab: e, Cc: c }, void 0, d);
        }
      }
    },
    Gr = function (a, b) {},
    Hr = function (a, b) {
      a.Ja("google_gtm_url_processor", function (c) {
        Pm[19] && a.J && jp(a.D.eventId, "P", Ra() - a.sa);
        b && (c = yp(c));
        var d = c;
        return (c = d);
      });
    },
    Ir = function (a, b) {
      a.Ob("gdpr_consent", vk());
      a.Ob("gdpr", wk());
      Pi() &&
        a.h &&
        (a.Z("gcs", cj()),
        Qi() && a.Z("gcd", "G1" + Xi(Ni)),
        b && a.Z("gcu", "1"));
    },
    Jr = function (a, b) {
      if (b || di(a.T)) {
        var c = Ra(),
          d = ji({ Sb: !0, Tb: !0, ci: !0 });
        if (0 !== d.elements.length) {
          for (var e = [], f = 0; f < d.elements.length; ++f) {
            var g = d.elements[f];
            e.push(g.querySelector + "*" + ki(g) + "*" + g.type);
          }
          a.Z("ec_m", e.join("~"));
          var h = d.Uh;
          h && (a.Z("ec_sel", h.querySelector), a.Z("ec_meta", ki(h)));
          a.Z("ec_lat", String(Ra() - c));
          a.Z("ec_s", d.status);
        }
      }
    },
    Kr = function (a) {
      if (!a.h)
        a.M(P.g.fa) && a.Ja("google_gtag_event_data", { items: a.M(P.g.fa) });
      else if (a.eventName == P.g.Ca) {
        a.ld({
          google_conversion_merchant_id: a.M(P.g.Tc),
          google_basket_feed_country: a.M(P.g.Rc),
          google_basket_feed_language: a.M(P.g.Sc),
          google_basket_discount: a.M(P.g.Qc),
          google_basket_transaction_type: a.eventName,
          google_disable_merchant_reported_conversions: !0 === a.M(P.g.ug),
        });
        Gj() && a.Ja("google_disable_merchant_reported_conversions", !0);
        var b;
        var c = a.M(P.g.fa);
        if (c) {
          for (var d = [], e = 0; e < c.length; ++e) {
            var f = c[e];
            f &&
              d.push({
                item_id: f.id,
                quantity: f.quantity,
                value: f.price,
                start_date: f.start_date,
                end_date: f.end_date,
              });
          }
          b = d;
        } else b = void 0;
        var g = b;
        g && a.Ja("google_conversion_items", g);
      }
    },
    Lr = function (a) {
      var b;
      var c = {};
      a.isGtmEvent
        ? !a.h && a.eventName && (c.event = a.eventName)
        : (c.event = a.eventName);
      var d = a.D.eventModel;
      if (d) {
        qc(d, c);
        for (var e in c)
          c.hasOwnProperty(e) && Rg[e.split(".")[0]] && delete c[e];
        b = c;
      } else b = null;
      var f = b;
      f && a.Ja("google_custom_params", f);
    },
    Mr = function (a) {
      Gj() &&
        (a.Ja("opt_image_generator", function () {
          return new Image();
        }),
        a.Ja("google_enable_display_cookie_match", !1));
    },
    Nr = function (a) {
      var b,
        c = !1;
      c = qi();
      (b = c) && a.sd("apcm");
      b || a.sd("capi");
      if (!a.isGtmEvent) {
        var d = yi();
        0 === d ? a.Ob("dg", "c") : 1 === d && a.Ob("dg", "e");
      }
    },
    Or = function (a) {
      a.ld({
        onload_callback: function () {
          Pm[19] && a.J && jp(a.D.eventId, "C", Ra() - a.sa);
          a.D.onSuccess();
        },
        gtm_onFailure: a.D.onFailure,
      });
    },
    Qr = function (a, b, c, d, e) {
      var f = a.M(P.g.Gb),
        g = a.M(P.g.za) || {},
        h = a.M(P.g.nb);
      dn({ Cf: b, Gh: f, Tf: g, jg: h }, c);
      Em(a.W, a.D);
      var k = {
        Be: !1,
        Cc: d,
        W: a.W,
        eventId: a.D.eventId,
        priorityId: a.D.priorityId,
        Ab: b ? c : void 0,
        Cd: b,
        rd: "",
      };
      Pr ? (k.rd = void 0) : (k.rd = e.Jh || "");
      k.Ke = e.Ie;
      k.Ge = e.Ee;
      Vl(k);
    },
    Rr = function (a, b) {
      var c = Fq(a, "/pagead/conversion_async.js");
      if (c) return c;
      var d = tm("https://", "http://", "www.googleadservices.com"),
        e = !b.isGtmEvent && 1 === yi();
      if (ui() || e) d = "https://www.google.com";
      return d + "/pagead/conversion_async.js";
    },
    Sr = !1,
    Tr = !1;
  var Pr = !1;
  var Ur = !1;
  var Vr = [],
    Wr = !1,
    Xr = function (a) {
      var b = y.google_trackConversion,
        c = a.s.gtm_onFailure;
      "function" == typeof b ? b(a.s) || c() : c();
    },
    Yr = function () {
      for (; 0 < Vr.length; ) Xr(Vr.shift());
    },
    Zr = function (a, b) {
      var c = Sr;
      Tr && (c = b.getContainerTypeLoaded("AW"));
      if (!c) {
        Sr = Wr = !0;
        iq();
        var d = function () {
          Tr && b.setContainerTypeLoaded("AW", !0);
          Wr = !1;
          Yr();
          Vr = { push: Xr };
        };
        Gj()
          ? d()
          : Ob(a, d, function () {
              Yr();
              Sr = !1;
              Tr && b.setContainerTypeLoaded("AW", !1);
            });
      }
    },
    $r = function (a, b, c) {
      var d = Yl(a);
      !d && c.isGtmEvent && (d = this.rk(a));
      this.W = a;
      this.T = d.P[0] || "";
      this.F = d.P[1];
      this.h = void 0 !== this.F;
      this.eventName = b;
      this.isGtmEvent = c.isGtmEvent;
      this.D = c;
      this.s = {
        google_conversion_id: this.T,
        google_conversion_label: this.F,
        google_conversion_format: "3",
        google_conversion_color: "ffffff",
        google_conversion_domain: "",
        google_gtm: Qj(),
      };
      Pm[19] && ((this.sa = Ra()), (this.J = !1));
    };
  l = $r.prototype;
  l.rk = function (a) {
    var b = a.indexOf("/"),
      c = 3 <= b,
      d = a.substring(3, c ? b : a.length);
    return {
      id: a,
      prefix: "AW",
      containerId: "AW-" + d,
      P: [d, c ? a.substring(b + 1) : void 0],
    };
  };
  l.Ja = function (a, b) {
    this.s[a] = b;
  };
  l.zk = function () {
    delete this.s.google_transport_url;
  };
  l.ld = function (a) {
    for (var b in a) a.hasOwnProperty(b) && (this.s[b] = a[b]);
  };
  l.Z = function (a, b) {
    void 0 != b &&
      "" !== b &&
      ((this.s.google_additional_conversion_params =
        this.s.google_additional_conversion_params || {}),
      (this.s.google_additional_conversion_params[a] = b));
  };
  l.Ob = function (a, b) {
    void 0 != b &&
      "" !== b &&
      ((this.s.google_additional_params =
        this.s.google_additional_params || {}),
      (this.s.google_additional_params[a] = b));
  };
  l.sd = function (a) {
    this.s.google_gtm_experiments = this.s.google_gtm_experiments || {};
    this.s.google_gtm_experiments[a] = !0;
  };
  l.M = function (a) {
    return this.D.getWithConfig(a);
  };
  l.getRemoteConfig = function (a) {
    return this.D.remoteConfig[a];
  };
  var bs = function (a, b, c, d) {
    function e(F, O) {
      function M() {
        Pm[19] &&
          ((F.J = ip(F.D.eventId, Wr ? 1 : 2)),
          F.J && jp(F.D.eventId, "S", Ra() - F.sa));
        Vr.push(F);
        Tr && d.getContainerTypeLoaded("AW") && Yr();
      }
      var S = [];
      if (O) {
        k &&
          (Pm[3] && !Pm[4]
            ? (Gk(A, F.h), F.Ob("auid", Dk(n)))
            : F.h && (Gk(A), F.Z("auid", Dk(n))));
        as(F);
        var K = (g(P.g.Zc) || {})[F.F];
        Jr(F, ri(K));
        var Z = !0 === g(P.g.Oc) || K;
        if (F.h && Z && (!Ur || !bn())) {
          var aa = ti(K, F.M(P.g.Aa));
          aa &&
            S.push(
              aa.then(function (V) {
                F.Z("em", V.Ed);
                F.Z("ec_mode", V.Ac);
              })
            );
        }
      }
      if (S.length)
        try {
          Promise.all(S).then(function () {
            M();
          });
          return;
        } catch (V) {}
      M();
    }
    var f = new $r(a, b, d),
      g = function (F) {
        return d.getWithConfig(F);
      },
      h = void 0 != g(P.g.la) && !1 !== g(P.g.la),
      k = !1 !== g(P.g.xa),
      n = g(P.g.Na) || g(P.g.Oa),
      p = g(P.g.ya),
      q = g(P.g.Ga),
      r = g(P.g.Ta),
      t = {};
    if (!Pr) {
      var u = d.getMergedValues(P.g.ca);
      t.Jh = ab(pc(u) ? u : {});
    }
    var v = d.getMergedValues(P.g.ca, 1),
      x = d.getMergedValues(P.g.ca, 2);
    t.Ie = ab(pc(v) ? v : {}, ".");
    t.Ee = ab(pc(x) ? x : {}, ".");
    var z = g(P.g.ia),
      w = Rr(z, f);
    Zr(w, d);
    var A = { prefix: n, domain: p, Wb: q, flags: r },
      B = b == P.g.Da;
    B && !d.isGtmEvent && Qr(f, k, A, h, t);
    if (b !== P.g.Sa || d.isGtmEvent) {
      var C = !1 === g(P.g.tb) || !1 === g(P.g.Ha);
      if (!B || (!f.h && !C))
        if ((!0 === g(P.g.Ud) && (f.h = !1), !1 !== g(P.g.ba) || f.h)) {
          f.ld({
            google_remarketing_only: !f.h,
            google_conversion_language: f.M(P.g.Ua),
            google_conversion_value: f.M(P.g.qa),
            google_conversion_currency: f.M(P.g.va),
            google_conversion_order_id: f.M(P.g.Pa),
            google_user_id: f.M(P.g.Ia),
            google_conversion_page_url: f.M(P.g.Va),
            google_conversion_referrer_url: f.M(P.g.eb),
          });
          Or(f);
          f.h && f.D.eventMetadata.is_external_event && f.Z("gtm_ee", "1");
          Nr(f);
          f.h && f.Ja("google_transport_url", Eq(f.M(P.g.ia), "/"));
          f.Ja("google_restricted_data_processing", f.M(P.g.xb));
          Mr(f);
          !1 === f.M(P.g.ba) &&
            f.Ja("google_allow_ad_personalization_signals", !1);
          k
            ? f.ld({
                google_gcl_cookie_prefix: A.prefix,
                google_gcl_cookie_domain: A.domain,
                google_gcl_cookie_max_age_seconds: A.Wb,
                google_gcl_cookie_flags: A.flags,
              })
            : f.Ja("google_read_gcl_cookie_opt_out", !0);
          Lr(f);
          Kr(f);
          "1" === dl(!1)._up && f.Z("gtm_up", "1");
          f.h && (f.Z("vdnc", f.M(P.g.fd)), f.Z("vdltv", f.M(P.g.Wc)));
          Ir(f);
          f.h &&
            (f.Z("delopc", f.M(P.g.wc)),
            f.Z("oedeld", f.M(P.g.ad)),
            f.Z("delc", f.M(P.g.mc)),
            f.Z("shf", f.M(P.g.Yc)),
            f.Z("iedeld", vi(f.M(P.g.fa))));
          Pr || f.Z("did", t.Jh), f.Z("gdid", t.Ie), f.Z("edid", t.Ee);
          Hr(f, h);
          Gr(f, A);
          Fr(f, B, h, t, A);
          Pi()
            ? fj(
                function () {
                  Ir(f);
                  var F = bj(P.g.I);
                  if (f.h)
                    F ||
                      z ||
                      f.Ja(
                        "google_transport_url",
                        "https://pagead2.googlesyndication.com/"
                      ),
                      e(f, F);
                  else if (F) {
                    e(f, F);
                    return;
                  }
                  F ||
                    ej(function () {
                      var O = new $r(a, f.eventName, d);
                      O.h = f.h;
                      O.ld(qc(f.s));
                      Hr(O, h);
                      !z && O.s.google_transport_url && O.zk();
                      Ir(O, !0);
                      e(O, !0);
                    }, P.g.I);
                },
                [P.g.I]
              )
            : e(f, !0);
        }
    } else {
      var E = {};
      E.callback = f.M(P.g.kb);
      var D = f.M(P.g.cb);
      E.ii = D;
      E.Sh = f.M(String(D));
      en(E, A, h, Xm);
    }
  };
  var as = function (a) {
    jn() &&
      !1 !== a.M(P.g.Ea) &&
      !1 !== a.M(P.g.ba) &&
      !1 !== a.M(P.g.tb) &&
      !1 !== a.M(P.g.Ha) &&
      a.sd("fledge");
  };
  var ds = function () {
      return !1;
    },
    hs = function (a, b) {
      function c() {
        var q = a.B.isGtmEvent
          ? a.B.getWithConfig("oref")
          : Jh(Kh(y.location.href));
        es(q) && (0, a.metadata.add_parameter)("~oref", !d && f ? Lh(q) : q);
        Km(a);
        if (a.U) J(a.B.onFailure);
        else {
          for (
            var r = [], t = a.metadata.parameter_order, u = 0;
            u < t.length;
            ++u
          ) {
            var v = t[u];
            r.push(v + "=" + a.C[v]);
          }
          var x = n + r.join(";") + "?",
            z = a.metadata.send_as_iframe;
          z ? Qb(x, a.B.onSuccess) : Rb(x, a.B.onSuccess, a.B.onFailure);
          if (a.metadata.attribution_reporting_experiment) {
            var w =
                "https://ad.doubleclick.net/" +
                (z ? "activityi" : "activity") +
                ";register_conversion=1;" +
                r.join(";") +
                "?",
              A = {
                headers: { "Attribution-Reporting-Eligible": "trigger" },
                keepalive: !0,
              };
            try {
              y.fetch(w, A);
            } catch (E) {}
          }
          if (
            d &&
            !1 !== a.B.getWithConfig(P.g.Ea) &&
            !1 !== a.B.getWithConfig(P.g.ba) &&
            jn()
          ) {
            var B = "DC-" + e.wf + "/" + e.yh + "/" + e.zh + "+" + e.pd,
              C =
                "https://googleads.g.doubleclick.net/td/fls/rul/activityi;fledge=1;" +
                r.join(";") +
                "?";
            kn(C, B);
          }
        }
      }
      fs(a);
      var d = a.metadata.consent_ad_storage,
        e = a.metadata.parsed_target,
        f = a.metadata.redact_ads_data,
        g = !0 === a.B.getWithConfig(P.g.Ye);
      if (Gj() && g) {
        g = !1;
      }
      a.metadata.consent_updated = b;
      a.metadata.promises = [];
      a.metadata.send_as_iframe = g && d;
      for (var h = 0; h < gs.length; ++h) gs[h](a);
      var k = a.B.isGtmEvent ? "" : 3 === sm() ? "http:" : "https:",
        n = d
          ? a.metadata.send_as_iframe
            ? k + "//" + e.wf + ".fls.doubleclick.net/activityi;"
            : k + "//ad.doubleclick.net/activity;"
          : "https://ade.googlesyndication.com/ddm/activity/",
        p = a.metadata.promises;
      if (p.length)
        try {
          Promise.all(p).then(function () {
            return c();
          });
          return;
        } catch (q) {}
      c();
    },
    es = function (a) {
      return !(void 0 === a || 0 === (a + "").length);
    },
    is = function (a) {
      var b = a.B.getWithConfig(P.g.Mi);
      if (pc(b) && b.exclusion_parameters && b.engines)
        if (Gj()) {
        } else {
          var c = a.metadata.conversion_linker_enabled,
            d = a.metadata.cookie_options,
            e = 3 === sm(),
            f = function () {
              var g = { config: b, gtm: Qj() };
              c && (Gk(d), (g.auiddc = Dk(d.prefix)));
              e && (g.loadInsecure = e);
              var h = y;
              void 0 === h.__dc_ns_processor && (h.__dc_ns_processor = []);
              h.__dc_ns_processor.push(g);
              Ob(
                (e ? "http" : "https") +
                  "://www.googletagmanager.com/dclk/ns/v1.js"
              );
            };
          a.metadata.consent_ad_storage ? f() : Ui(f, P.g.I);
        }
    },
    fs = function (a) {
      var b = bj(P.g.I);
      a.metadata.consent_ad_storage = b;
      var c = a.B.getWithConfig(P.g.la),
        d = a.B.isGtmEvent;
      a.metadata.redact_ads_data = void 0 != c && !1 !== c && (!d || !b);
    },
    ms = function (a, b, c, d) {
      var e;
      a: {
        var f = js.exec(a);
        if (f) {
          var g = ks[(f[5] || "").toLowerCase()];
          if (g) {
            e = {
              containerId: "DC-" + f[1],
              W: f[3] ? a : "",
              wf: f[1],
              yh: f[3] || "",
              zh: f[4] || "",
              pd: g,
            };
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (h) {
        var k = new Fm(h.containerId, b, d);
        k.metadata.parsed_target = h;
        for (var n = 0; n < ls.length && (ls[n](k), !k.U); ++n);
      } else J(d.onFailure);
    },
    ls = [
      function (a) {
        a.metadata.conversion_linker_enabled = !1 !== a.B.getWithConfig(P.g.xa);
      },
      function (a) {
        var b = {
          prefix: a.B.getWithConfig(P.g.Na) || a.B.getWithConfig(P.g.Oa),
          domain: a.B.getWithConfig(P.g.ya),
          Wb: a.B.getWithConfig(P.g.Ga),
          flags: a.B.getWithConfig(P.g.Ta),
        };
        a.metadata.cookie_options = b;
      },
      fs,
      function (a) {
        if (a.eventName === P.g.Sa && !a.B.isGtmEvent) {
          var b = {
            callback: a.B.getWithConfig(P.g.kb),
            Sh: a.B.getWithConfig(a.B.getWithConfig(P.g.cb)),
            ii: a.B.getWithConfig(P.g.cb),
          };
          en(b, a.metadata.cookie_options, a.metadata.redact_ads_data, Ym);
          a.U = !0;
          J(a.B.onSuccess);
        }
      },
      function (a) {
        if (a.eventName === P.g.Da && !a.B.isGtmEvent) {
          var b = a.metadata.conversion_linker_enabled,
            c = a.metadata.cookie_options,
            d = a.metadata.redact_ads_data;
          dn(
            {
              Cf: b,
              Gh: a.B.getWithConfig(P.g.Gb),
              Tf: a.B.getWithConfig(P.g.za) || {},
              jg: a.B.getWithConfig(P.g.nb),
            },
            c
          );
          is(a);
          var e = a.metadata.parsed_target,
            f = ab(a.B.getMergedValues(P.g.ca, 2), "."),
            g = ab(a.B.getMergedValues(P.g.ca, 1), ".");
          Vl({
            Be: !0,
            Ab: b ? c : void 0,
            Ge: f,
            eventId: a.B.eventId,
            Ke: g,
            Cd: b,
            priorityId: a.B.priorityId,
            Cc: d,
            W: e.W,
          });
          a.U = !0;
          J(a.B.onSuccess);
        }
      },
      function (a) {
        Pi()
          ? fj(
              function () {
                hs(a);
                bj(P.g.I) ||
                  ej(function () {
                    a.U = !1;
                    hs(a, !0);
                  }, P.g.I);
              },
              [P.g.I]
            )
          : hs(a);
      },
    ],
    gs = [
      function (a) {
        var b = {},
          c = a.B.getWithConfig(P.g.Li);
        pc(c) &&
          Ja(c, function (g, h) {
            null != h && (b[g] = h);
          });
        var d = [],
          e = function (g, h, k) {
            b.hasOwnProperty(g) ||
              ((h = String(h)),
              k || (h = encodeURIComponent(h)),
              (a.C[g] = h),
              d.push(g));
          },
          f = a.metadata.parsed_target;
        e("src", f.wf);
        e("type", f.yh);
        e("cat", f.zh);
        Ja(b, function (g, h) {
          g = encodeURIComponent(g);
          h = encodeURIComponent(h);
          a.C[g] = h;
          d.push(g);
        });
        a.metadata.add_parameter = e;
        a.metadata.parameter_order = d;
      },
      function (a) {
        var b = a.metadata.add_parameter,
          c = a.metadata.parsed_target;
        switch (c.pd) {
          case 2:
            b("ord", Ga(1e11, 1e13));
            return;
          case 3:
            b("ord", "1");
            b("num", Ga(1e11, 1e13));
            return;
          case 4:
            var d = a.B.getWithConfig(P.g.lb);
            es(d) && b("ord", d);
            return;
        }
        var e = 5 === c.pd ? "1" : a.B.getWithConfig(P.g.Qg),
          f = a.B.getWithConfig(P.g.qa),
          g = a.B.getWithConfig(P.g.Pa);
        es(e) && b("qty", e);
        es(f) && b("cost", f);
        es(g) && b("ord", g);
      },
      function (a) {
        if (a.B.isGtmEvent) {
          var b = a.metadata.add_parameter,
            c = a.B.getWithConfig("u"),
            d = a.B.getWithConfig("tran");
          es(c) && b("u", c);
          es(d) && b("tran", d);
        }
      },
      function (a) {
        (0, a.metadata.add_parameter)("gtm", Qj());
      },
      function (a) {
        if (Pi()) {
          var b = a.metadata.add_parameter;
          b("gcs", cj());
          a.metadata.consent_updated && b("gcu", 1);
        }
      },
      function (a) {
        var b = a.metadata.add_parameter,
          c = vk(),
          d = wk();
        c && b("gdpr_consent", c);
        d && b("gdpr", d);
      },
      function (a) {
        "1" === dl(!1)._up && (0, a.metadata.add_parameter)("gtm_up", "1");
      },
      function (a) {
        !1 === a.B.getWithConfig(P.g.ba) &&
          (0, a.metadata.add_parameter)("npa", 1);
      },
      function (a) {
        if (a.metadata.conversion_linker_enabled) {
          var b = a.metadata.add_parameter,
            c = a.metadata.cookie_options,
            d = a.metadata.redact_ads_data,
            e = Ym(c.prefix, d),
            f = !1;
          e && e.length && (b("gcldc", e.join(".")), (f = !0));
          if (a.metadata.send_as_iframe) {
            var g = "_gcl" !== Al(c.prefix);
            if (f || !bn(c.prefix)) {
              var h = Xm(c.prefix, d);
              h && h.length && (b("gclaw", h.join(".")), jg(59));
              var k = Zm(d);
              k && (g ? jg(60) : b("gac", k));
            } else {
              var n = Tm("gb", c.prefix, d);
              n.length && b("gclgb", n.join("."));
              if (!g) {
                var p = $m(d);
                p && b("gacgb", p);
              }
            }
          }
          Gk(c);
          var q = Dk(c.prefix);
          q && b("auiddc", q);
        }
      },
      function (a) {
        function b(p, q, r) {
          es(r) && f.push(p + q + ":" + encodeURIComponent(r + ""));
        }
        var c = a.metadata.parsed_target;
        if (5 === c.pd || 6 === c.pd) {
          var d = a.B.isGtmEvent,
            e = a.B.getWithConfig(P.g.fa) || [];
          if (Ca(e)) {
            for (var f = [], g = 0; g < e.length; g++) {
              var h = e[g],
                k = g + 1;
              b("i", k, h.id);
              b("p", k, h.price);
              b("q", k, h.quantity);
              b("c", k, d ? h[P.g.mc] : a.B.getWithConfig(P.g.mc));
              b("l", k, d ? h[P.g.Ua] : a.B.getWithConfig(P.g.Ua));
              d && b("a", k, h.accountId);
            }
            var n = f.join("|");
            es(n) && (0, a.metadata.add_parameter)("prd", n, !0);
          }
        }
      },
      function (a) {
        var b = a.B.getWithConfig(P.g.Xc),
          c = {};
        pc(b) &&
          Ja(b, function (h, k) {
            m(k) && ns.test(h) && (c[h] = k);
          });
        for (var d = a.B.getTopLevelKeys(), e = 0; e < d.length; e++) {
          var f = d[e];
          ns.test(f) && (c[f] = f);
        }
        var g = a.metadata.add_parameter;
        Ja(c, function (h, k) {
          var n = a.B.getWithConfig(k);
          g(h, n);
        });
      },
      function (a) {
        var b = a.metadata.add_parameter,
          c = ab(a.B.getMergedValues(P.g.ca, 1), ".");
        es(c) && b("gdid", c);
        var d = ab(a.B.getMergedValues(P.g.ca, 2), ".");
        es(d) && b("edid", d);
      },
      function (a) {
        var b = a.metadata.consent_ad_storage && ds();
        if ((a.metadata.attribution_reporting_experiment = b)) {
          var c = a.metadata.add_parameter;
          c("ps", 1);
          c("pcor", Ga());
        }
      },
      function (a) {
        if (a.B.isGtmEvent) {
          var b = a.B.getWithConfig(P.g.Aa);
          if (pc(b)) {
            var c = Cg(b);
            if (c) {
              var d = a.metadata.add_parameter;
              a.metadata.promises.push(
                c.then(function (e) {
                  es(e.Ed) && d("em", e.Ed, !0);
                })
              );
            }
          }
        }
      },
      function (a) {},
    ],
    ks = {
      "": 1,
      standard: 2,
      unique: 3,
      per_session: 4,
      transactions: 5,
      items_sold: 6,
    },
    js = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/,
    ns = /^u([1-9]\d?|100)$/,
    cs = !1;
  var Bs = function () {
      var a = !0;
      (xk(7) && xk(9) && xk(10)) || (a = !1);
      return a;
    },
    Cs = function () {
      var a = !0;
      (xk(3) && xk(4)) || (a = !1);
      return a;
    };
  var Gs = function (a, b) {
      if (!b.isGtmEvent) {
        var c = b.getWithConfig(P.g.cb),
          d = b.getWithConfig(P.g.kb),
          e = b.getWithConfig(c);
        if (void 0 === e) {
          var f = void 0;
          Ds.hasOwnProperty(c)
            ? (f = Ds[c])
            : Es.hasOwnProperty(c) && (f = Es[c]);
          1 === f && (f = Fs(c));
          m(f)
            ? nq()(function () {
                var g = nq().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    Hs = function (a, b) {
      var c = a[P.g.ed],
        d = b + ".",
        e = a[P.g.X] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[P.g.uc];
      e = String(e).replace(/\s+/g, "").split(",");
      var h = nq();
      h(d + "require", "linker");
      h(d + "linker:autoLink", e, f, g);
    },
    Ls = function (a, b, c) {
      if (Pi() && (!c.isGtmEvent || !Is[a])) {
        var d = !bj(P.g.V),
          e = function (f) {
            var g,
              h,
              k = nq(),
              n = Js(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || Ks(b, n.createOnlyFields)) {
              c.isGtmEvent &&
                ((g = "gtm" + eh()),
                (h = n.createOnlyFields),
                n.gtmTrackerName && (h.name = g));
              k(function () {
                var t = k.getByName(b);
                t && (p = t.get("clientId"));
                c.isGtmEvent || k.remove(b);
              });
              k("create", a, c.isGtmEvent ? h : n.createOnlyFields);
              d &&
                bj(P.g.V) &&
                ((d = !1),
                k(function () {
                  var t = nq().getByName(c.isGtmEvent ? g : b);
                  !t ||
                    (t.get("clientId") == p && q) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&gcut"] = Pg[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&gcut"] = Pg[f])),
                    t.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? t.send("pageview")
                      : t.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                k(function () {
                  k.remove(g);
                });
            }
          };
        ej(function () {
          return e(P.g.V);
        }, P.g.V);
        ej(function () {
          return e(P.g.I);
        }, P.g.I);
        c.isGtmEvent && (Is[a] = !0);
      }
    },
    Ms = function (a, b) {
      Hq() && b && (a[P.g.Hb] = b);
    },
    Vs = function (a, b, c) {
      function d() {
        var M = c.getWithConfig(P.g.Xc);
        h(function () {
          if (!c.isGtmEvent && pc(M)) {
            var S = u.fieldsToSend,
              Y = k().getByName(n),
              Q;
            for (Q in M)
              if (
                M.hasOwnProperty(Q) &&
                /^(dimension|metric)\d+$/.test(Q) &&
                void 0 != M[Q]
              ) {
                var K = Y.get(Fs(M[Q]));
                Ns(S, Q, K);
              }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var M = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: M });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        h = c.isGtmEvent ? pq(c.getWithConfig("gaFunctionName")) : pq();
      if (Aa(h)) {
        var k = nq,
          n;
        c.isGtmEvent
          ? (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (M) {
            var S = [].slice.call(arguments, 0);
            S[0] = n ? n + "." + S[0] : "" + S[0];
            h.apply(window, S);
          },
          q = function (M) {
            var S = function (V, ma) {
                for (var Fa = 0; ma && Fa < ma.length; Fa++) p(V, ma[Fa]);
              },
              Y = c.isGtmEvent,
              Q = Y ? Os(u) : Ps(b, c);
            if (Q) {
              var K = {};
              Ms(K, M);
              p("require", "ec", "ec.js", K);
              Y && Q.Ef && p("set", "&cu", Q.Ef);
              var Z = Q.action;
              if (Y || "impressions" === Z)
                if ((S("ec:addImpression", Q.Ph), !Y)) return;
              if ("promo_click" === Z || "promo_view" === Z || (Y && Q.Hd)) {
                var aa = Q.Hd;
                S("ec:addPromo", aa);
                if (aa && 0 < aa.length && "promo_click" === Z) {
                  Y ? p("ec:setAction", Z, Q.yb) : p("ec:setAction", Z);
                  return;
                }
                if (!Y) return;
              }
              "promo_view" !== Z &&
                "impressions" !== Z &&
                (S("ec:addProduct", Q.Xb), p("ec:setAction", Z, Q.yb));
            }
          },
          r = function (M) {
            if (M) {
              var S = {};
              if (pc(M))
                for (var Y in Qs) Qs.hasOwnProperty(Y) && Rs(Qs[Y], Y, M[Y], S);
              Ms(S, z);
              p("require", "linkid", S);
            }
          },
          t = function () {
            if (Gj()) {
            } else {
              var M = c.getWithConfig(P.g.Ri);
              M &&
                (p("require", M, { dataLayer: Sg.ka }), p("require", "render"));
            }
          },
          u = Js(n, b, c),
          v = function (M, S, Y) {
            Y && (S = "" + S);
            u.fieldsToSend[M] = S;
          };
        !c.isGtmEvent &&
          Ks(n, u.createOnlyFields) &&
          (h(function () {
            k() && k().remove(n);
          }),
          (Ss[n] = !1));
        h("create", f, u.createOnlyFields);
        if (u.createOnlyFields[P.g.Hb] && !c.isGtmEvent) {
          var x = Fq(u.createOnlyFields[P.g.Hb], "/analytics.js");
          x && (g = x);
        }
        var z = c.isGtmEvent
          ? u.fieldsToSet[P.g.Hb]
          : u.createOnlyFields[P.g.Hb];
        if (z) {
          var w = c.isGtmEvent
            ? u.fieldsToSet[P.g.ee]
            : u.createOnlyFields[P.g.ee];
          w && !Ss[n] && ((Ss[n] = !0), h(tq(n, w)));
        }
        c.isGtmEvent
          ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(u.linkAttribution));
        var A = u[P.g.za];
        A && A[P.g.X] && Hs(A, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var B = {};
            Ms(B, z);
            p("require", "linkid", "linkid.js", B);
          }
          Pi() && Ls(f, n, c);
        }
        if (b === P.g.Lc)
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: C });
            }
            q(z);
            p("send", "pageview");
            u.createOnlyFields._useUp && qq(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        else
          b === P.g.Da
            ? (t(),
              Em(f, c),
              c.getWithConfig(P.g.nb) && (Ml(["aw", "dc"]), qq(n + ".")),
              0 != u.sendPageView && p("send", "pageview", u.fieldsToSend),
              Ls(f, n, c))
            : b === P.g.Sa
            ? Gs(n, c)
            : "screen_view" === b
            ? p("send", "screenview", u.fieldsToSend)
            : "timing_complete" === b
            ? ((u.fieldsToSend.hitType = "timing"),
              v("timingCategory", u.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", u.timingVar, !0)
                : v("timingVar", u.name, !0),
              v("timingValue", Ma(u.value)),
              void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0),
              p("send", u.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", u.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((u.fieldsToSend.hitType = "social"),
                  v("socialNetwork", u.socialNetwork, !0),
                  v("socialAction", u.socialAction, !0),
                  v("socialTarget", u.socialTarget, !0))
                : ((c.isGtmEvent || Ts[b]) && q(z),
                  c.isGtmEvent && e(),
                  (u.fieldsToSend.hitType = "event"),
                  v("eventCategory", u.eventCategory, !0),
                  v("eventAction", u.eventAction || b, !0),
                  void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0),
                  void 0 !== u.value && v("eventValue", Ma(u.value))),
              p("send", u.fieldsToSend));
        var E = !1;
        var D = Us;
        E && (D = c.getContainerTypeLoaded("UA"));
        if (!D && !c.isGtmEvent) {
          Us = !0;
          E && c.setContainerTypeLoaded("UA", !0);
          iq();
          var F = function () {
              E && c.setContainerTypeLoaded("UA", !1);
              c.onFailure();
            },
            O = function () {
              k().loaded || F();
            };
          Gj() ? J(O) : Ob(g, O, F);
        }
      } else J(c.onFailure);
    },
    Ws = function (a, b, c, d) {
      fj(
        function () {
          Vs(a, b, d);
        },
        [P.g.V, P.g.I]
      );
    },
    Ys = function (a, b) {
      function c(f) {
        function g(p, q) {
          for (var r = 0; r < q.length; r++) {
            var t = q[r];
            if (f[t]) {
              k[p] = f[t];
              break;
            }
          }
        }
        function h() {
          if (f.category) k.category = f.category;
          else {
            for (var p = "", q = 0; q < Xs.length; q++)
              void 0 !== f[Xs[q]] && (p && (p += "/"), (p += f[Xs[q]]));
            p && (k.category = p);
          }
        }
        var k = qc(f),
          n = !1;
        if (n || b)
          g("id", ["id", "item_id", "promotion_id"]),
            g("name", ["name", "item_name", "promotion_name"]),
            g("brand", ["brand", "item_brand"]),
            g("variant", ["variant", "item_variant"]),
            g("list", ["list_name", "item_list_name"]),
            g("position", ["list_position", "creative_slot", "index"]),
            h();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return k;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++)
        a[e] && pc(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    Zs = function (a) {
      return bj(a);
    },
    $s = !1;
  var Us,
    Ss = {},
    Is = {},
    at = {},
    Ds = Object.freeze(
      ((at.client_storage = "storage"),
      (at.sample_rate = 1),
      (at.site_speed_sample_rate = 1),
      (at.store_gac = 1),
      (at.use_amp_client_id = 1),
      (at[P.g.Fa] = 1),
      (at[P.g.xa] = "storeGac"),
      (at[P.g.ya] = 1),
      (at[P.g.Ga] = 1),
      (at[P.g.Ta] = 1),
      (at[P.g.kc] = 1),
      (at[P.g.ub] = 1),
      (at[P.g.Gb] = 1),
      at)
    ),
    bt = {},
    ct = Object.freeze(
      ((bt._cs = 1),
      (bt._useUp = 1),
      (bt.allowAnchor = 1),
      (bt.allowLinker = 1),
      (bt.alwaysSendReferrer = 1),
      (bt.clientId = 1),
      (bt.cookieDomain = 1),
      (bt.cookieExpires = 1),
      (bt.cookieFlags = 1),
      (bt.cookieName = 1),
      (bt.cookiePath = 1),
      (bt.cookieUpdate = 1),
      (bt.legacyCookieDomain = 1),
      (bt.legacyHistoryImport = 1),
      (bt.name = 1),
      (bt.sampleRate = 1),
      (bt.siteSpeedSampleRate = 1),
      (bt.storage = 1),
      (bt.storeGac = 1),
      (bt.useAmpClientId = 1),
      (bt._cd2l = 1),
      bt)
    ),
    dt = Object.freeze({ anonymize_ip: 1 }),
    et = {},
    Es = Object.freeze(
      ((et.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (et.app_id = 1),
      (et.app_installer_id = 1),
      (et.app_name = 1),
      (et.app_version = 1),
      (et.description = "exDescription"),
      (et.fatal = "exFatal"),
      (et.language = 1),
      (et.page_hostname = "hostname"),
      (et.transport_type = "transport"),
      (et[P.g.va] = "currencyCode"),
      (et[P.g.Kg] = 1),
      (et[P.g.Va] = "location"),
      (et[P.g.jf] = "page"),
      (et[P.g.eb] = "referrer"),
      (et[P.g.vc] = "title"),
      (et[P.g.Sg] = 1),
      (et[P.g.Ia] = 1),
      et)
    ),
    ft = {},
    gt = Object.freeze(
      ((ft.content_id = 1),
      (ft.event_action = 1),
      (ft.event_category = 1),
      (ft.event_label = 1),
      (ft.link_attribution = 1),
      (ft.name = 1),
      (ft[P.g.za] = 1),
      (ft[P.g.Jg] = 1),
      (ft[P.g.Ha] = 1),
      (ft[P.g.qa] = 1),
      ft)
    ),
    ht = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    Xs = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    it = {},
    Qs = Object.freeze(
      ((it.levels = 1), (it[P.g.Ga] = "duration"), (it[P.g.kc] = 1), it)
    ),
    jt = {},
    kt = Object.freeze(
      ((jt.anonymize_ip = 1),
      (jt.fatal = 1),
      (jt.send_page_view = 1),
      (jt.store_gac = 1),
      (jt.use_amp_client_id = 1),
      (jt[P.g.xa] = 1),
      (jt[P.g.Kg] = 1),
      jt)
    ),
    Rs = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (kt[b] && (c = Na(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Fs(b)] = c;
        else if (m(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Fs = function (a) {
      return a && m(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    lt = {},
    Ts = Object.freeze(
      ((lt.checkout_progress = 1),
      (lt.select_content = 1),
      (lt.set_checkout_option = 1),
      (lt[P.g.fc] = 1),
      (lt[P.g.hc] = 1),
      (lt[P.g.Eb] = 1),
      (lt[P.g.Fb] = 1),
      (lt[P.g.ic] = 1),
      (lt[P.g.Ca] = 1),
      (lt[P.g.jc] = 1),
      (lt[P.g.Ma] = 1),
      lt)
    ),
    mt = {},
    nt = Object.freeze(
      ((mt.checkout_progress = 1),
      (mt.set_checkout_option = 1),
      (mt[P.g.qg] = 1),
      (mt[P.g.fc] = 1),
      (mt[P.g.hc] = 1),
      (mt[P.g.Eb] = 1),
      (mt[P.g.Ca] = 1),
      (mt[P.g.jc] = 1),
      (mt[P.g.rg] = 1),
      mt)
    ),
    ot = {},
    pt = Object.freeze(
      ((ot.generate_lead = 1),
      (ot.login = 1),
      (ot.search = 1),
      (ot.select_content = 1),
      (ot.share = 1),
      (ot.sign_up = 1),
      (ot.view_search_results = 1),
      (ot[P.g.Fb] = 1),
      (ot[P.g.ic] = 1),
      (ot[P.g.Ma] = 1),
      ot)
    ),
    qt = function (a) {
      var b = "general";
      nt[a]
        ? (b = "ecommerce")
        : pt[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    rt = {},
    st = Object.freeze(
      ((rt.view_search_results = 1),
      (rt[P.g.Fb] = 1),
      (rt[P.g.ic] = 1),
      (rt[P.g.Ma] = 1),
      rt)
    ),
    Ns = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    tt = function (a) {
      if (Ca(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    Js = function (a, b, c) {
      var d = function (O) {
          return c.getWithConfig(O);
        },
        e = {},
        f = {},
        g = {},
        h = {},
        k = tt(d(P.g.Qi));
      !c.isGtmEvent && k && Ns(f, "exp", k);
      g["&gtm"] = Qj(!0);
      Pi() && (h._cs = Zs);
      var n = d(P.g.Xc);
      if (!c.isGtmEvent && pc(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && Ns(f, p, q);
          }
      for (var r = c.getTopLevelKeys(), t = 0; t < r.length; ++t) {
        var u = r[t];
        if (c.isGtmEvent) {
          var v = d(u);
          ht.hasOwnProperty(u)
            ? (e[u] = v)
            : ct.hasOwnProperty(u)
            ? (h[u] = v)
            : (g[u] = v);
        } else {
          var x = void 0;
          x = u !== P.g.ca ? d(u) : c.getMergedValues(u);
          if (gt.hasOwnProperty(u)) Rs(gt[u], u, x, e);
          else if (dt.hasOwnProperty(u)) Rs(dt[u], u, x, g);
          else if (Es.hasOwnProperty(u)) Rs(Es[u], u, x, f);
          else if (Ds.hasOwnProperty(u)) Rs(Ds[u], u, x, h);
          else if (/^(dimension|metric|content_group)\d+$/.test(u))
            Rs(1, u, x, f);
          else if (u === P.g.ca) {
            if (!$s) {
              var z = ab(x);
              z && (f["&did"] = z);
            }
            var w = void 0,
              A = void 0;
            b === P.g.Da
              ? (w = ab(c.getMergedValues(u), "."))
              : ((w = ab(c.getMergedValues(u, 1), ".")),
                (A = ab(c.getMergedValues(u, 2), ".")));
            w && (f["&gdid"] = w);
            A && (f["&edid"] = A);
          } else
            u === P.g.Oa && 0 > r.indexOf(P.g.kc) && (h.cookieName = x + "_ga");
        }
      }
      (!1 !== d(P.g.Gi) && !1 !== d(P.g.Pc) && Bs()) ||
        (g.allowAdFeatures = !1);
      (!1 !== d(P.g.ba) && Cs()) || (g.allowAdPersonalizationSignals = !1);
      !c.isGtmEvent && d(P.g.nb) && (h._useUp = !0);
      if (c.isGtmEvent) {
        h.name = h.name || e.gtmTrackerName;
        var B = g.hitCallback;
        g.hitCallback = function () {
          Aa(B) && B();
          c.onSuccess();
        };
      } else {
        Ns(h, "cookieDomain", "auto");
        Ns(g, "forceSSL", !0);
        Ns(e, "eventCategory", qt(b));
        st[b] && Ns(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? Ns(e, "eventLabel", d(P.g.Jg))
          : "search" === b || "view_search_results" === b
          ? Ns(e, "eventLabel", d(P.g.Xi))
          : "select_content" === b && Ns(e, "eventLabel", d(P.g.Ji));
        var C = e[P.g.za] || {},
          E = C[P.g.sc];
        E || (0 != E && C[P.g.X])
          ? (h.allowLinker = !0)
          : !1 === E && Ns(h, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        h.name = a;
      }
      Pi() &&
        ((g["&gcs"] = cj()),
        bj(P.g.V) || (h.storage = "none"),
        bj(P.g.I) || ((g.allowAdFeatures = !1), (h.storeGac = !1)));
      var D = d(P.g.ia) || d(P.g.Hb),
        F = d(P.g.ee);
      D && (c.isGtmEvent || (h[P.g.Hb] = D), (h._cd2l = !0));
      F && !c.isGtmEvent && (h[P.g.ee] = F);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = h;
      return e;
    },
    Os = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Ef = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.Ph = "impressions" === b.translateIfKeyEquals ? Ys(d, !0) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Hd = "promoView" === b.translateIfKeyEquals ? Ys(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Hd = "promoClick" === b.translateIfKeyEquals ? Ys(f, !0) : f;
        c.yb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var h = b[g].products;
          c.Xb = "products" === b.translateIfKeyEquals ? Ys(h, !0) : h;
          c.yb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    Ps = function (a, b) {
      function c(t) {
        return {
          id: d(P.g.Pa),
          affiliation: d(P.g.Ni),
          revenue: d(P.g.qa),
          tax: d(P.g.xg),
          shipping: d(P.g.Yc),
          coupon: d(P.g.Oi),
          list: d(P.g.cf) || t,
        };
      }
      for (
        var d = function (t) {
            return b.getWithConfig(t);
          },
          e = d(P.g.fa),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][P.g.cf]);
        g++
      );
      var h = d(P.g.Xc);
      if (pc(h))
        for (var k = 0; e && k < e.length; ++k) {
          var n = e[k],
            p;
          for (p in h)
            h.hasOwnProperty(p) &&
              /^(dimension|metric)\d+$/.test(p) &&
              void 0 != h[p] &&
              Ns(n, p, n[h[p]]);
        }
      var q = null,
        r = d(P.g.Pi);
      a === P.g.Ca || a === P.g.jc
        ? (q = { action: a, yb: c(), Xb: Ys(e) })
        : a === P.g.fc
        ? (q = { action: "add", Xb: Ys(e) })
        : a === P.g.hc
        ? (q = { action: "remove", Xb: Ys(e) })
        : a === P.g.Ma
        ? (q = { action: "detail", yb: c(f), Xb: Ys(e) })
        : a === P.g.Fb
        ? (q = { action: "impressions", Ph: Ys(e) })
        : "view_promotion" === a
        ? (q = { action: "promo_view", Hd: Ys(r) })
        : "select_content" === a && r && 0 < r.length
        ? (q = { action: "promo_click", Hd: Ys(r) })
        : "select_content" === a
        ? (q = { action: "click", yb: { list: d(P.g.cf) || f }, Xb: Ys(e) })
        : a === P.g.Eb || "checkout_progress" === a
        ? (q = {
            action: "checkout",
            Xb: Ys(e),
            yb: { step: a === P.g.Eb ? 1 : d(P.g.wg), option: d(P.g.vg) },
          })
        : "set_checkout_option" === a &&
          (q = {
            action: "checkout_option",
            yb: { step: d(P.g.wg), option: d(P.g.vg) },
          });
      q && (q.Ef = d(P.g.va));
      return q;
    },
    ut = {},
    Ks = function (a, b) {
      var c = ut[a];
      ut[a] = qc(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var vt = null,
    wt = !1;
  wt = !0;
  function xt(a) {
    return wt && !a ? (vt = vt || new yt()) : (R.gcq = R.gcq || new yt());
  }
  var zt = function (a, b, c) {
      xt().register(a, b, c);
    },
    At = function (a, b, c, d) {
      xt().push("event", [b, a], c, d);
    },
    Bt = function (a, b, c, d) {
      xt().insert("event", [b, a], c, d);
    },
    Ct = function (a, b, c) {
      xt().push("config", [a], b, c);
    },
    Dt = function (a, b, c, d) {
      xt().push("get", [a, b], c, d);
    },
    Et = function (a) {
      return xt().getRemoteConfig(a);
    },
    Ft = function () {
      var a = P.g.ia;
      return xt().getGlobalConfigValue && xt().getGlobalConfigValue(a);
    },
    Gt = {},
    Ht = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.s = {};
      this.D = null;
      this.claimed = this.h = !1;
    },
    It = function (a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.W = c || "";
      this.h = d;
      this.messageContext = e;
    },
    yt = function () {
      this.s = {};
      this.D = {};
      this.h = [];
      this.F = { AW: !1, UA: !1 };
    },
    Jt = function (a, b) {
      var c = Yl(b);
      return (a.s[c.containerId] = a.s[c.containerId] || new Ht());
    },
    Kt = function (a, b, c, d) {
      if (b) {
        var e = Yl(b);
        if (e && 1 === Jt(a, b).status) {
          Jt(a, b).status = 2;
          var f = {};
          So &&
            (f.timeoutId = y.setTimeout(function () {
              jg(38);
              vo();
            }, 3e3));
          a.push("require", [f], e.containerId, {});
          Gt[e.containerId] = Ra();
          if (Gj()) {
          } else 2 === d ? Kq(e.containerId, c) : Jq(e.containerId, c, !0);
        }
      }
    },
    Lt = function (a, b, c, d) {
      if (d.W) {
        var e = Jt(a, d.W),
          f = e.D;
        if (f) {
          var g = qc(c),
            h = qc(e.targetConfig[d.W]),
            k = qc(e.containerConfig),
            n = qc(e.remoteConfig),
            p = qc(a.D),
            q = {};
          try {
            q = qc(hh);
          } catch (v) {
            jg(72);
          }
          var r = Yl(d.W).prefix,
            t = function (v) {
              ep(d.messageContext.eventId, r, v);
              var x = g[P.g.nc];
              x && J(x);
            },
            u = yr(
              xr(
                zr(
                  wr(
                    vr(
                      tr(
                        sr(
                          ur(
                            rr(
                              qr(
                                pr(
                                  new or(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              k
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                    }
                  }
                ),
                function (v, x) {
                  a.F[v] = x;
                }
              ),
              function (v) {
                return a.F[v];
              }
            );
          try {
            ep(d.messageContext.eventId, r, "1"), Sp(d.type, d.W, u);
            f(d.W, b, d.s, u);
          } catch (v) {
            ep(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  l = yt.prototype;
  l.register = function (a, b, c) {
    var d = Jt(this, a);
    if (3 !== d.status) {
      d.D = b;
      d.status = 3;
      c && (qc(d.remoteConfig, c), (d.remoteConfig = c));
      var e = Yl(a),
        f = Gt[e.containerId];
      if (void 0 !== f) {
        var g = R[e.containerId].bootstrap,
          h = e.prefix.toUpperCase();
        R[e.containerId]._spx && (h = h.toLowerCase());
        var k = kh("gtm.uniqueEventId"),
          n = h,
          p = Ra() - g;
        if (So && !zo[k]) {
          k !== bo && (ro(), (bo = k));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Go = Go ? Go + "," + q : "&cl=" + q;
        }
        delete Gt[e.containerId];
      }
      this.flush();
    }
  };
  l.notifyContainerLoaded = function (a, b) {
    var c = this,
      d = function (f) {
        if (Yl(f)) {
          var g = Jt(c, f);
          g.status = 3;
          g.claimed = !0;
        }
      };
    d(a);
    for (var e = 0; e < b.length; e++) d(b[e]);
    this.flush();
  };
  l.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!Yl(c)) return;
      Kt(this, c, b[0][P.g.ia] || this.D[P.g.ia], "event" === a ? 2 : 1);
      Jt(this, c).h && (d.deferrable = !1);
    }
    this.h.push(new It(a, Math.floor(Ra() / 1e3), c, b, d));
    d.deferrable || this.flush();
  };
  l.insert = function (a, b, c, d) {
    var e = Math.floor(Ra() / 1e3);
    0 < this.h.length
      ? this.h.splice(1, 0, new It(a, e, c, b, d))
      : this.h.push(new It(a, e, c, b, d));
  };
  l.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.W || Jt(this, f.W).h
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = Jt(this, f.W);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            So && y.clearTimeout(f.h[0].timeoutId);
            break;
          case "set":
            Ja(f.h[0], function (r, t) {
              qc(Za(r, t), b.D);
            });
            break;
          case "config":
            g = Jt(this, f.W);
            if (g.claimed) break;
            e.qb = {};
            Ja(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  qc(Za(t, u), r.qb);
                };
              })(e)
            );
            var h = !!e.qb[P.g.ne];
            delete e.qb[P.g.ne];
            var k = Yl(f.W),
              n = k.containerId === k.id;
            h || (n ? (g.containerConfig = {}) : (g.targetConfig[f.W] = {}));
            (g.h && h) || Lt(this, P.g.Da, e.qb, f);
            g.h = !0;
            n
              ? qc(e.qb, g.containerConfig)
              : (qc(e.qb, g.targetConfig[f.W]), jg(70));
            d = !0;
            break;
          case "event":
            g = Jt(this, f.W);
            if (g.claimed) break;
            e.Pd = {};
            Ja(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  qc(Za(t, u), r.Pd);
                };
              })(e)
            );
            Lt(this, f.h[1], e.Pd, f);
            break;
          case "get":
            if (((g = Jt(this, f.W)), !g.claimed)) {
              var p = {},
                q = ((p[P.g.cb] = f.h[0]), (p[P.g.kb] = f.h[1]), p);
              Lt(this, P.g.Sa, q, f);
            }
        }
        this.h.shift();
        Mt(this, f);
      }
      e = { qb: e.qb, Pd: e.Pd };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Mt = function (a, b) {
    if ("require" !== b.type)
      if (b.W)
        for (
          var c = a.getCommandListeners(b.W)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.s)
          if (a.s.hasOwnProperty(e)) {
            var f = a.s[e];
            if (f && f.s)
              for (var g = f.s[b.type] || [], h = 0; h < g.length; h++) g[h]();
          }
  };
  yt.prototype.getRemoteConfig = function (a) {
    return Jt(this, a).remoteConfig;
  };
  yt.prototype.getCommandListeners = function (a) {
    return Jt(this, a).s;
  };
  yt.prototype.getGlobalConfigValue = function (a) {
    return this.D[a];
  };
  var Le;
  var Nt = !1;
  Nt = !0;
  var Ot = !1;
  Ot = !0;
  var Pt = {},
    Qt = {},
    Rt = {},
    St = function (a, b) {
      var c = Qt[b] || [];
      c.push(a);
      Qt[b] = c;
    },
    Ut = function () {
      R.addTargetToGroup = function (e) {
        Tt(e, "default");
      };
      R.addDestinationToContainer = function (e, f) {
        St(e, f);
      };
      var a = R.pendingDefaultTargets;
      delete R.pendingDefaultTargets;
      if (Array.isArray(a))
        for (var b = 0; b < a.length; ++b) Tt(a[b], "default");
      var c = R.pendingDestinationIds;
      delete R.pendingDestinationIds;
      if (Array.isArray(c))
        for (var d = 0; d < c.length; ++d) St(c[d][0], c[d][1]);
    },
    Tt = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = Pt[b[c]] || [];
        Pt[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    Vt = function (a, b) {
      b = String(b).split(",");
      for (var c = 0; c < b.length; c++) {
        var d = Rt[b[c]] || [];
        Rt[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    Wt = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { Ic: d.Ic, Rd: d.Rd }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          if (Ot) {
            if (((d.Ic = Yl(f)), d.Ic))
              if (Nt) {
                var g = Jj();
                Da(
                  g,
                  (function (u) {
                    return function (v) {
                      return u.Ic.containerId === v;
                    };
                  })(d)
                )
                  ? b.push(f)
                  : c.push(f);
              } else d.Ic.containerId === He.K || Gj() ? b.push(f) : c.push(f);
          } else b.push(f);
        else {
          var h = Pt[f] || [];
          if (Ot)
            if (Nt) {
              d.Rd = {};
              h.forEach(
                (function (u) {
                  return function (v) {
                    return (u.Rd[v] = !0);
                  };
                })(d)
              );
              for (var k = Ij(), n = 0; n < k.length; n++)
                if (d.Rd[k[n]]) {
                  var p = Jj();
                  p && p.length && (b = b.concat(p));
                  break;
                }
              var q = Rt[f] || [];
              q.length && (b = b.concat(q));
            } else
              for (var r = 0; r < h.length; r++) {
                var t = Yl(h[r]);
                ((t && t.containerId === He.K) || Gj()) && b.push(t.id);
              }
          else h && h.length && (b = b.concat(h));
        }
      }
      return { gk: b, jk: c };
    },
    Xt = function (a) {
      Ja(Pt, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Yt = function (a) {
      Ja(Rt, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Zt = !1;
  Zt = !0;
  var $t = "HA GF G UA AW DC".split(" "),
    au = !1,
    bu = !1,
    cu = !1;
  function du(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: eh() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  function eu() {
    if (wt) return !1;
    au || R.gtagRegistered || ((au = R.gtagRegistered = !0), Ut());
    return au;
  }
  var fu = {
      config: function (a, b) {
        var c = du(a, b);
        if (!(2 > a.length) && m(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !pc(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = Yl(a[1]);
          if (e) {
            Xo(c.eventId, "gtag.config");
            var f = e.id !== e.containerId,
              g = !1,
              h = -1 !== Ij().indexOf(e.containerId);
            h && ((g = cu), (cu = !0));
            if (!Pm[12] || !$g || f || !g) {
              if (wt) {
                var k = d[P.g.ia] || Ft();
                if (Zt && f) {
                  if (
                    !Da(Jj(), function (x) {
                      return x === e.containerId;
                    })
                  ) {
                    Kq(e.containerId, k);
                    return;
                  }
                } else if (!h && !Gj()) {
                  Jq(e.containerId, k, !0);
                  return;
                }
              }
              var n = eu() || wt;
              b.noTargetGroup ||
                (Zt && f
                  ? (Yt(e.id), Vt(e.id, d[P.g.ie] || "default"))
                  : (Xt(e.id), Tt(e.id, d[P.g.ie] || "default")));
              delete d[P.g.ie];
              bu || jg(43);
              if (n) {
                var p = [e.id];
                Zt && !f && (p = Jj());
                for (var q = !1, r = 0; r < p.length; r++) {
                  var t = Yl(p[r]),
                    u = qc(b);
                  if (t && -1 !== $t.indexOf(t.prefix)) {
                    var v = u.eventMetadata || {};
                    v.hasOwnProperty("is_external_event") ||
                      (v.is_external_event = !u.fromContainerExecution);
                    u.eventMetadata = v;
                    delete d[P.g.nc];
                    Ct(d, t.id, u);
                    q = !0;
                  }
                }
                if (q) return;
              }
              nh("gtag.targets." + e.id);
              nh("gtag.targets." + e.id, qc(d));
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          jg(39);
          var c = du(a, b),
            d = a[1];
          "default" === d ? Zi(a[2]) : "update" === d && aj(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && m(c)) {
          var d;
          if (2 < a.length) {
            if ((!pc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = qc(e)),
            e[P.g.nc] && (g.eventCallback = e[P.g.nc]),
            e[P.g.de] && (g.eventTimeout = e[P.g.de]));
          var h = du(a, b),
            k = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = k;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.g.Jb];
          void 0 === r &&
            ((r = kh(P.g.Jb, 2)), void 0 === r && (r = "default"));
          if (m(r) || Ca(r)) {
            var t = r.toString().replace(/\s+/g, "").split(","),
              u = Wt(t),
              v = u.gk,
              x = u.jk;
            if (x.length)
              for (var z = (q && q[P.g.ia]) || Ft(), w = 0; w < x.length; w++) {
                var A = Yl(x[w]);
                A && (Zt ? Kq(A.containerId, z) : Jq(A.containerId, z, !0));
              }
            p = $l(v);
          } else p = void 0;
          var B = p;
          if (B) {
            Xo(k, c);
            for (var C = eu() || wt, E = [], D = 0; C && D < B.length; D++) {
              var F = B[D],
                O = qc(b);
              if (-1 !== $t.indexOf(F.prefix)) {
                var M = qc(d),
                  S = O.eventMetadata || {};
                S.hasOwnProperty("is_external_event") ||
                  (S.is_external_event = !O.fromContainerExecution);
                O.eventMetadata = S;
                delete M[P.g.nc];
                At(c, M, F.id, O);
              }
              E.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[P.g.Jb] = E.join())
              : delete g.eventModel[P.g.Jb];
            bu || jg(43);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        jg(53);
        if (4 === a.length && m(a[1]) && m(a[2]) && Aa(a[3])) {
          var c = Yl(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            bu || jg(43);
            if (wt) {
              var f = Ft();
              if (Zt) {
                if (
                  !Da(Jj(), function (h) {
                    return c.containerId === h;
                  })
                ) {
                  Kq(c.containerId, f);
                  return;
                }
              } else if (c.containerId !== He.K && !Gj()) {
                Jq(c.containerId, f, !0);
                return;
              }
            } else if (!eu()) return;
            if (-1 !== $t.indexOf(c.prefix)) {
              du(a, b);
              var g = {};
              Vi(qc(((g[P.g.cb] = d), (g[P.g.kb] = e), g)));
              Dt(
                d,
                function (h) {
                  J(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          bu = !0;
          eu();
          var c = du(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && m(a[1]) && Aa(a[2])) {
          var b = a[1],
            c = a[2],
            d = Le.s;
          d.h[b] ? d.h[b].push(c) : (d.h[b] = [c]);
          if ((jg(74), "all" === a[1])) {
            jg(75);
            var e = !1;
            try {
              e = a[2](He.K, "unknown", {});
            } catch (f) {}
            e || jg(76);
          }
        } else {
          jg(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && pc(a[1])
          ? (c = qc(a[1]))
          : 3 == a.length &&
            m(a[1]) &&
            ((c = {}),
            pc(a[2]) || Ca(a[2]) ? (c[a[1]] = qc(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = du(a, b),
            e = d.eventId,
            f = d.priorityId;
          qc(c);
          if (eu() || wt) {
            var g = qc(c);
            xt().push("set", [g], void 0, b);
          }
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    gu = { policy: !0 };
  var hu = function (a) {
      var b = y[Sg.ka].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    iu = function (a) {
      var b = y[Sg.ka],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var ju = !1,
    ku = [];
  function lu() {
    if (!ju) {
      ju = !0;
      for (var a = 0; a < ku.length; a++) J(ku[a]);
    }
  }
  var mu = function (a) {
    ju ? J(a) : ku.push(a);
  };
  var cv = function (a) {
    if (bv(a)) return a;
    this.h = a;
  };
  cv.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var bv = function (a) {
    return !a || "object" !== nc(a) || pc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  cv.prototype.getUntrustedMessageValue = cv.prototype.getUntrustedMessageValue;
  var dv = 0,
    ev = {},
    fv = [],
    gv = [],
    hv = !1,
    iv = !1;
  function jv(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var kv = function (a) {
      return y[Sg.ka].push(a);
    },
    lv = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return kv(a);
    },
    mv = function (a, b) {
      var c = R[Sg.ka],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = y.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (y.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function nv(a, b) {
    var c = (!!Pm[10] && a._clear) || b.overwriteModelFields;
    Ja(a, function (e, f) {
      "_clear" !== e && (c && nh(e), nh(e, f));
    });
    ah || (ah = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = eh()), (a["gtm.uniqueEventId"] = d), nh("gtm.uniqueEventId", d));
    return nr(a);
  }
  function ov(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (La(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function pv() {
    var a;
    if (gv.length) a = gv.shift();
    else if (fv.length) a = fv.shift();
    else return;
    var b;
    var c = a;
    if (hv || !ov(c.message)) b = c;
    else {
      hv = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = eh());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      fv.unshift(h, c);
      b = f;
    }
    return b;
  }
  function qv() {
    for (var a = !1, b; !iv && (b = pv()); ) {
      iv = !0;
      delete hh.eventModel;
      jh();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) iv = !1;
      else {
        e.fromContainerExecution && oh();
        try {
          if (Aa(d))
            try {
              d.call(lh);
            } catch (v) {}
          else if (Ca(d)) {
            var f = d;
            if (m(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                k = f.slice(1),
                n = kh(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, k);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (La(d))
              a: {
                if (d.length && m(d[0])) {
                  var q = fu[d[0]];
                  if (q && (!e.fromContainerExecution || !gu[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = nv(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && jh(!0);
          var r = d["gtm.uniqueEventId"];
          if ("number" === typeof r) {
            for (var t = ev[String(r)] || [], u = 0; u < t.length; u++)
              gv.push(rv(t[u]));
            t.length && gv.sort(jv);
            delete ev[String(r)];
            dv = r;
          }
          iv = !1;
        }
      }
    }
    return !a;
  }
  function sv() {
    var b = qv();
    try {
      hu(He.K);
    } catch (c) {}
    return b;
  }
  function Sq(a) {
    if (dv < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      ev[b] = ev[b] || [];
      ev[b].push(a);
    } else
      gv.push(rv(a)),
        gv.sort(jv),
        J(function () {
          iv || qv();
        });
  }
  function rv(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var uv = function () {
      function a(f) {
        var g = {};
        if (bv(f)) {
          var h = f;
          f = bv(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Jb(Sg.ka, []),
        c = (R[Sg.ka] = R[Sg.ka] || {});
      !0 === c.pruned && jg(83);
      ev = Qq().get();
      Tq();
      Zp(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      mu(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < R.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new cv(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        fv.push.apply(fv, h);
        var k = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (jg(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof k || k;
        return qv() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      fv.push.apply(fv, e);
      if (tv()) {
        J(sv);
      }
    },
    tv = function () {
      var a = !0;
      return a;
    };
  function vv(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ra();
    return b < c + 3e5 && b > c - 9e5;
  }
  var wv = {};
  wv.pe = new String("undefined");
  var xv = function (a) {
    this.h = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === wv.pe ? b : a[d]);
      return c.join("");
    };
  };
  xv.prototype.toString = function () {
    return this.h("undefined");
  };
  xv.prototype.valueOf = xv.prototype.toString;
  wv.lj = xv;
  wv.uf = {};
  wv.xj = function (a) {
    return new xv(a);
  };
  var yv = {};
  wv.xk = function (a, b) {
    var c = eh();
    yv[c] = [a, b];
    return c;
  };
  wv.Hh = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = yv[c];
      if (d && "function" === typeof d[b]) d[b]();
      yv[c] = void 0;
    };
  };
  wv.Vj = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  wv.sk = function (a) {
    if (a === wv.pe) return a;
    var b = eh();
    wv.uf[b] = a;
    return 'google_tag_manager["' + He.K + '"].macro(' + b + ")";
  };
  wv.ik = function (a, b, c) {
    a instanceof wv.lj && ((a = a.h(wv.xk(b, c))), (b = za));
    return { Sj: a, onSuccess: b };
  };
  var zv = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Zb(a, "className"),
        "gtm.elementId": a["for"] || Ub(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Zb(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Zb(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    Av = function (a) {
      R.hasOwnProperty("autoEventsSettings") || (R.autoEventsSettings = {});
      var b = R.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Bv = function (a, b, c) {
      Av(a)[b] = c;
    },
    Cv = function (a, b, c, d) {
      var e = Av(a),
        f = Sa(e, b, d);
      e[b] = c(f);
    },
    Dv = function (a, b, c) {
      var d = Av(a);
      return Sa(d, b, c);
    },
    Ev = function (a) {
      return "string" === typeof a ? a : String(eh());
    };
  var Yv = y.clearTimeout,
    Zv = y.setTimeout,
    T = function (a, b, c, d) {
      if (Gj()) {
        b && J(b);
      } else return Ob(a, b, c, d);
    },
    $v = function () {
      return new Date();
    },
    aw = function () {
      return y.location.href;
    },
    bw = function (a) {
      return Ih(Kh(a), "fragment");
    },
    cw = function (a) {
      return Jh(Kh(a));
    },
    dw = function (a, b) {
      return kh(a, b || 2);
    },
    ew = function (a, b, c) {
      return b ? lv(a, b, c) : kv(a);
    },
    fw = function (a, b) {
      y[a] = b;
    },
    U = function (a, b, c) {
      b && (void 0 === y[a] || (c && !y[a])) && (y[a] = b);
      return y[a];
    },
    gw = function (a, b, c) {
      return nj(a, b, void 0 === c ? !0 : !!c);
    },
    hw = function (a, b, c) {
      return 0 === wj(a, b, c);
    },
    iw = function (a, b) {
      if (Gj()) {
        b && J(b);
      } else Qb(a, b);
    },
    jw = function (a) {
      return !!Dv(a, "init", !1);
    },
    kw = function (a) {
      Bv(a, "init", !0);
    },
    lw = function (a, b, c) {
      So && (vc(a) || fp(c, b, a));
    };

  var mw = wv.ik;
  var Jw = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function Kw(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Lw = new Ha();
  function Mw(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Lw.get(e);
      f || ((f = new RegExp(b, d)), Lw.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function Nw(a, b) {
    function c(g) {
      var h = Kh(g),
        k = Ih(h, "protocol"),
        n = Ih(h, "host", !0),
        p = Ih(h, "port"),
        q = Ih(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === k ||
        ("http" === k && "80" === p) ||
        ("https" === k && "443" === p)
      )
        (k = "web"), (p = "default");
      return [k, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Ow(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function Pw(a, b) {
    return String(a) === String(b);
  }
  function Qw(a, b) {
    return Number(a) >= Number(b);
  }
  function Rw(a, b) {
    return Number(a) <= Number(b);
  }
  function Sw(a, b) {
    return Number(a) > Number(b);
  }
  function Tw(a, b) {
    return Number(a) < Number(b);
  }
  function Uw(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  function Vw(a) {
    return Ww(a) ? 1 : 0;
  }
  function Ww(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = qc(a, {});
        qc({ arg1: c[d], any_of: void 0 }, e);
        if (Vw(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return Ow(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Jw.length; g++) {
                var h = Jw[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (k) {}
          f = !1;
        }
        return f;
      case "_ew":
        return Kw(b, c);
      case "_eq":
        return Pw(b, c);
      case "_ge":
        return Qw(b, c);
      case "_gt":
        return Sw(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Rw(b, c);
      case "_lt":
        return Tw(b, c);
      case "_re":
        return Mw(b, c, a.ignore_case);
      case "_sw":
        return Uw(b, c);
      case "_um":
        return Nw(b, c);
    }
    return !1;
  }
  function Xw(a, b) {
    var c = this;
  }
  Xw.O = "addConsentListener";
  var Yw;
  var Zw = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (Yw)
        try {
          a[b]();
        } catch (c) {
          jg(77);
        }
      else a[b]();
  };
  function $w(a, b, c) {
    var d = this,
      e;
    return e;
  }
  $w.N = "internal.addDataLayerEventListener";
  function ax(a, b, c) {}
  ax.O = "addDocumentEventListener";
  function bx(a, b, c, d) {}
  bx.O = "addElementEventListener";
  function cx(a) {}
  cx.O = "addEventCallback";
  function gx(a) {}
  gx.N = "internal.addFormAbandonmentListener";
  var hx = {},
    ix = [],
    jx = {},
    kx = 0,
    lx = 0;
  function sx(a, b) {}
  sx.N = "internal.addFormInteractionListener";
  function zx(a, b) {}
  zx.N = "internal.addFormSubmitListener";
  function Ex(a) {}
  Ex.N = "internal.addGaSendListener";
  var Fx = {},
    Gx = [];
  var Nx = function (a, b) {};
  Nx.N = "internal.addHistoryChangeListener";
  function Ox(a, b, c) {}
  Ox.O = "addWindowEventListener";
  function Px(a, b) {
    return !0;
  }
  Px.O = "aliasInWindow";
  function Qx(a, b, c) {}
  Qx.N = "internal.appendRemoteConfigParameter";
  function Rx() {
    var a = 2;
    return a;
  }
  function Sx(a, b) {
    var c;
    L(H(this), ["path:!string"], [a]);
    N(this, "access_globals", "execute", a);
    for (
      var d = a.split("."), e = y, f = e[d[0]], g = 1;
      f && g < d.length;
      g++
    )
      if (((e = f), (f = f[d[g]]), e === y || e === I)) return;
    if ("function" !== nc(f)) return;
    for (var h = Rx(), k = [], n = 1; n < arguments.length; n++)
      k.push(sc(arguments[n], this.h, h));
    var p = (0, this.h.T)(f, e, k);
    c = rc(p, this.h, h);
    void 0 === c && void 0 !== p && jg(45);
    return c;
  }
  Sx.O = "callInWindow";
  function Tx(a) {}
  Tx.O = "callLater";
  function Ux(a) {}
  Ux.N = "callOnDomReady";
  function Vx(a) {
    L(H(this), ["listener:!Fn"], arguments),
      N(this, "process_dom_events", "window", "load"),
      mu(sc(a));
  }
  Vx.N = "callOnWindowLoad";
  function Wx(a) {
    var b;
    return b;
  }
  Wx.N = "internal.computeGtmParameter";
  function Xx(a, b) {
    var c;
    var d = rc(c, this.h, Rx());
    void 0 === d && void 0 !== c && jg(45);
    return d;
  }
  Xx.O = "copyFromDataLayer";
  function Yx(a) {
    var b;
    L(H(this), ["path:!string"], arguments);
    N(this, "access_globals", "read", a);
    var c = a.split("."),
      d = Xa(c, [y, I]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = rc(e, this.h, Rx());
    void 0 === b && void 0 !== e && jg(45);
    return b;
  }
  Yx.O = "copyFromWindow";
  function Zx(a, b) {
    var c;
    return c;
  }
  Zx.N = "internal.copyPreHit";
  function $x(a, b) {
    var c = null,
      d = Rx();
    return rc(c, this.h, d);
  }
  $x.O = "createArgumentsQueue";
  function ay(a) {
    var b;
    return rc(b, this.h, Rx());
  }
  ay.O = "createQueue";
  var by = {},
    cy = [],
    dy = {},
    ey = 0,
    fy = 0;
  function ly(a, b) {
    var c = this;
    return b;
  }
  ly.N = "internal.enableAutoEventOnFormInteraction";
  function qy(a, b) {
    var c = this;
    return b;
  }
  qy.N = "internal.enableAutoEventOnFormSubmit";
  function vy() {
    var a = this;
  }
  vy.N = "internal.enableAutoEventOnGaSend";
  var wy = {},
    xy = [];
  function Ey(a, b) {
    var c = this;
    return b;
  }
  Ey.N = "internal.enableAutoEventOnHistoryChange";
  function Iy(a, b) {
    var c = this;
    return b;
  }
  Iy.N = "internal.enableAutoEventOnLinkClick";
  var Jy, Ky;
  function Ty(a, b) {
    var c = this;
    return b;
  }
  Ty.N = "internal.enableAutoEventOnScroll";
  var Eb = ca(["data-gtm-yt-inspected-"]),
    Uy = ["www.youtube.com", "www.youtube-nocookie.com"],
    Vy,
    Wy = !1;
  function fz(a, b) {
    var c = this;
    return b;
  }
  fz.N = "internal.enableAutoEventOnYouTubeActivity";
  function gz(a, b) {
    var c = !1;
    return c;
  }
  gz.N = "internal.evaluateBooleanExpression";
  function lz(a) {
    return !1;
  }
  lz.N = "internal.evaluateFilteringRules";
  var mz;
  function nz(a) {
    var b = !1;
    return b;
  }
  nz.N = "internal.evaluateMatchingRules";
  function tz(a, b) {
    var c = !1;
    return c;
  }
  tz.N = "internal.evaluatePredicates";
  var uz = function (a) {
    var b;
    return b;
  };
  function vz(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    L(H(this), ["name:!string", "decode:?boolean"], arguments),
      N(this, "get_cookies", a),
      (c = rc(nj(a, void 0, !!b), this.h));
    return c;
  }
  vz.O = "getCookieValues";
  function wz() {
    return zi.Df;
  }
  wz.N = "internal.getCountryCode";
  function xz() {
    var a = [];
    return rc(a);
  }
  xz.N = "internal.getDestinationIds";
  function yz(a) {
    var b = null;
    return b;
  }
  yz.O = "getElementById";
  function zz(a, b) {
    var c;
    return c;
  }
  zz.N = "internal.getProductSettingsParameter";
  function Az(a, b) {
    var c;
    return c;
  }
  Az.O = "getQueryParameters";
  function Bz(a, b) {
    var c;
    return c;
  }
  Bz.O = "getReferrerQueryParameters";
  function Cz(a) {
    var b = "";
    L(H(this), ["component:?string"], arguments),
      N(this, "get_referrer", a),
      (b = Hh(Kh(I.referrer), a));
    return b;
  }
  Cz.O = "getReferrerUrl";
  function Dz() {
    return zi.Yh;
  }
  Dz.N = "internal.getRegionCode";
  function Ez(a, b) {
    var c;
    return c;
  }
  Ez.N = "internal.getRemoteConfigParameter";
  function Fz(a) {
    var b = "";
    L(H(this), ["component:?string"], arguments),
      N(this, "get_url", a),
      (b = Ih(Kh(y.location.href), a));
    return b;
  }
  Fz.O = "getUrl";
  function Gz() {
    N(this, "get_user_agent");
    return y.navigator.userAgent;
  }
  Gz.O = "getUserAgent";
  function Hz(a) {
    if (!a) return {};
    var b = a.Cj;
    return aq(b.type, b.index, b.name);
  }
  function Iz(a) {
    return a ? { originatingEntity: Hz(a) } : {};
  }
  function Kz(a, b) {}
  Kz.O = "gtagSet";
  function Lz(a, b) {}
  Lz.O = "injectHiddenIframe";
  var Mz = {};
  var Nz = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          Ob(
            a,
            function () {
              for (var g = e[f][0], h = 0; h < g.length; h++) J(g[h]);
              g.push = function (k) {
                J(k);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], h = 0; h < g.length; h++) J(g[h]);
              e[f] = null;
            },
            b
          ))
      : Ob(a, c, d, b);
  };
  function Oz(a, b, c, d) {
    if (!Gj()) {
      L(
        H(this),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      N(this, "inject_script", a);
      var e = this.h;
      Nz(
        a,
        void 0,
        function () {
          b && b.s(e);
        },
        function () {
          c && c.s(e);
        },
        Mz,
        d
      );
    }
  }
  var Pz = Object.freeze({ dl: 1, id: 1 }),
    Qz = {};
  function Rz(a, b, c, d) {}
  Oz.O = "injectScript";
  Rz.N = "internal.injectScript";
  function Sz(a) {
    var b = !0;
    return b;
  }
  Sz.O = "isConsentGranted";
  var Tz = function () {
    var a = Jf(function (b) {
      this.h.h.log("error", b);
    });
    a.O = "JSON";
    return a;
  };
  var Uz = function () {
      return !1;
    },
    Vz = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  var Wz = ["textContent", "value", "tagName", "children", "childElementCount"];
  function Xz(a) {
    var b;
    return b;
  }
  Xz.N = "internal.locateUserData";
  function Yz() {}
  Yz.O = "logToConsole";
  function Zz(a) {
    var b = void 0;
    return b;
  }
  Zz.O = "parseUrl";
  function $z(a) {}
  $z.N = "internal.processAsNewEvent";
  function aA(a, b) {
    var c = !1;
    return c;
  }
  aA.O = "queryPermission";
  function bA() {
    var a = "";
    N(this, "read_character_set"), (a = I.characterSet || "");
    return a;
  }
  bA.O = "readCharacterSet";
  function cA() {
    var a = "";
    N(this, "read_title"), (a = I.title || "");
    return a;
  }
  cA.O = "readTitle";
  function dA(a, b) {
    var c = this;
  }
  dA.N = "internal.registerCcdCallback";
  var eA = Object.freeze(["config", "event", "get", "set"]);
  function fA(a, b, c) {}
  fA.N = "internal.registerGtagCommandListener";
  function gA(a, b) {
    var c = !1;
    return c;
  }
  gA.N = "internal.removeDataLayerEventListener";
  function hA() {}
  hA.O = "resetDataLayer";
  var lA = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  function mA(a, b, c, d) {}
  mA.N = "internal.sendGtagEvent";
  function nA(a, b, c) {
    L(H(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn"], arguments);
    N(this, "send_pixel", a);
    var d = this.h;
    Rb(
      a,
      function () {
        b instanceof cb && b.s(d);
      },
      function () {
        c instanceof cb && c.s(d);
      }
    );
  }
  nA.O = "sendPixel";
  function oA(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  oA.O = "setCookie";
  var pA = !1;
  pA = !0;
  function qA(a) {
    L(H(this), ["consentSettings:!DustMap"], arguments);
    for (var b = a.Mb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e !== P.g.Ue && N(this, "access_consent", e, "write");
    }
    var f = this.h.h,
      g = f.eventId,
      h = Iz(f);
    if (pA) {
      var k = Lq("consent", "default", sc(a));
      Rq(k, g, h);
    } else Zi(sc(a));
  }
  qA.O = "setDefaultConsentState";
  function rA(a, b, c) {
    L(
      H(this),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    N(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = Xa(d, [y, I]),
      f = d.pop();
    if (e && (void 0 === e[f] || c)) return (e[f] = sc(b, this.h, Rx())), !0;
    return !1;
  }
  rA.O = "setInWindow";
  function sA(a, b, c) {}
  sA.N = "internal.setProductSettingsParameter";
  function tA(a, b, c) {}
  tA.N = "internal.setRemoteConfigParameter";
  function uA(a, b, c, d) {
    var e = this;
  }
  uA.O = "sha256";
  function vA(a, b, c) {}
  vA.N = "internal.sortRemoteConfigParameters";
  var wA = {},
    xA = {};
  wA.O = "templateStorage";
  wA.getItem = function (a) {
    var b = null;
    return b;
  };
  wA.setItem = function (a, b) {};
  wA.removeItem = function (a) {};
  wA.clear = function () {};
  var yA = function (a) {
    var b;
    return b;
  };
  var zA = !1;
  zA = !0;
  function AA(a) {
    L(H(this), ["consentSettings:!DustMap"], arguments);
    var b = sc(a),
      c;
    for (c in b) b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
    var d = this.h.h,
      e = d.eventId,
      f = Iz(d);
    zA ? Rq(Lq("consent", "update", b), e, f) : aj(b, { eventId: e });
  }
  AA.O = "updateConsentState";
  var BA = function () {
    var a = new Yf(),
      b = function (d) {
        var e = d.N;
        if (a.s.hasOwnProperty(e))
          throw (
            "Attempting to add a private function which already exists: " +
            e +
            "."
          );
        if (a.h.hasOwnProperty(e))
          throw (
            "Attempting to add a private function with an existing API name: " +
            e +
            "."
          );
        a.s[e] = Aa(d) ? rf(e, d) : sf(e, d);
      },
      c = function (d) {
        return a.add(d.O, d);
      };
    c(Xw);
    c(cx);
    c(Px);
    c(Sx);
    c(Tx);
    c(Xx);
    c(Yx);
    c($x);
    c(Tz());
    c(ay);
    c(vz);
    c(Az);
    c(Bz);
    c(Cz);
    c(Fz);
    c(Lz);
    c(Oz);
    c(Sz);
    c(Yz);
    c(Zz);
    c(aA);
    c(bA);
    c(cA);
    c(nA);
    c(oA);
    c(qA);
    c(rA);
    c(uA);
    c(wA);
    c(AA);
    a.add("Math", xf());
    a.add("Object", Wf);
    a.add("TestHelper", $f());
    a.add("assertApi", tf);
    a.add("assertThat", uf);
    a.add("decodeUri", yf);
    a.add("decodeUriComponent", zf);
    a.add("encodeUri", Af);
    a.add("encodeUriComponent", Bf);
    a.add("fail", Cf);
    a.add("generateRandom", Df);
    a.add("getContainerVersion", Ef);
    a.add("getTimestamp", Hf);
    a.add("getTimestampMillis", Hf);
    a.add("getType", If);
    a.add("makeInteger", Pf);
    a.add("makeNumber", Qf);
    a.add("makeString", Rf);
    a.add("makeTableMap", Sf);
    a.add("mock", Vf);
    a.add("fromBase64", uz, !("atob" in y));
    a.add("localStorage", Vz, !Uz());
    a.add("toBase64", yA, !("btoa" in y));
    b(sx);
    b(zx);
    b(Ex);
    b(Nx);
    b(Vx);
    b(lz);
    b(nz);
    b(xz);
    b(Gf);
    b(Rz);
    b(Xz);
    b(fA);
    b(mA);
    c(Kz);
    b(Qx);
    b(Ez);
    b(tA);
    b(vA);
    b(zz);
    b(sA);
    b($w);
    b(ly);
    b(qy);
    b(vy);
    b(Ey);
    b(Iy);
    b(Ty);
    b(fz);
    b(gA);
    b(wz);
    b(Dz);
    return function (d) {
      var e;
      if (a.h.hasOwnProperty(d)) e = a.get(d, this);
      else {
        var f;
        if ((f = a.s.hasOwnProperty(d))) {
          var g = !1,
            h = this.h.h;
          if (h) {
            var k = h.yd();
            if (k) {
              0 !== k.indexOf("__cvt_") && (g = !0);
            }
          }
          f = g;
        }
        if (f) {
          var n = a.s.hasOwnProperty(d) ? a.s[d] : void 0;
          n = Zf(d, this) || n;
          e = n;
        } else throw Error(d + " is not a valid API name.");
      }
      return e;
    };
  };
  var CA = function () {
      var a = R.consumeTestResult;
      if (a && Aa(a)) return !0;
      return !1;
    },
    DA = function () {
      var a = {};
      return function (b, c, d) {
        if (!CA()) return;
        var e = a[b] || {
          testName: b,
          status: c,
          logMessages: [],
          elapsedTime: 0,
        };
        a[b] = e;
        switch (c) {
          case 4:
            e.logMessages.push(d);
            break;
          case 3:
            d && (e.error = d);
            break;
          case 5:
            e.returnValue = d;
        }
        if (2 === c || 3 === c) {
          e.status = c;
          var f = R.consumeTestResult;
          f && f(e);
        }
      };
    };
  var EA;
  function FA() {
    var a = EA;
    return function (b, c, d) {
      var e = d && d.event;
      GA(c);
      var f = new gb();
      Ja(c, function (q, r) {
        var t = rc(r);
        void 0 === t && void 0 !== r && jg(44);
        f.set(q, t);
      });
      a.h.h.J = ye();
      var g = {
        rj: Me(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        xe:
          void 0 !== e
            ? function (q) {
                return e.zb.xe(q);
              }
            : void 0,
        yd: function () {
          return b;
        },
        log: function () {},
        Cj: { index: d && d.index, type: d && d.type, name: d && d.name },
      };
      if (CA()) {
        var h = DA(),
          k = void 0,
          n = void 0;
        g.Za = {
          hg: [],
          md: {},
          fb: function (q, r, t) {
            1 === r && (k = q);
            7 === r && (n = t);
            h(q, r, t);
          },
          Uf: Tf(),
        };
        g.log = function (q, r) {
          if (k) {
            var t = Array.prototype.slice.call(arguments, 1);
            h(k, 4, { level: q, source: n, message: t });
          }
        };
      }
      var p = Id(a, g, [b, f]);
      a.h.h.J = void 0;
      p instanceof oa && "return" === p.h && (p = p.s);
      return sc(p);
    };
  }
  function GA(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Aa(b) &&
      (a.gtmOnSuccess = function () {
        J(b);
      });
    Aa(c) &&
      (a.gtmOnFailure = function () {
        J(c);
      });
  }
  function HA() {
    EA.h.h.T = function (a, b, c) {
      R.SANDBOXED_JS_SEMAPHORE = R.SANDBOXED_JS_SEMAPHORE || 0;
      R.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        R.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function IA(a) {
    void 0 !== a &&
      Ja(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          dh[e] = dh[e] || [];
          dh[e].push(b);
        }
      });
  }
  var JA = encodeURI,
    W = encodeURIComponent,
    KA = Rb;
  var LA = function (a, b) {
      if (!a) return !1;
      var c = Ih(Kh(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    MA = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  function jC() {
    var a = y;
    return (a.gaGlobal = a.gaGlobal || {});
  }
  var kC = function () {
      var a = jC();
      a.hid = a.hid || Ga();
      return a.hid;
    },
    lC = function (a, b) {
      var c = jC();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var tD = window,
    uD = document,
    vD = function (a) {
      var b = tD._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === tD["ga-disable-" + a]))
        return !0;
      try {
        var c = tD.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = hj("AMP_TOKEN", String(uD.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return uD.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var wD = {};
  function ED(a) {
    Ja(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[P.g.Wa] || {};
    Ja(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var YD = function (a, b, c, d, e) {
      if (Pm[13]) {
        var f = Oq(a, b, d);
        e = e || {};
        Rq(f, c, e);
      } else (e = e || {}), (e.fromContainerExecution = !0), At(b, d, a, e);
    },
    ZD = function (a, b, c, d, e) {
      if (Pm[13]) {
        var f = Oq(a, b, d);
        e = e || {};
        e.deferrable = !0;
        Rq(f, c, e);
      } else
        (e = e || {}),
          (e.deferrable = !0),
          (e.fromContainerExecution = !0),
          At(b, d, a, e);
    },
    aE = function (a, b, c) {};
  function $D(a, b, c) {}
  var X = { m: {} };

  (X.m.ctv = ["google"]),
    (function () {
      (function (a) {
        X.__ctv = a;
        X.__ctv.o = "ctv";
        X.__ctv.isVendorTemplate = !0;
        X.__ctv.priorityOverride = 0;
      })(function () {
        return "447";
      });
    })();
  (X.m.send_pixel = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        X.__send_pixel = b;
        X.__send_pixel.o = "send_pixel";
        X.__send_pixel.isVendorTemplate = !0;
        X.__send_pixel.priorityOverride = 0;
      })(function (b) {
        var c = b.vtp_allowedUrls || "specific",
          d = b.vtp_urls || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!m(g)) throw e(f, {}, "URL must be a string.");
            try {
              if (
                ("any" === c && lf(Kh(g))) ||
                ("specific" === c && mf(Kh(g), d))
              )
                return;
            } catch (h) {
              throw e(f, {}, "Invalid URL filter.");
            }
            throw e(f, {}, "Prohibited URL: " + g + ".");
          },
          aa: a,
        };
      });
    })();

  (X.m.jsm = ["customScripts"]),
    (function () {
      (function (a) {
        X.__jsm = a;
        X.__jsm.o = "jsm";
        X.__jsm.isVendorTemplate = !0;
        X.__jsm.priorityOverride = 0;
      })(function (a) {
        if (void 0 !== a.vtp_javascript) {
          var b = a.vtp_javascript;
          try {
            var c = U("google_tag_manager");
            var d = c && c.e && c.e(b);
            lw(d, "jsm", a.vtp_gtmEventId);
            return d;
          } catch (e) {}
        }
      });
    })();

  (X.m.flc = []),
    (function () {
      (function (a) {
        X.__flc = a;
        X.__flc.o = "flc";
        X.__flc.isVendorTemplate = !0;
        X.__flc.priorityOverride = 0;
      })(function (a) {
        var b =
            !a.hasOwnProperty("vtp_enableConversionLinker") ||
            !!a.vtp_enableConversionLinker,
          c = MA(a.vtp_customVariable || [], "key", "value") || {},
          d = {},
          e =
            ((d[P.g.la] = dw(P.g.la)),
            (d[P.g.Ye] = !0 === a.vtp_useImageTag ? !1 : !0),
            (d[P.g.Na] = a.vtp_conversionCookiePrefix || void 0),
            (d[P.g.xa] = b),
            (d[P.g.lb] = a.vtp_sessionId),
            (d.oref = a.vtp_useImageTag ? void 0 : a.vtp_url),
            (d.tran = a.vtp_transactionVariable),
            (d.u = a.vtp_userVariable),
            (d[P.g.Aa] = a.vtp_userDataVariable),
            d);
        (e[P.g.Ea] = dw(P.g.Ea)), (e[P.g.ba] = dw(P.g.ba));
        for (var f in c) c.hasOwnProperty(f) && (e[f] = c[f]);
        var g =
            "DC-" +
            a.vtp_advertiserId +
            "/" +
            a.vtp_groupTag +
            "/" +
            (a.vtp_activityTag +
              "+" +
              ({ UNIQUE: "unique", SESSION: "per_session" }[
                a.vtp_ordinalType
              ] || "standard")),
          h = zr(
            wr(
              pr(new or(a.vtp_gtmEventId, a.vtp_gtmPriorityId), e),
              a.vtp_gtmOnSuccess
            ),
            a.vtp_gtmOnFailure
          );
        h.isGtmEvent = !0;
        ms(g, "", Date.now(), h);
      });
    })();

  (X.m.c = ["google"]),
    (function () {
      (function (a) {
        X.__c = a;
        X.__c.o = "c";
        X.__c.isVendorTemplate = !0;
        X.__c.priorityOverride = 0;
      })(function (a) {
        lw(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (X.m.d = ["google"]),
    (function () {
      (function (a) {
        X.__d = a;
        X.__d.o = "d";
        X.__d.isVendorTemplate = !0;
        X.__d.priorityOverride = 0;
      })(function (a) {
        var b = null,
          c = null,
          d = a.vtp_attributeName;
        if ("CSS" == a.vtp_selectorType)
          try {
            var e = bg(a.vtp_elementSelector);
            e && 0 < e.length && (b = e[0]);
          } catch (f) {
            b = null;
          }
        else b = I.getElementById(a.vtp_elementId);
        b &&
          (d
            ? (c = (function () {
                if (b instanceof HTMLInputElement) {
                  var f = b;
                  if ("value" === d) return f.value;
                  if (
                    "checked" === d &&
                    ("radio" === f.type || "checkbox" === f.type)
                  )
                    return f.checked;
                }
                return Ub(b, d);
              })())
            : (c = Vb(b)));
        return Pa(String(b && c));
      });
    })();
  (X.m.e = ["google"]),
    (function () {
      (function (a) {
        X.__e = a;
        X.__e.o = "e";
        X.__e.isVendorTemplate = !0;
        X.__e.priorityOverride = 0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (X.m.f = ["google"]),
    (function () {
      (function (a) {
        X.__f = a;
        X.__f.o = "f";
        X.__f.isVendorTemplate = !0;
        X.__f.priorityOverride = 0;
      })(function (a) {
        var b = dw("gtm.referrer", 1) || I.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Ih(
                Kh(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : cw(String(b))
          : String(b);
      });
    })();

  (X.m.j = ["google"]),
    (function () {
      (function (a) {
        X.__j = a;
        X.__j.o = "j";
        X.__j.isVendorTemplate = !0;
        X.__j.priorityOverride = 0;
      })(function (a) {
        for (
          var b = String(a.vtp_name).split("."), c = U(b.shift()), d = 0;
          d < b.length;
          d++
        )
          c = c && c[b[d]];
        lw(c, "j", a.vtp_gtmEventId);
        return c;
      });
    })();
  (X.m.k = ["google"]),
    (function () {
      (function (a) {
        X.__k = a;
        X.__k.o = "k";
        X.__k.isVendorTemplate = !0;
        X.__k.priorityOverride = 0;
      })(function (a) {
        return gw(a.vtp_name, dw("gtm.cookie", 1), !!a.vtp_decodeCookie)[0];
      });
    })();

  (X.m.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        X.__access_globals = b;
        X.__access_globals.o = "access_globals";
        X.__access_globals.isVendorTemplate = !0;
        X.__access_globals.priorityOverride = 0;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            h = 0;
          h < c.length;
          h++
        ) {
          var k = c[h],
            n = k.key;
          k.read && e.push(n);
          k.write && f.push(n);
          k.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!m(r)) throw d(p, {}, "Key must be a string.");
            if ("read" === q) {
              if (-1 < e.indexOf(r)) return;
            } else if ("write" === q) {
              if (-1 < f.indexOf(r)) return;
            } else if ("readwrite" === q) {
              if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
            } else if ("execute" === q) {
              if (-1 < g.indexOf(r)) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          aa: a,
        };
      });
    })();
  (X.m.r = ["google"]),
    (function () {
      (function (a) {
        X.__r = a;
        X.__r.o = "r";
        X.__r.isVendorTemplate = !0;
        X.__r.priorityOverride = 0;
      })(function (a) {
        return Ga(a.vtp_min, a.vtp_max);
      });
    })();
  (X.m.t = ["google"]),
    (function () {
      (function (a) {
        X.__t = a;
        X.__t.o = "t";
        X.__t.isVendorTemplate = !0;
        X.__t.priorityOverride = 0;
      })(function () {
        return $v().getTime();
      });
    })();
  (X.m.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        X.__u = b;
        X.__u.o = "u";
        X.__u.isVendorTemplate = !0;
        X.__u.priorityOverride = 0;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : dw("gtm.url", 1)) || aw();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return cw(String(c));
        var e = Kh(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              h = b[a("vtp_queryKey").toString()] || "",
              k = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g
              ? Ca(h)
                ? (n = h)
                : (n = String(h).replace(/\s+/g, "").split(","))
              : (n = [String(h)]);
            for (var p = 0; p < n.length; p++) {
              var q = Ih(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!k || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Ih(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (X.m.v = ["google"]),
    (function () {
      (function (a) {
        X.__v = a;
        X.__v.o = "v";
        X.__v.isVendorTemplate = !0;
        X.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = dw(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        lw(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (X.m.ua = ["google"]),
    (function () {
      function a(k, n) {
        for (var p in k)
          if (!h[p] && k.hasOwnProperty(p)) {
            var q = g[p] ? Na(k[p]) : k[p];
            "anonymizeIp" != p || q || (q = void 0);
            n[p] = q;
          }
      }
      function b(k) {
        var n = {};
        k.vtp_gaSettings &&
          qc(MA(k.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
        qc(MA(k.vtp_fieldsToSet, "fieldName", "value"), n);
        Na(n.urlPassthrough) && (n._useUp = !0);
        k.vtp_transportUrl && (n._x_19 = k.vtp_transportUrl);
        return n;
      }
      function c(k, n) {
        return void 0 === n ? n : k(n);
      }
      function d(k, n, p) {}
      function e(k, n) {
        if (!f) {
          var p = k.vtp_useDebugVersion
            ? "u/analytics_debug.js"
            : "analytics.js";
          k.vtp_useInternalVersion &&
            !k.vtp_useDebugVersion &&
            (p = "internal/" + p);
          f = !0;
          var q = k.vtp_gtmOnFailure,
            r = Fq(n._x_19, "/analytics.js"),
            t = tm(
              "https:",
              "http:",
              "//www.google-analytics.com/" + p,
              n && !!n.forceSSL
            );
          T(
            "analytics.js" === p && r ? r : t,
            function () {
              var u = nq();
              (u && u.loaded) || q();
            },
            q
          );
        }
      }
      var f,
        g = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        h = { urlPassthrough: !0 };
      (function (k) {
        X.__ua = k;
        X.__ua.o = "ua";
        X.__ua.isVendorTemplate = !0;
        X.__ua.priorityOverride = 0;
      })(function (k) {
        function n() {
          if (
            k.vtp_doubleClick ||
            "DISPLAY_FEATURES" == k.vtp_advertisingFeaturesType
          )
            v.displayfeatures = !0;
        }
        var p = {},
          q = {},
          r = {};
        if (k.vtp_gaSettings) {
          var t = k.vtp_gaSettings;
          qc(MA(t.vtp_contentGroup, "index", "group"), p);
          qc(MA(t.vtp_dimension, "index", "dimension"), q);
          qc(MA(t.vtp_metric, "index", "metric"), r);
          var u = qc(t);
          u.vtp_fieldsToSet = void 0;
          u.vtp_contentGroup = void 0;
          u.vtp_dimension = void 0;
          u.vtp_metric = void 0;
          k = qc(k, u);
        }
        qc(MA(k.vtp_contentGroup, "index", "group"), p);
        qc(MA(k.vtp_dimension, "index", "dimension"), q);
        qc(MA(k.vtp_metric, "index", "metric"), r);
        var v = b(k),
          x = String(k.vtp_trackingId || ""),
          z = "",
          w = "",
          A = "";
        k.vtp_setTrackerName && "string" == typeof k.vtp_trackerName
          ? "" !== k.vtp_trackerName && ((A = k.vtp_trackerName), (w = A + "."))
          : ((A = "gtm" + eh()), (w = A + "."));
        var B = function (aa, V) {
          for (var ma in V) V.hasOwnProperty(ma) && (v[aa + ma] = V[ma]);
        };
        B("contentGroup", p);
        B("dimension", q);
        B("metric", r);
        k.vtp_enableEcommerce &&
          ((z = k.vtp_gtmCachedValues.event),
          (v.gtmEcommerceData = d(k, v, z)));
        if ("TRACK_EVENT" === k.vtp_trackType)
          (z = "track_event"),
            n(),
            (v.eventCategory = String(k.vtp_eventCategory)),
            (v.eventAction = String(k.vtp_eventAction)),
            (v.eventLabel = c(String, k.vtp_eventLabel)),
            (v.value = c(Ma, k.vtp_eventValue));
        else if ("TRACK_PAGEVIEW" == k.vtp_trackType) {
          if (
            ((z = P.g.Lc),
            n(),
            "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
              k.vtp_advertisingFeaturesType && (v.remarketingLists = !0),
            k.vtp_autoLinkDomains)
          ) {
            var C = {};
            C[P.g.X] = k.vtp_autoLinkDomains;
            C.use_anchor = k.vtp_useHashAutoLink;
            C[P.g.uc] = k.vtp_decorateFormsAutoLink;
            v[P.g.za] = C;
          }
        } else
          "TRACK_SOCIAL" === k.vtp_trackType
            ? ((z = "track_social"),
              (v.socialNetwork = String(k.vtp_socialNetwork)),
              (v.socialAction = String(k.vtp_socialAction)),
              (v.socialTarget = String(k.vtp_socialActionTarget)))
            : "TRACK_TIMING" == k.vtp_trackType &&
              ((z = "timing_complete"),
              (v.eventCategory = String(k.vtp_timingCategory)),
              (v.timingVar = String(k.vtp_timingVar)),
              (v.value = Ma(k.vtp_timingValue)),
              (v.eventLabel = c(String, k.vtp_timingLabel)));
        k.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
        k.vtp_enableLinkId && (v.enableLinkId = !0);
        var E = {};
        a(v, E);
        v.name || (E.gtmTrackerName = A);
        E.gaFunctionName = k.vtp_functionName;
        void 0 !== k.vtp_nonInteraction &&
          (E.nonInteraction = k.vtp_nonInteraction);
        var D = zr(
          wr(
            pr(new or(k.vtp_gtmEventId, k.vtp_gtmPriorityId), E),
            k.vtp_gtmOnSuccess
          ),
          k.vtp_gtmOnFailure
        );
        D.isGtmEvent = !0;
        Ws(x, z, Date.now(), D);
        var F = pq(k.vtp_functionName);
        if (Aa(F)) {
          var O = function (aa) {
            var V = [].slice.call(arguments, 0);
            V[0] = w + V[0];
            F.apply(window, V);
          };
          if ("TRACK_TRANSACTION" == k.vtp_trackType) {
          } else if ("DECORATE_LINK" == k.vtp_trackType) {
          } else if ("DECORATE_FORM" == k.vtp_trackType) {
          } else if ("TRACK_DATA" == k.vtp_trackType) {
          }
          e(k, v);
        } else J(k.vtp_gtmOnFailure);
      });
    })();

  (X.m.get_url = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        X.__get_url = b;
        X.__get_url.o = "get_url";
        X.__get_url.isVendorTemplate = !0;
        X.__get_url.priorityOverride = 0;
      })(function (b) {
        var c = "any" === b.vtp_urlParts ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"),
          b.vtp_fragment && c.push("fragment"));
        var d =
            c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, h) {
            if (g) {
              if (!m(g)) throw e(f, {}, "URL component must be a string.");
              if (c && 0 > c.indexOf(g))
                throw e(f, {}, "Prohibited URL component: " + g);
              if ("query" === g && d) {
                if (!h)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!m(h)) throw e(f, {}, "Query key must be a string.");
                if (0 > d.indexOf(h))
                  throw e(f, {}, "Prohibited query key: " + h);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          aa: a,
        };
      });
    })();
  (X.m.get_referrer = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        X.__get_referrer = b;
        X.__get_referrer.o = "get_referrer";
        X.__get_referrer.isVendorTemplate = !0;
        X.__get_referrer.priorityOverride = 0;
      })(function (b) {
        var c = "any" === b.vtp_urlParts ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"));
        var d =
            c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, h) {
            if (g) {
              if (!m(g)) throw e(f, {}, "URL component must be a string.");
              if (c && 0 > c.indexOf(g))
                throw e(f, {}, "Prohibited URL component: " + g);
              if ("query" === g && d) {
                if (!h)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!m(h)) throw e(f, {}, "Query key must be a string.");
                if (0 > d.indexOf(h))
                  throw e(f, {}, "Prohibited query key: " + h);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          aa: a,
        };
      });
    })();
  (X.m.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        X.__inject_script = b;
        X.__inject_script.o = "inject_script";
        X.__inject_script.isVendorTemplate = !0;
        X.__inject_script.priorityOverride = 0;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!m(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (mf(Kh(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          aa: a,
        };
      });
    })();

  (X.m.cid = ["google"]),
    (function () {
      (function (a) {
        X.__cid = a;
        X.__cid.o = "cid";
        X.__cid.isVendorTemplate = !0;
        X.__cid.priorityOverride = 0;
      })(function () {
        return He.K;
      });
    })();

  (X.m.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        X.__gclidw = b;
        X.__gclidw.o = "gclidw";
        X.__gclidw.isVendorTemplate = !0;
        X.__gclidw.priorityOverride = 100;
      })(function (b) {
        J(b.vtp_gtmOnSuccess);
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          b.vtp_enableCookieFlagsFeature && (f = b.vtp_cookieFlags));
        var g = { prefix: e, path: c, domain: d, flags: f };
        b.vtp_enableCrossDomainFeature &&
          ((b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming) ||
            ((b.vtp_enableCrossDomain || ll()) && Hl(a, g)));
        El(g);
        Kl(["aw", "dc"], g);
        an(g);
        var h = e;
        if (
          b.vtp_enableCrossDomainFeature &&
          b.vtp_enableCrossDomain &&
          b.vtp_linkerDomains
        ) {
          var k = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
          Jl(a, k, b.vtp_urlPosition, !!b.vtp_formDecoration, h);
        }
        var n = dw(P.g.la);
        Vl({
          eventId: b.vtp_gtmEventId,
          priorityId: b.vtp_gtmPriorityId,
          Be: !1,
          Cc: void 0 != n && !1 !== n,
          Ab: g,
          Cd: !0,
        });
        b.vtp_enableUrlPassthrough && Ml(["aw", "dc", "gb"]);
      });
    })();
  (X.m.read_title = ["google"]),
    (function () {
      (function (a) {
        X.__read_title = a;
        X.__read_title.o = "read_title";
        X.__read_title.isVendorTemplate = !0;
        X.__read_title.priorityOverride = 0;
      })(function () {
        return {
          assert: function () {},
          aa: function () {
            return {};
          },
        };
      });
    })();
  (X.m.process_dom_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        X.__process_dom_events = b;
        X.__process_dom_events.o = "process_dom_events";
        X.__process_dom_events.isVendorTemplate = !0;
        X.__process_dom_events.priorityOverride = 0;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (h, k, n) {
            if (!e[k]) throw d(h, {}, "Prohibited event target " + k + ".");
            if (-1 === e[k].indexOf(n))
              throw d(
                h,
                {},
                "Prohibited listener registration for DOM event " + n + "."
              );
          },
          aa: a,
        };
      });
    })();

  (X.m.aev = ["google"]),
    (function () {
      function a(r, t, u, v, x) {
        x || (x = "element");
        var z = t + "." + u,
          w;
        if (n.hasOwnProperty(z)) w = n[z];
        else {
          var A = r[x];
          if (A && ((w = v(A)), (n[z] = w), p.push(z), 35 < p.length)) {
            var B = p.shift();
            delete n[B];
          }
        }
        return w;
      }
      function b(r, t, u) {
        var v = r[q[t]];
        return void 0 !== v ? v : u;
      }
      function c(r, t) {
        if (!r) return !1;
        var u = d(aw());
        Ca(t) ||
          (t = String(t || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var v = [u], x = 0; x < t.length; x++) {
          var z = t[x];
          if (z.hasOwnProperty("is_regex"))
            if (z.is_regex)
              try {
                z = new RegExp(z.domain);
              } catch (B) {
                continue;
              }
            else z = z.domain;
          var w = d(r);
          if (z instanceof RegExp) {
            if (z.test(w)) return !1;
          } else {
            var A = z;
            if (0 != A.length) {
              if (0 <= w.indexOf(A)) return !1;
              v.push(d(A));
            }
          }
        }
        return !LA(r, v);
      }
      function d(r) {
        k.test(r) || (r = "http://" + r);
        return Ih(Kh(r), "HOST", !0);
      }
      function e(r, t, u, v) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
          case "LENGTH":
            var x = a(t, u, "FORM." + r, g);
            return void 0 === x ? v : x;
          case "INTERACTED_FIELD_ID":
            return h(t, "id", v);
          case "INTERACTED_FIELD_NAME":
            return h(t, "name", v);
          case "INTERACTED_FIELD_TYPE":
            return h(t, "type", v);
          case "INTERACTED_FIELD_POSITION":
            var z = t.interactedFormFieldPosition;
            return void 0 === z ? v : z;
          case "INTERACT_SEQUENCE_NUMBER":
            var w = t.interactSequenceNumber;
            return void 0 === w ? v : w;
          default:
            return v;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return Ub(r, "value");
          case "button":
            return Vb(r);
          default:
            return null;
        }
      }
      function g(r) {
        if ("form" === r.tagName.toLowerCase() && r.elements) {
          for (var t = 0, u = 0; u < r.elements.length; u++)
            Hv(r.elements[u]) && t++;
          return t;
        }
      }
      function h(r, t, u) {
        var v = r.interactedFormField;
        return (v && Ub(v, t)) || u;
      }
      var k = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        X.__aev = r;
        X.__aev.o = "aev";
        X.__aev.isVendorTemplate = !0;
        X.__aev.priorityOverride = 0;
      })(function (r) {
        var t = r.vtp_gtmEventId,
          u = r.vtp_defaultValue,
          v = r.vtp_varType,
          x = r.vtp_gtmCachedValues.gtm;
        switch (v) {
          case "TAG_NAME":
            var z = x.element;
            return (z && z.tagName) || u;
          case "TEXT":
            return a(x, t, v, Vb) || u;
          case "URL":
            var w;
            a: {
              var A = String(x.elementUrl || u || ""),
                B = Kh(A),
                C = String(r.vtp_component || "URL");
              switch (C) {
                case "URL":
                  w = A;
                  break a;
                case "IS_OUTBOUND":
                  w = c(A, r.vtp_affiliatedDomains);
                  break a;
                default:
                  w = Ih(
                    B,
                    C,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return w;
          case "ATTRIBUTE":
            var E;
            if (void 0 === r.vtp_attribute) E = b(x, v, u);
            else {
              var D = x.element;
              E = (D && Ub(D, r.vtp_attribute)) || u || "";
            }
            return E;
          case "MD":
            var F = r.vtp_mdValue,
              O = a(x, t, "MD", Tv);
            return F && O ? Wv(O, F) || u : O || u;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), x, t, u);
          default:
            var M = b(x, v, u);
            lw(M, "aev", r.vtp_gtmEventId);
            return M;
        }
      });
    })();
  (X.m.gas = ["google"]),
    (function () {
      (function (a) {
        X.__gas = a;
        X.__gas.o = "gas";
        X.__gas.isVendorTemplate = !0;
        X.__gas.priorityOverride = 0;
      })(function (a) {
        var b = qc(a),
          c = b;
        c[Kd.Lb] = null;
        c[Kd.sf] = null;
        var d = (b = c);
        d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
        var e = d.vtp_cookieDomain;
        void 0 !== e &&
          (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
          delete d.vtp_cookieDomain);
        return b;
      });
    })();

  (X.m.hl = ["google"]),
    (function () {
      function a(f) {
        return f.target && f.target.location && f.target.location.href
          ? f.target.location.href
          : aw();
      }
      function b(f, g) {
        Sb(f, "hashchange", function (h) {
          var k = a(h);
          g({ source: "hashchange", state: null, url: cw(k), R: bw(k) });
        });
      }
      function c(f, g) {
        Sb(f, "popstate", function (h) {
          var k = a(h);
          g({ source: "popstate", state: h.state, url: cw(k), R: bw(k) });
        });
      }
      function d(f, g, h) {
        var k = g.history,
          n = k[f];
        if (Aa(n))
          try {
            k[f] = function (p, q, r) {
              n.apply(k, [].slice.call(arguments, 0));
              h({ source: f, state: p, url: cw(aw()), R: bw(aw()) });
            };
          } catch (p) {}
      }
      function e() {
        var f = {
          source: null,
          state: U("history").state || null,
          url: cw(aw()),
          R: bw(aw()),
        };
        return function (g) {
          var h = f,
            k = {};
          k[h.source] = !0;
          k[g.source] = !0;
          if (!k.popstate || !k.hashchange || h.R != g.R) {
            var n = {
              event: "gtm.historyChange",
              "gtm.historyChangeSource": g.source,
              "gtm.oldUrlFragment": f.R,
              "gtm.newUrlFragment": g.R,
              "gtm.oldHistoryState": f.state,
              "gtm.newHistoryState": g.state,
              "gtm.oldUrl": f.url,
              "gtm.newUrl": g.url,
            };
            f = g;
            ew(n);
          }
        };
      }
      (function (f) {
        X.__hl = f;
        X.__hl.o = "hl";
        X.__hl.isVendorTemplate = !0;
        X.__hl.priorityOverride = 0;
      })(function (f) {
        var g = U("self");
        if (!jw("hl")) {
          var h = e();
          b(g, h);
          c(g, h);
          d("pushState", g, h);
          d("replaceState", g, h);
          kw("hl");
        }
        J(f.vtp_gtmOnSuccess);
      });
    })();
  (X.m.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g) {
          c[e] = "DATA_LAYER" === d ? dw(g) : b[f];
        };
      }
      (function (b) {
        X.__awct = b;
        X.__awct.o = "awct";
        X.__awct.isVendorTemplate = !0;
        X.__awct.priorityOverride = 0;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = MA(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[P.g.qa] = b.vtp_conversionValue || 0),
            (f[P.g.va] = b.vtp_currencyCode),
            (f[P.g.Pa] = b.vtp_orderId),
            (f[P.g.Na] = b.vtp_conversionCookiePrefix),
            (f[P.g.xa] = c),
            (f[P.g.Oc] = d),
            (f[P.g.la] = dw(P.g.la)),
            f);
        (g[P.g.Ea] = dw(P.g.Ea)),
          (g[P.g.ba] = dw(P.g.ba)),
          (g[P.g.tb] = dw(P.g.tb)),
          (g[P.g.Ha] = dw(P.g.Ha));
        b.vtp_rdp && (g[P.g.xb] = !0);
        if (b.vtp_enableCustomParams)
          for (var h in e) Rg.hasOwnProperty(h) || (g[h] = e[h]);
        if (b.vtp_enableProductReporting) {
          var k = a(b, g, b.vtp_productReportingDataSource);
          k(P.g.Tc, "vtp_awMerchantId", "aw_merchant_id");
          k(P.g.Rc, "vtp_awFeedCountry", "aw_feed_country");
          k(P.g.Sc, "vtp_awFeedLanguage", "aw_feed_language");
          k(P.g.Qc, "vtp_discount", "discount");
          k(P.g.fa, "vtp_items", "items");
        }
        g[P.g.ca] = dw("developer_id");
        b.vtp_enableShippingData &&
          ((g[P.g.wc] = b.vtp_deliveryPostalCode),
          (g[P.g.ad] = b.vtp_estimatedDeliveryDate),
          (g[P.g.mc] = b.vtp_deliveryCountry),
          (g[P.g.Yc] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[P.g.ia] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(P.g.fd, "vtp_awNewCustomer", "new_customer");
          n(P.g.Wc, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var t = {};
          g[P.g.Zc] = ((t[b.vtp_conversionLabel] = r), t);
        }
        var u = zr(
          wr(
            pr(new or(b.vtp_gtmEventId, b.vtp_gtmPriorityId), g),
            b.vtp_gtmOnSuccess
          ),
          b.vtp_gtmOnFailure
        );
        u.isGtmEvent = !0;
        var v = "AW-" + b.vtp_conversionId + "/" + b.vtp_conversionLabel,
          x = bs;
        x(v, P.g.Ca, Date.now(), u);
      });
    })();
  (X.m.remm = ["google"]),
    (function () {
      (function (a) {
        X.__remm = a;
        X.__remm.o = "remm";
        X.__remm.isVendorTemplate = !0;
        X.__remm.priorityOverride = 0;
      })(function (a) {
        for (
          var b = a.vtp_input,
            c = a.vtp_map || [],
            d = a.vtp_fullMatch,
            e = a.vtp_ignoreCase ? "gi" : "g",
            f = a.vtp_defaultValue,
            g = 0;
          g < c.length;
          g++
        ) {
          var h = c[g].key || "";
          d && (h = "^" + h + "$");
          var k = new RegExp(h, e);
          if (k.test(b)) {
            var n = c[g].value;
            a.vtp_replaceAfterMatch && (n = String(b).replace(k, n));
            f = n;
            break;
          }
        }
        lw(f, "remm", a.vtp_gtmEventId);
        return f;
      });
    })();

  (X.m.smm = ["google"]),
    (function () {
      (function (a) {
        X.__smm = a;
        X.__smm.o = "smm";
        X.__smm.isVendorTemplate = !0;
        X.__smm.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_input,
          c = MA(a.vtp_map, "key", "value") || {},
          d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
        lw(d, "smm", a.vtp_gtmEventId);
        return d;
      });
    })();

  (X.m.hid = ["google"]),
    (function () {
      (function (a) {
        X.__hid = a;
        X.__hid.o = "hid";
        X.__hid.isVendorTemplate = !0;
        X.__hid.priorityOverride = 0;
      })(function () {
        return wv.pe;
      });
    })();
  (X.m.zone = []),
    (function () {
      var a = {},
        b = function (c) {
          for (var d = 0; d < c.length; d++) if (!c[d]) return !1;
          return !0;
        };
      (function (c) {
        X.__zone = c;
        X.__zone.o = "zone";
        X.__zone.isVendorTemplate = !0;
        X.__zone.priorityOverride = 0;
      })(function (c) {
        var d = b(c.vtp_boundaries || []);
        if (c.vtp_gtmTagId in a) $q(a[c.vtp_gtmTagId], c.vtp_gtmEventId, d);
        else if (d) {
          var e = c.vtp_childContainers.map(function (k) {
              return k.publicId;
            }),
            f = c.vtp_enableTypeRestrictions
              ? c.vtp_whitelistedTypes.map(function (k) {
                  return k.typeId;
                })
              : null,
            g = {};
          var h = Zq(
            c.vtp_gtmEventId,
            e,
            f,
            g,
            aq(1, c.vtp_gtmEntityIndex, c.vtp_gtmEntityName)
          );
          a[c.vtp_gtmTagId] = h;
        }
        J(c.vtp_gtmOnSuccess);
      });
    })();
  (X.m.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (0 < e.length) {
              var h = e.shift(),
                k = a(d, e, f, g);
              if (
                "SCRIPT" == String(h.nodeName).toUpperCase() &&
                "text/gtmscript" == h.type
              ) {
                var n = I.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = h.id;
                n.text = h.text || h.textContent || h.innerHTML || "";
                h.charset && (n.charset = h.charset);
                var p = h.getAttribute("data-gtmsrc");
                p && ((n.src = p), Kb(n, k));
                d.insertBefore(n, null);
                p || k();
              } else if (
                h.innerHTML &&
                0 <= h.innerHTML.toLowerCase().indexOf("<script")
              ) {
                for (var q = []; h.firstChild; )
                  q.push(h.removeChild(h.firstChild));
                d.insertBefore(h, null);
                a(h, q, k, g)();
              } else d.insertBefore(h, null), k();
            } else f();
          } catch (r) {
            J(g);
          }
        };
      }
      function b(d) {
        if (I.body) {
          var e = d.vtp_gtmOnFailure,
            f = mw(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.Sj,
            h = f.onSuccess;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? c(g, h, e) : a(I.body, Wb(g), h, e)();
        } else
          Zv(function () {
            b(d);
          }, 200);
      }
      X.__html = b;
      X.__html.o = "html";
      X.__html.isVendorTemplate = !0;
      X.__html.priorityOverride = 0;
    })();

  (X.m.img = ["customPixels"]),
    (function () {
      (function (a) {
        X.__img = a;
        X.__img.o = "img";
        X.__img.isVendorTemplate = !0;
        X.__img.priorityOverride = 0;
      })(function (a) {
        var b = Wb('<a href="' + a.vtp_url + '"></a>')[0].href,
          c = a.vtp_cacheBusterQueryParam;
        if (a.vtp_useCacheBuster) {
          c || (c = "gtmcb");
          var d = b.charAt(b.length - 1),
            e = 0 <= b.indexOf("?") ? ("?" == d || "&" == d ? "" : "&") : "?";
          b += e + c + "=" + a.vtp_randomNumber;
        }
        KA(b, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure);
      });
    })();

  (X.m.lcl = []),
    (function () {
      function a() {
        var c = U("document"),
          d = 0,
          e = function (f) {
            var g = f.target;
            if (
              g &&
              3 !== f.which &&
              !(f.Pf || (f.timeStamp && f.timeStamp === d))
            ) {
              d = f.timeStamp;
              g = Xb(g, ["a", "area"], 100);
              if (!g) return f.returnValue;
              var h = f.defaultPrevented || !1 === f.returnValue,
                k = Dv("lcl", h ? "nv.mwt" : "mwt", 0),
                n;
              n = h ? Dv("lcl", "nv.ids", []) : Dv("lcl", "ids", []);
              if (n.length) {
                var p = zv(g, "gtm.linkClick", n);
                if (b(f, g, c) && !h && k && g.href) {
                  var q = !!Da(
                    String(Zb(g, "rel") || "").split(" "),
                    function (v) {
                      return "noreferrer" === v.toLowerCase();
                    }
                  );
                  q && jg(36);
                  var r = U((Zb(g, "target") || "_self").substring(1)),
                    t = !0,
                    u = mv(function () {
                      var v;
                      if ((v = t && r)) {
                        var x;
                        a: if (q) {
                          var z;
                          try {
                            z = new MouseEvent(f.type, { bubbles: !0 });
                          } catch (w) {
                            if (!c.createEvent) {
                              x = !1;
                              break a;
                            }
                            z = c.createEvent("MouseEvents");
                            z.initEvent(f.type, !0, !0);
                          }
                          z.Pf = !0;
                          f.target.dispatchEvent(z);
                          x = !0;
                        } else x = !1;
                        v = !x;
                      }
                      v && (r.location.href = Zb(g, "href"));
                    }, k);
                  if (ew(p, u, k)) t = !1;
                  else
                    return (
                      f.preventDefault && f.preventDefault(),
                      (f.returnValue = !1)
                    );
                } else ew(p, function () {}, k || 2e3);
                return !0;
              }
            }
          };
        Sb(c, "click", e, !1);
        Sb(c, "auxclick", e, !1);
      }
      function b(c, d, e) {
        if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey)
          return !1;
        var f = Zb(d, "href"),
          g = f.indexOf("#"),
          h = Zb(d, "target");
        if ((h && "_self" !== h && "_parent" !== h && "_top" !== h) || 0 === g)
          return !1;
        if (0 < g) {
          var k = cw(f),
            n = cw(e.location);
          return k !== n;
        }
        return !0;
      }
      (function (c) {
        X.__lcl = c;
        X.__lcl.o = "lcl";
        X.__lcl.isVendorTemplate = !0;
        X.__lcl.priorityOverride = 0;
      })(function (c) {
        var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
          e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
          f = Number(c.vtp_waitForTagsTimeout);
        if (!f || 0 >= f) f = 2e3;
        var g = c.vtp_uniqueTriggerId || "0";
        if (d) {
          var h = function (n) {
            return Math.max(f, n);
          };
          Cv("lcl", "mwt", h, 0);
          e || Cv("lcl", "nv.mwt", h, 0);
        }
        var k = function (n) {
          n.push(g);
          return n;
        };
        Cv("lcl", "ids", k, []);
        e || Cv("lcl", "nv.ids", k, []);
        jw("lcl") || (a(), kw("lcl"));
        J(c.vtp_gtmOnSuccess);
      });
    })();

  (X.m.get_cookies = ["google"]),
    (function () {
      function a(b, c) {
        return { name: c };
      }
      (function (b) {
        X.__get_cookies = b;
        X.__get_cookies.o = "get_cookies";
        X.__get_cookies.isVendorTemplate = !0;
        X.__get_cookies.priorityOverride = 0;
      })(function (b) {
        var c = b.vtp_cookieAccess || "specific",
          d = b.vtp_cookieNames || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!m(g)) throw e(f, {}, "Cookie name must be a string.");
            if ("any" !== c && !("specific" === c && 0 <= d.indexOf(g)))
              throw e(f, {}, 'Access to cookie "' + g + '" is prohibited.');
          },
          aa: a,
        };
      });
    })();
  (X.m.read_character_set = ["google"]),
    (function () {
      (function (a) {
        X.__read_character_set = a;
        X.__read_character_set.o = "read_character_set";
        X.__read_character_set.isVendorTemplate = !0;
        X.__read_character_set.priorityOverride = 0;
      })(function () {
        return {
          assert: function () {},
          aa: function () {
            return {};
          },
        };
      });
    })();
  var bE = {};
  (bE.macro = function (a) {
    if (wv.uf.hasOwnProperty(a)) return wv.uf[a];
  }),
    (bE.onHtmlSuccess = wv.Hh(!0)),
    (bE.onHtmlFailure = wv.Hh(!1));
  bE.dataLayer = lh;
  bE.callback = function (a) {
    ch.hasOwnProperty(a) && Aa(ch[a]) && ch[a]();
    delete ch[a];
  };
  bE.bootstrap = 0;
  bE._spx = !1;
  (function (a) {
    if (!y["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (I.referrer) {
        var c = Kh(I.referrer);
        b = "cct.google" === Hh(c, "host");
      }
      if (!b) {
        var d = nj("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((y["__TAGGY_INSTALLED"] = !0),
        Ob("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var r = "GTM",
          t = "GTM";
        var u = y["google.tagmanager.debugui2.queue"];
        u ||
          ((u = []),
          (y["google.tagmanager.debugui2.queue"] = u),
          Ob(
            "https://" +
              Sg.Kc +
              "/debug/bootstrap?id=" +
              He.K +
              "&src=" +
              t +
              "&cond=" +
              q +
              "&gtm=" +
              Qj()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: Hb,
            containerProduct: r,
            debug: !1,
            id: He.K,
            isGte: $g,
          },
        };
        v.data.resume = function () {
          a();
        };
        Sg.si && (v.data.initialPublish = !0);
        u.push(v);
      },
      g = void 0,
      h = Ih(y.location, "query", !1, void 0, "gtm_debug");
    vv(h) && (g = 2);
    if (!g && I.referrer) {
      var k = Kh(I.referrer);
      "tagassistant.google.com" === Hh(k, "host") && (g = 3);
    }
    if (!g) {
      var n = nj("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = I.documentElement.getAttribute("data-tag-assistant-present");
      vv(p) && (g = 5);
    }
    g && Hb ? f(g) : a();
  })(function () {
    var a = !1;
    a && jq("INIT");
    Di().s();
    uk();
    nl.enable_gbraid_cookie_write = !0;
    var b = !!R[He.K];
    !b && He.Jc && (b = !!R["ctid_" + He.Jc]);
    if (b) {
      var c = R.zones;
      c && c.unregisterChild(Ij());
    } else {
      for (var d = Jj(), e = 0; e < d.length; e++) {
        var f = d[e],
          g = He.K;
        R.addDestinationToContainer
          ? R.addDestinationToContainer(f, g)
          : ((R.pendingDestinationIds = R.pendingDestinationIds || []),
            R.pendingDestinationIds.push([f, g]));
      }
      for (
        var h = data.resource || {}, k = h.macros || [], n = 0;
        n < k.length;
        n++
      )
        ge.push(k[n]);
      for (var p = h.tags || [], q = 0; q < p.length; q++) je.push(p[q]);
      for (var r = h.predicates || [], t = 0; t < r.length; t++) ie.push(r[t]);
      for (var u = h.rules || [], v = 0; v < u.length; v++) {
        for (var x = u[v], z = {}, w = 0; w < x.length; w++)
          z[x[w][0]] = Array.prototype.slice.call(x[w], 1);
        he.push(z);
      }
      le = X;
      me = Vw;
      Le = new Ke();
      var A = data.sandboxed_scripts,
        B = data.security_groups,
        C = data.runtime || [],
        E = data.runtime_lines;
      EA = new Gd();
      HA();
      fe = FA();
      var D = EA,
        F = BA();
      jb(D.h, "require", F);
      for (var O = 0; O < C.length; O++) {
        var M = C[O];
        if (!Ca(M) || 3 > M.length) {
          if (0 === M.length) continue;
          break;
        }
        E && E[O] && E[O].length && ve(M, E[O]);
        EA.execute(M);
      }
      if (void 0 !== A)
        for (var S = ["sandboxedScripts"], Y = 0; Y < A.length; Y++) {
          var Q = A[Y].replace(/^_*/, "");
          dh[Q] = S;
        }
      IA(B);
      R[He.K] = bE;
      He.Jc && (R["ctid_" + He.Jc] = bE);
      for (var K = Lj(), Z = Ij(), aa = 0; aa < Z.length; aa++)
        K.container[Z[aa]] = !0;
      for (var V = Jj(), ma = 0; ma < V.length; ma++) K.destination[V[ma]] = !0;
      K.canonical[He.Jc] = !0;
      Ua(dh, X.m);
      ne = ne || wv;
      oe = De;
      uv();
      Up = !1;
      Vp = 0;
      if (
        ("interactive" == I.readyState && !I.createEventObject) ||
        "complete" == I.readyState
      )
        Xp();
      else {
        Sb(I, "DOMContentLoaded", Xp);
        Sb(I, "readystatechange", Xp);
        if (I.createEventObject && I.documentElement.doScroll) {
          var Fa = !0;
          try {
            Fa = !y.frameElement;
          } catch (ec) {}
          Fa && Yp();
        }
        Sb(y, "load", Xp);
      }
      ju = !1;
      "complete" === I.readyState ? lu() : Sb(y, "load", lu);
      kp();
      bh = Ra();
      bE.bootstrap = bh;
      if (a) {
        var Ib = kq("INIT");
      }
    }
  });
})();
