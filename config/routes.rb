Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/rabbitsburgers" => "rabbits#home"

  get "/signup" => "users#new"
  post "/users" => "users#create"

  get "/login" => "sessions#new"
  post "/login" => "sessions#create"
  get "/logout" => "sessions#destroy"

  get "/rabbitsburgers/:id" => "rabbits#show"

  get "/users" => "users#show"
  get "/users/:id/edit" => "users#edit"
  patch "users/:id" => "users#update"

  get "/orderitems" => "order_items#index"
  get "/orderitems/:id" => "order_items#new"
  post "/orderitems" => "order_items#create"
  delete "/orderitems/destroy" => "order_items#destroy"

  get "/rabbitsburgers/:id/images/new" => "images#new"
  post "/rabbitsburgers/:id/images" => "images#create"

  post "/orders" => "orders#create"
  get "orders/:id" => "orders#show"
end
