Rails.application.routes.draw do

  resources :directions, only: [:index]

  resources :routes, only: [:index, :show] do 
    resources :directions, only: [:index] do
      resources :stops, only: [:index]
    end
  end 

  resources :routes, only: [:index] do
    resources :stops, only: [:index, :show] do
      resources :predictions, only: [:index]
    end
  end


  resources :users, only: [:create, :update] do 
    resources :fovourite_lines, only: [:index, :create, :destroy]
  end

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"

  resources :bicycles_stations, only: [:index]

 

  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
