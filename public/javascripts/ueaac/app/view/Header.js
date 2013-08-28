Ext.define('Ueaac.view.Header', {
    extend: 'Ext.Component',
    alias: 'widget.header',
    dock: 'top',
    baseCls: 'app-header-title',
    
    initComponent: function() {
        /*
        Ext.applyIf(this, {
            html: 'New UEAAC'
        });
          */      
        this.callParent(arguments);
    }
});