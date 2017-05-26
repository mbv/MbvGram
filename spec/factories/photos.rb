# frozen_string_literal: true

FactoryGirl.define do
  factory :photo do
    album
    description { Faker::Book.title }
    file { File.open(Rails.root.join("spec", "fixtures", "files", "image.jpg")) }
  end
end
