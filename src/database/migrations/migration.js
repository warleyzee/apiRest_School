// Crie um arquivo de migração para adicionar as colunas 'created_at' e 'updated_at'
// sequelize-cli migration:generate --name add_timestamps_to_students

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('students', 'created_at', {
      allowNull: false,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('students', 'updated_at', {
      allowNull: false,
      type: Sequelize.DATE
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('students', 'created_at');
    await queryInterface.removeColumn('students', 'updated_at');
  }
};
