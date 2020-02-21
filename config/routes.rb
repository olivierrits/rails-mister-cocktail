Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cocktails, only: [:create, :index, :show, :new, :destroy] do
    resources :doses, only: [:new, :create]
    resources :reviews, only: [:new, :create]
  end
  resources :doses, only: [:destroy]
  root to: 'cocktails#index'
end
