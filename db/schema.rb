# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170505151447) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.bigint "user_id"
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_albums_on_user_id"
  end

  create_table "albums_tags", id: false, force: :cascade do |t|
    t.bigint "album_id", null: false
    t.bigint "tag_id", null: false
    t.index ["album_id"], name: "index_albums_tags_on_album_id"
    t.index ["tag_id"], name: "index_albums_tags_on_tag_id"
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "photo_id"
    t.text "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["photo_id"], name: "index_comments_on_photo_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "photos", force: :cascade do |t|
    t.text "description"
    t.string "url"
    t.bigint "album_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_photos_on_album_id"
  end

  create_table "photos_tags", id: false, force: :cascade do |t|
    t.bigint "photo_id", null: false
    t.bigint "tag_id", null: false
    t.index ["photo_id"], name: "index_photos_tags_on_photo_id"
    t.index ["tag_id"], name: "index_photos_tags_on_tag_id"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.bigint "from_user_id"
    t.bigint "to_user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["from_user_id"], name: "index_subscriptions_on_from_user_id"
    t.index ["to_user_id"], name: "index_subscriptions_on_to_user_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "albums", "users"
  add_foreign_key "comments", "photos"
  add_foreign_key "comments", "users"
  add_foreign_key "photos", "albums"
end
