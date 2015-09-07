import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    keyUp() {
      console.log(this.get('testInput'));
    }
  }
});
