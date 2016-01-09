defmodule Nussnougat.PageController do
  use Nussnougat.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
