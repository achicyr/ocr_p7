require 'test_helper'

class ControllerOkoksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @controller_okok = controller_okoks(:one)
  end

  test "should get index" do
    get controller_okoks_url
    assert_response :success
  end

  test "should get new" do
    get new_controller_okok_url
    assert_response :success
  end

  test "should create controller_okok" do
    assert_difference('ControllerOkok.count') do
      post controller_okoks_url, params: { controller_okok: {  } }
    end

    assert_redirected_to controller_okok_url(ControllerOkok.last)
  end

  test "should show controller_okok" do
    get controller_okok_url(@controller_okok)
    assert_response :success
  end

  test "should get edit" do
    get edit_controller_okok_url(@controller_okok)
    assert_response :success
  end

  test "should update controller_okok" do
    patch controller_okok_url(@controller_okok), params: { controller_okok: {  } }
    assert_redirected_to controller_okok_url(@controller_okok)
  end

  test "should destroy controller_okok" do
    assert_difference('ControllerOkok.count', -1) do
      delete controller_okok_url(@controller_okok)
    end

    assert_redirected_to controller_okoks_url
  end
end
