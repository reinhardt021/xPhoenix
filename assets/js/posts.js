(function () {
    // TODO: ajax call for GET /api/posts

    // TODO: Create sidebar with diff headers
    // TODO: create left side text toolbar to edit the text in the boxes
    // bold + italix + H1 H2 H3 H4 P + bullet point +

    var boardID = 'post-board';
    var theBoard = document.getElementById(boardID);

    function _addPostAttributes(newPost) {
        var postClasses = ['a-post', 'box'];
        newPost.setAttribute('class', postClasses.join(' '));
        // newPost.setAttribute('contenteditable', true); //TODO: turn on later
        // TODO: unfocus to save Post text

        return newPost;
    }

    function _createBasicPost(postOriginX, postOriginY, width, height) {
        var newPost = document.createElement('div');

        newPost.style.position = 'absolute';
        newPost.style.left = postOriginX + 'px';
        newPost.style.top = postOriginY + 'px';

        newPost.style.width = width + 'px';
        newPost.style.height = height + 'px';

        _addPostAttributes(newPost);

        return newPost;
    }

    function _addDeleteButton(newPost) {
        var deleteClasses = ['delete', 'is-pulled-right'];
        var deleteButton = document.createElement('a');
        deleteButton.setAttribute('class', deleteClasses.join(' '));
        newPost.appendChild(deleteButton);

        return deleteButton;
    }

    function _addDefaultPostContent(newPost) {
        var postContent = document.createElement('p');
        var postText = document.createTextNode('Edit Me!');
        postContent.appendChild(postText);
        newPost.appendChild(postContent);

        return postContent;
    }

    function _addPostEvents(newPost) {
        // Mouse down event for Post
        newPost.addEventListener('mousedown', function (e) {
            e.stopPropagation();
            e.preventDefault();
            console.log('>>> post mousedown');

            newPost.onmousemove = function(e) {
                e.preventDefault();
                console.log('>>> post moving');
                newPost.style.left = e.pageX;
                newPost.style.top = e.pageY;
                //NOTE: this doesn't work unless you are above the post
            };

            newPost.onmouseup = function(e) {
                e.stopPropagation();
                newPost.onmousemove = null;
                console.log('>>> post mouse up');
                //NOTE: this doesn't work unless you are above the post
            };
        }, false);

        return newPost;
    }

    function _fillPost(newPost) {
        _addDeleteButton(newPost);
        _addDefaultPostContent(newPost);
        _addPostEvents(newPost);

        return newPost;
    }

    theBoard.addEventListener('mousedown', function (e) {
        e.preventDefault();
        console.log('>>> board mousedown');

        // https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
        var postOriginX = e.pageX;
        var postOriginY = e.pageY;
        var width = 0;//130;
        var height = 0;//80;
        var newPost = _createBasicPost(postOriginX, postOriginY, width, height);
        theBoard.appendChild(newPost);

        theBoard.onmousemove = function(e) {
            e.preventDefault();
            console.log('>>> board moving');

            width = e.pageX - postOriginX;
            height = e.pageY - postOriginY;
            newPost = _createBasicPost(postOriginX, postOriginY, width, height);

            // TODO: delete old post before attaching this new one
            // todo - search: JS how to remove element

            theBoard.appendChild(newPost);
        };

        theBoard.onmouseup = function() {
            e.stopPropagation();
            theBoard.onmousemove = null;
            _fillPost(newPost);
            console.log('>>> board mouse up');
        };
    }, false);

})();
