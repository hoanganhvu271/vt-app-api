const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Ve extends Model {
        static associate(models) {
            Ve.belongsTo(models.ChuyenDi, {
                foreignKey: 'id_chuyen_di',
                as: 'chuyenDi'
            });
        }
    }
    Ve.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_chuyen_di: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            id_nguoi_dung: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: "Ve",
            tableName: "Ve",
            timestamps: false,
        }
    );

    return Ve;
};
