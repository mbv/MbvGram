# frozen_string_literal: true

FactoryGirl.define do
  factory :album do
    title { Faker::Name.title }
    description { Faker::Book.title }
  end
end
