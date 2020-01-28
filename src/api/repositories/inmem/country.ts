import { countries } from '../../../configs/models'
import { ICountry } from '../../../types';

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
  public static async findAll(): Promise<ICountry[]> {
    return countries;       
  }

  public static async findOne(name: string): Promise<ICountry | undefined> {
    return countries.find(country => country.name === name)       
  }

  public static async addOne(country: ICountry): Promise<ICountry[]> {
    countries.push(country);
    return countries;
  }

  public static async updateOne(name: string, country: ICountry): Promise<ICountry[]> {
    const index = await this.findIndexByName(name)
    return await this.updateByIndex(index, country);
  }

  public static async deleteOne(name: string): Promise<ICountry[]> {
    const index = await this.findIndexByName(name)
    return await this.deleteByIndex(index);
  }

  protected static async updateByIndex(index: number, country: ICountry): Promise<ICountry[]> {  
    validateIndex(index, 'updateByIndex');
    countries[index] = country;
    return countries
  }

  protected static async deleteByIndex(index: number): Promise<ICountry[]> {  
    validateIndex(index, 'deleteByIndex');
    countries.splice(index, 1);
    return countries
  }

  protected static async find(country: ICountry): Promise<ICountry | undefined> {
    const found = countries.find(c => c.name === country.name);
    return found;
  }

  protected static async findIndexOf(country: ICountry): Promise<number> {
    return CountryRepo.findIndexByName(country.name)
  }        

  protected static async findIndexByName(name: string): Promise<number> {
    return countries.findIndex(c => c.name === name);
  }        
}