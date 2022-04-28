Rails.application.routes.draw do

  resources :directions, only: [:index]

  resources :routes, only: [:index, :show] do 
    resources :directions, only: [:index] do
      resources :stops, only: [:index]
    end
  end 

  resources :routes, only: [:index, :show] do
    resources :stops, only: [:index, :show] do
      resources :predictions, only: [:index]
    end
  end

  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
