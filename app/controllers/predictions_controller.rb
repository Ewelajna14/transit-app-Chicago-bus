class PredictionsController < ApplicationController

    #routes/:route_id/stops/stop_id/predictions

    def index
        r = UpdatePredictionsJob.perform_now(params)
        render json: r
    end


end
