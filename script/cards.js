$(document).ready(function() {
    let count = $('.cards_number_1 > div').length,
        start = 5,
        show = 4;

    $('.cards_number_1 > div').addClass('cards-d-none');
    $('.cards_number_1 > div:lt(' + start + ')').removeClass('cards-d-none');

    $('.show-more_1').click(function(e) {
        e.preventDefault();

        let load = $(this).data('load'),
            more = $(this).data('more');

        start = (start + show <= count) ? start + show : count;

        $(this).text(load);

        setTimeout(() => {

            $('.cards_number_1 > div:lt(' + start + ')').removeClass('cards-d-none');

            if ($('.cards_number_1 > div:not(.cards-d-none)').length == count) {
                $(this).parent().remove();
            }

            $(this).text(more);
        }, 1000);

    });

});