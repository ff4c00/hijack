module Rocket
  # 引擎的控制器常常需要访问宿主应用的  ApplicationController 类中的方法，
  # 为此可以让引擎的 ApplicationController 类继承自宿主应用的 ApplicationController 类
  # class ApplicationController < ::ApplicationController
  class ApplicationController < ActionController::Base
  # Ruby进行常量查找的方式，可能会遇到引擎的控制器继承自应用的ApplicationController，而不是继承自引擎的ApplicationController的情况。
  # 避免出现这种情况的最好办法是使用 require_dependency 方法，以确保加载的是引擎的 ApplicationController。
  # 不要使用 require 方法，否则会破坏开发环境中类的自动重新加载,使用 require_dependency 方法才能确保以正确的方式加载和卸载类。如:
  # app/controllers/engine_name/articles_controller.rb:
  # require_dependency "engine_name/application_controller"
    protect_from_forgery with: :exception
  end
end
