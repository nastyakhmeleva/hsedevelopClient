Ext.define('hsedevelopApp.view.request.RequestView',{
    extend:'Ext.grid.Grid',
    xtype: 'requestview',
    cls: 'requestview',
    requires: [],
    controller: {type: 'requestviewcontroller'},
    viewModel: {type: 'requestviewmodel'},
    store: {type: 'requestviewstore'},
    items:[
        {
            xtype: 'panel',
            tbar: [
                {
                    xtype:'button',
                    text:'Add',
                    handler: 'onAddClick'
                },
                {
                    xtype: 'button',
                    text: 'Delete'
                }
            ]
        },
    ],
    columns: [
        {
            text: 'Название',
            dataIndex: 'name',
            width: 200,
            cell: {userCls: 'bold'},
            editor: 'textfield'
        },
        {
            text: 'Дата открытия',
            dataIndex: 'dateOn',
            width: 150
        },
        {
            text: 'Дата закрытия',
            dataIndex: 'dateOff',
            width: 150,
        },
        {
            text: 'Дата обновления',
            dataIndex: 'upgradeDate',
            width: 150,
        },
        {
            text: 'Сумма',
            dataIndex: 'sum',
            width: 150,
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});