//= require rails-ujs
//= require jquery
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

(function($) {
    $(document).ready(function() {
        $('iframe').iFrameResize({log: true}, '#myIframe');
    });
})
