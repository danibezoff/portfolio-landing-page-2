function getRandomArbitrary(t,o){return Math.random()*(o-t)+t}var ts=Math.round((new Date).getTime()/1e3);$(function(){$(window).scroll(function(){var t=$(window).scrollTop(),o=$("#mainHeader");10<t?o.addClass("is-solid"):o.removeClass("is-solid")}),$(window).trigger("scroll");var e=$("#headerLinkHome"),n=$("#headerLinkServices"),i=$("#headerLinkWorks"),s=$("#headerLinkTestimonials"),a=$("#headerLinkPlans"),r=$("#headerLinkContact");function c(t){[e,n,i,s,a,r].forEach(function(t){t.removeClass("active")}),t.addClass("active")}function t(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}$(window).scroll(function(){var o=$(window).scrollTop();function t(t){return o>t.offset().top-120}c(e),t($("#sectionServices"))&&c(n),t($("#sectionWorks"))&&c(i),t($("#sectionTestimonials"))&&c(s),t($("#sectionPricing"))&&c(a),t($("#sectionContact"))&&c(r)}),e.click(function(){$("html,body").animate({scrollTop:$("body").offset().top},1e3)}),n.click(function(){$("html,body").animate({scrollTop:$("#sectionServices").offset().top-100},"slow")}),i.click(function(){$("html,body").animate({scrollTop:$("#sectionWorks").offset().top-50},"slow")}),s.click(function(){$("html,body").animate({scrollTop:$("#sectionTestimonials").offset().top-100},"slow")}),a.click(function(){$("html,body").animate({scrollTop:$("#sectionPricing").offset().top-100},"slow")}),r.click(function(){$("html,body").animate({scrollTop:$("#sectionContact").offset().top-50},"slow")}),$("#carouselWorks").slick({autoplay:!0,centerMode:!0,slidesToShow:3,responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]});var o=$("#statsDownloads"),l=$("#statsAwards"),d=$("#statsLiked"),f=$("#statsRecommended"),u=Math.round((ts-1528239500)/2),m=Math.round((ts-1528239500)/50),p=Math.round((ts-1528239500)/5),h=Math.round((ts-1528239500)/10);function w(){setTimeout(function(){u++,o.text(t(u))},getRandomArbitrary(400,3600))}function v(){setTimeout(function(){m++,l.text(t(m))},getRandomArbitrary(1e4,1e5))}function g(){setTimeout(function(){p++,d.text(t(p))},getRandomArbitrary(1e3,1e4))}function k(){setTimeout(function(){h++,f.text(t(h))},getRandomArbitrary(5e3,15e3))}o.text(t(u)),l.text(t(m)),d.text(t(p)),f.text(t(h)),w(),v(),g(),k(),setInterval(w,2e3),setInterval(v,5e4),setInterval(g,5e3),setInterval(k,1e4),$('[data-toggle="popover"]').popover({animation:!1,container:"body",trigger:"manual"}),$('[data-toggle="popover"]').popover("show")});