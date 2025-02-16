import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Blusa Any - PP ao GG',
      price: 0.00,
      description: 'Molde detalhado para vestidos.',
      image: "assets/images/blusa-any/capa-produto.jpeg",
      groupsResource: [
        {
          name: "A4",
          resources: [{
            name: 'PP',
            description: 'Blusa Any PP - A4',
            url: 'assets/moldes/blusa-any/Blusa Any PP - A4.pdf'
          }, {
            name: 'P',
            description: 'Blusa Any P - A4',
            url: 'assets/moldes/blusa-any/Blusa Any P - A4.pdf'
          }, {
            name: 'M',
            description: 'Blusa Any PP - A4',
            url: 'assets/moldes/blusa-any/Blusa Any M - A4.pdf'
          }, {
            name: 'G',
            description: 'Blusa Any PP - A4',
            url: 'assets/moldes/blusa-any/Blusa Any G - A4.pdf'
          }, {
            name: 'GG',
            description: 'Blusa Any PP - A4',
            url: 'assets/moldes/blusa-any/Blusa Any GG - A4.pdf'
          }]
        },
        {
          name: "Plotter",
          resources: [{
            name: 'PP',
            description: 'Blusa Any PP - Plotter',
            url: 'assets/moldes/blusa-any/Blusa Any PP - Plotter.pdf'
          }, {
            name: 'P',
            description: 'Blusa Any P - Plotter',
            url: 'assets/moldes/blusa-any/Blusa Any P - Plotter.pdf'
          }, {
            name: 'M',
            description: 'Blusa Any PP - Plotter',
            url: 'assets/moldes/blusa-any/Blusa Any M - Plotter.pdf'
          }, {
            name: 'G',
            description: 'Blusa Any PP - Plotter',
            url: 'assets/moldes/blusa-any/Blusa Any G - Plotter.pdf'
          }, {
            name: 'GG',
            description: 'Blusa Any PP - Plotter',
            url: 'assets/moldes/blusa-any/Blusa Any GG - Plotter.pdf'
          }]
        }
      ],
      details: [
        "Apenas máquina reta",
        "Sugestão de tecido: viscolinho",
        "Opções de impressão: A4 e Plotter",
        "Passo a passo da costura",
        "Manual de instruções",
        "Vídeo com instruções de colagem A4",
        "Dicas de variações do modelo"
      ]
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
