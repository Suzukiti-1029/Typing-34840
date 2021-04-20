Rails.application.routes.draw do
  devise_for :users
  root to: 'typings#index'
  resources :typings, only: [:new]
  resources :histories, only: [:create]
end
