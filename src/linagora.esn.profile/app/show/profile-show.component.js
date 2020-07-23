(function(angular) {
  'use strict';

  console.log('hey');
  angular.module('linagora.esn.profile')
    .component('profileShow', {
      template: require("./profile-show.pug"),
      bindings: {
        user: '<',
        me: '<',
        canEdit: '<'
      }
    });
})(angular);
