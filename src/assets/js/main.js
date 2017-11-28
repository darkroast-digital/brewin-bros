var mq = window.matchMedia( '(max-width: 768px)' );

if (mq.matches) {
  
//
//
// Carousel
//
//

$('.select').first().addClass('is--active');
$('.select').click(function() {
    $('.select').removeClass('is--active');
    $(this).addClass('is--active');

    var thisClass = $(this).attr('class').split(' ')[1];

    var tab = $('.tab');

    tab.removeClass('is--active');
    $('.tab' + '.' + thisClass).addClass('is--active');

    $('.cloud9-item' + '.' + thisClass).click();
});

$("#carousel").Cloud9Carousel( {
    xOrigin: 42,
    xRadius: 100,
    yOrigin: 0,
    yRadius: -70,
    buttonLeft: $("#buttons > .left"),
    buttonRight: $("#buttons > .right"),
    autoPlay: 0,
    bringToFront: true
} );

var loader = $('.loader');

window.onload = function() {
    loader.addClass('is--loaded');
}

} else {
    (function() {
function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.documentElement.scrollLeft -= (delta*14); // Multiplied by 40
    document.body.scrollLeft -= (delta*14); // Multiplied by 40
    e.preventDefault();
}
if (window.addEventListener) {
    // IE9, Chrome, Safari, Opera
    window.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
    // IE 6/7/8
    window.attachEvent("onmousewheel", scrollHorizontally);
}
})();

    var wind1 = new ScrollMagic.Controller({vertical: false });

var wind1tween = new TimelineMax()
        .add([
            TweenMax.fromTo(".wind-1", 1, { width: 0 }, { width: 1000, ease: Sine.easeNone }),
        ]);

var wind1scene = new ScrollMagic.Scene({triggerElement: '.wind-1', duration: '100%', offset: 200})
    .setTween(wind1tween)
    .addTo(wind1);

var wind2 = new ScrollMagic.Controller({vertical: false });

var wind2tween = new TimelineMax()
        .add([
            TweenMax.fromTo(".wind-2", 1, { width: 0 }, { width: 1000, ease: Sine.easeNone }),
        ]);

var wind2scene = new ScrollMagic.Scene({triggerElement: '.wind-2', duration: '100%'})
    .setTween(wind2tween)
    .addTo(wind2);

    var wind3 = new ScrollMagic.Controller({vertical: false });

var wind3tween = new TimelineMax()
        .add([
            TweenMax.fromTo(".wind-3", 1, { width: 0 }, { width: 1000, ease: Sine.easeNone }),
        ]);

var wind3scene = new ScrollMagic.Scene({triggerElement: '.wind-3', duration: '100%'})
    .setTween(wind3tween)
    .addTo(wind3);

var leaf = new ScrollMagic.Controller({vertical: false });


var leaf = new ScrollMagic.Scene({triggerElement: '.leaf', offset: -100})
    .setClassToggle(".leaf", "is--active")
    .addTo(leaf);

var orange = new ScrollMagic.Controller({vertical: false });


var orange = new ScrollMagic.Scene({triggerElement: '.orange', offset: -100})
    .setClassToggle(".orange", "is--active")
    .addTo(orange);

var lemon = new ScrollMagic.Controller({vertical: false });

var lemon = new ScrollMagic.Scene({triggerElement: '.lemon', offset: -100})
    .setClassToggle(".lemon", "is--active")
    .addTo(lemon);

var detoxScene = new ScrollMagic.Controller({vertical: false });

var detoxTL = new TimelineMax()
        .add([
            TweenMax.fromTo(".detox-charcoal", .5, { opacity: 0, y: 50 }, { opacity: 1, y:0, ease: Back.easeOut }),
            TweenMax.fromTo(".detox-detox", .5, { opacity: 0, y: 50 }, { opacity: 1, y:0, ease: Back.easeOut, delay: .2 }),
            TweenMax.staggerFromTo(".chalk span", .1, { opacity: 0, y: 10, }, { opacity: 1, y: 0, ease: Back.easeOut, delay: .3 }, .1),
            TweenMax.staggerFromTo(".detox p", .1, { opacity: 0, y: 10, }, { opacity: 1, y: 0, ease: Sine.easeOut, delay: .3 }, .1),
        ]);

var detox = new ScrollMagic.Scene({triggerElement: '.detox', offset: -100})
    .setTween(detoxTL)
    .addTo(detoxScene);

var teaScene = new ScrollMagic.Controller({vertical: false });

var teaTL = new TimelineMax()
        .add([
            TweenMax.staggerFromTo(".select", .1, { opacity: 0, y: 10, }, { opacity: 1, y: 0, ease: Back.easeOut}, .1),
        ]);

var teaSelectors = new ScrollMagic.Scene({triggerElement: '.tea-select', offset: -100})
    .setTween(teaTL)
    .addTo(teaScene);

var card1 = new ScrollMagic.Controller({vertical: false });

var card1 = new ScrollMagic.Scene({triggerElement: '.card-1', offset: -800})
    .setClassToggle(".card-1", "is--active")
    .addTo(card1);

var card2 = new ScrollMagic.Controller({vertical: false });

