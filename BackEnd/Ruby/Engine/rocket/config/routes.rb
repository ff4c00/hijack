Rocket::Engine.routes.draw do
  # 路由是通过 engine_name::Engine 对象而非 YourApp::Application 类定义的
  # 这样做的目的是把引擎路由限制在引擎中，这样就可以根据需要把引擎路由挂载到不同位置，同时也把引擎路由和应用中的其他路由隔离开来
end
