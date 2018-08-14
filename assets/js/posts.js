(function () {
    // TODO: ajax call for GET /api/posts

    var boardID = 'post-board';
    var theBoard = document.getElementById(boardID);

    theBoard.addEventListener('click', function (event) {
        var newPost = document.createElement('div');
        var postText = document.createElement('p');
        var postContent = document.createTextNode('Edit Me!');
        postText.appendChild(postContent);
        newPost.appendChild(postText);
        newPost.setAttribute('class', 'a-post');

        // https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
        var positionX = event.pageX;
        var positionY = event.pageY;

        newPost.style.position = 'absolute';
        newPost.style.left = positionX + 'px';
        newPost.style.top = positionY + 'px';
        var height = 80;
        var width = 130;
        newPost.style.height = height + 'px';
        newPost.style.width = width + 'px';

        newPost.addEventListener('click', function (event) {
            console.log('>>> clicked on a post and will stop propagation');
            event.stopPropagation();
        }, false);

        theBoard.appendChild(newPost);
        // new div will be default size: 130px by 80px to keep golden ratio

        // TODO: click and drag to create text boxes of a specific size and location

        // TODO: click to edit postTex
        // TODO: center text with Flexbox / Bulma
        // TODO: create text toolbar to edit the text in the boxes
        // bold + italix + H1 H2 H3 H4 P + bullet point +
        // TODO: Create sidebar with diff headers
    }, false);

})();
