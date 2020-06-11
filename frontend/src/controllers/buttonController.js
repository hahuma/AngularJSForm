const buttonController = function($location){
    const vm = this;
    vm.changePage = function(){
        if($location.path() === '/'){
            $location.path('/database')
            return
        }
        if($location.path() === '/database'){
            $location.path('/')
            return
        }
    }
}

export default buttonController;