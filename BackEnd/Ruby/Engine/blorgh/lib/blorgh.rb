require "blorgh/engine"

module Blorgh
  # Your code goes here...
  # mattr_accessor 方法的工作原理与 attr_accessor 和 cattr_accessor 方法类似
  # 其作用是根据指定名称为模块提供设值方法和读值方法。
  # 使用时直接调用 Blorgh.author_class 方法即可
  mattr_accessor :author_class

  def self.author_class
    @@author_class.constantize
  end

  config.to_prepare do
    Dir.glob(Rails.root + "app/decorators/**/*_decorator*.rb").each do |c|
      require_dependency(c)
    end
  end
  
end
