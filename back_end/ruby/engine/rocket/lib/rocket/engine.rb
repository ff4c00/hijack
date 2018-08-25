module Rocket
  class Engine < ::Rails::Engine
  # 有些引擎会通过 lib/engine_name/engine.rb 文件提供全局配置选项。
  # 可以优先选择在定义引擎模块的 lib/engine_name/engine.rb 文件中定义全局配置选项，也就是在引擎模块中定义相关方法.   
    # 为引擎设置独立的命名空间,在未调用此方法的情况下，引擎中生成的类有可能和应用发生冲突。
    # 因为引擎位于命名空间中，所以引擎的多数文件也位于命名空间中。
    isolate_namespace Rocket
    # 定义引擎的基础模块(主要功能)

    # 要想扩展引擎的模型类和控制器类，比如在宿主应用中直接打开它们（因为模型类和控制器类只不过是继承了特定 Rails 功能的 Ruby 类）。
    # 通过打开类的技术，可以根据宿主应用的需求对引擎的类进行自定义，实际操作中通常会使用装饰器模式。
    # 不光是装饰器，对于添加到引擎中但没有在宿主应用中引用的任何东西，都需要进行这样的处理。
    config.to_prepare do
      Dir.glob(Rails.root + "app/decorators/**/*_decorator*.rb").each do |c|
        require_dependency(c)
      end
    end

  end
end
