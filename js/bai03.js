$(document).ready(() => {
    $("#btnDoiTien").click(() => {
        if ($("#stId").val() === "") {
            $("#stId").toggleClass("error");
            return;
        }

        let st = parseFloat($("#stId").val());
        let dv = $("#dvId").val();
        
        let k = "Kết quả tại đây...";
        switch (dv) {

        }

        $("#kq").html(`<h2>${k}</h2>`);
    });

    $(".tab a").click(function() {
        $(".tab li").removeClass("active");
        $(this).parent().addClass("active");

        let h = $(this).attr("href");
        $(".tab-content > div").slideUp();
        $(h).slideDown("slow");
    });

    let num = $(".slider > div").length;
    let h = "";
    for (let i = 0; i < num; i++)
        h += `
            <button class="digit">${i + 1}</button>
        `;

    $(".slider-button :first-child").after(h);

    $(".slider").height($(".slider img").height() + 5);

    let showSlider = (current) => {
        $(".slider > div").slideUp();
        $(".slider > div").eq(current).slideDown("slow");

        $("button.digit").removeClass("active");
        $("button.digit").eq(current).addClass("active");
    }

    let current = -1;
    $("button.digit").click(function() {
        current = parseInt($(this).text()) - 1;

        showSlider(current);
    });

    $(".next").click(function() {
        current++;
        if (current === num)
            current = 0;

        showSlider(current);

        clearInterval(timer);
        runSlider();
    });

    $(".prev").click(function() {
        current--;
        if (current < 0)
            current = num - 1;
            
        showSlider(current);
    });

    let timer = null;
    let runSlider = () => {
        timer = setInterval(() => {
            $(".next").click();
        }, 2000);
    }

    runSlider();
});