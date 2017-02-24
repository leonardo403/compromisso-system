var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
    //console.log("in myController...");

    $scope.newComp = {};
    $scope.clickedComp = {};
    $scope.message = "";

    $scope.compromissos = [
        {consultor: "leonardo", email: "leonardo403@gmail.com", titulo: "Novos projetos",dt_inicio: "24/02/2017 17:00",dt_termino: "24/02/2017 18:00",detalhes: "vamos nos reunir."},
        {consultor: "joão", email: "joao@gmail.com", titulo: "Compras",dt_inicio: "24/02/2017 12:00",dt_termino: "24/02/2017 14:00", detalhes: "urgente"}
    ];

    $scope.salvarComp = function(){
        $scope.compromissos.push($scope.newComp);
        $scope.newComp = {};
        $scope.message = "cadastro com sucesso.";
    };

    $scope.selectComp = function(comp){
       $scope.clickedComp = comp;     
    };

    $scope.updateComp = function(){
        $scope.message = "atualizado com sucesso.";
    };

    $scope.deleteComp = function(){
        $scope.compromissos.splice($scope.compromissos.indexOf($scope.clickedComp), 1);
        $scope.message = "compromisso deletado.";
    };

    $scope.clearMessage = function(){
        $scope.message = "";
    };
});