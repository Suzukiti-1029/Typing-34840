class TypingsController < ApplicationController
  def index
  end

  def new
    number = rand(1..100)
    english_word = English.find(number).name
    japanese_word = Japanese.find(number).name
    render json:{
      number: number,
      english_word: english_word,
      japanese_word: japanese_word
    }
  end
end
