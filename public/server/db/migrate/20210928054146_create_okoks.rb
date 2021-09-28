class CreateOkoks < ActiveRecord::Migration[6.0]
  def change
    create_table :okoks do |t|
      t.string :attr

      t.timestamps
    end
  end
end
