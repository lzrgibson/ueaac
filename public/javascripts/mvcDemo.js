/*user-gird*/
Ext.application({
    requires: ['Ext.container.Viewport'],  
    name: 'AM',

    appFolder: 'javascripts/mvcDemo/app',
    controllers: [
        'Users'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'userlist'
                }
            ]
        });
    }
});

