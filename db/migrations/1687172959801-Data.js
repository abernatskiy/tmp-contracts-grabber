module.exports = class Data1687172959801 {
    name = 'Data1687172959801'

    async up(db) {
        await db.query(`CREATE TABLE "created_contract" ("id" character varying NOT NULL, CONSTRAINT "PK_4d320d21625a693262c8857f9d4" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "created_contract"`)
    }
}
