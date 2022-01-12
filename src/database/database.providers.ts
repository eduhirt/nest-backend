import { Provider } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export const DatabaseProvider: Provider = {
  provide: 'SEQUELIZE',
  useFactory: async (logger: PinoLogger) => {
    logger.setContext('Sequelize');

    const db: Sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        logging: logger.info.bind(logger),
        benchmark: true,
        retry: {
          max: 3,
        },
        operatorsAliases: {
          $eq: Op.eq,
          $ne: Op.ne,
          $gte: Op.gte,
          $gt: Op.gt,
          $lte: Op.lte,
          $lt: Op.lt,
          $not: Op.not,
          $in: Op.in,
          $notIn: Op.notIn,
          $is: Op.is,
          $like: Op.like,
          $notLike: Op.notLike,
          $iLike: Op.iLike,
          $notILike: Op.notILike,
          $regexp: Op.regexp,
          $notRegexp: Op.notRegexp,
          $iRegexp: Op.iRegexp,
          $notIRegexp: Op.notIRegexp,
          $between: Op.between,
          $notBetween: Op.notBetween,
          $overlap: Op.overlap,
          $contains: Op.contains,
          $contained: Op.contained,
          $adjacent: Op.adjacent,
          $strictLeft: Op.strictLeft,
          $strictRight: Op.strictRight,
          $noExtendRight: Op.noExtendRight,
          $noExtendLeft: Op.noExtendLeft,
          $and: Op.and,
          $or: Op.or,
          $any: Op.any,
          $all: Op.all,
          $values: Op.values,
          $col: Op.col,
        },
      },
    );

    db.addModels([]);

    return db;
  },
  inject: [PinoLogger],
};
