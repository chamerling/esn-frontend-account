import angular from 'angular';

angular.module('linagora.esn.profile')
  .controller('profileOverviewController', profileOverviewController);

function profileOverviewController($scope) {
  var self = this;

  self.$onInit = $onInit;

  function $onInit() {
    console.log('hello')
    $scope.user = self.user;
  }
}
