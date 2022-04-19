class LinesController < ApplicationController

    def index
        lines = Line.all
        render json: lines, include: :stops    
    end

    def show
        line = Line.find(params[:id])
        render json: line, include: :stops
    end


end
