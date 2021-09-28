class ControllerOkoksController < ApplicationController
  before_action :set_controller_okok, only: %i[ show edit update destroy ]

  # GET /controller_okoks or /controller_okoks.json
  def index
    @controller_okoks = ControllerOkok.all
  end

  # GET /controller_okoks/1 or /controller_okoks/1.json
  def show
  end

  # GET /controller_okoks/new
  def new
    @controller_okok = ControllerOkok.new
  end

  # GET /controller_okoks/1/edit
  def edit
  end

  # POST /controller_okoks or /controller_okoks.json
  def create
    @controller_okok = ControllerOkok.new(controller_okok_params)

    respond_to do |format|
      if @controller_okok.save
        format.html { redirect_to @controller_okok, notice: "Controller okok was successfully created." }
        format.json { render :show, status: :created, location: @controller_okok }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @controller_okok.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /controller_okoks/1 or /controller_okoks/1.json
  def update
    respond_to do |format|
      if @controller_okok.update(controller_okok_params)
        format.html { redirect_to @controller_okok, notice: "Controller okok was successfully updated." }
        format.json { render :show, status: :ok, location: @controller_okok }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @controller_okok.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /controller_okoks/1 or /controller_okoks/1.json
  def destroy
    @controller_okok.destroy
    respond_to do |format|
      format.html { redirect_to controller_okoks_url, notice: "Controller okok was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_controller_okok
      @controller_okok = ControllerOkok.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def controller_okok_params
      params.fetch(:controller_okok, {})
    end
end
