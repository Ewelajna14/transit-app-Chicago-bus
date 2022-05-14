class FovouriteLinesController < ApplicationController

  

    #GET users/:user_id/fovourite_lines
    def index
        user = User.find(params[:user_id])
        lines = user.fovourite_lines
        render json: lines
    end

    #POST users/:user_id/fovourite_lines
    def create
        user = User.find(params[:user_id])
        lines = user.fovourite_lines.create!(lines_params)
        render json: lines, status: :created 
    end

    #DELETE /users/:user_id/fovourite_lines/:id
    def destroy
        user = User.find(params[:user_id])
        lines = user.fovourite_lines
        lines = FovouriteLine.find(params[:id])
        lines.destroy
        head :no_content
    end

    private

    def lines_params
    params.fetch(:fovourite_line, {}).permit(:user_id, :route, :name, :busId, :liked => [])
    end

    



end



