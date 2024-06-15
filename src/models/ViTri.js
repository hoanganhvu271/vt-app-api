const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ViTri extends Model {
        static associate(models) {
            ViTri.belongsTo(models.ChuyenDi, {
                foreignKey: 'id_chuyen_di',
                as: 'chuyenDi'
            });
        }
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
