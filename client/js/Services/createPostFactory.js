//The action to call the local API should be here

angular.module('app')

.factory("getFactory", getFactory);

getFactory.$inject = ["$resource"];

function getFactory($resource){
    return $resource("http://localhost:3000/api/posts/:id");
}