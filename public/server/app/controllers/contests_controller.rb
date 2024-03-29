class ContestsController < ApplicationController
  before_action :set_contest, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  # GET /contests
  # GET /contests.json
  def index
    @contests = Contest.all
    msg = @contests.to_json
    render json: msg
    # render :json => msg
  end

  # GET /contests_
  def show
    
  end

  # GET /contests/new
  def new
    @contest = Contest.new
  end

  # GET /contests/1/edit
  def edit
  end

  # POST /contests
  # POST /contests.json
  def create
    a = Contest.new(:firstname => params[:firstname], :lastname => params[:lastname], :email => params[:email], :slogan => params[:slogan], :votes => 0)
    if a.save
      render json: "1"
    else
      render json: "0"
    end
=begin
    @contest = Contest.new(contest_params)

    respond_to do |format|
      if @contest.save
        format.html { redirect_to @contest, notice: 'Contest was successfully created.' }
        format.json { render :show, status: :created, location: @contest }
      else
        format.html { render :new }
        format.json { render json: @contest.errors, status: :unprocessable_entity }
      end
    end
=end
  end

  # PATCH/PUT /contests/1
  # PATCH/PUT /contests/1.json
  def update
    respond_to do |format|
      if @contest.update(contest_params)
        format.html { redirect_to @contest, notice: 'Contest was successfully updated.' }
        format.json { render :show, status: :ok, location: @contest }
      else
        format.html { render :edit }
        format.json { render json: @contest.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /contests/1
  # DELETE /contests/1.json
  def destroy
    @contest.destroy
    respond_to do |format|
      format.html { redirect_to contests_url, notice: 'Contest was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contest
      @contest = Contest.find(params[:id]) 
    end

    # Only allow a list of trusted parameters through.
    def contest_params
      params.fetch(:contest, {}).permit(:firstname, :lastname, :email, :slogan, :votes)
    end
end
