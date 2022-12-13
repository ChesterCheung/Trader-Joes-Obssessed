class UsersController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
      users = User.all
      render json: users
  end
  
   def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: "No current user set", status: :unauthorized
      end
    end
  
   def create
      user = User.create!(user_params)
      render json: user, status: :created
   end
  
   private
  
    def user_params
        params.permit(:username, :password, :password_confirmation )
    end
  
    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
  