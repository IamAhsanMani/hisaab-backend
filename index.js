const express = require("express");
const admin = require('./config').admin;
const db = require('./config').db;
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors(({ origin: true })));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/accumulationSales", (req, res) => {
    
    const companyId = req?.body?.companyId;
    db.ref('AccumulationAccounts/').orderByChild('companyId').equalTo(companyId).once('value',(response)=> {
        var data = response.val();
        const accumulationAccounts = data && Object?.keys(data)?.length ? Object?.keys(data)?.length : 0;
        const sales = data && Object.keys(data).length > 0 ? Number(parseFloat(Object.values(data).map(v => v.amount ? v.amount : 0).reduce((prev, curr) => prev + curr, 0)).toFixed(4)) : 0;
        res.send({accumulationAccounts,sales})
    })
});

app.get("/outstandingSales", (req, res) => {
    
    const companyId = req?.body?.companyId;
    db.ref('OutstandingAccounts/').orderByChild('companyId').equalTo(companyId).once('value',(response)=> {
        var data = response.val();
        const outstandingAccounts = data && Object?.keys(data)?.length ? Object?.keys(data)?.length : 0;
        const sales = data && Object.keys(data).length > 0 ? Number(parseFloat(Object.values(data).map(v => v.amount ? v.amount : 0).reduce((prev, curr) => prev + curr, 0)).toFixed(4)) : 0;
        res.send({outstandingAccounts,sales})
    })
});

app.get("/arrearSales", (req, res) => {
    
    const companyId = req?.body?.companyId;
    db.ref('ArrearsAccounts/').orderByChild('companyId').equalTo(companyId).once('value',(response)=> {
        var data = response.val();
        const arrearAccounts = data && Object?.keys(data)?.length ? Object?.keys(data)?.length : 0;
        const sales = data && Object.keys(data).length > 0 ? Number(parseFloat(Object.values(data).map(v => v.amount ? v.amount : 0).reduce((prev, curr) => prev + curr, 0)).toFixed(4)) : 0;
        res.send({arrearAccounts,sales})
    })
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));