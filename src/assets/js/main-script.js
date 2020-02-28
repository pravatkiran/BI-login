$(document).ready(function () {
    var windowWidth = $(window).width();
    $('.chosen-select').chosen({
        width: "100%"
    });

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-tooltip="tooltip"]').tooltip();

    $('.leftflyout_close_action').on('click', function (e) {
        event.preventDefault();
        var flyoutWidth = $('.flyout_slider_ui').outerWidth();
        if ($('.leftflyout_close_action').is(':visible')) {
            $(this).animate({ left: '0' }).addClass('rotate_arrow');
            $(this).addClass('leftflyout_open_action');
            $(this).removeClass('leftflyout_close_action');
            $('.flyout_slider_ui').animate({ left: '-340px' });
            $('.right_content_wrapper_ui').animate({ 'width': '100%', 'margin-left': '0' });
            $('.header_ui').animate({ width: '100%' });
        }
        else {
            var headerWidthWithFlyoutOpen = windowWidth - flyoutWidth;
            $(this).animate({ left: '340px' }).removeClass('rotate_arrow');
            $(this).addClass('leftflyout_close_action');
            $(this).removeClass('leftflyout_open_action');
            $('.flyout_slider_ui').animate({ left: '0' });
            $('.right_content_wrapper_ui').animate({ 'width': 'calc(100% - 340px)', 'margin-left': '340px' });
            $('.header_ui').animate({ width: headerWidthWithFlyoutOpen });
        }
    });

    $('.header_toggle_handler_ui').on('click', function (e) {
        event.preventDefault();
        if ($('.header_toggle_handler_ui').is(':visible')) {
            $(this).animate({ top: '0' }).addClass('rotate_arrow');
            $(this).removeClass('header_toggle_handler_ui');
            $('.header_ui').animate({ top: '-80px' });
            $('.right_content_wrapper_ui').animate({ 'margin-top': '0' });
        }
        else {
            $(this).animate({ top: '80px' }).removeClass('rotate_arrow');
            $(this).addClass('header_toggle_handler_ui');
            $('.header_ui').animate({ top: '0' });
            $('.right_content_wrapper_ui').animate({ 'margin-top': '80px' });
        }
    });


});

function graphType(id) {
    $('.graph_design_block').hide();
    $('#graph-' + id).show();
}