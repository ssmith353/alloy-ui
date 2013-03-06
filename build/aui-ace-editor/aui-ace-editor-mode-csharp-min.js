AUI.add("aui-ace-editor-mode-csharp",function(a){define("ace/mode/csharp",["require","exports","module","pilot/oop","ace/mode/text","ace/tokenizer","ace/mode/csharp_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle"],function(t,s,r){var q=t("pilot/oop"),p=t("ace/mode/text").Mode,o=t("ace/tokenizer").Tokenizer,n=t("ace/mode/csharp_highlight_rules").CSharpHighlightRules,m=t("ace/mode/matching_brace_outdent").MatchingBraceOutdent,l=t("ace/mode/behaviour/cstyle").CstyleBehaviour,k=function(){this.$tokenizer=new o((new n).getRules()),this.$outdent=new m,this.$behaviour=new l;};q.inherits(k,p),function(){this.getNextLineIndent=function(j,i,z){var y=this.$getIndent(i),x=this.$tokenizer.getLineTokens(i,j),w=x.tokens,v=x.state;if(w.length&&w[w.length-1].type=="comment"){return y;}if(j=="start"){var u=i.match(/^.*[\{\(\[]\s*$/);u&&(y+=z);}return y;},this.checkOutdent=function(e,d,f){return this.$outdent.checkOutdent(d,f);},this.autoOutdent=function(e,d,f){this.$outdent.autoOutdent(d,f);},this.createWorker=function(b){return null;};}.call(k.prototype),s.Mode=k;}),define("ace/mode/csharp_highlight_rules",["require","exports","module","pilot/oop","pilot/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(j,i,p){var o=j("pilot/oop"),n=j("pilot/lang"),m=j("ace/mode/doc_comment_highlight_rules").DocCommentHighlightRules,l=j("ace/mode/text_highlight_rules").TextHighlightRules,k=function(){var d=n.arrayToMap("abstract|event|new|struct|as|explicit|null|switch|base|extern|object|this|bool|false|operator|throw|break|finally|out|true|byte|fixed|override|try|case|float|params|typeof|catch|for|private|uint|char|foreach|protected|ulong|checked|goto|public|unchecked|class|if|readonly|unsafe|const|implicit|ref|ushort|continue|in|return|using|decimal|int|sbyte|virtual|default|interface|sealed|volatile|delegate|internal|short|void|do|is|sizeof|while|double|lock|stackalloc|else|long|static|enum|namespace|string|var|dynamic".split("|")),c=n.arrayToMap("null|true|false".split("|"));this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},(new m).getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",merge:!0,next:"comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:function(b){return b=="this"?"variable.language":d.hasOwnProperty(b)?"keyword":c.hasOwnProperty(b)?"constant.language":"identifier";},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",merge:!0,regex:".+"}]},this.embedRules(m,"doc-",[(new m).getEndRule("start")]);};o.inherits(k,l),i.CSharpHighlightRules=k;}),define("ace/mode/doc_comment_highlight_rules",["require","exports","module","pilot/oop","ace/mode/text_highlight_rules"],function(h,g,l){var k=h("pilot/oop"),j=h("ace/mode/text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc",merge:!0,regex:"\\s+"},{token:"comment.doc",merge:!0,regex:"TODO"},{token:"comment.doc",merge:!0,regex:"[^@\\*]+"},{token:"comment.doc",merge:!0,regex:"."}]};};k.inherits(i,j),function(){this.getStartRule=function(b){return{token:"comment.doc",merge:!0,regex:"\\/\\*(?=\\*)",next:b};},this.getEndRule=function(b){return{token:"comment.doc",merge:!0,regex:"\\*\\/",next:b};};}.call(i.prototype),g.DocCommentHighlightRules=i;}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(g,f,j){var i=g("ace/range").Range,h=function(){};(function(){this.checkOutdent=function(d,c){return/^\s+$/.test(d)?/^\s*\}/.test(c):!1;},this.autoOutdent=function(k,d){var p=k.getLine(d),o=p.match(/^(\s*\})/);if(!o){return 0;}var n=o[1].length,m=k.findMatchingBracket({row:d,column:n});if(!m||m.row==d){return 0;}var l=this.$getIndent(k.getLine(m.row));k.replace(new i(d,0,d,n-1),l);},this.$getIndent=function(d){var c=d.match(/^(\s+)/);return c?c[1]:"";};}).call(h.prototype),f.MatchingBraceOutdent=h;}),define("ace/mode/behaviour/cstyle",["require","exports","module","pilot/oop","ace/mode/behaviour"],function(h,g,l){var k=h("pilot/oop"),j=h("ace/mode/behaviour").Behaviour,i=function(){this.add("braces","insertion",function(B,A,z,y,x){if(x=="{"){var w=z.getSelectionRange(),v=y.doc.getTextRange(w);return v!==""?{text:"{"+v+"}",selection:!1}:{text:"{}",selection:[1,1]};}if(x=="}"){var u=z.getCursorPosition(),t=y.doc.getLine(u.row),s=t.substring(u.column,u.column+1);if(s=="}"){var r=y.$findOpeningBracket("}",{column:u.column+1,row:u.row});if(r!==null){return{text:"",selection:[1,1]};}}}else{if(x=="\n"){var u=z.getCursorPosition(),t=y.doc.getLine(u.row),s=t.substring(u.column,u.column+1);if(s=="}"){var q=y.findMatchingBracket({row:u.row,column:u.column+1});if(!q){return !1;}var p=this.getNextLineIndent(B,t.substring(0,t.length-1),y.getTabString()),o=this.$getIndent(y.doc.getLine(q.row));return{text:"\n"+p+"\n"+o,selection:[1,p.length,1,p.length]};}}}return !1;}),this.add("braces","deletion",function(n,m,t,s,r){var q=s.doc.getTextRange(r);if(!r.isMultiLine()&&q=="{"){var p=s.doc.getLine(r.start.row),o=p.substring(r.end.column,r.end.column+1);if(o=="}"){r.end.column++;return r;}}return !1;}),this.add("parens","insertion",function(w,v,u,t,s){if(s=="("){var r=u.getSelectionRange(),q=t.doc.getTextRange(r);return q!==""?{text:"("+q+")",selection:!1}:{text:"()",selection:[1,1]};
}if(s==")"){var p=u.getCursorPosition(),o=t.doc.getLine(p.row),n=o.substring(p.column,p.column+1);if(n==")"){var m=t.$findOpeningBracket(")",{column:p.column+1,row:p.row});if(m!==null){return{text:"",selection:[1,1]};}}}return !1;}),this.add("parens","deletion",function(n,m,t,s,r){var q=s.doc.getTextRange(r);if(!r.isMultiLine()&&q=="("){var p=s.doc.getLine(r.start.row),o=p.substring(r.start.column+1,r.start.column+2);if(o==")"){r.end.column++;return r;}}return !1;}),this.add("string_dquotes","insertion",function(F,E,D,C,B){if(B=='"'){var A=D.getSelectionRange(),z=C.doc.getTextRange(A);if(z!==""){return{text:'"'+z+'"',selection:!1};}var y=D.getCursorPosition(),x=C.doc.getLine(y.row),w=x.substring(y.column-1,y.column);if(w=="\\"){return !1;}var v=C.getTokens(A.start.row,A.start.row)[0].tokens,u=0,t,s=-1;for(var r=0;r<v.length;r++){t=v[r],t.type=="string"?s=-1:s<0&&(s=t.value.indexOf('"'));if(t.value.length+u>A.start.column){break;}u+=v[r].value.length;}if(!t||s<0&&t.type!=="comment"&&(t.type!=="string"||A.start.column!==t.value.length+u-1&&t.value.lastIndexOf('"')===t.value.length-1)){return{text:'""',selection:[1,1]};}if(t&&t.type==="string"){var q=x.substring(y.column,y.column+1);if(q=='"'){return{text:"",selection:[1,1]};}}}return !1;}),this.add("string_dquotes","deletion",function(n,m,t,s,r){var q=s.doc.getTextRange(r);if(!r.isMultiLine()&&q=='"'){var p=s.doc.getLine(r.start.row),o=p.substring(r.start.column+1,r.start.column+2);if(o=='"'){r.end.column++;return r;}}return !1;});};k.inherits(i,j),g.CstyleBehaviour=i;});},"1.5.0",{requires:["aui-ace-editor-base"],skinnable:false});