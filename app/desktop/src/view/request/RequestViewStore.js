var itemsPerPage=2;

Ext.define('hsedevelopApp.view.request.RequestViewStore', {
    extend: 'Ext.data.Store',
    autoLoad:false,
    pageSize:2,
    alias: 'store.requestviewstore',
    fields: [
        'name', 'dateOn', 'dateOff', 'upgradeDate', 'sum'
    ],
    total:3,
    data: { items: [
            { name: 'Перевод денег',   dateOn: "20.05.2018", dateOff: "21.05.2018", upgradeDate: "20.05.2018",  sum: 15000 },
            { name: 'Оплата счета',   dateOn: "15.03.2019", dateOff: "15.03.2019", upgradeDate: "",  sum: 5218 },
            { name: 'Запрос кредита',   dateOn: "19.01.2019", dateOff: "21.05.2019", upgradeDate: "20.05.2019",  sum: 250000 }
        ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty:'total'
        }
    }
});

store.load({
    params:{
        start:0,
        limit:itemsPerPage
    }
});

