import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductService, Product } from './product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe],
  template: `
    <div class="App">
      <nav>
        <div class="container" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div class="logo">INDUVAL</div>
          <div class="nav-links">
            <a href="#inicio" class="nav-link">Inicio</a>
            <a href="#servicios" class="nav-link">Servicios</a>
            <a href="#catalogo" class="nav-link">Catálogo</a>
            <a href="#contacto" class="nav-link">Contacto</a>
          </div>
          <button class="btn-primary">Cotizar</button>
        </div>
      </nav>

      <header class="hero" id="inicio">
        <div class="container">
          <h1>Equipamiento Industrial de Cocina</h1>
          <p>Innovación y calidad en acero inoxidable para los mejores restaurantes de España.</p>
          <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn-primary" style="padding: 1rem 2rem;">Ver Catálogo</button>
            <button class="btn-primary" style="background: transparent; border: 2px solid white;">Conócenos</button>
          </div>
        </div>
      </header>

      <section class="products-section" id="catalogo">
        <div class="container">
          <div class="section-title">
            <h2>Nuestros Productos</h2>
            <p>Soluciones a medida para cada necesidad gastronómica.</p>
          </div>
          <div class="products-grid">
            @for (product of products(); track product.producto_id) {
              <div class="product-card">
                <div class="product-image">
                   <span style="font-size: 3rem; opacity: 0.2;">🍴</span>
                </div>
                <h3>{{product.producto_descripcion}}</h3>
                <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 1rem;">
                  Código: {{product.producto_cod}} - Equipamiento de alta gama fabricado por Induval.
                </p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-weight: bold; color: var(--primary);">{{product.producto_valor | currency:'EUR'}}</span>
                  <button style="color: var(--primary); font-weight: 600; background: none;">Detalles →</button>
                </div>
              </div>
            } @empty {
              <div style="text-align: center; width: 100%; padding: 3rem; grid-column: 1 / -1;">
                <p>Cargando catálogo de productos...</p>
              </div>
            }
          </div>
        </div>
      </section>

      <section style="padding: 80px 0; background-color: var(--secondary);" id="servicios">
        <div class="container">
          <div class="section-title">
            <h2>Servicios Especializados</h2>
          </div>
          <div class="products-grid">
             <div class="product-card">
               <h3>Diseño de Cocinas</h3>
               <p>Creamos planos optimizados para el flujo de trabajo en tu restaurante.</p>
             </div>
             <div class="product-card">
               <h3>Mantenimiento</h3>
               <p>Servicio técnico oficial para todo nuestro equipamiento.</p>
             </div>
             <div class="product-card">
               <h3>Fabricación Propia</h3>
               <p>Control total de calidad desde el diseño hasta el montaje final.</p>
             </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="logo" style="color: white; margin-bottom: 1rem;">INDUVAL</div>
              <p style="opacity: 0.7;">Líderes en equipamiento gastronómico industrial en España.</p>
            </div>
            <div>
              <h4>Enlaces</h4>
              <ul style="list-style: none; margin-top: 1rem; opacity: 0.7;">
                <li>Preguntas Frecuentes</li>
                <li>Política de Privacidad</li>
                <li>Términos y Condiciones</li>
              </ul>
            </div>
            <div>
              <h4>Contacto</h4>
              <p style="margin-top: 1rem; opacity: 0.7;">info@induval.es</p>
              <p style="opacity: 0.7;">+34 900 123 456</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 Induval. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <router-outlet />
    </div>
  `,
  styles: [],
})
export class App implements OnInit {
  private productService = inject(ProductService);
  protected readonly products = signal<Product[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.error('Error fetching products', err)
    });
  }
}
