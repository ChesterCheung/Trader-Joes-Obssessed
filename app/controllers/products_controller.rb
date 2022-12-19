class ProductsController < ApplicationController

    def create
        product = Product.create!(product_params)
        render json: product, status: :ok
    end

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
