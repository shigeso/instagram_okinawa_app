class CreateThemes < ActiveRecord::Migration
  def change
    create_table :themes do |t|
      t.string :name
      t.string :tag
      t.boolean :default, default: false

      t.timestamps null: false
    end
  end
end
