const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class TheoDoi extends Model {
        static associate(models) {
        }
    }
    TheoDoi.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            tbId: DataTypes.INTEGER,
            cdId: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: "TheoDoi",
            tableName: "TheoDoi",
            timestamps: false,
        }
    );

    return TheoDoi;
};
