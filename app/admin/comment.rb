# frozen_string_literal: true

ActiveAdmin.register Comment do
  includes :photo, :user
end
