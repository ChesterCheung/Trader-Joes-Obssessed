class RemoveUrlColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :url
  end
end
