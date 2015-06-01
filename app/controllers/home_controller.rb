class HomeController < ApplicationController
  def index
  	@themes = Theme.all

  	tag = params[:id] || @themes.first.tag
  	@medias = Instagram.tag_recent_media(URI.encode(tag), {:count => 50})
  	@users = Instagram.user_recent_media("670311557", {:count => -1})
  	#@user_name = Instagram.user_search("shigely")
  end
end
