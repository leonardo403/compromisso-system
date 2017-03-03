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
        $scope.message = "Cadastrado com sucesso.";       
        $scope.cadastroForm.$setPristine();
    };

    $scope.selectComp = function(comp){
        console.log(comp);
       $scope.clickedComp = comp;     
    };

    $scope.updateComp = function(){
        $scope.compromissos.push($scope.clickedComp);        
        $scope.message = "Atualizado com sucesso.";
        $scope.editarForm.$setPristine();
    };

    $scope.deleteComp = function(){
        $scope.compromissos.splice($scope.compromissos.indexOf, 1);        
        $scope.message = "Compromisso deletado.";
    };

    $scope.clearMessage = function(message){
        console.log(message);
        $scope.message = "";
    };
});