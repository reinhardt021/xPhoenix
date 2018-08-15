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
        deleteButton.addEventListener('click', function (e) {
            newPost.remove();
        }, false);
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

            // TODO: figure out how to resize the posts
            // todo - add gradient to bottom right corner

            // TODO: investigate lag bug that fills post multiple times
            // might have to rethink the whole logic here
            // console.log('>>> newPost.getBoundingClientRect() ', newPost.getBoundingClientRect());
            var shiftX = e.clientX - newPost.getBoundingClientRect().left;
            var shiftY = e.clientY - newPost.getBoundingClientRect().top;

            function _moveAt(element, pageX, pageY) {
                element.style.left = pageX - shiftX + 'px';
                element.style.top = pageY - shiftY + 'px';
            }

            function _onMouseMove(e) {
                e.preventDefault();
                _moveAt(newPost, e.pageX, e.pageY);
            }

            newPost.addEventListener('mousemove', _onMouseMove);

            newPost.onmouseup = function(e) {
                e.stopPropagation();
                newPost.removeEventListener('mousemove', _onMouseMove);
                newPost.onmouseup = null;
                console.log('>>> post mouse up');
            };
        }, false);

        newPost.ondragstart = function() { return false; };

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

        var postOriginX = e.pageX;
        var postOriginY = e.pageY;
        var width = 130; // default
        var height = 80; // default
        var newPost = _createBasicPost(postOriginX, postOriginY, width, height);
        theBoard.appendChild(newPost);

        theBoard.onmousemove = function(e) {
            e.preventDefault();
            console.log('>>> board moving');

            width = e.pageX - postOriginX;
            height = e.pageY - postOriginY;
            newPost.remove();
            // TODO: if width or height is negative then get absolute value
            // and flip the origin to origin - width
            newPost = _createBasicPost(postOriginX, postOriginY, width, height);
            theBoard.appendChild(newPost);
        };

        theBoard.onmouseup = function(e) {
            e.stopPropagation();
            theBoard.onmousemove = null;
            _fillPost(newPost);
            console.log('>>> board mouse up');
        };
    }, false);

})();
