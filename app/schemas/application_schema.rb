ApplicationSchema = Dry::Validation.Schema do
  configure do
    def is_record?(klass, value)
      klass.where(id: value).any?
    end

    def self.messages
      super.merge(en: { errors: { is_record?: 'id is not valid' } })
    end
  end
end