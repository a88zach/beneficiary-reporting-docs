$().ready(function () {
    var activeItem = $('li.active');

    if (activeItem.length === 1) {
        var rail = $('.rail-left-content');
        rail.scrollTop(rail.scrollTop() + activeItem.position().top)
    }
});