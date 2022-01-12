import {
  Column,
  Model,
  Table,
  DataType,
  DeletedAt,
} from 'sequelize-typescript';

@Table({
  modelName: 'user',
  tableName: 'users',
  underscored: true,
  timestamps: true,
  version: false,
  paranoid: true,
  deletedAt: 'deleted_at',
})
export class User extends Model<User> {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
    comment: 'The identifier for the user record',
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'The name of the user',
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
    comment: 'The email of the user',
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'The password of the user',
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'The cell phone of the user',
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
    comment: 'The social security number of the user',
  })
  cpf: string;

  @DeletedAt
  deletedAt: Date;
}
