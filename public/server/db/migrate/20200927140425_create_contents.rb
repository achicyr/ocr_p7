class CreateContents < ActiveRecord::Migration[6.0]
  def change
    create_table :contents do |t|
      t.string :elt
      t.text :content
      t.text :json

      t.timestamps
    end
  end
end
