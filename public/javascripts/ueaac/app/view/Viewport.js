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
                baseCls: 'app-header',
                items: [{
                    html: 'New UEAAC',
                    baseCls: 'app-header-title',
                    flex: 1
                }]
            }],
            layout: 'border',
            items: [{
                width: 250,
                minWidth: 175,
                maxWidth: 400,
                id: 'west-region',
                region: 'west',
                collapseMode: 'mini',
                collapsible: true,
                split: true,
                animCollapse: true,
                title: '域',
                layout: {
                    align: 'stretch',
                    type: 'vbox'
                },
                items: [{
                    xtype: 'container',
                    height: 50,
                    layout: 'fit',
                    items: [{
                        xtype: 'splitbutton',
                        margin: '10 40',
                        text: 'OA域'
                    }]
                }, {
                    xtype: 'treepanel',
                    flex: 1,
                    header: true,
                    title: '组织架构',
                    viewConfig: {},
                    tools: [{
                        xtype: 'tool',
                        type: 'plus',
                        listeners: {
                            click: {
                                fn: function(){
                                    alert("新增组织架构！");
                                }
                            }
                        }
                    }, {
                        xtype: 'tool',
                        type: 'gear',
                        listeners: {
                            click: {
                                fn: function(){
                                    alert("操作更多功能！");
                                }
                            }
                        }
                    }]
                }]
            }, {
                region: 'center',
                layout: 'border',
                items: [{
                    region: 'west',
                    width: 250,
                    bodyStyle: 'border-width:0;',
                    title: '用户&角色',
                    layout: 'fit',
                    plain: true,
                    items: [{
                        xtype: 'tabpanel',
                        animCollapse: true,
                        activeTab: 0,
                        bodyStyle: 'border-width:0;',
                        flex: 1,
                        tabPosition: 'bottom',
                        items: [{
                            title: '用户',
                            layout: 'fit',
                            bodyStyle: 'border-width:0;',
                            items: [{
                                xtype: 'gridpanel',
                                bodyStyle: 'border-width:1px 0 1px 1px;',
                                width: 150,
                                enableColumnResize: false,
                                columns: [{
                                    xtype: 'gridcolumn',
                                    resizable: false,
                                    sortable: false,
                                    dataIndex: 'string',
                                    hideable: false,
                                    text: '用户名',
                                    flex: 1
                                }]
                            }]
                        }, {
                            title: '角色',
                            layout: 'fit',
                            bodyStyle: 'border-width:0;',
                            items: [{
                                xtype: 'gridpanel',
                                bodyStyle: 'border-width:1px 0 1px 1px;',
                                width: 150,
                                enableColumnResize: false,
                                columns: [{
                                    xtype: 'gridcolumn',
                                    resizable: false,
                                    sortable: false,
                                    dataIndex: 'string',
                                    hideable: false,
                                    text: '角色名',
                                    flex: 1
                                }]
                            }]
                        }]
                    }],
                    tools: [{
                        xtype: 'tool',
                        type: 'plus',
                        listeners: {
                            click: {
                                fn: function(){
                                    alert("新增用户！");
                                }
                            }
                        }
                    }, {
                        xtype: 'tool',
                        type: 'gear',
                        listeners: {
                            click: {
                                fn: function(){
                                    alert("操作更多功能！");
                                }
                            }
                        }
                    }]
                }, {
                    region: 'center',
                    title: '资源',
                    xtype: 'treepanel',
                    viewConfig: {},
                    columns: [{
                        xtype: 'treecolumn',
                        dataIndex: 'text',
                        text: 'Nodes',
                        flex: 1
                    }, {
                        xtype: 'gridcolumn',
                        dataIndex: 'value',
                        text: 'Value'
                    }],
                    tools: [{
                        xtype: 'tool',
                        type: 'plus',
                        listeners: {
                            click: {
                                fn: function(){
                                    alert("新增资源！");
                                }
                            }
                        }
                    }, {
                        xtype: 'tool',
                        type: 'gear',
                        listeners: {
                            click: {
                                fn: function(){
                                    alert("操作更多功能！");
                                }
                            }
                        }
                    }]
                }]
            }]
        };
        this.callParent();
    }
});