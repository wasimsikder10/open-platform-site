$(document).ready(function(){function t(t,n){a.convert("../documentation/md/"+t+".md",n)}function n(t){var n=$("#doccontent").attr("data-include-common");"true"===n?a.convert("../documentation/md/common.md",function(n){i(t,n)}):i(t)}function i(t,n){var i=$("#doccontent").attr("data-file");$("#doccontent").empty(),$("#doccontent").append('<a href="https://github.com/guardian/open-platform-site/edit/gh-pages/documentation/md/'+i+'.md">Edit me </a>'),$("#doccontent").append(t),void 0!==n&&$("#doccontent h2").eq(2).after(n),"item"===i?a.convert("../documentation/md/content_search.md",function(t){var n=$("<div/>").append(t).find('h3:contains("Filters")').nextUntil("h3").andSelf(),i=$("<div/>").append(t).find('h3:contains("Ordering")').nextUntil("h3").andSelf(),a=$("<div/>").append(t).find('h3:contains("Additional information")').nextUntil("h2");$('h3:contains("Additional information")').before(n),$('h3:contains("Additional information")').before(i),$('h3:contains("Additional information")').after(a),d()}):d()}function d(){$("table").addClass("ui basic table");var n=$("tr").filter(function(){return 5==$(this).children().length}),i=$("tr").filter(function(){return $(this).children().length<=4});i.find("th:nth-child(1)").addClass("three wide"),i.find("th:nth-child(2)").addClass("seven wide"),i.find("th:nth-child(3)").addClass("two wide"),i.find("th:nth-child(4)").addClass("four wide"),n.find("th:nth-child(1)").addClass("three wide"),n.find("th:nth-child(2)").addClass("five wide"),n.find("th:nth-child(3)").addClass("two wide"),n.find("th:nth-child(4)").addClass("three wide"),n.find("th:nth-child(5)").addClass("three wide"),t("types",function(t){$('tr th:contains("Type")').attr("data-html",t).attr("data-title"," "),$('tr th:contains("Type")').append('<div class="ui mini icon button"><i class="down triangle basic icon"></i></div>'),$("th[data-html]").popup({on:"click"})}),t("boolean_operators",function(t){$('tr th:contains("Boolean operators")').attr("data-html",t).attr("data-title"," "),$('tr th:contains("Boolean operators")').append('<div class="ui mini icon button"><i class="down triangle basic icon"></i></div>'),$("th[data-html]").popup({on:"click"}),$("tr td").filter(function(){return"false"===$(this).text()}).empty().append('<i class="icon close"></i>'),$("tr td").filter(function(){return"true"===$(this).text()}).empty().append('<i class="icon checkmark"></i>')}),$("pre code").text(function(t,n){return JSON.stringify($.parseJSON(n),null,4)}),$("pre code").each(function(t,n){hljs.highlightBlock(n)})}var a=new MarkdownApi,e=$("#doccontent").attr("data-file");void 0!==e&&t(e,n)});