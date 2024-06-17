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
        history.pushState("", $this.text(), $this.attr("href") + "-page");
        // history.pushState("", $this.text(), href);
    });

    window.onpopstate = function () {
        var path = location.pathname.substring(
            1,
            location.pathname.lastIndexOf("-")
        );
        console.log(path);
        var name = path;
        console.log(name);
        $("a").removeClass("current");
        $("[href=" + name + "]").addClass("current");
        loadContent(path + ".html");
    };
});
