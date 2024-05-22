const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ChuyenDi extends Model {
        static associate(models) {
            ChuyenDi.belongsTo(models.Xe, {
                foreignKey: 'id_xe',
                as: 'xe'
            });
            ChuyenDi.hasMany(models.Ve, {
                foreignKey: 'id_chuyen_di',
                as: 've'
            });
        }
    }
    ChuyenDi.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_xe: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
            ,
            diem_di: DataTypes.INTEGER,
            diem_den: DataTypes.INTEGER,
            xuat_phat: DataTypes.STRING,
            thoi_gian: DataTypes.INTEGER,
            gia_ve: DataTypes.INTEGER,
            con_lai: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: "ChuyenDi",
            tableName: "ChuyenDi",
            timestamps: false,
        }
    );

    return ChuyenDi;
};
