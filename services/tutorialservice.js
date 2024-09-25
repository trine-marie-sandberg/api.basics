class TutorialService {
    constructor(db) {
        this.client = db.sequelize;
        this.tutorial = db.tutorial;
    }

    async getAll() {
        return this.tutorial.findAll({
            where: {}
        }).catch(function (err) {
            console.log(err);
        });
    }
}
module.exports = TutorialService;