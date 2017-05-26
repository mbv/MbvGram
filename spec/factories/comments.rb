# frozen_string_literal: true

FactoryGirl.define do
  factory :comment do
    photo
    text { Faker::Book.title }
  end
end
