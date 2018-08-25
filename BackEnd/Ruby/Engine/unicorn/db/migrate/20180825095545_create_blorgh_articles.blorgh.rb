# This migration comes from blorgh (originally 20180825030605)
class CreateBlorghArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :blorgh_articles do |t|
      t.string :title
      t.text :text

      t.timestamps
    end
  end
end
