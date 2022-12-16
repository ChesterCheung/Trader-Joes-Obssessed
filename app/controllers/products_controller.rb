class ProductsController < ApplicationController

    def create

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

end
