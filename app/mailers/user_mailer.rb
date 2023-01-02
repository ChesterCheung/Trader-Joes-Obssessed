class UserMailer < ApplicationMailer
    default from: 'chestertjreview@gmail.com'

    def
        welcome_email(user)
        @user = user
        mail(to: @user.email, subject: 'Welcome To The Trader Joe Review Site!')
    end
    
end
