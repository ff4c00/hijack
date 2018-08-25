module Rocket
  class ApplicationRecord < ActiveRecord::Base
    #  has_many 关联是在 engine_name 模块内的类中定义的，因此 Rails 知道应该为关联对象使用 EngineName::Comment 模型，而无需指定 :class_name 选项。
    self.abstract_class = true
  end
end
