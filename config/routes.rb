Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  resources :albums do
    resources :photos
  end
  resources :tags, except: [:update, :show]

  mount ActionCable.server => '/cable'
end
