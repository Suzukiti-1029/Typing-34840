class TypingsController < ApplicationController
  def index
    number = rand(1..100)
    @english_word = English.find(number).name
    @japanese_word = Japanese.find(number).name
  end
end
