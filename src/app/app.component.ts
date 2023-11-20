import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showName: boolean = false;
  productList = [
    {
      name: 'Mouse',
      price: 500,
      description: 'The mouse.',
      image: 'assets/images/mouse.jpeg'
    },
    {
      name: 'Keyboard',
      price: 1000,
      description: 'A computer.',
      image: 'assets/images/keyboard.jpeg'
    },
    {
      name: 'Monitor',
      price: 4000,
      description: 'A monitor',
      image: 'assets/images/monitor.jpeg'
    },
    {
      name: 'Laptop',
      price: 70000,
      description: 'A laptop.',
      image: 'assets/images/laptop.jpeg'
    },
    {
      name: 'Computer',
      price: 40000,
      description: 'A computer',
      image: 'assets/images/computer.jpeg'
    },
    {
      name: 'Monitor',
      price: 4000,
      description: 'A monitor',
      image: 'assets/images/monitor.jpeg'
    },
    {
      name: 'Laptop',
      price: 70000,
      description: 'A laptop.',
      image: 'assets/images/laptop.jpeg'
    },
    {
      name: 'Computer',
      price: 40000,
      description: 'A computer',
      image: 'assets/images/computer.jpeg'
    },
    {
      name: 'Mouse',
      price: 500,
      description: 'The mouse.',
      image: 'assets/images/mouse.jpeg'
    },
    {
      name: 'Keyboard',
      price: 1000,
      description: 'A computer.',
      image: 'assets/images/keyboard.jpeg'
    },



  ];

  inputValue: number = 100;
  vatPercentage: number = 0;
  discountPercentage: number = 0;

  cart: any[] = [];

  modalFlag: boolean = false

  addToCart(product: any) {
    const existingItem = this.cart.find(item => item.name === product.name);
    if (existingItem) {
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(item: any) {
    const index = this.cart.indexOf(item);

    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  decQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  getTotalQuantity(): number {
    let totalQuantity = 0;
    for (const item of this.cart) {
      totalQuantity += item.quantity;
    }
    return totalQuantity;
  }

  getTotalAmount(): number {
    let totalAmount = 0;
    for (const item of this.cart) {
      totalAmount += item.price * item.quantity;
    }
    return totalAmount;
  }

  updateVAT(event: any) {
    this.vatPercentage = event.target.value;
  }

  updateDiscount(event: any) {
    this.discountPercentage = event.target.value;
  }

  getVATAmount(): number {
    return (this.getTotalAmount() * this.vatPercentage) / 100;
  }

  getDiscountAmount(): number {
    return (this.getTotalAmount() * this.discountPercentage) / 100;
  }

  getGrandTotal(): number {
    return this.getTotalAmount() + this.getVATAmount() - this.getDiscountAmount();
  }

  doubleClickIncrease(product: any) {
    const existingItem = this.cart.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity++;
    }
  }

  clearCart() {
    this.cart = [];
  }

  sale() {
    this.modalFlag = !this.modalFlag
  }

  closeModal() {
    this.modalFlag = !this.modalFlag
    this.clearCart();
  }

  getSaleNumber() {
    const now = new Date();
    const saleNo = `${now.getHours()}${now.getMinutes()}${now.getDate()}`;
    return saleNo;
  }
  getCurrentDate() {
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`;
    return date;
  }

}
