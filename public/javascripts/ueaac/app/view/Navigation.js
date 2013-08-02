Ext.define('Ueaac.view.Navigation', {
    extend: 'Ext.Container',
    alias: 'widget.navigation',

    initComponent: function () {
        this.layout = {
            type: 'vbox',
            align: 'stretch',
            pack: 'start'
        };   

        this.items = [{
            xtype: 'button',
            flex: 1,
            maxHeight: 35,
            text: 'UEAAC域',
            menu: {
                xtype: 'menu',
                width: 170,
                items: [{
                    xtype: 'menuitem',
                    text: 'UEAAC'
                },'-',{
                    xtype: 'menuitem',
                    text: '智能家居'
                },{
                    xtype: 'menuitem',
                    text: 'MRP'
                },'-',{
                    xtype: 'menuitem',
                    text: '管理'
                }]
            }
        },{
            xtype: 'tabpanel',
            flex: 1,
            activeTab: 0,
            items: [{
                xtype: 'buttongroup',
                title: '配置',
                layout: 'vbox',
                defaults: {
                    flex: 1,
                    maxHeight: 35,
                    width: '100%'
                },
                items: [{
                    text: '组织架构'
                },{
                    text: '角色'
                },{
                    text: '用户'
                },{
                    text: '资源'
                }]
            },{
                xtype: 'panel',
                title: '授权'
            },{
                xtype: 'panel',
                title: '系统'
            }]
        }];

        this.callParent();
    }
});