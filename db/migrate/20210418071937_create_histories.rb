class CreateHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :histories do |t|
      t.integer :score, null: false
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
