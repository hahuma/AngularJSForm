const databaseController = function($http){
    const vm = this;

    vm.view = false;

    vm.getUsers = function(){
            $http.get('http://localhost:3333/listarDados')
            .then(response => {
                console.log(response.data)
                return vm.users = response.data
            })
    }

    vm.loadDatabase = function(){
        return !view;
    }

}

export default databaseController;