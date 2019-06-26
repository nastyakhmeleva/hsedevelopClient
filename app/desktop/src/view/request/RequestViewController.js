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
    onSubmit: function(){
      var form=this.getView();

      form.submit({
          url: 'url/to/submit/to',
          success:function () {
              Ext.Msg.alert('Form submitted successfully!');
          }
      })
    },


    onDeleteClick: function(){
        var grid=Ext.getCmp('requestgrid');
        var selection=grid.getView().getSelectionModel().getSelection()[0];
        if (selection){
            store.remove(selection);
        }
    },

    init:function(){
        this.control({

        });
    }
});