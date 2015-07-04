/*jslint indent: 2,nomen:true */
/*globals angular */
'use strict';

function UsersService ($http) {
  var user = {};

  user.getUsers = function () {
    return $http.get('/api/users');
  };

  user.save = function (params) {
    return $http.post('/api/users', params);
  };

  return user;
}


function IndexController (Users) {
  var Index = this;

  Index.user = {};

  Users
    .getUsers()
    .then(function (response) {
      Index.users = response.data;
    });

  Index.submit = function () {
    Users
      .save(Index.user)
      .then(function (response) {
        console.log(response);
      });
  };
}

angular.module('App', [])
  .factory('Users', UsersService)
  .controller('IndexController', IndexController);
