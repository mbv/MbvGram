class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :photo


  def can_delete
    true
  end
end
