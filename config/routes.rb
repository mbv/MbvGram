Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)


  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for "User", at: "auth"
      resources :albums, only: %i[show create update destroy] do
        resources :photos do
          resources :comments
        end
      end
      resources :tags, except: [:update, :show]

      get "/photos/feed", to: "photos#feed"
      get "/photos/:id", to: "photos#show"


      get "/users/:id/albums", to: "albums#user_albums"
      get "/users/:id", to: "users#show"
      patch "/users/follow", to: "users#follow"
      patch "/users/unfollow", to: "users#unfollow"

      get "/search/:text", to: "search#index"
      get "/search", to: "search#index"

      mount ActionCable.server => "/cable"
    end
  end
end
