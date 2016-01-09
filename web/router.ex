defmodule L.Router do
  use L.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", L do
    pipe_through :api
  end
end
