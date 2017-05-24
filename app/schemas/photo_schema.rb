# frozen_string_literal: true

PhotoSchema = Dry::Validation.Schema(ApplicationSchema) do
  required(:album_id).filled(is_record?: Album)
  required(:description).maybe(:str?)
  required(:file).filled
  required(:tag_list).each do
    required(:name).filled(:str?, min_size?: 2)
  end
end
