# frozen_string_literal: true

require "rails_helper"

RSpec.describe UpdateCommentOperation do
  describe "#run" do
    describe "update comment" do
      before do
        RequestStore.store[:current_user] = create(:user)
      end

      subject(:updated_comment) { described_class.new.run(input, comment) }

      let(:photo) { create(:photo) }

      let(:comment) { create(:comment) }

      let(:input) do
        ActionController::Parameters.new(text:     "new text",
                                         photo_id: comment.photo.id)
      end

      it "valid object type" do
        expect(updated_comment).to be_a(Comment)
      end
      it "with new text" do
        expect(updated_comment).to have_attributes(text: "new text")
      end
    end
  end
end
