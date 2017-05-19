PhotoUpdateSchema = Dry::Validation.Schema(PhotoSchema) do
  required(:id).filled(is_record?: Photo)
end