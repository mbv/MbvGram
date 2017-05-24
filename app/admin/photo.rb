# frozen_string_literal: true

ActiveAdmin.register Photo do
  includes :album
end
