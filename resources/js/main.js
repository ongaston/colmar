$(document).ready(() => {

    const $courseTitle = $('.course-titlem');
    const $courseButton = $('.coursem');
    const $courseInfo = $('.expand');

    $courseButton.on('click', () => {
        $courseInfo.show();
    });

    $courseTitle.on('click', () => {
        $courseInfo.hide();
    });


});