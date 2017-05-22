ActiveAdmin.register Comment do
  includes :photo, :user
end
