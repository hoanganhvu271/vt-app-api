const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ThietBi extends Model {
        static associate(models) {
        }
    }
    ThietBi.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            token: DataTypes.STRING
        },
        {
            sequelize,
            modelName: "ThietBi",
            tableName: "ThietBi",
            timestamps: false,
        }
    );

    return ThietBi;
};
