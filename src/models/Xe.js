const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Xe extends Model {
        static associate(models) {
            Xe.hasMany(models.ChuyenDi, {
                foreignKey: 'id_xe',
                as: 'chuyenDi'
            });
            Xe.hasMany(models.CoTienIch, {
                foreignKey: 'id_xe',
                as: 'tienIch'
            });
        }
    }
    Xe.init(
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
                type: DataTypes.STRING,
                allowNull: false
            },
            ten_nha_xe: {
                type: DataTypes.STRING,
                allowNull: false
            },
            suc_chua: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: "Xe",
            tableName: "Xe",
            timestamps: false,
        }
    );

    return Xe;
};
