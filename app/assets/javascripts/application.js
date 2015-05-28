
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets-custom

var userFeed = new Instafeed({
  get: 'shigely', 
  userId:  670311557, 
  accessToken: '670311557.467ede5.02ffb4e87628491fbfeca1cee19b8d29', 
  limit: 10, 
  sortBy: "random", 
  template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}"></a></li>',
  after: function() {
    $('#scroller ul').simplyScroll();
  },
});
<p></p>
userFeed.run();
