defmodule HelloWeb.BoardController do
    use HelloWeb, :controller

    def index(conn, _params) do
        postIts = [] # TODO: grab from database the post its as needed
        
        render conn, "index.html", postIts: postIts
    end
end
