# frozen_string_literal: true

ActiveAdmin.register Album do
  includes :user
end
