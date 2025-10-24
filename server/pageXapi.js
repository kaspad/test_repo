module.exports = function(app) {
    let bodyParser = require('body-parser')
    app.use(bodyParser.json());
    let dao = require('./aloitusdaomysql');
    
    app.get('/api/levyt', async function(req, resp) {
        resp.json(await dao.getAll());
    });

    app.get('/api/levyt/:id', async function(req, resp) {
        //let id=Number(req.params.id);
        let id = req.params.id;
        let levy = await dao.get(id);
        resp.json(levy);
    });

    /*
        app.get('/api/levyt/:id/loans', async function(req, resp) {
            let id = Number(req.params.id);
            resp.json(await dao.getLoans(id));
        })
    */

    app.post('/api/levyt', async function(req, resp) {
        let l = req.body;
        let levy = await dao.create(l);
        //let err = dao.verify(l);
        //if (err) {
        //    resp.status(500).json({ error: err });
        //} else {
        //    let levy = await dao.create(l);
        resp.json(levy);
        //}
    });


    app.delete('/api/levyt/:id', async function(req, resp) {
        let id = Number(req.params.id);
        //let id = req.params.id;
        //let index=levyt.findIndex(l => l.id==id);
        //levyt.splice(index,1);
        await dao.deleteLevy(id);
        resp.json({ info: 'Levy poistettu' });
    });


    app.put('/api/levyt/:id', async function(req, resp) {
        //let id=Number(req.params.id);
        let id = req.params.id;
        if (id != req.body.id) {
            resp.status(500).json({ error: 'ID Mismatch' });
        }
        // else {
        //    let err = dao.verify(req.body);
        //    if (err) {
        //        resp.status(500).json({ error: err });
        //    } 
        else {
            let levy = await dao.update(req.body);
            resp.json(levy);
        }


    });

}