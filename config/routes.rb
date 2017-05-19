Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)


  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
      resources :albums do
        resources :photos do
          resources :comments
        end
      end
      resources :tags, except: [:update, :show]

      get '/photos/:id', to: 'photos#show'

      get '/search/:text', to: 'search#index'

      mount ActionCable.server => '/cable'
    end
  end
end
