document.querySelector("#mark-as-read").addEventListener("click", function () {
    document.getElementById("unread-count").innerHTML = "0";

    var notification = document.querySelectorAll(".notification");

    [].forEach.call(notification, function (el) {
        el.classList.remove("unread");
        el.classList.remove("shadow");
        el.classList.remove("shadow-sm");
    });

    var red_dot = document.querySelectorAll(".red-dot");

    [].forEach.call(red_dot, function (el) {
        el.remove();
    });
});

