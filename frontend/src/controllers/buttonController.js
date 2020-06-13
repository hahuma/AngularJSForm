const buttonController = function($location){
    const vm = this;
    vm.changePage = function(){
        switch ($location.path()) {
            case '/':
                $location.path('/database')
                break;

            case '/database':
                $location.path('/')
                break;

            default:
                $location.path('/')
                break;
        }
    }
}

export default buttonController;