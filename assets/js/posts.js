(function () {
    // need Jquery first??
    console.log('Testing one two three');

    // TODO: ajax call for GET /api/posts

    var boardID = 'post-board';


    document.getElementById(boardID).addEventListener('click', function (event) {
        var newPost = document.createElement('div');
        var postContent = document.createTextNode('Edit Me!');
        newPost.appendChild(postContent);
        newPost.setAttribute('class', 'a-post');

        var positionX = event.pageX;
        var positionY = event.pageY;
        // console.log('Mouse Page Coordinates = X ' + x + ' & Y ' + y);
        newPost.style.position = 'absolute';
        newPost.style.left = positionX + 'px';
        newPost.style.top = positionY + 'px';

        var board = document.getElementById(boardID);
        board.appendChild(newPost);

        // console.log('event: ',  event);
        // event.target.textContent = "click count: " + event.detail;
        // https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
    }, false);

    // TODO: click on empty space on board should create a new div
    // new div will be default paragraph tag
    // new div will be default size
    // find post it ratio - golden rectangle? 2 by 3  or 3 by 5 - base 10||100 px?
    // with top left corner on the point where the mouse is
})();
