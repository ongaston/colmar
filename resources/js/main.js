$(document).ready(() => {

    $('#software').on('click', event => {
        $('.expands').toggle();

        $(event.currentTarget).siblings().children().contents().not($('.course-titlem')).hide();
        $(event.currentTarget).siblings().children().filter('img').hide();
    })

    $('#computer-art').on('click', event => {
        $('.expandc').toggle();
        $(event.currentTarget).siblings().children().contents().not($('.course-titlem')).hide();
        $(event.currentTarget).siblings().children().filter('img').hide();
    })

    $('#design').on('click', event => {
        $('.expandde').toggle();
        $(event.currentTarget).siblings().children().contents().not($('.course-titlem')).hide();
        $(event.currentTarget).siblings().children().filter('img').hide();
    })

    $('#data').on('click', event => {
        $('.expandda').toggle();
        $(event.currentTarget).siblings().children().contents().not($('.course-titlem')).hide();
        $(event.currentTarget).siblings().children().filter('img').hide();
    })

    $('#business').on('click', event => {
        $('.expandb').toggle();
        $(event.currentTarget).siblings().children().contents().not($('.course-titlem')).hide();
        $(event.currentTarget).siblings().children().filter('img').hide();
    })

    $('#marketing').on('click', event => {
        $('.expandm').toggle();
        $(event.currentTarget).siblings().children().contents().not($('.course-titlem')).hide();
        $(event.currentTarget).siblings().children().filter('img').hide();
    })



});