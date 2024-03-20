import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model{
  static init(sequelize) {
    super.init( {
      name:{
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          len: {
            args: [3, 255],
            msg: 'The name field needed to be between 3 and 255 characters',
          },
        },
      },
      email:{
        type: Sequelize.STRING,
        defaultValue: '',
        validate:{
          isEmail: {
            msg: 'E-mail invalid',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate:{
          len: {
            args: [6, 55],
            msg: 'The password field needed to be between 6 and  55 characters',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async user => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    })
    return this;
  }
}
