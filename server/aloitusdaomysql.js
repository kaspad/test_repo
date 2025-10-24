const ms = require('./mysqlhelper');

module.exports = {
    /*
    verify(levy) {
        //levy.id = Number(levy.id);
        //levy.published = new Date(levy.published);
        levy.artistiId = Number(levy.artistiId) || 0;
        delete levy.artisti;
    },
*/
    /*
        getAll() {
            let q = `SELECT l.*,concat(a.lastName,', ',a.firstname) as artisti FROM levy l left join artisti a on a.id=l.artistiId`;
            return ms.query(q);
        },
    */
    /*
        getAll() {
            let q = `select * from levy`;
            return ms.query(q);
        },
        */
    /*
        getOstot(id) {
            let q = `SELECT p.* FROM osto l,person p WHERE l.personId=p.id AND l.levyId=?`;
            return ms.paramQuery(q, [id]);
        },
    */
    /*
        get(id) {
            return ms.getById('levy', id);
        },
    */

    /*
        create(levy) {
            return new Promise(async (resolve, reject) => {
                console.log("Create", levy);
                delete levy.id;
                let q = `INSERT INTO levy SET ?`;
                let info = await ms.paramQuery(q, levy);
                let bk = await this.get(info.insertId);
                resolve(bk);
            });
        },
    */
    /*
        update(levy) {
            return new Promise(async (resolve, reject) => {
                //let q = `UPDATE levy SET title=?,artistiId=?,published=?,price=?,description=? WHERE id=?`;
                //let params = [levy.title, levy.artistiId, levy.published, levy.price, levy.description, levy.id];
                let q = `UPDATE levy SET levyNimi=?,artisti_id=?,tietoa=?, hinta=? WHERE id=?`;
                let params = [levy.levyNimi, levy.artisti_id, levy.tietoa, levy.hinta, levy.id];
                let info = await ms.paramQuery(q, params);
                let bk = await this.get(levy.id);
                resolve(bk);
            })
        },
    */
    /*
        deleteLevy(id) {
            let q = `DELETE FROM levy WHERE id=?`;
            return ms.paramQuery(q, [id]);
        }
    */
}