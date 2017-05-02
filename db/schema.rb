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

ActiveRecord::Schema.define(version: 20170420235543) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "burger_ingredients", force: :cascade do |t|
    t.integer  "burger_id"
    t.integer  "ingredient_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "burger_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "burgers", force: :cascade do |t|
    t.string   "name"
    t.decimal  "price",          precision: 9, scale: 2
    t.integer  "burger_type_id"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.integer  "order_item_id"
  end

  create_table "images", force: :cascade do |t|
    t.string   "photo"
    t.integer  "burger_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.string   "name"
    t.decimal  "price",      precision: 9, scale: 2
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  create_table "item_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string   "name"
    t.integer  "item_type_id"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.decimal  "price",        precision: 9, scale: 2
  end

  create_table "order_items", force: :cascade do |t|
    t.integer  "menu_item_id"
    t.string   "menu_item_type"
    t.integer  "user_id"
    t.decimal  "order_id",       precision: 9, scale: 2
    t.integer  "quantity"
    t.string   "status"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
  end

  create_table "orders", force: :cascade do |t|
    t.decimal  "user_id",    precision: 9, scale: 2
    t.decimal  "subtotal",   precision: 9, scale: 2
    t.decimal  "tax",        precision: 9, scale: 2
    t.decimal  "total",      precision: 9, scale: 2
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password_digest"
    t.boolean  "admin"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
