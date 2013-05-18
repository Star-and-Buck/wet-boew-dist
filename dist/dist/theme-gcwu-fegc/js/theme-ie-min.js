/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.2-development Build: 2013-05-18 03:06 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-fegc",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,gridsmenu:null,menu:null,favicon:{href:"images/favicon-mobile.png",rel:"apple-touch-icon",sizes:"57x57 72x72 114x114 144x144 150x150"},init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");b.gridsmenu=pe.main.find(".module-menu-section");var j=pe.menu.navcurrent(b.menubar,b.bcrumb),e=j.parents("div.mb-sm"),h,i,f=pe.mobile,k=(f?["gcwu-wmms"]:["gcwu-wmms","gcwu-sig"]),l,g,d=pe.print,m=b.sft.length!==0;if(!pe.svg||pe.svgfix){i=k.length;while(i--){l=document.getElementById(k[i]);if(l!==null){g=l.getElementsByTagName("object");if(g.length>0){g=g[0];g.parentNode.innerHTML=g.parentNode.innerHTML.replace(/<object[\s\S]*?\/object>/i,((d||!m)?g.innerHTML:g.innerHTML.replace(".png","-w.png")))}else{if(m){h=l.getElementsByTagName("img");if(h.length>0){h=h[0];h.src=(d?h.src:h.src.replace(".png","-w.png"))}}}}}}if(e.length!==0){e.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){j=pe.menu.navcurrent(pe.secnav,b.bcrumb);e=j.parents("ul");e.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){j=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var z,Q="",e,p,Z=pe.dic.get("%settings"),D=pe.dic.get("%hyphen")+pe.dic.get("%main-page"),E,u,f,n,X,ac="",w='<a data-role="button" data-iconpos="notext"',G=' data-rel="popup" data-position-to="window"',r=w+G,H='<div data-role="popup" data-overlay-theme="a"',K='<div data-role="header"',ab=K+"><h1>",F=' data-theme="c" class="ui-corner-all">',s=K+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',Y=w+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",T=r+' data-icon="back" class="ui-btn-left"',R=">"+pe.dic.get("%back")+"</a>",aa="</div></div>",q='<ul data-role="listview"',A="",N,m,v,t,M,g,d,W,V,x,o,O,J,k,C=c(document),S,l,B,P,L,U,I,y=typeof wet_boew_mobile_view!=="undefined"&&wet_boew_mobile_view.header_fixed;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");u=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");z=H+' id="jqm-wb-mb">'+ab+e+"</h1>"+Y+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){J=b.bcrumb[0];N=J.getElementsByTagName("a");if(N.length!==0){S=N[0].href}z+='<section><div id="jqm-mb-location-text">'+J.innerHTML+"</div></section>"}else{z+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){Q+="<section><div><h2>"+u.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){Q+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}z+='<div id="jqm-mb-menu"></div></nav></div></div></div>';ac+=z;b.menu=Q;A+=r+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){p=pe.dic.get("%search");f=b.search[0];n=f.innerHTML;f=f.getElementsByTagName("input");x=f.length;while(x--){f[x].setAttribute("data-role","none")}X=H+' id="jqm-wb-search">'+ab+p+"</h1>"+Y+'</div><div data-role="content"><div>'+n.substring(n.indexOf("<form"))+"</div></div></div>";ac+=X;A+=r+' data-icon="search" href="#jqm-wb-search">'+p+"</a>"}l='<div data-role="header"'+(y?' data-position="fixed"':"")+'><div class="ui-title"><div></div></div><map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof S!=="undefined"){l+=w+' href="'+S+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){l+=w+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(A.length!==0){l+=A}l+=r+' href="#popupSettings" data-icon="gear">'+Z+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(l);b.gcnb.find(".ui-title").append(document.getElementById("gcwu-wmms"));b.title[0].className+=" ui-bar-b";I=document.getElementById("wb-session");t=b.gcnb.find('li[id*="-lang"]');E=H+' id="popupSettings"'+F;E+=s+Z+"</h1>"+Y+"</div>";E+=h+q+">";if(I!==null){P=I.getElementsByClassName("settings");for(W=0,x=P.length;W!==x;W+=1){L=P[W].getElementsByTagName("a")[0];E+='<li><a href="'+L.getAttribute("href")+'">'+L.innerHTML+"</a></li>"}U=I.getElementsByClassName("session")[0].getElementsByTagName("a")[0];E+='<li><a href="'+U.getAttribute("href")+'">'+U.innerHTML+"</a></li>"}if(t.length!==0){E+='<li><a href="#popupLanguages"'+G+">"+pe.dic.get("%languages")+"</a></li>"}E+='<li class="ui-corner-bottom"><a href="#popupAbout"'+G+">"+pe.dic.get("%about")+"</a></li>";E+="</ul>"+aa;if(t.length!==0){E+=H+' id="popupLanguages"'+F;E+=s+pe.dic.get("%languages")+"</h1>"+T+' href="#popupSettings"'+R+Y+"</div>";E+=h+q+">";if(t.filter('[id*="-lang-current"]').length===0){E+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}O=t.get();x=O.length;W=x;while(W--){J=O[W];m=J.getElementsByTagName("a")[0];E+="<li"+(W===0?' class="ui-corner-bottom"':"");if(J.id.indexOf("-lang-current")!==-1){E+='><a href="javascript:;" class="ui-disabled">'+J.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{E+='><a href="'+m.href+'" lang="'+m.getAttribute("lang")+'">'+m.innerHTML+"</a></li>"}}E+="</ul>"+aa}E+=H+' id="popupAbout"'+F;E+=s+pe.dic.get("%about")+"</h1>"+T+' href="#popupSettings"'+R+Y+"</div>";E+=h;E+='<div class="site-app-title"><div class="ui-title">'+b.title[0].getElementsByTagName("a")[0].innerHTML+"</div></div>";J=pe.main.find("#gcwu-date-mod").children();if(J.length!==0){d=J[1];if(d.getElementsByTagName("time").length===0){E+='<div class="app-version">'+J[0].innerHTML+" "+d.innerHTML+"</div>"}}E+=q+' data-inset="true">';N=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(W=0,x=N.length;W!==x;W+=1){m=N[W];E+='<li><a href="'+m.href+'">'+m.innerHTML+"</a></li>"}O=b.sft.find(".gcwu-col-head");for(W=0,x=O.length;W!==x;W+=1){J=O.eq(W);m=J.children("a");k=J.find("+ ul, + address ul");d=m.length!==0?m[0].innerHTML:J[0].innerHTML;if(k.length!==0){E+='<li data-role="collapsible" data-inset="false"><h2>'+d+'</h2><ul data-role="listview">';N=k[0].getElementsByTagName("a");for(V=0,o=N.length;V!==o;V+=1){J=N[V];E+='<li><a href="'+J.href+'">'+J.innerHTML+"</a></li>"}if(m.length!==0){E+='<li><a href="'+m.attr("href")+'">'+m.html()+D+"</a></li>"}E+="</ul></li>"}else{if(m.length!==0){E+="<li"+(W===(x-1)?' class="ui-corner-bottom"':"")+'><a href="'+m.href+'">'+m.html()+"</a></li>"}}}E+="</ul></div>"+aa;pe.bodydiv.append(ac+E)}else{t=document.getElementById("gcwu-lang");if(t!==null){O=t.getElementsByTagName("li");M='<div data-role="navbar"><ul>';for(W=0,x=O.length;W<x;W+=1){J=O[W];m=J.getElementsByTagName("a")[0];M+='<li><a href="'+m.href+'"'+(J.hasAttribute("lang")?' lang="'+J.getAttribute("lang")+'"':"")+' data-theme="a">'+m.innerHTML+"</a></li>"}M+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=M;t=document.getElementById("gcwu-other-lang");if(t!==null){t.parentNode.removeChild(t)}}d=document.getElementById("gcwu-tc");if(d!==null){O=d.getElementsByTagName("li");v='<ul class="ui-grid-a">';for(W=0,x=O.length;W<x;W+=1){J=O[W];m=J.getElementsByTagName("a")[0];v+='<li class="ui-block-'+(W%2!==0?"b":"a")+'"><a href="'+m.href+'"'+(J.hasAttribute("lang")?' lang="'+J.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+m.innerHTML+"</a></li>"}v+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=v}B=document.getElementById("gcwu-wmms");if(B!==null){pe.footer[0].getElementsByTagName("footer")[0].appendChild(B.cloneNode(true));B.parentNode.removeChild(B)}}C.on("pagecreate",function(){var ag=b.gcnb.find("#gcwu-mnavbar"),ah=pe.bodydiv.find("#jqm-mb-menu"),af,ad,ae,j;if(ag.length!==0){if(!ag.hasClass("ui-controlgroup")){ag.controlgroup()}ag.removeClass("wb-hide");if(ah.length!==0){ah.append(b.menu);ag.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){ah.trigger("create");af=ah[0].getElementsByClassName("ui-controlgroup");j=af.length;while(j--){J=af[j];ae=J.getElementsByTagName("li")[0];if(ae.parentNode.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&ae.className.indexOf("ui-corner-top")===-1){ae.className+=" ui-corner-top"}ad=J.getElementsByClassName("ui-btn");ae=ad[ad.length-1];if(typeof ae!=="undefined"&&ae.className.indexOf("ui-corner-bottom")===-1){ae.className+=" ui-corner-bottom"}}})}}function i(aj,ai,am,al){var ak;c.mobile.showPageLoadingMsg();ak=c.mobile.transitionHandlers.simultaneous("pop",ai,am,al);ak.done(function(){c.mobile.hidePageLoadingMsg()});return ak}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});C.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));