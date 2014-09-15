angular.module('starter.controllers', [])

.controller('mainCtrl', function($scope, $ionicModal, $ionicPopup) {

	$scope.items = [
		"Assassins Creed 2",
		"Dust",
		"Super Meat Boy",
		"Call Of Juarez",
		"Tekken 6",
		"Street Fighter 4",
		"Battlefield 4"
	];

	$ionicModal.fromTemplateUrl('new-game.html',function (modal){
		$scope.gameModal = modal;
	},
	{
		scope: $scope,
		animation: "slide-in-up"
	});

	$scope.newGame = function(){
		$scope.gameModal.show();
	}

	$scope.closeNewGame = function(){
		$scope.gameModal.hide();
	}

	$scope.createGame = function(game){
		//saveGame
		$scope.items.push(game.title);
		$scope.gameModal.hide();
		game.title = "";
	}

	$scope.onItemDelete = function(item){
		$ionicPopup.confirm({
			title:"Confirmar Exclusão",
			content: "Excluir Jogo?"
		}).then(function(res){
			if(res){
				$scope.items.splice(item, 1);
			}
		});
	}

})

.controller('loginCtrl', function($scope,$http, $state, $ionicModal, $ionicPopup) {
$scope.logar = function(user){
	var urlGetServiceLogin = "http://177.153.20.154:8080"
	$http.get(urlGetServiceLogin + "/HCm/webresources/systemUser/validate/" 
		+ user.username + "&" + user.password)
      .success(function(data) {
	 	if(data.result === "sucesso"){
	 		$state.go("home");
	 	}else{
	 		$ionicPopup.alert({
     			title: 'Falha no login',
     			template: data.result
   			});
	 	}
	}).error(function(data) {
        	$ionicPopup.alert({
     			title: 'Falha no login',
     			template: "ERRO"
   			});
    });
}
})


