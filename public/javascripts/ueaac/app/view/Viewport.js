Ext.define('Ueaac.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',

    requires: [
        'Ueaac.view.Controls',
        'Ueaac.view.Navigation'
    ],

    initComponent: function () {
        this.items = {
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                height: 40,
                items: [{
                    xtype: 'component',
                    html: 'New UEAAC'
                }, {
                    xtype: 'controls',
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