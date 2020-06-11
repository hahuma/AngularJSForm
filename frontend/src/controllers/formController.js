function registerController($scope, $http){
    var userInformation = {}

    userInformation = $scope.userInformation;

    $scope.sendInfoAndClear = function(userInformation){

        $http.post('http://localhost:3333/cadastro', userInformation)
            .then(response => {

                const {name} = response.data;
                alert(`Tudo certo, ${name}! Seu cadastro foi realizado com sucesso! Seja bem vindo(a)!`)
                $scope.userInformation = {}
                return

            },(err) => {
                    if(err.response){
                        alert('Erro no cadastro do funcionário: ' + err.response.data.error)
                    }else{
                        alert('Seus dados estão preenchidos de maneira incorreta!')
                    }
                })

        }



}

export default registerController;