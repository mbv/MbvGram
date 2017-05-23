require "rails_helper"

RSpec.describe Album, type: :model do
  it "has a valid factory" do
    expect(album).to be_valid
  end
end