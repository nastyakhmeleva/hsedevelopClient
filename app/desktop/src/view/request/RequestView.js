Ext.define('hsedevelopApp.view.request.RequestView',{
    extend:'Ext.grid.Grid',
    xtype: 'requestview',
    id:'requestgrid',
    selType:'cellmodel',
    plugins:[
        Ext.create('Ext.grid.plugin.CellEditing',{
            clicksToEdit:1
        })
    ],
    cls: 'requestview',
    requires: [],
    controller: {type: 'requestviewcontroller'},
    viewModel: {type: 'requestviewmodel'},
    store: {type: 'requestviewstore'},
    columns: [
        {
            text: 'Название',
            dataIndex: 'name',
            width: 200,
            editor:'textfield'
        },
        {
            text: 'Дата открытия',
            dataIndex: 'dateOn',
            width: 150,
            editor:'datefield'
        },
        {
            text: 'Дата закрытия',
            dataIndex: 'dateOff',
            width: 150,
            editor:'datefield'
        },
        {
            text: 'Дата обновления',
            dataIndex: 'upgradeDate',
            width: 150,
            editor:'datefield'
        },
        {
            text: 'Сумма',
            dataIndex: 'sum',
            width: 150,
            editor: 'textfield'
        }
    ],
    items:[
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype:'button',
                    renderTo: Ext.getBody(),
                    text:'Add',
                    handler: function(){openFormAddRequest.show();}
                    },
                {
                    xtype: 'button',
                    text: 'Delete',
                    handler: 'onDeleteClick'
                }
            ]}
    ]
});

var openFormAddRequest=Ext.create('Ext.Window',{
    title: 'Добавление заявки',
    bodyPadding: 5,
    width:500,
    closeAction: 'hide',
    closable:true,
    layout:{
        type:'vbox',
        align:'stretch'
    },
        items:[{
            xtype:'textfield',
        label: 'Название',
        name: 'name',
        allowBlank: true
    },
        {
            xtype:'datefield',
            label: 'Дата открытия',
            name:'dateOn',
        },
        {
            xtype:'datefield',
            label: 'Дата закрытия',
            name:'dateOff'
        },
        {
            xtype:'datefield',
            label: 'Дата обновления',
            name:'upgradeDate'
        },
        {
            xtype:'textfield',
            label: 'Сумма',
            name:'sum'
        }],
    bbar:[{
            xtype:'toolbar',
            items:[
                {
                    xtype: 'button',
                    text: 'Save',
                },
                {
                    handler:function () {
                        editForm().submit({
                            url:'requestStore'
                        })

                    }
                }]
    }],
    autoLoad: true
});