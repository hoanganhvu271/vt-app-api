const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CoTienIch extends Model {
        static associate(models) {
            CoTienIch.belongsTo(models.Xe, {
                foreignKey: 'id_xe',
                as: 'xe'
            });
            CoTienIch.belongsTo(models.TienIch, {
                foreignKey: 'id_tien_ich',
                as: 'tienIch'
            });
        }
    }
    CoTienIch.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_xe: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_tien_ich: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "CoTienIch",
            tableName: "CoTienIch",
            timestamps: false,
        }
    );

    return CoTienIch;
};
