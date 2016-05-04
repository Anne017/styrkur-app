define('collections/users',
    [
        'backbone',
        'models/user'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,

        store: Model.prototype.store

    });
    
});
