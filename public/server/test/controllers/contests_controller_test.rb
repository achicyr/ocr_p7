require 'test_helper'

class ContestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contest = contests(:one)
  end

  test "should get index as json made of an array" do
    get contests_url
    assert_response :success
    assert_equal response.content_type, 'application/json'
    jdata = JSON.parse response.body
    assert_equal true, Array.isArray(jdata)
    contest = contests('contest_1')
    assert_equal contest.firstname.to_s, jdata[0].firstname
    assert_equal contest.lastname.to_s, jdata[0].lastname
    assert_equal contest.slogan.to_s, jdata[0].slogan
    assert_equal contest.votes.to_i, jdata[0].votes
  end
  test "should get JSON:API error html block when requesting while no contest filled yet" do
    get contest_url
    assert_response :success
    #........??
    assert_response 404
    jdata = JSON.parse response.body
  end
  test "should create new contest" do
    post create_contest_url, params: {contest: {
      firstname:"firstname test",firstname:"lastname test",firstname:"slogan test",votes:0
    }}
    assert_response :redirect
    follow_redirect!
    assert_response :success
    assert_select "p", "firstname test"#params.contest.firstname
  end


  test "should get new" do
    get new_contest_url
    assert_response :success
  end

  test "should create contest" do
    assert_difference('Contest.count') do
      post contests_url, params: { contest: {  } }
    end

    assert_redirected_to contest_url(Contest.last)
  end

  test "should show contest" do
    get contest_url(@contest)
    assert_response :success
  end

  test "should get edit" do
    get edit_contest_url(@contest)
    assert_response :success
  end

  test "should update contest" do
    patch contest_url(@contest), params: { contest: {  } }
    assert_redirected_to contest_url(@contest)
  end

  test "should destroy contest" do
    assert_difference('Contest.count', -1) do
      delete contest_url(@contest)
    end

    assert_redirected_to contests_url
  end
end