var card2Scene = new ScrollMagic.Scene({triggerElement: '.card-2', offset: -800})
    .setClassToggle(".card-2", "is--active")
    .addTo(card2);

var intro = new TimelineMax({paused:true})
        .add([
            TweenMax.fromTo(".intro-logo", .5, { opacity: 0, y: 50 }, { opacity: 1, y:0, ease: Sine.easeNone }),
            TweenMax.fromTo(".activate", .3, { opacity: 0, y: 50, x: 25, rotate: '15deg' }, { opacity: 1, y:0, x: 0, rotate: 0, ease: Back.easeOut, delay: .5 }),
            TweenMax.fromTo(".your", .3, { opacity: 0, y: 50, x: 25, rotate: '15deg' }, { opacity: 1, y:15, x: 0, rotate: 0, ease: Back.easeOut, delay: .8 }),
            TweenMax.fromTo(".inner", .3, { opacity: 0, y: 50, }, { opacity: 1, y: 0, ease: Back.easeOut, delay: 1 }),
            TweenMax.fromTo(".health", .3, { opacity: 0, y: 50, }, { opacity: 1, y: 0, ease: Back.easeOut, delay: 1.1 }),
            TweenMax.fromTo(".freak", .3, { opacity: 0, y: 50, }, { opacity: 1, y: 0, ease: Back.easeOut, delay: 1.2 }),
            TweenMax.staggerFromTo(".intro-slogan h3 span", .1, { opacity: 0, y: 10, }, { opacity: 1, y: 0, ease: Back.easeOut, delay: 1 }, .1),
            TweenMax.fromTo(".scroll-indicator", .3, { opacity: 0, y: 50, }, { opacity: 1, y: 0, ease: Back.easeOut, delay: 1.7 }),
            //TweenMax.fromTo(".intro-bottles", .8, { opacity: 0, x: 50, }, { opacity: 1, x: 0, ease: Sine.easeOut, delay: 1.2 }),
        ]);

var loader = $('.loader');

window.onload = function() {
    intro.play();
    loader.addClass('is--loaded');
}

//
//
// Carousel
//
//


$('.select').first().addClass('is--active');
$('.select').click(function() {
    $('.select').removeClass('is--active');
    $(this).addClass('is--active');

    var thisClass = $(this).attr('class').split(' ')[1];

    var tab = $('.tab');

    tab.removeClass('is--active');
    $('.tab' + '.' + thisClass).addClass('is--active');

    $('.cloud9-item' + '.' + thisClass).click();
});

$("#carousel").Cloud9Carousel( {
    xOrigin: 42,
    xRadius: 175,
    yOrigin: 0,
    yRadius: -100,
    buttonLeft: $("#buttons > .left"),
    buttonRight: $("#buttons > .right"),
    autoPlay: 0,
    bringToFront: true
} );


}

var sidebar = document.querySelector('.sidebar');
var menuTrigger = document.querySelector('.menu-trigger');
var menu = document.querySelector('.menu');
var close = document.querySelector('.menu-close');
var menuLink = $('.menu-content ul li a');

menuTrigger.addEventListener('click', function(e) {
    this.classList.add('is--active');
    menu.classList.add('is--active');
    sidebar.classList.add('is--active');
});

close.addEventListener('click', function(e) {
    menu.classList.remove('is--active');
    sidebar.classList.remove('is--active');
});

menuLink.click(function(e) {
    menu.classList.remove('is--active');
    sidebar.classList.remove('is--active');
});

//
//
// Image Viewer
//
//

