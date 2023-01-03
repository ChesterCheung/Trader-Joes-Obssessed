class ProductMailer < ApplicationMailer
    default to: -> { User.pluck(:email) }

    def new_product(product)
        @product = product
        mail(subject: "#{@product.name} was just added to Tj Products!")
    end

end

