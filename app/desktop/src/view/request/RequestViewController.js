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

    onAddClick: function(){
        Ext.create('Ext.window.Window',{
            title: 'Добавление заявки',
            height:200,
            width:400,
            layout:'fit',

        })
    },

    init:function(){
        this.control({

        });
    }
});