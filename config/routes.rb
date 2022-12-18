Rails.application.routes.draw do
  

  resources :reviews
  resources :products
  resources :locations

  ##User Routes
  post "/signup", to: "users#create"
  get "/staylogged", to: "users#show"
  get "/users", to: "users#index"

  ##Sessions Routes
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  ##Location Routes
  post "/addlocation", to: "locations#create"
  get "/locations", to: "locations#index"

  ##Product Routes
  get "/products", to: "products#index"
  get "/products/:id", to: "products#show"

  ##Review Routes
  get "/reviews", to: "reviews#index"
 


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
