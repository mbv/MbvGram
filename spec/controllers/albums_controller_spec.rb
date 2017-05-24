require 'rails_helper'

RSpec.describe Api::AlbumsController, type: :controller do
  describe '#index' do
    context 'user signed in' do
      before do
        sign_in alice, scope: :user
      end
      it 'responds successfully with an HTTP 200 status code' do
        get :index

        should respond_with(200)
      end

      it 'loads all of the posts into @posts' do
        album1 = create(:album)
        album2 = create(:album)
        get :index

        expect(assigns(:albums)).to match_array([album1, album2])
      end
    end
    context 'user not signed in' do

    end
  end
  describe 'GET #show' do
    it 'assigns the requested album to @album' do
      album = create(:album)
      get :show, params: { id: album }
      expect(assigns(:album)).to eq album
    end
    it 'renders the :show template'
  end
end