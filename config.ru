require "./app"

use Rack::Static, urls: %w(/css /js /img /fonts), root: "./public"
run Cuba
