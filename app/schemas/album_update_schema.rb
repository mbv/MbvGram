AlbumUpdateSchema = Dry::Validation.Schema(AlbumSchema) do
  required(:id).filled(is_record?: Album)
end