ThinkingSphinx::Index.define :photo, with: :active_record do
  indexes description, sortable: true
  indexes tags.name
end