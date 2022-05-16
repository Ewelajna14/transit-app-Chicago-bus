class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create, :update]
    
    # POST /users
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    #PATCH /users/:id
    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user
    end




    private

    def user_params
        params.permit(:id, :first_name, :last_name, :username, :email, :password, :password_confirmation)
    end


end
