AUI.add("aui-dialog",function(p){var Z=p.Lang,v=p.Object,K=Z.isBoolean,C=Z.isArray,P=Z.isObject,j=Z.toInt,E=p.WidgetStdMod,M=p.config.doc,u="",U="boundingBox",X="button",c="buttons",V="close",Q="closethick",L="constrain2view",d="dd",R="default",W="destroyOnClose",x="dialog",y=".",n="draggable",D="dragConfig",l="dragInstance",g="footerContent",S="hd",J="height",H="icon",b="icons",s="io",w="loading",B="modal",Y="proxy",e="resizable",G="resizableConfig",m="resizableInstance",F="stack",i="useARIA",O="viewportRegion",f="width",q="resize:resize",N="resize:end",h=p.getClassName,z=h(x),a=h(x,S),t=h(H,w),o=h(d),I=M.createTextNode("");var r=function(A){if(!p.DialogMask){p.DialogMask=new p.OverlayMask().render();}};p.mix(r,{NAME:x,ATTRS:{bodyContent:{value:I},buttons:{value:[],validator:C},close:{value:true},constrain2view:{setter:"_setConstrain2view",value:false,validator:K},destroyOnClose:{value:false,validator:K},draggable:{value:true},dragConfig:{setter:function(aa){var A=this;return p.merge({bubbleTargets:A,node:A.get(U),handles:[y+a]},aa||{});},writeOnce:true,value:{},validator:P},dragInstance:{setter:"_setDragInstance",value:null},modal:{lazyAdd:false,validator:K,value:false},resizableConfig:{setter:function(aa){var A=this;return p.merge({bubbleTargets:A,handles:"r,br,b",minHeight:100,minWidth:200,constrain2view:true,node:A.get(U),proxy:true,after:{end:p.bind(A._syncResizableDimentions,A),resize:p.bind(A._syncResizableDimentions,A)}},aa||{});},writeOnce:true,value:{},validator:P},resizableInstance:{setter:"_setResizableInstance",value:null},resizable:{value:true},stack:{value:true,setter:function(A){return this._setStack(A);},validator:K},strings:{value:{close:"Close dialog"}}}});r.prototype={initializer:function(ab){var A=this;var ac=A.get(b);var ae=A.get(V);var ad=A.get(c);if(ad&&ad.length&&!A.get(g)){A.set(g,I);}if(ae){var aa={icon:Q,id:Q,handler:{fn:A.close,context:A},title:A.get("strings").close};if(ac){ac.push(aa);}A.set(b,ac);}A.publish("close",{defaultFn:A._close});A.addTarget(p.DialogManager);A.after("constrain2viewChange",A._afterConstrain2viewChange);A.after("draggableChange",A._afterDraggableChange);A.after("dragInstanceChange",A._afterDragInstanceChange);A.after("render",A._afterRenderer);A.after("resizableChange",A._afterResizableChange);A.after("resizableInstanceChange",A._afterResizableInstanceChange);},bindUI:function(){var A=this;A._bindLazyComponents();},syncUI:function(){var A=this;if(A.get(i)){A.plug(p.Plugin.Aria,{attributes:{visible:{ariaName:"hidden",format:function(aa){return !aa;}}}});}},destructor:function(){var A=this;var aa=A.get(U);p.Event.purgeElement(aa,true);p.DialogManager.remove(A);},alignToViewport:function(ab,aa){var A=this;var ac=p.getDoc().get(O);A.move([ac.left+j(ab),ac.top+j(aa)]);},_bindLazyComponents:function(){var A=this;var aa=A.get(U);aa.on("mouseenter",p.bind(A._initLazyComponents,A));},close:function(){var A=this;A.fire("close");},_afterRenderer:function(aa){var A=this;A._initButtons();A.get(F);A.get(s);},_close:function(){var A=this;if(A.get(W)){A.destroy();}else{A.hide();}},_initButtons:function(){var A=this;var ab=A.get(c);if(ab.length){var aa=new p.Toolbar({children:ab});aa._DEFAULT_CONTEXT=A;aa.render(A.footerNode);A.fire("contentUpdate");A.buttons=aa;}},_initLazyComponents:function(){var A=this;A.get(l);A.get(m);},_setDefaultARIAValues:function(){var A=this;if(!A.get(i)){return;}A.aria.setRole("dialog",A.get(U));if(A.icons){var aa=A.icons.item(Q);if(aa){A.aria.setAttribute("controls",A.get("id"),aa.get(U));}}},_setDragInstance:function(aa){var A=this;if(A.get(n)){aa=new p.DD.Drag(A.get(D));A._updateDDConstrain2view(aa);}return aa;},_setResizableInstance:function(aa){var A=this;if(A.get(e)){aa=new p.Resize(A.get(G));}return aa;},_setStack:function(aa){var A=this;if(aa){p.DialogManager.register(A);}else{p.DialogManager.remove(A);}return aa;},_syncResizableDimentions:function(ab){var A=this;var aa=ab.type;var ac=ab.info;if((aa===N)||((aa===q)&&!ab.currentTarget.get(Y))){A.set(J,ac.offsetHeight);A.set(f,ac.offsetWidth);}},_updateDDConstrain2view:function(ab){var A=this;var aa=A.get(L);if(aa){ab.plug(p.Plugin.DDConstrained,{constrain2view:aa});}else{ab.unplug(p.Plugin.DDConstrained);}},_afterConstrain2viewChange:function(aa){var A=this;A._updateDDConstrain2view(A.get(l));},_afterDraggableChange:function(aa){var A=this;A.set(l,null);},_afterDragInstanceChange:function(aa){var A=this;if(aa.prevVal){aa.prevVal.destroy();}},_afterResizableChange:function(aa){var A=this;A.set(m,null);},_afterResizableInstanceChange:function(aa){var A=this;if(aa.prevVal){aa.prevVal.destroy();}}};p.Dialog=p.Component.create({NAME:x,EXTENDS:p.Panel,AUGMENTS:[r,p.WidgetPosition,p.WidgetStack,p.WidgetPositionAlign,p.WidgetPositionConstrain]});var k=new p.OverlayManager({zIndexBase:1000});var T={};k._MODALS=T;k.after(["dialog:destroy","dialog:modalChange","dialog:render","dialog:visibleChange"],function(aa){var A=aa.target;if(A){var ab=A.get("id");if(aa.type!=="dialog:destroy"&&A.get("visible")&&A.get("modal")){T[ab]=true;p.DialogMask.show();}else{delete T[ab];if(v.isEmpty(T)){p.DialogMask.hide();}}}});p.mix(k,{findByChild:function(A){return p.Widget.getByNode(p.one(A).ancestor(y+z,true));},closeByChild:function(A){return k.findByChild(A).close();},refreshByChild:function(aa){var A=k.findByChild(aa);if(A&&A.io){A.io.start();}}});p.DialogManager=k;},"@VERSION@",{requires:["aui-panel","dd-constrain","aui-button-item","aui-overlay-manager","aui-overlay-mask","aui-io-plugin","aui-resize"],skinnable:true});