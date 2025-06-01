export class Product {
  constructor(initData?: Partial<Product>) {
    if (!initData) return;
    Object.assign(this, initData);
  }

  id!: string;

  name!: string;

  authors!: string[];

  company!: string;

  isShow!: boolean;

  photoUrl!: string;

  price!: number;
}
