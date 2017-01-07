/**
 * Created by Kaushik on 12/29/2016.
 */
(function (d,$d,$w,$,t){
    var Globals = {
            IsMenuOpen: false,
            NumberofSlides: 0,
            CurrentSlideIndex: 0,
            SlideFraction: 0.33,
            LastPosition: 0,
            IsExpanded: false,
            LeftMargin: 0
        },
        $Objects = {
            ActiveOption: null
        },
        Functions = {
            ExpandDescription: function(element){
                var data = element[0].innerText;
                data = data.substr(0,data.length - 2);
                $Objects.EventDescription.html(data + '<span id="descriptionClose">+</span>');
                t.set($Objects.EventDescription, {
                    display: 'block',
                    onComplete: function(){
                        t.to($Objects.EventDescription, 0.8, {
                            marginTop: 0,
                            opacity: 1,
                            ease: Power4.easeIn,
                            onComplete: function(){
                                Globals.IsExpanded = true;
                            }
                        });
                    }
                });
            },
            CloseDescription: function(){
                t.to($Objects.EventDescription, 0.8, {
                    scale: 2,
                    opacity: 0,
                    ease: Power4.easeOut,
                    onComplete: function(){
                        Globals.IsExpanded = false;
                        t.set($Objects.EventDescription,{
                            marginTop: '100vh',
                            scale: 1,
                            display: 'none'
                        });
                    }
                });
            },
            ScrollSlidesUp: function(){
                var scrollHeight = $Objects.ForegroundContainer.scrollTop();
                console.log(scrollHeight);
            },
            ScrollSlidesDown: function(){
                var scrollHeight = $Objects.ForegroundContainer.scrollTop();
                console.log(scrollHeight);
            }
        };
    $d.ready(function(){
        $Objects.ForegroundContainer = $('.foreground-wrapper');
        $Objects.SlidesContainer = $('.foreground');
        $Objects.Slides = $('.exhibition-panel');
        $Objects.EventDescription = $('#descriptionContainer')
            .bind('click', function(e){
                if($(e.target).attr('id') === 'descriptionClose')
                Functions.CloseDescription();
            });
        $w.on('resize', function (){
            t.to($Objects.ForegroundContainer, 0.5, {
                scrollTop: Globals.CurrentSlideIndex * $w.innerHeight(),
                ease: Power2.easeOut
            });
        });
        $('.exhibition-desc').click(function(e){
            if($(e.target).html() === "+") {
                if (!Globals.IsExpanded)    Functions.ExpandDescription($(e.target).parent());
            }
        });
    });
})(document, jQuery(document), jQuery(window), jQuery, TweenMax);