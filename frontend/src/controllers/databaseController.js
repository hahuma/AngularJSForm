const databaseController = function($http){
    const vm = this;

    vm.getUsers = function(){
         //essa chamada http deve ser utilizada apenas durante desenvolvimento, essa URL não conrresponde a de uma API real
        $http.get('http://localhost:3333/listarDados')
            .then(response => {
                console.log(response.data)
                return vm.users = response.data
            })
    }

}

export default databaseController;