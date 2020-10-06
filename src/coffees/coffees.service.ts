import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
	private coffees: Coffee[] = [
		{
			id: 1,
			name: "coffee1",
			brand: "brand1",
			flavors: ['chocolate', 'vanilla']
		},
	];

	findAll() {
    return this.coffees;
  }

  findOne(id: string) {
		const coffee = this.coffees.find(item => item.id === +id);
		
		if (!coffee) {
			throw new NotFoundException(`The coffee #${id} was not found`);
		}

		return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
