(function () {
    // need Jquery first??
    console.log('Testing one two three');

    // TODO: ajax call for GET /api/posts

    var boardID = 'post-board';

    document.getElementById(boardID).addEventListener('click', function (event) {
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

        var board = document.getElementById(boardID);
        board.appendChild(newPost);
        // new div will be default size: 130px by 80px to keep golden ratio

        // TODO: click and drag to create text boxes of a specific size and location

        // TODO: click to edit postTex
        // TODO: center text with Flexbox / Bulma
        // TODO: create text toolbar to edit the text in the boxes
        // bold + italix + H1 H2 H3 H4 P + bullet point + 
        // TODO: Create sidebar with diff headers
    }, false);

})();
