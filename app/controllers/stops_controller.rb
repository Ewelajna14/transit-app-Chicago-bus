class StopsController < ApplicationController
    # GET/routes/:route_id/directions/direction_id/stops
    def index
        url = "http://ctabustracker.com/bustime/api/v2/getstops?key=#{ENV["MY_API_KEY"]}&rt=#{params[:route_id]}&dir=#{params[:direction_id]}&format=json"
        response = RestClient.get(url)
        render json: response
    end 


end
