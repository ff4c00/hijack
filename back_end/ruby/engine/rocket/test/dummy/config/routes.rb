Rails.application.routes.draw do
  # 引擎的 test 文件夹用于储存引擎测试文件。
  # 在 test/dummy 文件夹中有一个内嵌于引擎中的精简版 Rails 测试应用，可用于测试引擎。此测试应用会挂载 test/dummy/config/routes.rb 文件中的引擎
  mount Rocket::Engine => "/rocket"
end
