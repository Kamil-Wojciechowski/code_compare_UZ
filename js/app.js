function showExamples() {
    $('div[id^="example_"]').toggleClass('d-none', true);
    $('#example_' + $('#select_example').val()).toggleClass('d-none', false);
}

$(document).ready(function () {
    $(".ex_print").on("input", function () {
        var inputText = $(this).val();
        $('.ex_print').val(inputText);
        $("#ex_printd").text(inputText);
    });

    $(".ex_if").on("input", function () {
        var inputText = $(this).val();
        $('.ex_if').val(inputText);
        if (inputText < 1) {
            $("#ex_ifd").text("Warunek if");
        }
        else if (inputText > 1) {
            $("#ex_ifd").text("Warunek else if");
        }
        else {
            $("#ex_ifd").text("Warunek else");
        }
    });

    $(".ex_if_sh").on("input", function () {
        var inputText = $(this).val();
        $('.ex_if_sh').val(inputText);
        if (inputText == "True" || inputText == "true") {
            $("#ex_if_shd").text("Jestem prawdą");
        }
        else if (inputText == "False" || inputText == "false") {
            $("#ex_if_shd").text("Nie jestem prawdą");
        }
        else {
            $("#ex_if_shd").text("...");
        }
    });

    $(".ex_sw").on("input", function () {
        var inputText = $(this).val();
        $('.ex_sw').val(inputText);
        if (inputText == "1") {
            $("#ex_swd").text("Przypadek 1");
        }
        else if (inputText == "2" || inputText == "3") {
            $("#ex_swd").text("Przypadek 2 lub 3");
        }
        else {
            $("#ex_swd").text("Przypadek domyślny");
        }
    });

    $(".ex_obj1").on("input", function () {
        var inputText = $(this).val();
        $('.ex_obj1').val(inputText);
        $("#ex_obj1d").text(inputText);
    });

    $(".ex_obj2").on("input", function () {
        var inputText = $(this).val();
        $('.ex_obj2').val(inputText);
        $("#ex_obj2d").text(inputText);
    });

    $("form").submit(function (event) {
        event.preventDefault();

        let correct_answers = 0;
        if ($("input[name=q1]:checked").val() == "ans2") { correct_answers++; }
        if ($("input[name=q2]:checked").val() == "ans2") { correct_answers++; }
        if ($("input[name=q3]:checked").val() == "ans1") { correct_answers++; }
        if ($("input[name=q4]:checked").val() == "ans3") { correct_answers++; }
        if ($("input[name=q5]:checked").val() == "ans2") { correct_answers++; }
        if ($("input[name=q6]:checked").val() == "ans1") { correct_answers++; }
        if ($("input[name=q7]:checked").val() == "ans3") { correct_answers++; }
        if ($("input[name=q8]:checked").val() == "ans2") { correct_answers++; }
        if ($("input[name=q9]:checked").val() == "ans1") { correct_answers++; }
        if ($("input[name=q10]:checked").val() == "ans3") { correct_answers++; }

        sessionStorage.setItem('data_percents', correct_answers * 10);
        sessionStorage.setItem('data_person', $('#name').val());
        window.open('./diploma.html', '_blank', 'width=800,height=600');
    });
});

function generateDiploma() {
    let percents = parseInt(sessionStorage.getItem('data_percents'));
    let person = sessionStorage.getItem('data_person');

    $('.data_percents').html(percents);
    $('#data_person').html(person ? person : '?');
    $('#data_date').html(new Date().toLocaleDateString());

    if (percents >= 80) {
        $('#result_success').removeClass('d-none');
    } else {
        $('#result_failed').removeClass('d-none');
    }
}       