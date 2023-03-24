function showExamples() {
    $('div[id^="example_"]').toggleClass('d-none', true);
    $('#example_' + $('#select_example').val()).toggleClass('d-none', false);
}