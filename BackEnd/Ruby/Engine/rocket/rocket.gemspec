$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "rocket/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "rocket"
  s.version     = Rocket::VERSION
  s.authors     = ["ff4c00"]
  s.email       = ["ff4c00@gmail.com"]
  s.homepage    = ""
  s.summary     = "Summary of Rocket."
  s.description = "Description of Rocket."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  s.add_dependency "rails", "~> 5.0.7"

  s.add_development_dependency "sqlite3"
end
