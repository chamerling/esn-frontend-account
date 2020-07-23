import angular from 'angular';

require('./profile-overview.controller.js');
console.log('hello');

angular.module('linagora.esn.profile')
  .component('profileOverview', {
    template: require("./profile-overview.pug"),
    controller: 'profileOverviewController',
    bindings: {
      user: '<',
      me: '<',
      canEdit: '<'
    }
});
