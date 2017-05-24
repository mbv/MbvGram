FixtureBuilder.configure do |fbuilder|

  # rebuild fixtures automatically when these files change:
  fbuilder.files_to_check += Dir["app/models/*.rb", "lib/**/*.rb",  "spec/factories/*.rb", "spec/support/fixture_builder.rb"]

  # now declare objects
  fbuilder.factory do
    # Users
    alice = FactoryGirl.create(:user, first_name: 'alice')

    eve   = FactoryGirl.create(:user, first_name: 'eve')

    bob   = FactoryGirl.create(:user, first_name: 'bob')

    bob.followers << alice
    bob.following << eve
    
  end
end