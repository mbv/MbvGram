# frozen_string_literal: true

require "rails_helper"

RSpec.describe CreateCommentOperation do
  describe "#run" do
    describe "create comment" do

      before do
        RequestStore.store[:current_user] = create(:user)
      end

      subject(:comment) { described_class.new.run(input) }

      let(:photo) { create(:photo) }

      let(:input) do
        ActionController::Parameters.new(text:     "text comment",
                                         photo_id: photo.id)

      end

      it "valid object type" do
        expect(comment).to be_a(Comment)
      end
      it "with text" do
        expect(comment).to have_attributes(text: "text comment")
      end
      it "with user" do
        expect(comment.user).to eq(RequestStore.store[:current_user])
      end
      it "with photo" do
        expect(comment.photo).to eq(photo)
      end
    end
  end
end
