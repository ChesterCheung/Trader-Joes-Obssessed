class ProductsController < ApplicationController

    def create
        user = User.find_by(id: session[:user_id])
        product = Product.create!(product_params)
        createProductLocation = product.product_locations.build(location_id: params[:location_id])
        if user.id && product.save && createProductLocation.save
            ProductMailer.new_product(product).deliver_now
        end
        render json: product, status: :created
    end

    # def create
    #     location = Location.find_by(location_id: params[:location_id])
    #     product = location.product.create!(product_params)
    #     if product.save && createProductLocation.save
    #         ProductMailer.new_product(product).deliver_now
    #     end
    #     render json: product, status: :created
    # end

    def index
        products = Product.all
        render json: products
    end

    def show
        product = Product.find_by(id:params[:id])
        if product
            render json: product, status: :ok
        else
            render json: {error: "Product not found"}
        end
    end

    private

    def product_params
        params.permit(:name, :category, :price, :location_id, :url)
    end

end
