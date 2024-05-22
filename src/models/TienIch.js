const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class TienIch extends Model {
        static associate(models) {
            TienIch.hasMany(models.CoTienIch, {
                foreignKey: 'id_tien_ich',
                as: 'coTienIch'
            });
        }
    }
    TienIch.init(
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
            modelName: "TienIch",
            tableName: "TienIch",
            timestamps: false,
        }
    );

    return TienIch;
};
