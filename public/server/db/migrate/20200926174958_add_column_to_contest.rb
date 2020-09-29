class AddColumnToContest < ActiveRecord::Migration[6.0]
  def change
    add_column :contests, :approuved, :boolean
    add_column :contests, :voted, :integer
  end
end
