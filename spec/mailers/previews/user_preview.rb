# Preview all emails at http://localhost:3000/rails/mailers/user
class UserPreview < ActionMailer::Preview
    def welcome_email
        user = User.first
        UserMailer.welcome_email(user)
    end
end
