Rails.application.routes.draw do

  resources :directions, only: [:index]

  resources :routes, only: [:index, :show]

  resources :stops, only: [:index, :show]
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
