Ext.define('hsedevelopApp.view.request.RequestViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.requestviewcontroller',



    onAddClick: function(btn){
        var grid=btn.up('grid');
        debugger;
        var newRowIndex=Ext.isEmpty(grid.selection)?0:grid.store.indexOf(grid.selection);
        var recs=grid.getStore().insert(newRowIndex,{})[0];
        grid.view.focusNode(recs);
        grid.editingPlugin.startEdit(recs,0)
    },


    onDeleteClick: function(){
        var requestgrid=this.getView();
        var requeststore=requestgrid.getStore();
        var selectedRows=requestgrid.getSelectionModel().getSelection();

        requeststore.remove(selectedRows);
    },

    init:function(){
        this.control({

        });
    }
});