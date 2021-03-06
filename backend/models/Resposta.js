
module.exports = (sequelize, DataTypes) => {

    const pergunta = sequelize.define(
        'Resposta',
        {
            valores: DataTypes.STRING,
            perguntas_id:{
                type:DataTypes.INTEGER,
                foreignKey:true,
                primaryKey:true
            },
            agendamento_id:{
                type:DataTypes.INTEGER,
                foreignKey:true,
                primaryKey:true
            }

            
        },{
            tableName:"respostas",
            timestamps:true
        }
    )
    pergunta.associate = (models) =>{
        pergunta.belongsTo(models.Pergunta,{as:"resposta_pergunta",foreignKey:"perguntas_id"}) 
        pergunta.belongsTo(models.Agendamento,{as:"resposta_agendamento",foreignKey:"agendamento_id"}) 
    // usuario.hasMany(models.Post,{as:"posts",foreignKey:"usuarios_id"})
    // usuario.belongsToMany(models.Post, {as:'usuariocurtiu',through:"curtidas",foreignKey:"usuarios_id",otherKey:"posts_id"})
  }
  
    return pergunta;
    
  }