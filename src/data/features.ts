export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: '0',
    title: 'High-Waisted Denim Jeans',
    price: 330.90,
    image: '/out2.png',
  },
  {
    id: '1',
    title: 'Boho Maxi Dress',
    price: 110.00,
    image: '/out3.png',
  },
  {
    id: '2',
    title: 'Cropped Denim Jacket',
    price: 95.00,
    image: '/dress3.png',
  },
  {
    id: '3',
    title: 'Cropped Denim Jacket',
    price: 95.00,
    image: '/dress1.png',
  },
  {
    id: '4',
    title: 'Cropped Denim Jacket',
    price: 95.00,
    image: '/bag2.png',
  },
  {
    id: '5',
    title: 'Cropped Denim Jacket',
    price: 95.00,
    image: '/shoe.png',
  },
];
