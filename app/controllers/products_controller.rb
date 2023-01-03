class ProductsController < ApplicationController

    def create
        product = Product.create!(product_params)
        if product.save
            ProductMailer.new_product(product).deliver_now
        end
        render json: product, status: :created
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
