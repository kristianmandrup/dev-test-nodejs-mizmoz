import { countries } from '../../../configs/models'
import { ICountry } from '../../../types';
import { redisClient } from '../../../store/redis';

const error = (msg: string) => {
  console.error(msg);
  throw new Error(msg);
}

const validateIndex = (index: number, methodName?: string): boolean => {
  if (index < 0) {
    error(`${methodName}: invalid index ${index}`)
  }
  return true  
}


export class CountryRepo {
  public static async findAllKeys(): Promise<ICountry[]> {
    // https://stackoverflow.com/questions/12793938/redis-node-js-all-keys
    return new Promise((resolve, reject) => {
      redisClient.multi()
      .keys('*', (_: any, replies: any[]) => {
        const keys: any[] = []
          replies.forEach((reply: any) => {
              redisClient.get(reply, (_: any, data: any) => {
                keys.push(data)
              });
          });
          resolve(keys)
      })
      .exec((err: any, replies: any) => {});
    })
  }

  public static async findOne(name: string): Promise<ICountry | undefined> {
    return await redisClient.get(name)
  }

  public static async addOne(country: ICountry): Promise<ICountry[]> {
    return await redisClient.set(country.name, country)
  }

  public static async updateOne(name: string, country: ICountry): Promise<ICountry[]> {
    return await redisClient.set(country.name, country)
  }

  public static async deleteOne(name: string): Promise<ICountry[]> {
    return await redisClient.del(name)
  }   
}