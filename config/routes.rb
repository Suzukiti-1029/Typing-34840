Rails.application.routes.draw do
  root to: 'typings#index'
  resources :typings, only: [:new]
end
