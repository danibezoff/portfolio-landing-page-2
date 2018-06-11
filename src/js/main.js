function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

var ts = Math.round((new Date()).getTime() / 1000);

$(function () {
  $(window).scroll(function () {
    var top = $(window).scrollTop()
    var header = $('#mainHeader')

    if (top > 10) {
      header.addClass('is-solid')
    } else {
      header.removeClass('is-solid')
    }
  })

  $(window).trigger('scroll')

  var headerLinkHome = $('#headerLinkHome')
  var headerLinkServices = $('#headerLinkServices')
  var headerLinkWorks = $('#headerLinkWorks')
  var headerLinkTestimonials = $('#headerLinkTestimonials')
  var headerLinkPlans = $('#headerLinkPlans')
  var headerLinkContact = $('#headerLinkContact')

  function makeOneHeaderLinkActive(link) {
    [
      headerLinkHome, headerLinkServices, headerLinkWorks,
      headerLinkTestimonials, headerLinkPlans, headerLinkContact
    ].forEach(function(el) {
      el.removeClass('active')
    })
    link.addClass('active')
  }

  $(window).scroll(function () {
    var top = $(window).scrollTop()

    function moreThan(that) { return top > that.offset().top - 120 }

    makeOneHeaderLinkActive(headerLinkHome)
    if (moreThan($('#sectionServices'))) {
      makeOneHeaderLinkActive(headerLinkServices)
    }
    if (moreThan($('#sectionWorks'))) {
      makeOneHeaderLinkActive(headerLinkWorks)
    }
    if (moreThan($('#sectionTestimonials'))) {
      makeOneHeaderLinkActive(headerLinkTestimonials)
    }
    if (moreThan($('#sectionPricing'))) {
      makeOneHeaderLinkActive(headerLinkPlans)
    }
    if (moreThan($('#sectionContact'))) {
      makeOneHeaderLinkActive(headerLinkContact)
    }
  })

  headerLinkHome.click(function() {
    $('html,body').animate({
      scrollTop: $("body").offset().top}, 1000)
  })
  headerLinkServices.click(function() {
    $('html,body').animate({
      scrollTop: $("#sectionServices").offset().top - 100}, 'slow')
  })
  headerLinkWorks.click(function() {
    $('html,body').animate({
      scrollTop: $("#sectionWorks").offset().top - 50}, 'slow')
  })
  headerLinkTestimonials.click(function() {
    $('html,body').animate({
      scrollTop: $("#sectionTestimonials").offset().top - 100}, 'slow')
  })
  headerLinkPlans.click(function() {
    $('html,body').animate({
      scrollTop: $("#sectionPricing").offset().top - 100}, 'slow')
  })
  headerLinkContact.click(function() {
    $('html,body').animate({
      scrollTop: $("#sectionContact").offset().top - 50}, 'slow')
  })

  $('#carouselWorks').slick({
    autoplay: true,
    centerMode: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })

  // STATS
  function numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  var statsDownloads = $('#statsDownloads')
  var statsAwards = $('#statsAwards')
  var statsLiked = $('#statsLiked')
  var statsRecommended = $('#statsRecommended')

  var downloads = Math.round((ts - 1528239500) / 2)
  var awards = Math.round((ts - 1528239500) / 50)
  var liked = Math.round((ts - 1528239500) / 5)
  var recommended = Math.round((ts - 1528239500) / 10)

  statsDownloads.text(numberWithCommas(downloads))
  statsAwards.text(numberWithCommas(awards))
  statsLiked.text(numberWithCommas(liked))
  statsRecommended.text(numberWithCommas(recommended))

  function incDownloads() {
    setTimeout(function () {
      downloads++
      statsDownloads.text(numberWithCommas(downloads))
    }, getRandomArbitrary(400, 3600))
  }
  incDownloads()
  function incAwards() {
    setTimeout(function () {
      awards++
      statsAwards.text(numberWithCommas(awards))
    }, getRandomArbitrary(10000, 100000))
  }
  incAwards()
  function incLiked() {
    setTimeout(function () {
      liked++
      statsLiked.text(numberWithCommas(liked))
    }, getRandomArbitrary(1000, 10000))
  }
  incLiked()
  function incRecommended() {
    setTimeout(function () {
      recommended++
      statsRecommended.text(numberWithCommas(recommended))
    }, getRandomArbitrary(5000, 15000))
  }
  incRecommended()

  setInterval(incDownloads, 2000)
  setInterval(incAwards, 50000)
  setInterval(incLiked, 5000)
  setInterval(incRecommended, 10000)

  $('[data-toggle="popover"]').popover({
    animation: false,
    container: 'body',
    trigger: 'manual'
  })
  $('[data-toggle="popover"]').popover('show')
})
