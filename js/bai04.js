$(document).ready(() => {
    $("#btnThem").click(function() {
        let t = $("#colorId").val();
        $(".buttons").append(`
            <div><input type="button" style="background-color:${t}"></div>
        `);
    });

    $(".rdo > input[type=radio]").click(function() {
       let idx = $(this).attr("rel");

       $(".shape > svg").hide();
       $(".shape > svg").eq(idx).show();
    });

    $(".buttons").on("click mouseenter", "input[type=button]", function() {
        let c = $(this).css("background-color");
        $(".shape > svg :first-child").attr("fill", c);
    });

    // $(".buttons input[type=button]").click(function() {
    //     let c = $(this).css("background-color");
    //     $(".shape > svg :first-child").attr("fill", c);
    // });

    let colors = ["gold", "yellow", "brown", "pink", "coral", "orange"];
    // $("#colorId").keyup(function() {
    //     let t = $(this).val();
    //     let h = "";
    //     for (let c of colors)
    //         if (c.indexOf(t) >= 0)
    //             h += `<li><a href="#">${c}</a></li>`;
    //     $("#suggest").html(h);
    // });

    $("#colorId").on("keyup focus", function() {
        let t = $(this).val();
        let h = "";
        for (let c of colors)
            if (c.indexOf(t) >= 0)
                h += `<li><a href="#">${c}</a></li>`;
        $("#suggest").html(h);
    })

    $("#suggest").on("click", "a", function() {
        $("#colorId").val($(this).text());
        $("#suggest").html("");
    });
});