jQuery(document).ready(function($){

    var productViewer = function(element) {
        this.element = element;
        this.handleContainer = this.element.find('.product-viewer-handle');
        this.handleFill = this.handleContainer.children('.fill');
        this.handle = this.handleContainer.children('.handle');
        this.imageWrapper = this.element.find('.product-viewer');
        this.slideShow = this.imageWrapper.children('.product-sprite');
        this.frames = this.element.data('frame');
        //increase this value to increase the friction while dragging on the image - it has to be bigger than zero
        this.friction = this.element.data('friction');
        this.visibleFrame = 0;
        this.loaded = true;
        this.animating = false;
        this.xPosition = 0;
        this.loadFrames();
    } 

    productViewer.prototype.loadFrames = function() {
        var self = this,
            imageUrl = this.slideShow.data('image'),
            newImg = $('<img/>');
        this.loading('0.5');
        //you need this to check if the image sprite has been loaded
        newImg.attr('src', imageUrl).load(function() {
            $(this).remove();
            self.loaded = true;
        }).each(function(){
            image = this;
            if(image.complete) {
                $(image).trigger('load');
            }
        });
    }

    productViewer.prototype.loading = function(percentage) {
        var self = this;
        transformElement(this.handleFill, 'scaleX('+ percentage +')');
        setTimeout(function(){
            if( self.loaded ){
                //sprite image has been loaded
                self.element.addClass('loaded');
                transformElement(self.handleFill, 'scaleX(1)');
                self.dragImage();
                if(self.handle) self.dragHandle();
            } else {
                //sprite image has not been loaded - increase self.handleFill scale value
                var newPercentage = parseFloat(percentage) + .1;
                if ( newPercentage < 1 ) {
                    self.loading(newPercentage);
                } else {
                    self.loading(parseFloat(percentage));
                }
            }
        }, 500);
    }
    //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
    productViewer.prototype.dragHandle = function() {
        //implement handle draggability
        var self = this;
        self.handle.on('mousedown vmousedown', function (e) {
            self.handle.addClass('draggable');
            var dragWidth = self.handle.outerWidth(),
                containerOffset = self.handleContainer.offset().left,
                containerWidth = self.handleContainer.outerWidth(),
                minLeft = containerOffset - dragWidth/2,
                maxLeft = containerOffset + containerWidth - dragWidth/2;

            self.xPosition = self.handle.offset().left + dragWidth - e.pageX;

            self.element.on('mousemove vmousemove', function (e) {
                if( !self.animating) {
                    self.animating =  true;
                    ( !window.requestAnimationFrame )
                        ? setTimeout(function(){self.animateDraggedHandle(e, dragWidth, containerOffset, containerWidth, minLeft, maxLeft);}, 100)
                        : requestAnimationFrame(function(){self.animateDraggedHandle(e, dragWidth, containerOffset, containerWidth, minLeft, maxLeft);});
                }
            }).one('mouseup vmouseup', function (e) {
                self.handle.removeClass('draggable');
                self.element.off('mousemove vmousemove');
            });

            e.preventDefault();

        }).on('mouseup vmouseup', function (e) {
            self.handle.removeClass('draggable');
        });
    }

    productViewer.prototype.animateDraggedHandle = function(e, dragWidth, containerOffset, containerWidth, minLeft, maxLeft) {
        var self = this;
        var leftValue = e.pageX + self.xPosition - dragWidth;
        // constrain the draggable element to move inside his container
        if (leftValue < minLeft) {
            leftValue = minLeft;
        } else if (leftValue > maxLeft) {
            leftValue = maxLeft;
        }

        var widthValue = Math.ceil( (leftValue + dragWidth / 2 - containerOffset) * 1000 / containerWidth)/10;
        self.visibleFrame = Math.ceil( (widthValue * (self.frames-1))/100 );

        //update image frame
        self.updateFrame();
        //update handle position
        $('.draggable', self.handleContainer).css('left', widthValue + '%').one('mouseup vmouseup', function () {
            $(this).removeClass('draggable');
        });

        self.animating = false;
    }

    productViewer.prototype.dragImage = function() {
        //implement image draggability
        var self = this;
        self.slideShow.on('mousedown vmousedown', function (e) {
            self.slideShow.addClass('draggable');
            var containerOffset = self.imageWrapper.offset().left,
                containerWidth = self.imageWrapper.outerWidth(),
                minFrame = 0,
                maxFrame = self.frames - 1;

            self.xPosition = e.pageX;

            self.element.on('mousemove vmousemove', function (e) {
                if( !self.animating) {
                    self.animating =  true;
                    ( !window.requestAnimationFrame )
                        ? setTimeout(function(){self.animateDraggedImage(e, containerOffset, containerWidth);}, 100)
                        : requestAnimationFrame(function(){self.animateDraggedImage(e, containerOffset, containerWidth);});
                }
            }).one('mouseup vmouseup', function (e) {
                self.slideShow.removeClass('draggable');
                self.element.off('mousemove vmousemove');
                self.updateHandle();
            });

            e.preventDefault();

        }).on('mouseup vmouseup', function (e) {
            self.slideShow.removeClass('draggable');
        });
    }

    productViewer.prototype.animateDraggedImage = function(e, containerOffset, containerWidth) {
        var self = this;
        var leftValue = self.xPosition - e.pageX;
        var widthValue = Math.ceil( (leftValue) * 100 / ( containerWidth * self.friction ));
        var frame = (widthValue * (self.frames-1))/100;
        if( frame > 0 ) {
            frame = Math.floor(frame);
        } else {
            frame = Math.ceil(frame);
        }
        var newFrame = self.visibleFrame + frame;

        if (newFrame < 0) {
            newFrame = self.frames - 1;
        } else if (newFrame > self.frames - 1) {
            newFrame = 0;
        }

        if( newFrame != self.visibleFrame ) {
            self.visibleFrame = newFrame;
            self.updateFrame();
            self.xPosition = e.pageX;
        }

        self.animating =  false;
    }

    productViewer.prototype.updateHandle = function() {
        if(this.handle) {
            var widthValue = 100*this.visibleFrame/this.frames;
            this.handle.animate({'left': widthValue + '%'}, 200);
        }
    }

    productViewer.prototype.updateFrame = function() {
        var transformValue = - (100 * this.visibleFrame/this.frames);
        transformElement(this.slideShow, 'translateX('+transformValue+'%)');
    }

    function transformElement(element, value) {
        element.css({
            '-moz-transform': value,
            '-webkit-transform': value,
            '-ms-transform': value,
            '-o-transform': value,
            'transform': value,
        });
    }

    var productToursWrapper = $('.product-viewer-wrapper');
    productToursWrapper.each(function(){
        new productViewer($(this));
    });
});
