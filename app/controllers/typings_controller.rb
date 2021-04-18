class TypingsController < ApplicationController
  def index
  end

  def new
    number = rand(1..2027)
    english_word = QuestionData.find(number).english
    japanese_word = QuestionData.find(number).japanese
    render json: {
      number: number,
      english_word: english_word,
      japanese_word: japanese_word
    }
  end
end
