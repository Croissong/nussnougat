defmodule Nussnougat.Router do
  use Nussnougat.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Nussnougat do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
		get "/croissong", PageController, :index
		get "/donkebap", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", Nussnougat do
  #   pipe_through :api
  # end
end
