class DirectionsController < ApplicationController

 
    
    def index
        directions = Direction.all
        render json: directions
    end


end
