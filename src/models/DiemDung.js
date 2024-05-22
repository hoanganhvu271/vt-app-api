const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class DiemDung extends Model {
        static associate(models) {
        }
    }
    DiemDung.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            ten: {
                type: DataTypes.STRING,
                allowNull: false
            },
            dia_diem: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "DiemDung",
            tableName: "DiemDung",
            timestamps: false,
        }
    );

    return DiemDung;
};
