class LocationsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        location = Location.create!(location_params)
        render json: location, status: :ok
    end

    def index
        location = Location.all
        render json: location
    end

    private

    def location_params
    params.permit(:neighborhood, :city)
    end

    def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
