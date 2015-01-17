$(document).ready(function () {

    (function ($) {
        $.fn.treeView = function (selector) {
            var $this = $(this);
            var CLOSE_SYMBOL = '▸ ',
                OPEN_SYMBOL = '▾ ',
                FADE_TIMEOUT = 500;

            $('<style>.close:before{content:"' + CLOSE_SYMBOL + '"}</style>').appendTo('head');
            $('<style>.open:before{content:"' + OPEN_SYMBOL + '"}</style>').appendTo('head');

            function hideAllChildren(selector) {
                $(selector + ' li')
                    .addClass('close')
                    .css('list-style-type', 'none');

                $(selector + ' li')
                    .click(toggleDirectChildren)
                    .addClass('close')
                    .css('list-style-type', 'none')
                    .children()
                    .hide();
            }

            function toggleDirectChildren(event) {
                event.stopPropagation();
                var className = $(this)
                    .attr('class');

                if (className.indexOf('close') >= 0) {
                    $(this)
                        .removeClass('close')
                        .addClass('open')
                        .children('ul')
                        .first()
                        .show(FADE_TIMEOUT);
                } else {
                    $(this)
                        .removeClass('open')
                        .addClass('close')
                        .children('ul')
                        .first()
                        .hide(FADE_TIMEOUT);
                }

            }

            hideAllChildren(selector);
            return $this;
        }
    })(jQuery)

    $.fn.treeView('.treeView');
});