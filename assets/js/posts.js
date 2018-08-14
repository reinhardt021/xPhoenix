(function () {
    // TODO: ajax call for GET /api/posts

    var boardID = 'post-board';
    var theBoard = document.getElementById(boardID);

    function _createDeleteButton() {
        var deletePost = document.createElement('a');
        var deleteClasses = [
            'delete',
            'is-pulled-right'
        ];
        deletePost.setAttribute('class', deleteClasses.join(' '));

        return deletePost;
    }

    theBoard.addEventListener('mousedown', function (e) {
        e.preventDefault();
        console.log('>>> mousedown');

        var newPost = document.createElement('div');

        newPost.appendChild(_createDeleteButton());

        var postText = document.createElement('p');
        var postContent = document.createTextNode('Edit Me!');
        postText.appendChild(postContent);

        newPost.appendChild(postText);
        var postClasses = [
            'a-post',
            'box'
        ];
        newPost.setAttribute('class', postClasses.join(' '));
        // newPost.setAttribute('contenteditable', true); //TODO: turn on later

        // https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
        var positionX = e.pageX;
        var positionY = e.pageY;

        newPost.style.position = 'absolute';
        newPost.style.left = positionX + 'px';
        newPost.style.top = positionY + 'px';
        var height = 80;
        var width = 130;
        newPost.style.height = height + 'px';
        newPost.style.width = width + 'px';

        newPost.addEventListener('mousedown', function (e) {
            console.log('>>> clicked on a post and will stop propagation');
            e.stopPropagation();
        }, false);

        theBoard.appendChild(newPost);
        // new div will be default size: 130px by 80px to keep golden ratio

        // TODO: click and drag to create text boxes of a specific size and location

        // TODO: click to edit postTex
        // TODO: center text with Flexbox / Bulma
        // TODO: create text toolbar to edit the text in the boxes
        // bold + italix + H1 H2 H3 H4 P + bullet point +
        // TODO: Create sidebar with diff headers

        theBoard.onmousemove = function(e) {
            console.log('>>> X', e.pageX);
            console.log('>>> Y', e.pageY);
        };

        theBoard.onmouseup = function() {
            theBoard.onmousemove = null;
            console.log('>>> mouseup 02');
        };
    }, false);

})();
