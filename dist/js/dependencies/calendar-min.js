/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release-development Build: 2013-04-08 02:21 AM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.fn.calendar={create:function(g,l,j,i,c,o){var f,d=b("#"+g),n,m=new Date().setFullYear(l-1,j,1),h=new Date().setFullYear(l+1,j,1),e,p,k;d.addClass("cal-container");d.removeClass("cal-container-extended");if(typeof c==="object"){if(typeof c.getFullYear==="undefined"){c=m}}else{if(typeof c==="string"){c=a.date.from_iso_format(c);if(c===null){c=m}}else{c=m}}if(typeof o==="object"){if(typeof o.getFullYear==="undefined"){o=h}}else{if(typeof o==="string"){o=a.date.from_iso_format(o);if(o===null){o=h}}else{o=h}}if(l>o.getFullYear()||(l===o.getFullYear()&&j>o.getMonth())){l=o.getFullYear();j=o.getMonth()}else{if(l<c.getFullYear()||(l===c.getFullYear()&&j<c.getMonth())){l=c.getFullYear();j=c.getMonth()}}if(d.children("#cal-"+g+"-cnt").length>0){d.children("#cal-"+g+"-cnt").find("#cal-"+g+"-weekdays, .cal-month, #cal-"+g+"-days").remove();f=d.children("#cal-"+g+"-cnt")}else{f=b('<div id="cal-'+g+'-cnt" class="cal-cnt"></div>');d.append(f)}if(d.children("#cal-"+g+"-cnt").children(".cal-header").length>0){n=d.children("#cal-"+g+"-cnt").children(".cal-header")}else{n=b('<div class="cal-header"></div>')}n.prepend('<div class="cal-month">'+a.dic.get("%calendar-monthNames")[j]+" "+l+"</div>");if(i){e=a.fn.calendar.createMonthNav(g,l,j,c,o);if(b("#cal-"+g+"-monthnav").length<1){n.append(e)}}f.append(n);f.append(a.fn.calendar.createWeekdays(g));p=a.fn.calendar.createDays(g,l,j);k=p.children("ol.cal-day-list").children("li");f.append(p);d.trigger("calendarDisplayed",[l,j,k])},createMonthNav:function(q,o,m,h,c){var e=b("#cal-"+q+"-monthnav"),s,k,r,g,l,p,d,f,j,i=a.dic.get("%calendar-monthNames");if(e.length===0){e=b('<div id="cal-'+q+'-monthnav"></div>')}for(f=0;f<2;f+=1){l=true;p=null;d=null;switch(f){case 0:s="prevmonth";k=a.dic.get("%calendar-previousMonth");if(m>0){r=m-1;g=o}else{r=11;g=o-1}if((r<h.getMonth()&&g<=h.getFullYear())||g<h.getFullYear()){l=false}break;case 1:if(b("#"+q).children("#cal-"+q+"-cnt").children(".cal-header").find(".cal-goto").length<1){e.append(a.fn.calendar.createGoToForm(q,o,m,h,c))}s="nextmonth";k=a.dic.get("%calendar-nextMonth");if(m<11){r=m+1;g=o}else{r=0;g=o+1}if((r>c.getMonth()&&g>=c.getFullYear())||g>c.getFullYear()){l=false}break}if(e.children(".cal-"+s).length>0){p=e.children(".cal-"+s)}if(l){j=k+i[r]+" "+g;if(p){d=p.children("a").unbind();d.children("img").attr("alt",j)}else{p=b('<div class="cal-'+s+'"></div>');d=b('<a href="javascript:;" role="button"><img class="image-actual" src="'+pe.add.liblocation+"images/calendar/"+s.substr(0,1)+'.png" alt="'+j+'" /></a>');p.append(d);if(f===0){e.prepend(p)}else{e.append(p)}}d.bind("click",{calID:q,year:g,month:r,mindate:h,maxdate:c},a.fn.calendar.buttonClick)}else{if(p){p.remove()}}}return e},buttonClick:function(d){var c=b(this).parent().parent(),e=b(this).parent().attr("class");a.fn.calendar.create(d.data.calID,d.data.year,d.data.month,true,d.data.mindate,d.data.maxdate);if(c.find("."+e).length<1){a.focus(c.find(".cal-goto-link a"))}else{a.focus(c.find("."+e+" a"))}},yearChanged:function(d){var m=parseInt(b(this).val(),10),f=d.data.minDate,c=d.data.maxDate,j=d.data.monthField,k=0,e=11,l,h=a.dic.get("%calendar-monthNames"),g;if(m===f.getFullYear()){k=f.getMonth()}if(m===c.getFullYear()){e=c.getMonth()}l=j.val();while(j.children("option").length){j.get(0).remove(0)}for(g=k;g<=e;g+=1){j.append('<option value="'+g+'"'+((g===l)?' selected="selected"':"")+">"+h[g]+"</option>")}},createGoToForm:function(r,k,t,g,j){var f=b('<div class="cal-goto"></div>'),e=b('<form id="cal-'+r+'-goto" role="form" style="display:none;" action=""><fieldset><legend>'+a.dic.get("%calendar-goToTitle")+"</legend></fieldset></form>"),m,q,o,h,i,n,v,p,c,s,u,d,l;e.submit(function(){a.fn.calendar.onGoTo(r,g,j);return false});m=e.children("fieldset");q=b('<div class="cal-goto-year"></div>');o=b('<select title="'+a.dic.get("%calendar-goToYear")+'" id="cal-'+r+'-goto-year"></select>');for(h=g.getFullYear(),i=j.getFullYear();h<=i;h+=1){o.append(b('<option value="'+h+'"'+(h===k?' selected="selected"':"")+">"+h+"</option>"))}q.append(o);m.append(q);n=b('<div class="cal-goto-month"></div>');v=b('<select title="'+a.dic.get("%calendar-goToMonth")+'" id="cal-'+r+'-goto-month"></select>');n.append(v);m.append(n);o.bind("change",{minDate:g,maxDate:j,monthField:v},a.fn.calendar.yearChanged);o.change();p=b('<div class="cal-goto-button"></div>');c=b('<input type="submit" class="button button-accent" value="'+a.dic.get("%calendar-goToButton")+'" />');p.append(c);m.append(p);s=b('<div class="cal-goto-button"></div>');u=b('<input type="button" class="button button-dark" value="'+a.dic.get("%calendar-cancelButton")+'" />');u.click(function(){a.fn.calendar.hideGoToForm(r)});s.append(u);m.append(s);d=b('<p class="cal-goto-link" id="cal-'+r+'-goto-link"></p>');l=b('<a href="javascript:;" role="button" aria-controls="cal-'+r+'-goto" aria-expanded="false">'+a.dic.get("%calendar-goToLink")+"</a>");l.on("click",function(){a.fn.calendar.showGoToForm(r)});d.append(l);f.append(d);f.append(e);return f},createWeekdays:function(e){var d=b('<ol id="cal-'+e+'-weekdays" class="cal-weekdays" role="presentation"></ol>'),f,c,g;for(f=0;f<7;f+=1){c=a.dic.get("%calendar-weekDayNames")[f];g=b('<li id="cal-'+e+"-wd"+(f+1)+'" class="cal-wd'+(f+1)+'"><abbr title="'+c+'">'+c.substr(0,1)+"</abbr></li>");if(f===0||f===6){g.addClass="we"}d.append(g)}return d},createDays:function(p,k,u){var f=b('<div id="cal-'+p+'-days" class="cal-days"></div>'),g=b('<ol id="cal-'+p+"-"+u+"_"+k+'" class="cal-day-list"></ol>'),t=new Date(),e,r,i,c,m,o,d,h,s,j=a.dic.get("%calendar-weekDayNames"),n=a.dic.get("%calendar-monthNames"),l=a.dic.get("%calendar-currentDay"),q=(a.language==="fr");t.setFullYear(k,u,1);e=t.getDay();t.setFullYear(k,u+1,0);r=t.getDate()-1;t=new Date();t.getDate();i=0;c=false;for(m=1;m<7;m+=1){for(o=0;o<7;o+=1){if((m===1&&o<e)||(i>r)){d=b('<span class="cal-empty">'+String.fromCharCode(160)+"</span>");h=f}else{i+=1;s=(i===t.getDate()&&u===t.getMonth()&&k===t.getFullYear());if(i===1){f.append(g)}if(i>r){c=true}d=b('<li><div><span class="wb-invisible">'+j[o]+(q?(" </span>"+i+'<span class="wb-invisible"> '+n[u].toLowerCase()+" "):(" "+n[u]+" </span>"+i+'<span class="wb-invisible"> '))+k+(s?l:"")+"</span></div></li>");h=g}d.attr("id","cal-"+p+"-w"+m+"d"+(o+1)).addClass("cal-w"+m+"d"+(o+1)+" cal-index-"+i);if(o===0||o===6){d.addClass("cal-we")}if(s){d.addClass("cal-currentday")}h.append(d)}if(c){break}}return f},showGoToForm:function(c){b("#cal-"+c+"-monthnav").children(".cal-prevmonth, .cal-nextmonth").addClass("wb-invisible").children("a").attr("aria-hidden","true");var e=b("#cal-"+c+"-goto-link"),d=b("#cal-"+c+"-goto");e.stop().slideUp(0);d.stop().slideDown(0).queue(function(){a.focus(b(this).find(":input:eq(0)"))});e.children("a").attr("aria-hidden","true").attr("aria-expanded","true");b("#"+c).addClass("cal-container-extended")},hideGoToForm:function(c){var e=b("#cal-"+c+"-goto-link"),d=b("#cal-"+c+"-goto");d.stop().slideUp(0).queue(function(){b("#cal-"+c+"-monthnav").children(".cal-prevmonth, .cal-nextmonth").removeClass("wb-invisible").children("a").attr("aria-hidden","false");b("#"+c).removeClass("cal-container-extended")});e.stop().slideDown(0).children("a").attr("aria-hidden","false").attr("aria-expanded","false")},onGoTo:function(e,g,i){var d=b("#"+e),c=d.find("fieldset"),h=parseInt(c.find(".cal-goto-month select option:selected").val(),10),f=parseInt(c.find(".cal-goto-year select").val(),10);if(!(h<g.getMonth()&&f<=g.getFullYear())&&!(h>i.getMonth()&&f>=i.getFullYear())){a.fn.calendar.create(e,f,h,true,g,i);a.fn.calendar.hideGoToForm(e);a.focus(b("#cal-"+e+"-days").find("a:eq(0)"))}}};window.pe=a;return a}(jQuery));