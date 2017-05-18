AlbumSchema = Dry::Validation.Schema(ApplicationSchema) do
  required(:title).filled(:str?)
  required(:description).maybe(:str?)
  required(:tag_list).each do
    required(:name).filled(:str?, min_size?: 2)
  end
end