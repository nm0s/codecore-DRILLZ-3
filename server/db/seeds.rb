PASSWORD = 'supersecret'

User.destroy_all
Quiz.destroy_all
Question.destroy_all
Answer.destroy_all

super_user = User.create(
  first_name: 'Admin',
  last_name: 'User',
  email: 'admin@gmail.com',
  password: PASSWORD,
  is_admin: true
)

5.times.each do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end

10.times.each do

q = Quiz.create(
  name: Faker::Hipster.sentence,
  description: Faker::Hipster.paragraph,
  difficulty: "Beginner",
  quiz_points: 100
)

  if q.valid?
    10.times.each do
      que = Question.create(
        body: Faker::Hipster.sentence,
        quiz: q
      )

      if que.valid?
        2.times.each do
          Answer.create(
            body: "This is an answer",
            question: que
          )
        end
      end

    end
  end

end



# testins
users = User.all
quizzes = Quiz.all
questions = Question.all
answers = Answer.all


puts Cowsay.say "Created #{users.count} users", :tux
puts Cowsay.say "Created #{quizzes.count} quizzes", :tux
puts Cowsay.say "Created #{questions.count} questions", :tux
puts Cowsay.say "Created #{answers.count} answers", :tux
puts "Login as admin #{super_user.email} and password of '#{PASSWORD}'"

