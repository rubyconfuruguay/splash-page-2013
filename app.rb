require "cuba"
require "erb"
require "cuba/render"

Cuba.plugin Cuba::Render

Cuba.define do
  on get do
    res.write render("views/home.erb")
  end
end
