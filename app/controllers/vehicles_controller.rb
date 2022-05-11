class VehiclesController < ApplicationController

 
    
    #GET /viehicles/:id
    def show
        url = "http://ctabustracker.com/bustime/api/v2/getvehicles?key=#{ENV["KEY"]}&rt=#{params[:id]}&format=json"
        response = RestClient.get(url)
        render json: response
    end


end
