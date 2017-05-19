ThinkingSphinx::Index.define :album, with: :active_record do
  indexes title, sortable: true
  indexes description
  indexes tags.name
end