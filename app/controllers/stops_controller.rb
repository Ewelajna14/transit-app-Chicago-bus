class StopsController < ApplicationController

    def index
    stops = Stop.all
    render json: stops, include: :lines
    end

end
