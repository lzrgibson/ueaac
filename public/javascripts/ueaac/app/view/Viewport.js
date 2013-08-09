Ext.define('Ueaac.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    requires: [
        'Ueaac.view.Header',
        'Ueaac.view.Controls',
        'Ueaac.view.Navigation'
    ],

    initComponent: function () {
        this.items = {
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                height: 40,
                baseCls: 'app-header',
                items: [{
                    xtype: 'header',
                    flex: 1
                }]
            }],
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                width: 170,
                xtype: 'panel',
                id: 'west-region',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'navigation',
                    flex: 1
                }]
            }]
        };
        this.callParent();
    }
});