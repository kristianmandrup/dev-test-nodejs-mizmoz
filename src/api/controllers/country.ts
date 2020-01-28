import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";
import { ICountry } from '../../types';
import { CountryRepo } from '../repositories/inmem/country';

@JsonController()
export class CountryController {
    @Get("/countries")
    public async getAll(): Promise<ICountry[]> {
       return await CountryRepo.findAll()
    }

    @Get("/countries/:name")
    public async getOne(@Param("name") name: string): Promise<ICountry | void> {
      const foundItem = await CountryRepo.findOne(name)
       return foundItem ? foundItem : this.error(`${name} could not be found`)
    }

    @Post("/countries")
    public async post(@Body() country: any): Promise<ICountry[]> {
      const countries = await CountryRepo.addOne(country);
      return countries;
    }

    @Put("/countries")
    public async put(@Body() country: any): Promise<ICountry[]> {
      const countries = await CountryRepo.updateOne(country.name, country);
      return countries;
    }

    @Delete("/countries/:name")
    public async remove(@Param("name") name: string): Promise<ICountry[]> {
      const countries = await CountryRepo.deleteOne(name);
      return countries;
    }

    protected error(msg: string): void {
      console.error(msg);
      throw new Error(msg);
    }
}