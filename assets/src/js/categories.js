var web = $(".web"),
                graph = $(".graph"),
                fashion = $(".fashion"),
                logo = $(".logo"),
                adv = $(".adv")
            $("#all").click(function() {
                web.removeClass('checked');
                graph.removeClass('checked');
                fashion.removeClass('checked');
                logo.removeClass('checked');
                web.removeClass('unchecked');
                graph.removeClass('unchecked');
                fashion.removeClass('unchecked');
                logo.removeClass('unchecked');
                adv.removeClass('checked');
                adv.removeClass('unchecked');
            });
            $("#webdesign").click(function() {
                $('.grid-item').removeClass('checked');
                $('.grid-item').addClass('unchecked');
                web.removeClass('unchecked');
                web.addClass('checked');
            });
            $("#graphic").click(function() {
                $('.grid-item').removeClass('checked');
                $('.grid-item').addClass('unchecked');
                graph.removeClass('unchecked');
                graph.addClass('checked');
            });
            $("#fashion").click(function() {
                $('.grid-item').removeClass('checked');
                $('.grid-item').addClass('unchecked');
                fashion.removeClass('unchecked');
                fashion.addClass('checked');
            });
            $("#logo").click(function() {
                $('.grid-item').removeClass('checked');
                $('.grid-item').addClass('unchecked');
                logo.removeClass('unchecked');
                logo.addClass('checked');
            });
            $("#ad").click(function() {
                $('.grid-item').removeClass('checked');
                $('.grid-item').addClass('unchecked');
                adv.removeClass('unchecked');
                adv.addClass('checked');
            });