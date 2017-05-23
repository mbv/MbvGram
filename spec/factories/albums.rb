FactoryGirl.define do
  factory :album do
    title { Faker::Name.title }
    description { Faker::Book.title }
    user
  end
end