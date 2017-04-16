Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/rabbitsburgers" => "rabbits#home"

  get "/signup" => "users#new"
  post "/users" => "users#create"

  get "/login" => "sessions#new"
  post "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  get "/logout" => "sessions#destroy"

  get "/rabbitsburgers/:id" => "rabbits#show"

  get "/users" => "users#show"
  get "/users/:id/edit" => "users#edit"
  patch "users/:id" => "users#update"

  post "/orders" => "orders#create"
  get "/order/:id" => "orders#show"

end
