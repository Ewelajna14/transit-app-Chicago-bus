class UpdatePredictionsJob < ApplicationJob
    queue_as :default

    def perform(params)
        url = "http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=#{ENV["KEY"]}&rt=#{params[:route_id]}&stpid=#{params[:stop_id]}&format=json"
        response = RestClient.get(url)
      end


end