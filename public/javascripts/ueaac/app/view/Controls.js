Ext.define('Ueaac.view.Controls', {
    extend: 'Ext.Container',
    alias: 'widget.controls',
    height: 30,

    initComponent: function () {
        this.layout = {
            type: 'vbox',
            align: 'left',
            pack: 'center'
        };

        this.items = [{
            xtype: 'container',
            defaultType: 'button',
            height: 40,
            width: 300,
            items: [{
                text: '创 建',
                menu: [{
                    text: '组织架构',
                    iconCls: 'icon-add',
                    handler: function(){
                        Ext.Msg.alert('Status', '创建组织架构.');
                    }
                },{
                    xtype: 'menuseparator'
                },{
                    text: '角色组',
                    iconCls: 'icon-add',
                    handler: function(){
                        Ext.Msg.alert('Status', '创建角色组.');
                    }
                }]
            }]
        }];

        this.callParent();
    }
});