AUI.add("aui-scheduler-view",function(b6){var cn=b6.Lang,cE=cn.isObject,bV=cn.isString,aU=cn.isBoolean,aG=cn.isNumber,be=function(A){return A==0?0:(A<0?-1:1);},aK=function(A,cI){return Math.max(Math.abs(A),cI)*be(A);},bI=function(A){return parseFloat(A)||0;},bK=function(cI,A){return Math.round(cI/A)*A;},aq=b6.DataType.DateMath,b2=b6.WidgetStdMod,aL=aq.WEEK_LENGTH,bM="scheduler-view",aF="scheduler-view-day",ca="scheduler-view-week",cx="scheduler-view-month",bH="activeView",a6="am",u="borderLeftWidth",ce="borderRightWidth",aQ="boundingBox",q="children",bx="childNodes",ag="col",I="colblank",y="coldata",aI="colday",a="colgrid",bs="colmonth",W="colspan",m="coltime",cs="columnNode",ax="colDaysNode",b8="colHeaderDaysNode",aO="container",aM="content",cu="contentBox",av="createDocumentFragment",bb="currentDate",by="data",ba="dateFormat",ck="day",U="days",E="delegateConfig",bF="disabled",X="div",bk="division",ab="down",cc="dragNode",bU="duration",aA="endDate",a2="event",b0="events",cG="eventRecorder",s="eventWidth",aH="first",cb="firstDayOfWeek",a8="grid",cF="hd",b4="header",a9="headerDateFormat",cB="headerTableNode",bP="height",aP="host",aE="hourHeight",v="icon",ak="isoTime",bf="labelAM",aC="labelPM",aR="left",ay="locale",ac="marker",a4="markercell",aX="markercellsNode",bN="markercellNode",L="markers",bD="month",a7="monthContainerNode",bB="navigationDateFormat",aN="next",bL="nextDate",cH="node",aj="nomonth",ar="noscroll",b3="offsetHeight",K="offsetTop",b5="offsetWidth",cj="ownerDocument",b7="pad",cp="parentEvent",R="parentNode",an="pm",aa="prevDate",br="proxy",ah="px",aS="rendered",b1="repeated",aY="right",bp="row",r="scheduler",aD="scheduler-event",Y="scrollable",T="shim",b9="startDate",aT="table",cv="tableColNode",j="tableDataNode",D="tableGridNode",bv="tableNode",bW="tableTimeNode",bt="tbody",e="td",bm="time",ai="timesNode",g="title",al="today",bq="top",cC="tr",z="trigger",cq="week",bz="width",bJ="-",k="a",bO=".",bG="",bA="%",V=" ",F=b6.getClassName,bl=F(bM,ar),ad=F(bM,Y);var aW=b6.Component.create({NAME:bM,AUGMENTS:[b6.WidgetStdMod],ATTRS:{bodyContent:{value:bG},height:{value:600},isoTime:{value:false,validator:aU},name:{value:bG,validator:bV},navigationDateFormat:{value:"%A - %d %b %Y",validator:bV},nextDate:{getter:"getNextDate",readOnly:true},prevDate:{getter:"getPrevDate",readOnly:true},scheduler:{lazyAdd:false,setter:"_setScheduler"},scrollable:{value:true,validator:aU},triggerNode:{setter:b6.one},visible:{value:false}},BIND_UI_ATTRS:[Y],prototype:{initializer:function(){var A=this;A.after("render",A._afterRender);},syncUI:function(){var A=this;A.syncStdContent();},adjustCurrentDate:function(){var A=this;var cJ=A.get(r);var cI=cJ.get(bb);cJ.set(bb,cI);},flushViewCache:function(){},getNextDate:function(){},getPrevDate:function(){},getToday:function(){return aq.clearTime(new Date());},limitDate:function(cI,cJ){var A=this;if(aq.after(cI,cJ)){cI=aq.clone(cJ);}return cI;},plotEvents:function(A){},syncStdContent:function(){},syncEventUI:function(A){},_uiSetCurrentDate:function(A){},_afterRender:function(cJ){var A=this;var cI=A.get(r);A.adjustCurrentDate();A._uiSetScrollable(A.get(Y));},_setScheduler:function(cJ){var A=this;var cI=A.get(r);if(cI){A.removeTarget(cI);}if(cJ){A.addTarget(cJ);cJ.after("eventsChange",b6.bind(A.flushViewCache,A));}return cJ;},_uiSetScrollable:function(cJ){var A=this;var cI=A.bodyNode;if(cI){cI.toggleClass(ad,cJ);cI.toggleClass(bl,!cJ);}},_uiSetVisible:function(cI){var A=this;aW.superclass._uiSetVisible.apply(this,arguments);if(cI&&A.get(aS)){A.adjustCurrentDate();}}}});b6.SchedulerView=aW;var cn=b6.Lang,bE=cn.sub;var O=function(A,cI){return function(cK){var cJ=cK.all(A);return(cJ.size()>=cI)?cJ:null;};},aJ=F(aD),bh=F(aD,bF),bR=F(aD,br),B=F(bM,y),c=F(bM,a),Q=F(r,al),ap=F(r,al,cF),cf=F(bM,a8),cg=F(bM,a8,aO),ci=F(bM,a4),M=F(bM,L),bj=F(bM,ac,bk),bw=F(bM,aT),cm=F(bM,ck,b4,aT),t=F(bM,ck,b4,ck),bi=F(bM,ck,b4,ck,b7,aY),bT=F(bM,ck,b4,ck,aH),a1=F(bM,ck,b4,ag),cz=F(bM,aT,ag),aB=F(bM,aT,ag,T),P=F(bM,aT,I),H=F(bM,aT,aI),n=F(bM,aT,aI,b4),cr=F(bM,aT,m),bo=F(bM,aT,bm),ae='<div class="'+ci+'">'+'<div class="'+bj+'"></div>'+"</div>",au='<table class="'+bw+'">'+"<tbody>"+'<tr class="'+c+'" height="1">'+'<td height="0" class="'+[cz,P].join(V)+'"></td>'+'<td class="'+cg+'" colspan="1">'+'<div class="'+cf+'">'+'<div class="'+M+'"></div>'+"</div>"+"</td>"+"</tr>"+'<tr class="'+B+'">'+'<td class="'+[cz,cr].join(V)+'"></td>'+"</tr>"+"</tbody>"+"</table>",bd='<td class="'+[cz,H].join(V)+'">'+'<div class="'+aB+'"></div>'+"</td>",i='<div class="'+bo+'">{hour}</div>',aw='<table class="'+cm+'">'+"<tbody>"+'<tr class="'+a1+'"></tr>'+"</tbody>"+"</table>",bg='<th class="'+t+'"><a href="#">&nbsp;</a></th>',at='<td class="'+[t,bT].join(V)+'"></td>',w='<th class="'+[t,bi].join(V)+'">&nbsp;</th>';var cA=b6.Component.create({NAME:aF,ATTRS:{bodyContent:{value:bG},days:{value:1,validator:aG},delegateConfig:{value:{},setter:function(cI){var A=this;return b6.merge({bubbleTargets:A,container:A.get(aQ),nodes:bO+aJ,invalid:"input, select, button, a, textarea, "+bO+bh},cI||{});},validator:cE},headerDateFormat:{value:"%a %d/%m",validator:bV},name:{value:ck},hourHeight:{value:52,validator:aG},eventWidth:{value:95,validator:aG},headerTableNode:{valueFn:function(){return b6.Node.create(aw);}},tableNode:{valueFn:function(){return b6.Node.create(au);}},colDaysNode:{valueFn:"_valueColDaysNode"},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},markercellsNode:{valueFn:"_valueMarkercellsNode"},timesNode:{valueFn:"_valueTimesNode"}},HTML_PARSER:{colHeaderDaysNode:O(bO+t,2),colDaysNode:O(bO+H,1),markercellsNode:O(bO+ci,24),timesNode:O(bO+bo,24),headerTableNode:bO+cm,tableNode:bO+bw},EXTENDS:b6.SchedulerView,prototype:{initializer:function(){var A=this;A.colDaysNode=A.get(ax);A.colHeaderDaysNode=A.get(b8);A.headerTableNode=A.get(cB);A.markercellsNode=A.get(aX);A.tableNode=A.get(bv);A.timesNode=A.get(ai);A.colShimNodes=A.colDaysNode.all(bO+aB);A.colDataNode=A.tableNode.one(bO+B);A.colTimeNode=A.tableNode.one(bO+cr);A.dayHeaderColNode=A.headerTableNode.one(bO+a1);
A.gridContainer=A.tableNode.one(bO+cg);A.markersNode=A.tableNode.one(bO+M);},renderUI:function(){var A=this;A.colTimeNode.setContent(A.timesNode);A.markersNode.setContent(A.markercellsNode);A.colDaysNode.appendTo(A.colDataNode);A.colHeaderDaysNode.appendTo(A.dayHeaderColNode);},bindUI:function(){var A=this;A.headerTableNode.delegate("click",b6.bind(A._onClickDaysHeader,A),bO+t);A.colDataNode.delegate("mousedown",b6.bind(A._onMouseDownTableCol,A),bO+cz);A.colDataNode.delegate("mouseup",b6.bind(A._onMouseUpTableCol,A),bO+cz);A.colDataNode.delegate("mousemove",b6.bind(A._onMouseMoveTableCol,A),bO+cz);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);A.on("drag:align",A._dragAlign);A.on("drag:tickAlignX",A._dragTickAlignX);A.on("drag:tickAlignY",A._dragTickAlignY);},syncUI:function(){var A=this;cA.superclass.syncUI.apply(this,arguments);A.gridContainer.attr(W,A.get(U));A._setupDragDrop();},syncStdContent:function(){var A=this;A.setStdModContent(b2.BODY,A.tableNode.getDOM());A.setStdModContent(b2.HEADER,A.headerTableNode.getDOM());},calculateTopByDate:function(cK){var cI=this;var A=cI.get(aE);var cJ=cK.getHours();var cL=cK.getMinutes();var cM=cK.getSeconds();return((cJ*60)+cL+(cM/60))*(A/60);},calculateHoursByTop:function(cL){var cI=this;var A=cI.get(aE);var cN=bI((cL/A).toFixed(2));var cM=0;var cK=Math.floor((cN*100)%100*0.6);var cJ=Math.floor(cN);return[cJ,cK,cM];},getNextDate:function(){var A=this;var cJ=A.get(r);var cI=cJ.get(bb);return aq.add(cI,aq.DAY,1);},getPrevDate:function(){var A=this;var cJ=A.get(r);var cI=cJ.get(bb);return aq.subtract(cI,aq.DAY,1);},getColumnByDate:function(cJ){var A=this;var cK=A.get(r);var cI=aq.safeClearTime(cK.get(bb));var cL=aq.getDayOffset(aq.safeClearTime(cJ),cI);return A.colDaysNode.item(cL);},getDateByColumn:function(cJ){var A=this;var cK=A.get(r);var cI=aq.safeClearTime(cK.get(bb));return aq.add(cI,aq.DAY,cJ);},plotEvents:function(cJ){var A=this;var cI=A.get(r);A.colShimNodes.each(function(cN,cM){var cL=A.getDateByColumn(cM);var cK=cI.getEventsByDay(cL);cN.empty();b6.Array.each(cK,function(cO,cP){if(!cO.isDayOverlapEvent()){cN.append(cO.get(cH));cO.set(cs,cN.get(R));A.syncEventTopUI(cO);A.syncEventHeightUI(cO);}});A.syncEventsIntersectionUI(cK);});},syncColumnsUI:function(){var A=this;A.colDaysNode.each(function(cK,cJ){var cI=A.getDateByColumn(cJ);cK.toggleClass(Q,aq.isToday(cI));});},syncDaysHeaderUI:function(){var cJ=this;var cL=cJ.get(r);var cK=cL.get(bb);var cI=cJ.get(a9);var A=cJ.get(ay);cJ.colHeaderDaysNode.all(k).each(function(cO,cN){var cM=aq.add(cK,aq.DAY,cN);var cP=b6.DataType.Date.format(cM,{format:cI,locale:A});cO.toggleClass(ap,aq.isToday(cM));cO.html(cP);});},syncEventsIntersectionUI:function(cI){var A=this;var cJ=A.get(r);var cK=A.get(s);cJ.flushEvents();b6.Array.each(cI,function(cM,cN){var cP=A.findEventIntersections(cM,cI);var cO=cP.length;var cL=(cK/cO);b6.Array.each(cP,function(cR,cS){var cQ=cR.get(cH);var cU=cL*cS;var cT=cL*1.7;if(cS==(cO-1)){cT=cK-cU;}cQ.setStyle(bz,cT+bA);cQ.setStyle(aR,cU+bA);var cV=cQ.get(R);if(cV){cV.insert(cQ,cS);}cR._filtered=true;});});},syncEventHeightUI:function(cJ){var cI=this;var A=cI.get(aE);var cL=cI.calculateTopByDate(cJ.get(b9));var cK=cI.calculateTopByDate(cJ.get(aA));cJ.get(cH).set(b3,Math.max(cK-cL,A/2));},syncEventRecorderUI:function(cK){var A=this;var cJ=A.get(r);var cL=cJ.get(cG);var cI=cL.get(cH);if(cK&&!cI.inDoc()){cK.append(cI);}A.syncEventTopUI(cL);A.syncEventHeightUI(cL);},syncEventTopUI:function(cJ){var cI=this;var A=cJ.get(cH);var cK=cI.calculateTopByDate(cJ.get(b9));A.setStyle(bq,cK+ah);},findEventIntersections:function(cI,cJ){var A=this;var cK=[];b6.Array.each(cJ,function(cM,cL){if(!cI._filtered&&!cM.isDayOverlapEvent()&&cI.intersectHours(cM)){cK.push(cM);}});return cK;},_createEvents:function(){var A=this;var cI=function(cJ,cK){A.publish(cJ,{defaultFn:cK,queuable:false,emitFacade:true,bubbles:true});};},_dragTickAlignX:function(cI){var cR=this;var cS=cI.target.get(aP);var cT=cR._getColumnRefWidth();var cL=cS.get(cH);var cO=cR.proxyEvt;var cP=cL.getData(aD);var cQ=(cS.actXY[0]-cR.bodyNode.getX()-cR.colTimeNode.get(b5));var cJ=Math.floor(cQ/cT);var cN=cR.colDaysNode.item(cJ);var cM=cR.getDateByColumn(cJ);var A=aq.clone(cM);var cK=aq.clone(cM);aq.copyHours(cK,cO.get(aA));aq.copyHours(A,cO.get(b9));cO.set(aA,cK);cO.set(b9,A);},_dragTickAlignY:function(cJ){var cO=this;var cP=cJ.target.get(aP);var cL=cP.get(cH);var cM=cO.proxyEvt;var cN=cL.getData(aD);var cI=aq.clone(cM.get(b9));var A=cO.calculateHoursByTop(bI(cP.get(cc).getComputedStyle(bq)));cO._setTickedHours(cI,A);var cK=aq.clone(cI);cM.set(aA,aq.add(cK,aq.MINUTES,cO._currentEvtDuration));cM.set(b9,cI);cM.syncNodeTitleUI();},_getXYDelta:function(cI){var A=this;var cK=cI.currentTarget;var cJ=cK.getXY(),cL=[cI.pageX,cI.pageY];return b6.Array.map(cJ,function(cN,cM){return(cL[cM]-cN);});},_getTickY:function(){var A=this;return bK(Math.ceil(A.get(aE)/2),10);},_getColumnRefWidth:function(){var A=this;var cI=A.colDaysNode.item(0);return bI(cI.getStyle(bz))-bI(cI.getStyle(ce))-bI(cI.getStyle(u));},_setupDragDrop:function(){var cJ=this;var cK=cJ.get(aQ);if(!cJ.proxyEvt){var cL=cJ.get(r);cJ.proxyEvt=new b6.SchedulerEvent({scheduler:cL});cJ.proxyEvt.removeTarget(cL);cJ.proxyEvt.get(cH).addClass(bR);}if(!cJ.delegate){cJ.delegate=new b6.DD.Delegate(cJ.get(E));}var cI=cJ.delegate.dd;var cM=cJ.proxyEvt;var cN=cJ.get(aE)/2;var A=cJ._getColumnRefWidth();cI.unplug(b6.Plugin.DDConstrained);cI.unplug(b6.Plugin.DDNodeScroll);cI.plug(b6.Plugin.DDConstrained,{bubbleTargets:cJ,constrain:cJ.bodyNode,tickX:A,tickY:cN});cI.plug(b6.Plugin.DDNodeScroll,{node:cJ.bodyNode,scrollDelay:150});},_uiSetCurrentDate:function(cI){var A=this;A.syncColumnsUI();A.syncDaysHeaderUI();},_onClickDaysHeader:function(cK){var A=this;var cJ=A.get(r);if(cK.target.test(k)){var cL=cJ.getViewByName(ck);var cI=A.colHeaderDaysNode.indexOf(cK.currentTarget)-1;if(cL){cJ.set(bb,A.getDateByColumn(cI));cJ.set(bH,cL);}}cK.preventDefault();},_onEventDragEnd:function(A){var cO=this;
var cL=cO.get(r);var cK=cO.get(aQ);var cP=cO.delegate.dd;var cJ=cP.get(cH);var cM=cO.proxyEvt;var cI=cM.get(cH);var cN=cJ.getData(aD);cJ.show();cI.hide();cK.selectable();cN.copyDates(cM);cL.syncEventsUI();},_onEventDragStart:function(A){var cO=this;var cL=cO.get(aQ);var cP=cO.delegate.dd;var cK=cP.get(cH);var cM=cO.proxyEvt;var cN=cK.getData(aD);var cJ=bI(cK.getComputedStyle(aR));if(cJ){cP.deltaXY[0]=(cJ+bI(cP.deltaXY[0]));}if(cN){var cQ=cN.get(cs);var cI=cM.get(cH);cP.set(cc,cI);cQ.append(cI);cM.copyPropagateAttrValues(cN);cO.syncEventTopUI(cM);cO.syncEventHeightUI(cM);cI.show();cO._currentEvtDuration=cN.getMinutesDuration();}cK.hide();cL.unselectable();},_onMouseDownTableCol:function(cK){var A=this;var cJ=A.get(r);var cL=cJ.get(cG);if(cL&&!cJ.get(bF)){cL.hideOverlay();if(cK.target.test(bO+aB)){var cI=A.colDaysNode.indexOf(cK.currentTarget);A.dragXY=A.startXY=A._getXYDelta(cK);A.ddStartDate=A.getDateByColumn(cI);A.ddEndDate=aq.clone(A.ddStartDate);A._setTickedHours(A.ddStartDate,A.calculateHoursByTop(A.startXY[1]));A.ddMaxDate=aq.clone(A.ddStartDate);A.ddMaxDate.setHours(23,59,59);cL.set(b9,A.ddStartDate);cL.set(aA,A.limitDate(cL.get(aA),A.ddMaxDate));cK.halt();}}},_onMouseMoveTableCol:function(cL){var A=this;var cK=A.get(r);var cO=cK.get(cG);var cM=A.ddStartDate;if(cM){A.dragXY=A._getXYDelta(cL);A._setTickedHours(A.ddEndDate,A.calculateHoursByTop(A.dragXY[1]));var cN=aq.getMinutesOffset(A.ddEndDate,cM);if((A.dragXY[1]-A.startXY[1])>0){cN=aK(cN,cO.get(bU));}var cI=A.limitDate(aq.add(cM,aq.MINUTES,cN),A.ddMaxDate);if(cN>0){cO.set(aA,cI);}else{var cJ=cO.get(aA);cO.set(b9,cI);cO.set(aA,cJ);}A.syncEventRecorderUI(cL.currentTarget);}},_onMouseUpTableCol:function(cJ){var A=this;var cI=A.get(r);var cK=cI.get(cG);if(cK&&!cI.get(bF)){if(A.ddStartDate){A.syncEventRecorderUI(cJ.currentTarget);cK.showOverlay();}A.ddEndDate=null;A.ddStartDate=null;}},_setTickedHours:function(cI,cJ){var A=this;cI.setHours(cJ[0],bK(cJ[1],A._getTickY()),cJ[2]);},_valueColDaysNode:function(){var A=this;var cJ=A.get(U);var cI=[];while(cJ--){cI.push(bd);}return b6.NodeList.create(cI.join(bG));},_valueColHeaderDaysNode:function(){var A=this;var cJ=A.get(U);var cI=[];cI.push(at);while(cJ--){cI.push(bg);}cI.push(w);return b6.NodeList.create(cI.join(bG));},_valueMarkercellsNode:function(){var A=this;var cI=[];for(var cJ=0;cJ<=23;cJ++){cI.push(ae);}return b6.NodeList.create(cI.join(bG));},_valueTimesNode:function(){var A=this;var cK=A.get(ak);var cJ=[];for(var cI=0;cI<=23;cI++){cJ.push(bE(i,{hour:cK?aq.toIsoTimeString(cI):aq.toUsTimeString(cI,false,true)}));}return b6.NodeList.create(cJ.join(bG));}}});b6.SchedulerDayView=cA;var am=b6.Component.create({NAME:ca,ATTRS:{bodyContent:{value:bG},days:{value:7},name:{value:cq}},EXTENDS:b6.SchedulerDayView,prototype:{adjustCurrentDate:function(){var A=this;var cK=A.get(r);var cI=cK.get(bb);var cJ=cK.get(cb);cK.set(bb,aq.getFirstDayOfWeek(cI,cJ));},getNextDate:function(){var A=this;var cJ=A.get(r);var cI=cJ.get(bb);var cK=A._firstDayOfWeek(cI);return aq.add(cK,aq.WEEK,1);},getPrevDate:function(){var A=this;var cJ=A.get(r);var cI=cJ.get(bb);var cK=A._firstDayOfWeek(cI);return aq.subtract(cK,aq.WEEK,1);},getToday:function(){var A=this;var cI=am.superclass.getToday.apply(this,arguments);return A._firstDayOfWeek(cI);},_firstDayOfWeek:function(cJ){var A=this;var cK=A.get(r);var cI=cK.get(cb);return aq.getFirstDayOfWeek(cJ,cI);}}});b6.SchedulerWeekView=am;var h=F(bM,bD,aO),a3=F(bM,bD,b4,ag),x=F(bM,bD,b4,ck),cw=F(bM,bD,b4,aT),bY=F(bM,bD,bp),ao=F(bM,bD,bp,aO),f=F(v),l=F(v,"arrowstop-1-l"),ct=F(v,"arrowstop-1-r"),bZ=F(bM,bD,a),b=F(bM,bD,a,al),o=F(bM,bD,a,aH),bC=F(bM,bD,aT,by),aZ=F(bM,bD,aT,by,aH),bX=F(bM,bD,aT,by,ag),cd=F(bM,bD,aT,by,ag,aH),a0=F(bM,bD,aT,by,ag,aj),aV=F(bM,bD,aT,by,ag,g),S=F(bM,bD,aT,by,ag,g,al),af=F(bM,bD,aT,by,ag,g,aH),C=F(bM,bD,aT,by,ag,g,aN),cy=F(bM,bD,aT,by,ag,g,ab),bn=F(bM,bD,aT,by,a2),d=F(bM,bD,aT,by,a2,aR),bQ=F(bM,bD,aT,by,a2,aY),p=F(bM,bD,aT,by,a2,b1),bc=F(bM,bD,aT,a8),co=F(bM,bD,aT,a8,aH),cD=F(bM,aT,bs,b4),G='<table class="'+cw+'">'+"<tbody>"+'<tr class="'+a3+'"></tr>'+"</tbody>"+"</table>",N='<th class="'+x+'"><div>&nbsp;</div></th>',cl='<div class="'+h+'">'+'<div class="'+ao+'">'+'<div class="'+bY+'" style="top: 0; height: 16.6667%;"></div>'+'<div class="'+bY+'" style="top: 16.6667%; height: 16.6667%;"></div>'+'<div class="'+bY+'" style="top: 33.3333%; height: 16.6667%;"></div>'+'<div class="'+bY+'" style="top: 50%; height: 16.6667%;"></div>'+'<div class="'+bY+'" style="top: 66.6667%; height: 16.6667%;"></div>'+'<div class="'+bY+'" style="top: 83.3333%; height: 16.6667%;"></div>'+"</div>"+"</div>",bu='<table cellspacing="0" cellpadding="0" class="'+bc+'">'+"<tbody>"+"<tr>"+'<td class="'+[bZ,o].join(V)+'">&nbsp;</td>'+'<td class="'+bZ+'">&nbsp;</td>'+'<td class="'+bZ+'">&nbsp;</td>'+'<td class="'+bZ+'">&nbsp;</td>'+'<td class="'+bZ+'">&nbsp;</td>'+'<td class="'+bZ+'">&nbsp;</td>'+'<td class="'+bZ+'">&nbsp;</td>'+"</tr>"+"</tbody>"+"</table>",bS='<table cellspacing="0" cellpadding="0" class="'+bC+'">'+"<tbody></tbody>"+"</table>",ch="<tr></tr>",a5='<td class="'+bX+'"><div></div></td>',Z='<span class="'+[f,l].join(V)+'"></span>',J='<span class="'+[f,ct].join(V)+'"></span>';var az=b6.Component.create({NAME:cx,ATTRS:{bodyContent:{value:bG},name:{value:bD},headerDateFormat:{value:"%a"},navigationDateFormat:{value:"%b %Y"},scrollable:{value:false},monthContainerNode:{valueFn:function(){return b6.Node.create(cl);}},headerTableNode:{valueFn:function(){return b6.Node.create(G);}},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},tableGridNode:{valueFn:"_valueTableGridNode"}},HTML_PARSER:{tableGridNode:O(bO+bc,7),colHeaderDaysNode:O(bO+x,7),monthContainerNode:bO+h,headerTableNode:bO+cw},EXTENDS:b6.SchedulerView,prototype:{evtDateStack:null,evtDataTableStack:null,initializer:function(){var A=this;var cI=A.get(r);A.evtDateStack={};A.evtDataTableStack={};A.colHeaderDaysNode=A.get(b8);A.headerTableNode=A.get(cB);A.monthContainerNode=A.get(a7);A.tableGridNode=A.get(D);A.dayHeaderColNode=A.headerTableNode.one(bO+a3);
A.monthRows=A.monthContainerNode.all(bO+bY);A.tableGridCols=A.tableGridNode.all(e);},renderUI:function(){var A=this;A.colHeaderDaysNode.appendTo(A.dayHeaderColNode);A.monthRows.each(function(cK,cJ){var cI=A.tableGridNode.item(cJ);cK.append(cI.toggleClass(co,(cJ==0)));});},buildEventsTable:function(cI,cN){var cT=this;var cQ=5;var cK=aq.clearTime(cT._findCurrentMonthEnd());var cS=aq.clearTime(cT._findCurrentMonthStart());var cP=String(cS.getTime()).concat(cI.getTime()).concat(cN.getTime());var cO=cT.evtDataTableStack[cP];if(!cO){cO=b6.Node.create(bS);var cR=cO.one(bt);var cL=b6.Node.create(ch);cT.loopDates(cI,cN,function(cV,cU){var cW=b6.Node.create(a5);cW.addClass(aV).toggleClass(af,(cU==0)).toggleClass(S,aq.isToday(cV)).toggleClass(C,aq.isToday(aq.subtract(cV,aq.DAY,1))).toggleClass(cy,aq.isToday(aq.subtract(cV,aq.WEEK,1)));if(aq.before(cV,cS)||aq.after(cV,cK)){cW.addClass(a0);}cL.append(cW.setContent(cV.getDate()));});cR.append(cL);for(var A=0;A<cQ;A++){var cM=0;var cJ=b6.Node.create(ch);cT.loopDates(cI,cN,function(cZ,cX){if(cM<=cX){var cY=cT.getIntersectEvents(cZ),cV=cY[A];var c0=b6.Node.create(a5);if(cV){var cU=c0.one(X);var cW=cT._getEvtSplitInfo(cV,cI,cN);c0.attr(W,cW.colspan);cU.addClass(bn).setContent(cT._getEvtLabel(cV));if(cW.left){cU.addClass(d).prepend(Z);}if(cW.right){cU.addClass(bQ).append(J);}if(cV.get(cp)){cU.addClass(p);}cM+=cW.colspan;}else{cM++;}cJ.append(c0);}});cR.append(cJ);}cT.evtDataTableStack[cP]=cO;}return cO;},flushViewCache:function(){var A=this;A.evtDateStack={};A.evtDataTableStack={};},getIntersectEvents:function(cI){var A=this;var cK=A.get(r);var cJ=String(cI.getTime());if(!A.evtDateStack[cJ]){A.evtDateStack[cJ]=cK.getIntersectEvents(cI);}return A.evtDateStack[cJ];},loopDates:function(A,cK,cN,cO,cM){var cP=this;var cI=aq.clone(A);var cJ=cK.getTime();for(var cL=0;cI.getTime()<=cJ;cL++){cN.apply(cP,[cI,cL]);cI=aq.add(cI,(cO||aq.DAY),(cM||1));}},plotEvents:function(){var cI=this;var cJ=cI._findCurrentMonthStart();var A=aq.safeClearTime(cI._findFirstDayOfWeek(cJ));cI.bodyNode.all(bO+bC).remove();cI.monthRows.each(function(cN,cL){var cK=aq.add(A,aq.WEEK,cL);var cO=aq.add(cK,aq.DAY,aL-1);var cM=cI.buildEventsTable(cK,cO);if(cL==0){cM.addClass(aZ);}cN.append(cM);});},syncStdContent:function(){var A=this;A.setStdModContent(b2.BODY,A.monthContainerNode.getDOM());A.setStdModContent(b2.HEADER,A.headerTableNode.getDOM());},syncGridUI:function(){var cP=this;var cJ=cP.getToday();var cI=cP.get(r);cP.tableGridCols.removeClass(b);if(aq.isSameMonth(cJ,cI.get(bb))){var A=cI.get(cb);var cJ=cP.getToday();var cL=cP._findCurrentMonthStart();var cN=cP._findFirstDayOfWeek(cJ);var cK=aq.getWeekNumber(cJ,A)-aq.getWeekNumber(cL,A);var cO=(cJ.getDate()-cN.getDate());var cM=cP.tableGridNode.item(cK).all(e).item(cO);if(cM){cM.addClass(b);}}},adjustCurrentDate:function(){var A=this;var cI=A.get(r);cI.set(bb,A._findCurrentMonthStart());},getNextDate:function(){var A=this;var cJ=A.get(r);var cI=cJ.get(bb);return aq.add(cI,aq.MONTH,1);},getPrevDate:function(){var A=this;var cJ=A.get(r);var cI=cJ.get(bb);return aq.subtract(cI,aq.MONTH,1);},syncDaysHeaderUI:function(){var cJ=this;var cM=cJ.get(r);var cK=cM.get(bb);var cI=cJ.get(a9);var A=cJ.get(ay);var cL=cJ._findFirstDayOfWeek(cK);cJ.colHeaderDaysNode.all(X).each(function(cP,cO){var cN=aq.add(cL,aq.DAY,cO);var cQ=b6.DataType.Date.format(cN,{format:cI,locale:A});cP.html(cQ);});},_findCurrentMonthEnd:function(){var A=this;var cJ=A.get(r);var cI=cJ.get(bb);return aq.findMonthEnd(cI);},_findCurrentMonthStart:function(){var A=this;var cJ=A.get(r);var cI=cJ.get(bb);return aq.findMonthStart(cI);},_findFirstDayOfWeek:function(cJ){var A=this;var cK=A.get(r);var cI=cK.get(cb);return aq.getFirstDayOfWeek(cJ,cI);},_getEvtLabel:function(cJ){var cI=this;var cK=cJ.get(aA);var A=cJ.get(b9);return[A.getHours(),bJ,cK.getHours(),V,cJ.get(aM)].join(bG);},_getEvtSplitInfo:function(cO,A,cM){var cP=this;var cI=cO.getClearStartDate();var cN=cO.getClearEndDate();var cL=cO.getDaysDuration();var cK={};var cJ=1;if(aq.after(cI,A)){cJ=Math.min(cL,Math.abs(aq.getDayOffset(cM,cI))+1);if(cJ>1){cK.right=true;}}else{cJ=Math.abs(aq.getDayOffset(cN,A)+1);if(cJ>1){cK.left=true;}}cK.colspan=Math.min(cJ,aL);if(cJ>=aL){cK.right=true;cK.left=true;}return cK;},_uiSetCurrentDate:function(cI){var A=this;A.syncDaysHeaderUI();A.syncGridUI();},_valueColHeaderDaysNode:function(){var A=this;return A._valueNodeList(aL,N);},_valueTableGridNode:function(){var A=this;return A._valueNodeList(aL,bu);},_valueNodeList:function(cK,cJ){var A=this;var cI=[];while(cK--){cI.push(cJ);}return b6.NodeList.create(cI.join(bG));}}});b6.SchedulerMonthView=az;},"1.5.0",{skinnable:true,requires:["aui-scheduler-event","aui-calendar","aui-button-item","dd-drag","dd-delegate","dd-drop","dd-constrain"]});