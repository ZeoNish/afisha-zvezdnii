$(document).on('ready', function() {

    // Открытие модального окна
    $(".item").click(function() {
        getContent(this);
        $(".modalcontainer").fadeIn("fast");
        $(".modal").fadeIn("fast");
    });

    // Закрытие модельного окна
    $(".close").click(function() {
        $(".modalcontainer").fadeOut("fast");
        $(".modal").fadeOut("fast");
        //clearModal();
    });

    $(".buttons").click(function() {
        $(".modalcontainer").fadeOut("fast");
        $(".modal").fadeOut("fast");
        //clearModal();
    });


    function getContent(e) {

        clearModal();

        var id = $(e).attr('id');
        var title = $(e).find('.title').html();
        var rating = $(e).find('.rating').attr('rating');
        var startdate = $(e).find('.startdate').attr('startdate');
        var runtime = $(e).find('.runtime').html();
        var synopsis = $(e).find('.synopsis').html();
        var background = $(e).find('.movie-card').css( "background-image" );
        var buy = $(e).attr('buy');
        var timeView = $(e).attr('timeView');
        var age = $(e).attr('age');

        $('.modalcontainer').find('.m_background').css('background-image', background);
        $('.modalcontainer').find('.m_title').html(title);
        $('.modalcontainer').find('.m_rating').html(rating + ' <i class="fas fa-star"></i>');
        $('.modalcontainer').find('.m_startdate').html(startdate + ' <i class="far fa-calendar-alt"></i>');
        $('.modalcontainer').find('.m_runtime').html(runtime);
        $('.modalcontainer').find('.m_synopsis').html(synopsis);
        $('.modalcontainer').find('.m_age').attr('src', 'img/age/age_' + age + '.png');
        $('.modalcontainer').find('.m_age').attr('title', 'Ограничение по возрасту ' + age + ' лет');

        if (buy === 'true') {
            $('.modalcontainer').find('.buttons').removeClass('hide');
        } else {
            $('.modalcontainer').find('.buttons').addClass('hide');
        }

        if ( timeView !== '' ) {
            var now = new Date();
            var online, title;

            // var time = now.getHours() + ':' + now.getMinutes();

            var arrTimeView = JSON.parse(timeView);

            for (var key in arrTimeView) {
                if (arrTimeView.hasOwnProperty(key)) {

                    // console.log(key + " -> " + arrTimeView[key]);

                    var ts = Date.parse(key);
                    // var nowNum = Date.parse(now);

                    if(now <= ts) {

                        var hours = arrTimeView[key].split(',');

                        $('.m_time_set').append('<span>'+ key);

                        for (var i = 0; i < hours.length; i++) {

                        var hour = hours[i].split(':');

                        var startHappyHourD = new Date();
                        startHappyHourD.setHours(now.getHours(), now.getMinutes(), 0);

                        var endHappyHourD = new Date();
                        endHappyHourD.setHours(hour[0], hour[1], 0);


                        if (now >= startHappyHourD && now < endHappyHourD ) {
                            online = 'online';
                            title = 'Сеанс пока не начался';
                        } else {
                            online = 'offline';
                            title = 'Сеанс уже начался или уже завершен'
                        }

                        $('.m_time_set').append('<span title="' + title + '" class="' + online + '" time="'+ hours[i] +'">'+ hours[i] +'</span>');

                    }

                        $('.m_time_set').append('</span></br>');

                    }
                }
            }

            // -----------------------------------

        } else {
            $('.m_time_set').append('<span>Время пока не назначено</span>');
        }

        if ( timeView === 'undefined' ) {
            $('.m_time_set').append('<span>Ошибка загрузки.</span>');
        }
    }

    // Prev - Next
    $(".prev").click(function() {
        prev_next('prev');
    });

    $(".next").click(function() {
        prev_next('next');
    });

    function prev_next(e) {

        if (e === 'prev') {
            alert('prev');
        }

        if (e === 'next') {
            alert('next');
        }
    }

    function clearModal() {
        $('.modalcontainer').find('.m_background').css('background-image', '');
        $('.modalcontainer').find('.m_title').html('');
        $('.modalcontainer').find('.m_rating').html('');
        $('.modalcontainer').find('.m_startdate').html('');
        $('.modalcontainer').find('.m_runtime').html('');
        $('.modalcontainer').find('.m_synopsis').html('');

        $('.modalcontainer').find('.m_age').attr('src', '');
        $('.modalcontainer').find('.m_age').attr('title', '');

        $('.m_time_set').find('span').remove();
        $('.m_time_set').find('br').remove();
    }

    // Текущий год для копирайта
    var year = new Date();
    $('.year').html(year.getFullYear());
});
