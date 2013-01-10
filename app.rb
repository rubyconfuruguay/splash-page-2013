require "cuba"
require "erb"
require "cuba/render"

Cuba.plugin Cuba::Render

Cuba.define do
  on get do
    res.redirect "http://rubyconfuruguay.github.com/"
  end
end
