ThinkingSphinx::Index.define :user, with: :active_record do
  indexes [first_name, last_name], sortable: true
end