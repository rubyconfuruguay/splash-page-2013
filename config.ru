require "./app"

use Rack::Static, urls: %w(/css /js /img /fonts /downloads), root: "./public"
run Cuba
