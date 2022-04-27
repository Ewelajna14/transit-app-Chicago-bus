class PredictionsController < ApplicationController

    #routes/:route_id/stops/stop_id/predictions

    def index
        url = "http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=#{ENV["KEY"]}&rt=#{params[:route_id]}&stpid=#{params[:stop_id]}&format=json"
        response = RestClient.get(url)
        render json: response
    end


end
