class ReviewsController < ApplicationController

    def create
        userCreate = User.find_by(id: session[:user_id])
        createReview = userCreate.reviews.build(review_params)
        if userCreate.id && createReview.save
            render json: createReview, status: :ok
        else
            render json: {error: "You can only leave one review!"}, status: :unprocessable_entity
        end
    end

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id:params[:id])
        if review
            render json: review, status: :ok
        else
            render json: {error: "Review not found"}
        end
    end

    def update
        review = Review.find_by(id:params[:id])
        if review
            review.update(review_params)
            render json: review, status: :accepted
        else
            render json: {error: "Review not found"}
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            head :no_content
        else
            render json: {error: "Review not found"}, status: :not_found
        end
    end

    def user_reviews
        user = User.find_by(id: session[:user_id])
        render json: user.reviews
    end

    private
    def review_params
        params.permit(:id, :comments, :rating, :product_id, :user_id )
    end

end
