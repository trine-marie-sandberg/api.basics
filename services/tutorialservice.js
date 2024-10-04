class TutorialService {
    constructor(db) {
        this.client = db.sequelize;
        this.tutorial = db.tutorial;
    }

    async getAll(condition) {
        return this.tutorial.findAll({
            where: condition
        }).catch(function (err) {
            console.log(err);
        });
    }
}
module.exports = TutorialService;