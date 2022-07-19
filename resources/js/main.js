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



    let $softwarei = false;

    $software.on('click', () => {
        if ($softwarei===false) {
            $expands.show();
            $softwarei = !$softwarei;
        }
        else if ($softwarei===true) {
            $expands.hide();
            $softwarei =!$softwarei;
        }
    });



    let $computerArti = false;

    $computerArt.on('click', () => {
        if ($computerArti===false){
            $expandc.show();
            $computerArti = !$computerArti;
        }
        else if ($computerArti===true) {
            $expandc.hide();
            $computerArti = !$computerArti;
        }
    });


    let $designi = false;

    $design.on('click', () => {
        if ($designi===false) {
            $expandde.show();
            $designi = !$designi;
        }
        else if ($designi===true) {
            $expandde.hide();
            $designi = !$designi;
        }
    });


    let $datai = false;

    $data.on('click', () => {
        if ($datai===false) {
            $expandda.show();
            $datai = !$datai;
        }
        else if ($datai===true) {
            $expandda.hide();
            $datai = !$datai;
        }
    });


    let $businessi = false;

    $business.on('click', () => {
        if ($businessi===false) {
            $expandb.show();
            $businessi = !$businessi;
        }
        else if ($businessi===true) {
            $expandb.hide();
            $businessi = !$businessi;
        }
    });


    let $marketingi = false;

    $marketing.on('click', () => {
        if ($marketingi===false) {
            $expandm.show();
            $marketingi = !$marketingi;
        }
        else if ($marketingi===true) {
            $expandm.hide();
            $marketingi = !$marketingi;
        }
    });


});