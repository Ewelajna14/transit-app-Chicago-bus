class BicyclesStationsController < ApplicationController

    #GET /bicycles_stations
    def index
        url = "https://gbfs.divvybikes.com/gbfs/en/station_information.json"
        response = RestClient.get(url)
        render json: response
    end

end
