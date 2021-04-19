class CreateHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :histories do |t|
      t.integer :score, null: false
      t.timestamps
    end
  end
end
