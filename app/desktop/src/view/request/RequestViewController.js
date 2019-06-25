Ext.define('hsedevelopApp.view.request.RequestViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.requestviewcontroller',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    init:function(){
        this.control({

        });
    }
});