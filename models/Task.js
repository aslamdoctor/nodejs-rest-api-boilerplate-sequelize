const { DataTypes } = require('sequelize');

module.exports.TaskModel = (sequelize) => {
	return sequelize.define(
		'Task',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			task: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			picture: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
		},
		{
			// Other model options go here
			freezeTableName: true,
			//tableName: 'tablename',
			timestamps: true,
		}
	);
};
