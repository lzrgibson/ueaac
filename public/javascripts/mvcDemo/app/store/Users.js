Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    /*
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/users.json',
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
    */
    
    data: [
        {name: 'Ed',    email: 'ed@sencha.com'},
        {name: 'Tommy', email: 'tommy@sencha.com'}
    ]
    
});