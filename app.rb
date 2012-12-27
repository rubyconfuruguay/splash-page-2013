require "cuba"
require "erb"
require "cuba/render"

Cuba.plugin Cuba::Render

Cuba.define do
  on get do
    on "es" do
      res.write render("views/home-es.erb")
    end

    res.write render("views/home.erb")
  end
end
