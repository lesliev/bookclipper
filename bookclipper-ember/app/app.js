import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import { setCsrfUrl } from 'rails-csrf/config';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

setCsrfUrl('/csrf');

loadInitializers(App, config.modulePrefix);
loadInitializers(App, 'rails-csrf');





export default App;

// var response = '{"result":true,"count":1}';
// var obj = $.parseJSON(response);
// alert(obj.result); //true
// alert(obj.count); //1

