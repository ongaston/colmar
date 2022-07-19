$(document).ready(() => {

    $('#software').on('click', () => {
        $('.expands').toggle();
        $('.expandc').hide();
        $('.expandde').hide();
        $('.expandda').hide();
        $('.expandb').hide();
        $('.expandm').hide();
    })

    $('#computer-art').on('click', () => {
        $('.expandc').toggle();
        $('.expands').hide();
        $('.expandde').hide();
        $('.expandda').hide();
        $('.expandb').hide();
        $('.expandm').hide();
    })

    $('#design').on('click', () => {
        $('.expandde').toggle();
        $('.expandc').hide();
        $('.expands').hide();
        $('.expandda').hide();
        $('.expandb').hide();
        $('.expandm').hide();
    })

    $('#data').on('click', () => {
        $('.expandda').toggle();
        $('.expandc').hide();
        $('.expandde').hide();
        $('.expands').hide();
        $('.expandb').hide();
        $('.expandm').hide();
    })

    $('#business').on('click', () => {
        $('.expandb').toggle();
        $('.expandc').hide();
        $('.expandde').hide();
        $('.expandda').hide();
        $('.expands').hide();
        $('.expandm').hide();
    })

    $('#marketing').on('click', () => {
        $('.expandm').toggle();
        $('.expandc').hide();
        $('.expandde').hide();
        $('.expandda').hide();
        $('.expandb').hide();
        $('.expands').hide();
    })



});