# frozen_string_literal: true

FactoryGirl.define do
  factory :tag do
    name { Faker::Name.title }
  end
end
