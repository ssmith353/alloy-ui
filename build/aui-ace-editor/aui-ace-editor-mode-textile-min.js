AUI.add("aui-ace-editor-mode-textile",function(a){define("ace/mode/textile",["require","exports","module","pilot/oop","ace/mode/text","ace/tokenizer","ace/mode/textile_highlight_rules","ace/mode/matching_brace_outdent","ace/range"],function(t,s,r){var q=t("pilot/oop"),p=t("ace/mode/text").Mode,o=t("ace/tokenizer").Tokenizer,n=t("ace/mode/textile_highlight_rules").TextileHighlightRules,m=t("ace/mode/matching_brace_outdent").MatchingBraceOutdent,l=t("ace/range").Range,k=function(){this.$tokenizer=new o((new n).getRules()),this.$outdent=new m;};q.inherits(k,p),function(){this.getNextLineIndent=function(e,d,f){return e=="intag"?f:"";},this.checkOutdent=function(e,d,f){return this.$outdent.checkOutdent(d,f);},this.autoOutdent=function(e,d,f){this.$outdent.autoOutdent(d,f);};}.call(k.prototype),s.Mode=k;}),define("ace/mode/textile_highlight_rules",["require","exports","module","pilot/oop","ace/mode/text_highlight_rules"],function(h,g,l){var k=h("pilot/oop"),j=h("ace/mode/text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"keyword",regex:"h1|h2|h3|h4|h5|h6|bq|p|bc|pre",next:"blocktag"},{token:"keyword",regex:"[\\*]+|[#]+"},{token:"text",regex:".+"}],blocktag:[{token:"keyword",regex:"\\. ",next:"start"},{token:"keyword",regex:"\\(",next:"blocktagproperties"}],blocktagproperties:[{token:"keyword",regex:"\\)",next:"blocktag"},{token:"string",regex:"[a-zA-Z0-9\\-_]+"},{token:"keyword",regex:"#"}]};};k.inherits(i,j),g.TextileHighlightRules=i;}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(g,f,j){var i=g("ace/range").Range,h=function(){};(function(){this.checkOutdent=function(d,c){return/^\s+$/.test(d)?/^\s*\}/.test(c):!1;},this.autoOutdent=function(k,d){var p=k.getLine(d),o=p.match(/^(\s*\})/);if(!o){return 0;}var n=o[1].length,m=k.findMatchingBracket({row:d,column:n});if(!m||m.row==d){return 0;}var l=this.$getIndent(k.getLine(m.row));k.replace(new i(d,0,d,n-1),l);},this.$getIndent=function(d){var c=d.match(/^(\s+)/);return c?c[1]:"";};}).call(h.prototype),f.MatchingBraceOutdent=h;});},"1.5.0",{requires:["aui-ace-editor-base"],skinnable:false});