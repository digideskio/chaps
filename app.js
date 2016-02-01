  var app = angular.module('chaps', ['ngMaterial']);

  app.controller('ChapsController', function($scope) {
    this.products = [
      {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Some description of a product',
        canPurchase: true
      },
      {
        name: 'Second gem',
        price: 3.12,
        description: 'Some  second description of a product',
        canPurchase: true
      }
    ];

  });
  
