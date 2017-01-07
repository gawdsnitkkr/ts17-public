/**
 * Created by Kaushik on 1/3/2017.
 */
(function($d, $w, $, t){
    var Globals = {
            IsDescriptionOpen: false
        },
        Objects = {

        },
        Functions = {
            OpenDescription: function(){
                console.log($(this).parent());
                Objects.DescriptionWindow.html($(this).find('.info').html());
                var button = $('<span class="close-button glyphicon glyphicon-remove-circle"></span>')
                    .bind('click', Functions.CloseDescription);
                Objects.DescriptionWindow.append(button);
                Objects.DescriptionWindow.addClass('open');
            },
            CloseDescription: function(){
                Objects.DescriptionWindow.removeClass('open');
                Objects.DescriptionWindow.html('');
            }
        };
    $d.ready(function(){
        Objects.DescriptionWindow = $('#initiative-description');
        Objects.CloseDescriptionWindow = $('.close-button')
            .bind('click', function(){
                if(!Globals.IsDescriptionOpen)  Functions.CloseDescription();
            });
        $('.read-more')
            .bind('click', Functions.OpenDescription);
    });
})(jQuery(document), jQuery(window), jQuery, TweenMax);