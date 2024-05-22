const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class NguoiDung extends Model {
        static associate(models) {
        }
    }
    NguoiDung.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ten: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ngay_sinh: {
                type: DataTypes.DATE,
                allowNull: false
            },
            gioi_tinh: {
                type: DataTypes.ENUM('Nam', 'Nu', 'Khac'),
                allowNull: false
            },
            so_CCCD: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        {
            sequelize,
            modelName: "NguoiDung",
            tableName: "NguoiDung",
            timestamps: false,
        }
    );

    return NguoiDung;
};
