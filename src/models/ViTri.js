const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ViTri extends Model {

    }
    ViTri.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            longtitude: DataTypes.STRING,
            latitude: DataTypes.STRING,
            idDd: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: "ViTri",
            tableName: "ViTri",
            timestamps: false,
        }
    );

    return ViTri;
};
