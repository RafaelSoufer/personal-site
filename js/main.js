jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        // Menu active on scroll

        // Cache selectors
var lastId,
topMenu = $("#mainNav"),
topMenuHeight = topMenu.outerHeight()+1,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
   if (item.length) { return item; }
});



// Bind to scroll
$(window).scroll(function(){
  // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight;
  
  // Get id of current scroll item
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";
  
  if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("menu-active")
        .end().filter("[href=#"+id+"]").parent().addClass("menu-active");
  }                   
});

        //***************************************** */



        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // custom code

  // Loader script -->

    //paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function(load) {
		// Animate loader off screen
    setTimeout(function(load){ $(".se-pre-con").fadeOut("slow");}, 4500);
		
	});
 
  


  // Diver img script -->
 

  // Quote generator script-->

  $(document).ready(function(){
  showQuote();
  
  $("#requestquote").on("click", function()
  {
    showQuote();
  })
  
  function showQuote()
  {
    var quotes = ["“Have no fear of perfection—you’ll never reach it.” ^Salvador Dali","“Live in the leading—the spaces in between the rules.” ^Stefan Mumaw","“Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.” ^Irene Au","“Digital design is like painting, except the paint never dries.” ^Neville Brody","“The alternative to good design is always bad design. There is no such thing as no design.” ^Adam Judge","“Design is not just what it looks like and feels like. Design is how it works.” ^Steve Jobs","“It’s easier to ask forgiveness than it is to get permission.” ^Grace Hopper","“Creativity is a highfalutin word for the work I have to do between now and Tuesday.” ^Ray Kroc","“Creativity is nothing but a mind set free.” ^Torrie T. Asai","“Art is anything you can get away with.” ^Marshal McLuhan","Design transcends agenda. It speaks to the politics of optimism.” ^Paul Bennett","“It’s through mistakes that you actually can grow. You have to get bad in order to get good.” ^Paula Scher","“Get rid of everything that is not essential to making a point.” ^Christoph Niemann","“The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.” ^Charles Eames","“Graphic design will save the world right after rock and roll does.” ^David Carson","“Creativity is nothing but the way to solve new problems.” ^Unknown","“Design can be art. Design can be simple. That’s why it’s so complicated.” ^Paul Rand","“Simplicity is the ultimate sophistication.” ^Leonardo da Vinci","“Whitespace is like air: it is necessary for design to breathe.” ^Wojciech Zieliński","“Leave it better than you found it.” ^Bruce A. Nordstrom","“Look at usual things with unusual eyes.” ^Vico Magistretti","“People ignore designs that ignore people” ^Frank Chimero","“You don’t have to be ‘a creative’ to be creative.” ^Drory Ben-Menachem","“I love deadlines. I like the whooshing sound they make as they fly by.” ^Douglas Adams","“I love deadlines. I like the whooshing sound they make as they fly by.” ^Douglas Adams","“Design is thinking made visual.” ^Saul Bass","“Good design is honest.” ^Dieter Rams","“The best way to predict the future is to create it” ^Abraham Lincoln","“To design is much more than simply to assemble, to order, or even to edit: it is to add value and meaning, to illuminate, to simplify, to clarify, to modify, to dignify, to dramatize, to persuade, and perhaps even to amuse. To design is to transform prose into poetry.” ^Paul Rand","“Recognizing the need is the primary condition for design.” ^Charles Eames","“How well we communicate is determined not by how well we say things, but how well we are understood.” ^Andrew Grove","“Good design is obvious. Great design is transparent.” ^Joe Sparano","“Where do new ideas come from? The answer is simple: differences. Creativity comes from unlikely juxtapositions.” ^Nicholas Negroponte","“If you’re going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It’s the only good fight there is.” ^Paraphrased from Charles Bukowski’s poem “Roll the Dice”","“The goal of a designer is to listen, observe, understand, sympathize, empathize, synthesize, and glean insights that enable him or her to ‘make the invisible visible.’ ^Hillman Curtis","“Styles come and go. Good design is a language, not a style.” ^Massimo Vignelli","“Those who don’t build must burn.” ^Ray Bradbury","“It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives.” ^Don Norman","“If you think good design is expensive, you should look at the cost of bad design.” ^Ralf Speth","“You don’t think your way to creative work. You work your way to creative thinking.” ^George Nelson","“If you do it right, it will last forever.” ^Massimo Vignelli","“I have several times made a poor choice by avoiding a necessary confrontation.” ^John Cleese","“Everything is designed. Few things are designed well.” ^Brian Reed","“If I had asked people what they wanted, they would have said faster horses.” ^Henry Ford","“Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.” ^Kenya Hara","“Design is a solution to a problem. Art is a question to a problem.” ^John Maeda","“There is no design without discipline. There is no discipline without intelligence.” ^Massimo Vignelli","“Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.” ^John Chris Jones","“Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.” ^Antoine de Saint-Exupery","“Leave it better than you found it.” ^Robert Baden-Powell","“There is no such thing as a boring project. There are only boring executions.” ^Irene Etzkorn","“Simplicity is about subtracting the obvious and adding the meaningful.” ^John Maeda","“The time it takes to make a decision increases as the number of alternatives increases.” ^William Edmund Hick","“Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.” ^Steve Jobs","“Simplicity is not the goal. It is the by-product of a good idea and modest expectations.” ^Paul Rand","“Simplicity, wit, and good typography.” ^Michael Bierut","“Design is more important than technology in most consumer applications.” ^Dave McClure","“Practice safe design: Use a concept.” ^Petrula Vrontikis","“They don’t want quarter-inch bits. They want quarter-inch holes.” ^Leo McGinneva","“The future belongs to a different kind of person with a different kind of mind: artists, inventors, storytellers-creative and holistic ‘right-brain’ thinkers whose abilities mark the fault line between who gets ahead and who doesn’t.” ^Daniel Pink","“Only those who attempt the absurd will achieve the impossible.” ^M.C. Escher","“The details are not the details. They make the design.” ^Charles Eames","“Great design is a multi-layered relationship between human life and its environment.” ^Naoto Fukasawa","“Everything should be made as simple as possible, but not simpler.” ^Albert Einstein","“Creativity is only as obscure as your reference.” ^Unknown","“Get in over your head as often and as joyfully as possible.” ^Alexander Isley","Design is so simple. That’s why it’s so complicated.” ^Paul Rand","“Any intelligent fool can make things bigger and more complex. It takes a touch of genius—and a lot of courage—to move in the opposite direction.” ^E. F. Schumacher","“No. I don’t think the Empire had Wookiees in mind when they designed it, Chewie.” ^Han Solo to Chewbacca about the Tydirium imperial shuttle they’re flying","“Any product that needs a manual to work is broken.” ^Elon Musk","“A designer is an emerging synthesis of artist, inventor, mechanic, objective economist, and evolutionary strategist.” ^Buckminster Fuller","“A user interface is like a joke. If you have to explain it, it’s not that good.” ^Martin LeBlanc, Iconfinder","“I would be happy to learn just half the stuff I already thought I learned.” ^Unknown","“Put hot triggers in the path of motivated people.” ^B.J. Fogg","“The work you do while you procrastinate is probably the work you should be doing for the rest of your life.” ^Jessica Hische","“As we decrease uncertainty, we give ourselves permission to increase fidelity.” ^Jonathan Irwin","“Curiosity about life in all its aspects, I think, is still the secret of great creative people.” ^Leo Burnett","“Less is more work.” ^Patric McCue","“Design is an opportunity to continue telling the story, not just to sum everything up.” ^Tate Linden","“Design and art are independent coordinates that provide their greatest satisfactions when experienced simultaneously.” ^Milton Glaser","“When you believe a thing, believe it all the way, implicitly and unquestionably.” ^Walt Disney","“Content precedes design. Design in the absence of content is not design, it’s decoration.” ^Jeffrey Zeldman","“The soul never thinks without an image.” ^Aristotle","“Do good work for good people.” ^Aaron Draplin","“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” ^Aristotle","“Design creates culture. Culture shapes values. Values determine the future.” ^Robert L. Peters","“If you’re not prepared to be wrong, you’ll never come up with anything original.” ^Sir Ken Robinson","“The best ideas come as jokes. Make your thinking as funny as possible.” ^David Ogilvy"];
    var index = Math.floor(Math.random() * (quotes.length + 1));
    var entry = quotes[index];
    entry = entry.split('^');
    $("#quoteContainer").empty();
    $("#quoteContainer").html("<div><p class='quote'>" + entry[0] + "</p><p class='quote author'><span class='wavy-line-text kalam-font'>~ " + entry[1] + "</span></p></div>")
  }
});

  


});
