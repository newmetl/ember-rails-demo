import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts');
  this.route('post', { path: 'posts/:post_id' });
  this.route('post.new', { path: 'posts/new' });
});

export default Router;
