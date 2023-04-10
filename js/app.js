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

        var numCorrect = 0;


        if ($("input[name=q1]:checked").val() == "ans2") {
            numCorrect++;
        }

        if ($("input[name=q2]:checked").val() == "ans2") {
            numCorrect++;
        }

        if ($("input[name=q3]:checked").val() == "ans1") {
            numCorrect++;
        }

        if ($("input[name=q4]:checked").val() == "ans3") {
            numCorrect++;
        }
        if ($("input[name=q5]:checked").val() == "ans2") {
            numCorrect++;
        }

        if ($("input[name=q6]:checked").val() == "ans1") {
            numCorrect++;
        }
        if ($("input[name=q7]:checked").val() == "ans3") {
            numCorrect++;
        }

        if ($("input[name=q8]:checked").val() == "ans2") {
            numCorrect++;
        }
        if ($("input[name=q9]:checked").val() == "ans1") {
            numCorrect++;
        }

        if ($("input[name=q10]:checked").val() == "ans3") {
            numCorrect++;
        }
        var percentage = (numCorrect / 10) * 100;
        var d = new Date();
        var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
        var person = $("#name").val();
        console.log(person);
        if (percentage > 79) {
            generateDiploma(strDate,percentage,person);
            window.open('./diploma.html', '_blank', 'width=800,height=600');
            
        }
        else {
                     
            window.open('./diploma.html', '_blank', 'width=800,height=600');
        }
    });
});

function generateDiploma(strDate,percentage,person){
    console.log("UHUUUU");
    console.log(percentage);
    console.log(person);
    if(typeof percentage !== undefined){
        $("#result").html("<h1 class='text-dark'>Gratulacje!</h1><h2 class='text-muted'>Uzyskałeś bardzo wysoki wynik na naszym teście Porównywarki Kodów!</h2><p>Twoja ciężka praca i poświęcenie przyniosły efekty. Twój wysoki wynik jest świadectwem Twojej wiedzy i umiejętności. Bądź nadal tak skuteczny!</p><div class='score text-dark'>Twój wynik to:"+percentage+"</div><h4>Certyfikat dla:</h4>"+person+"<h4></h4><p>Data:</p><p>"+strDate+"</p><div>Ten certyfikat nie jest oficjalnym dokumentem, tylko cyfrową reprezentacją osiągnięcia.</div>")

    }
}       