/*
 * jQuery Ajax Page Change Plugin 1.0.0
 * https://github.com/grillorafael/jquery-ajax-page-change
 *
 * Copyright 2013, Rafael Grillo
 * http://rgrillo.com
 */(function(e){e.fn.ajaxLinks=function(t,n){var r="title",i="<title>",s="</title>",o={replaceSelector:"#content",searchSelector:"#content",loaderSelector:"#loadingContent",linkSelector:"a[data-link='ajax']",enableAnalyticsTrack:!1,enableUrlChange:!0,changeTitle:!0,titleSelector:"title",transitionEffect:"none",minLoadTime:800};n||(n=function(){});var u=jQuery.extend(o,t);e(window).resize(function(){e(u.loaderSelector).css({position:"absolute",left:(e(window).width()-e(u.loaderSelector).outerWidth())/2,top:(e(window).height()-e(u.loaderSelector).outerHeight())/2})});e(window).resize();e(u.loaderSelector).hide();return this.each(function(t,o){var a=jQuery(o),f=a.find(u.linkSelector).get();e.each(f,function(t,o){e(o).attr("onclick","return false");e(o).click(function(t){u.transitionEffect!="none"&&(u.transitionEffect=="fade"?e(u.replaceSelector).animate({opacity:0},1e3):u.transitionEffect=="slideVertical"&&e(u.replaceSelector).slideToggle(1e3));e(u.loaderSelector).fadeIn();var o=new Date,a=e(t.target).attr("href");u.enableAnalyticsTrack&&_gaq.push(["_trackPageview",a]);e.get(a,function(t){var f=new Date,l=f.getTime()-o.getTime(),c=u.minLoadTime;l>=u.minLoadTime?c=0:c=u.minLoadTime-l;setTimeout(function(){var o=e(t);e(u.loaderSelector).fadeOut(function(){e(u.replaceSelector).html(o.find(u.searchSelector).html());u.transitionEffect!="none"&&(u.transitionEffect=="fade"?e(u.replaceSelector).animate({opacity:1},1e3):u.transitionEffect=="slideVertical"&&e(u.replaceSelector).slideToggle(1e3));if(u.changeTitle){var n="";if(u.titleSelector==r){var f=t.indexOf(i)+i.length,l=t.indexOf(s);n=t.substring(f,l)}else n=o.find(u.titleSelector).text();document.title=n}if(u.enableUrlChange){console.log(a);window.history.pushState(a,"Title",a)}});n()},c)})})})})}})(jQuery);