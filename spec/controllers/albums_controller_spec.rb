require 'rails_helper'

RSpec.describe Api::AlbumsController, type: :controller do
  describe 'GET #show' do
    it 'assigns the requested album to @album' do
      album = create(:album)
      get :show, id: album
      expect(assigns(:album)).to eq album
    end
    it 'renders the :show template'
  end
end