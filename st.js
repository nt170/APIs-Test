$(function () {
    function loadContent(href) {
        $.ajax({
            url: href,
            dataType: "html",
            success: function (dataObject) {
                $(".content").html(dataObject);
            },
        });
    }
    $("a").on("click", function (e) {
        e.preventDefault();
        var href = this.href + ".html";
        var $this = $(this);
        $("a").removeClass("current");
        $this.addClass("current");

        loadContent(href);
        history.pushState("", $this.text(), $this.attr("href"));
    });

    window.onpopstate = function () {
        var path = location.pathname + ".html";
        var name = location.pathname.substring(
            location.pathname.lastIndexOf("/") + 1
        );
        console.log(path);
        $("a").removeClass("current");
        $("[href=" + name + "]").addClass("current");
        loadContent(path);
    };
});