$(document).ready(() => {

    const $software = $('#software');
    const $computerArt = $('#computer-art');
    const $design = $('#design');
    const $data = $('#data');
    const $business = $('#business');
    const $marketing = $('#marketing');

    const $expands = $('.expands');
    const $expandc = $('.expandc');
    const $expandde = $('.expandde');
    const $expandda = $('.expandda');
    const $expandb = $('.expandb');
    const $expandm = $('.expandm');

    const $courseTitle = $('.course-titlem');

    /*const $courseButton = $('.coursem');*/
    /*const $courseInfo = $('.expand');

    $courseButton.on('click', () => {
        $courseInfo.show();
    });

    $courseTitle.on('click', () => {
        $courseInfo.hide();
    });*/

    $software.on('click', () => {
        $expands.show();
    });

    $computerArt.on('click', () => {
        $expandc.show();
    });

    $design.on('click', () => {
        $expandde.show();
    });

    $data.on('click', () => {
        $expandda.show();
    });

    $business.on('click', () => {
        $expandb.show();
    });

    $marketing.on('click', () => {
        $expandm.show();
    });


});