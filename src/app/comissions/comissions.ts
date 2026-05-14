import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-comissions',
  imports: [],
  templateUrl: './comissions.html',
  styleUrl: './comissions.scss',
})
export class Comissions {
  items = signal<{ name: string, price: number }[]>([]);

  prices: Record<string, number> = {
    'Color': 20.00,
    'B&W': 10.00,
    'Bust': 15.00,
    'Full Body': 35.00,
    'Extra Character': 15.00,
    'Background': 25.00
  };

  total = computed(() => {
    return this.items().reduce((acc, item) => acc + item.price, 0);
  });

  add(itemName: string) {
    const price = this.prices[itemName] || 0;
    this.items.update(prev => [...prev, { name: itemName, price: price }]);
  }

  remove(index: number) {
    this.items.update(prev => prev.filter((_, i) => i !== index));
  }

  clear() {
    this.items.set([]);
  }
}
