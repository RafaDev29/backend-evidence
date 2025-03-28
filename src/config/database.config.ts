import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root', 
  password: 'Rafaga4$', 
  database: 'bd_citv', 
  autoLoadEntities: true, 
  synchronize: true, 
};
