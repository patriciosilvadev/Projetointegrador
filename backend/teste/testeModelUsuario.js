const { sequelize, Usuario } = require('../models');

Usuario.findByPk(1).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)

