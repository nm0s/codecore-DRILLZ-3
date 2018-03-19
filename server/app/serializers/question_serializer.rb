class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :body

  has_many :answers
  class AnswerSerializer < ActiveModel::Serializer
    attributes :id, :body
  end
end
