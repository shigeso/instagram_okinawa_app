class HomeController < ApplicationController
  def index
  	tag = params[:id]
  	@medias = Instagram.tag_recent_media(URI.encode(tag), {:count => 50})
  	@users = Instagram.user_recent_media("670311557", {:count => -1})
  	#@user_name = Instagram.user_search("shigely")
  end
end
