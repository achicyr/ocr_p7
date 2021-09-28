require "application_system_test_case"

class ControllerOkoksTest < ApplicationSystemTestCase
  setup do
    @controller_okok = controller_okoks(:one)
  end

  test "visiting the index" do
    visit controller_okoks_url
    assert_selector "h1", text: "Controller Okoks"
  end

  test "creating a Controller okok" do
    visit controller_okoks_url
    click_on "New Controller Okok"

    click_on "Create Controller okok"

    assert_text "Controller okok was successfully created"
    click_on "Back"
  end

  test "updating a Controller okok" do
    visit controller_okoks_url
    click_on "Edit", match: :first

    click_on "Update Controller okok"

    assert_text "Controller okok was successfully updated"
    click_on "Back"
  end

  test "destroying a Controller okok" do
    visit controller_okoks_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Controller okok was successfully destroyed"
  end
end
