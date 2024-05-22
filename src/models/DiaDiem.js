const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class DiaDiem extends Model {
        static associate(models) {
        }
    }
    DiaDiem.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            ten: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "DiaDiem",
            tableName: "DiaDiem",
            timestamps: false,
        }
    );

    return DiaDiem;
};
