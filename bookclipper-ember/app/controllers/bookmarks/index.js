import Ember from 'ember';
export default Ember.ArrayController.extend({
  actions: {
    clipIt: function(id) {
      var _this = this;
      Ember.$.ajax({
      url : 'api/favorites',
      type: 'POST',
      dataType : "json",
      data: {"bookmark_id": id},
      success:function() {
        Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Added to your clips!</h3></div></div>");
        setTimeout(function(){
          Ember.$("#flash-wrapper").fadeOut("slow", function () {
          Ember.$("#flash-wrapper").remove();
          }); }, 2000);
        return _this.store.find('bookmark');
      },
      error: function() { alert('something bad happened'); }
      });
    },
    remove: function(id) {
      var _this = this;
      Ember.$.ajax({
      url : 'api/favorites/'+id,
      type: 'DELETE',
      dataType : "json",
      data: {"bookmark_id": id},
      success:function() {
        Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Removed from your clips!</h3></div></div>");
        setTimeout(function(){
          Ember.$("#flash-wrapper").fadeOut("slow", function () {
          Ember.$("#flash-wrapper").remove();
          }); }, 2000);
        _this.store.unloadAll('bookmark');
        _this.store.unloadAll('user');
        _this.store.unloadAll('hashtag');
        _this.store.find('bookmark');
      },
      error: function() { alert('something bad happened'); }
      });
    }
  }
});
