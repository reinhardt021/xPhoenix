(function () {
    // need Jquery first??
    console.log('Testing one two three');

    // TODO: ajax call for GET /api/posts

    document.getElementById("post-board").addEventListener('click', function (event) {
        var x = event.pageX;
        var y = event.pageY;

        console.log('Mouse Page Coordinates = X ' + x +
        ' & Y ' + y);
        // console.log('event: ',  event);
        // event.target.textContent = "click count: " + event.detail;
    }, false);

    // TODO: click on empty space on board should create a new div
    // new div will be default paragraph tag
    // new div will be default size
    // find post it ratio - golden rectangle? 2 by 3  or 3 by 5 - base 10||100 px?
    // with top left corner on the point where the mouse is
})();
