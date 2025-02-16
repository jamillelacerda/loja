import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Blusa Any',
      price: 0.00,
      description: 'Molde detalhado para vestidos.',
      image: "assets/images/blusa-any/capa-produto.jpeg",
      groupsResource: [
        {
          name: "A4",
          resources: [{
            name: 'PP - A4',
            description: 'Blusa Any PP - A4',
            url: 'assets/moldes/blusa-any/BlusaAnyP-A4.pdf'
          }, {
            name: 'P - A4',
            description: 'Blusa Any P - A4',
            url: 'assets/moldes/blusa-any/Blusa Any PP - A4.pdf'
          }, {
            name: 'M - A4',
            description: 'Blusa Any PP - A4',
            url: 'assets/moldes/blusa-any/Blusa Any PP - A4.pdf'
          }, {
            name: 'G - A4',
            description: 'Blusa Any PP - A4',
            url: 'assets/moldes/blusa-any/Blusa Any PP - A4.pdf'
          }, {
            name: 'GG - A4',
            description: 'Blusa Any PP - A4',
            url: 'assets/moldes/blusa-any/Blusa Any PP - A4.pdf'
          }]
        },
        {
          name: "Plotter",
          resources: [{
            name: 'PP - Plotter',
            description: 'Blusa Any PP - Plotter',
            url: 'assets/moldes/blusa-any/Blusa Any PP - A4.pdf'
          }]
        }
      ],
      details: [
        "Apenas máquina reta",
        "Sugestão de tecido: viscolinho",
        "Tamanhos: PP ao GG",
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
