# frozen_string_literal: true

CommentSchema = Dry::Validation.Schema(ApplicationSchema) do
  required(:photo_id).filled(is_record?: Photo)
  required(:text).filled(:str?, max_size: 140)
end
