import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
            @for (item of [1,2,3,4,5,6]; track item) {
              <div class="product-card">
                <div class="product-image">Imagen del Producto</div>
                <h3>Producto Industrial {{item}}</h3>
                <p style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 1rem;">
                  Descripción breve del producto de alta gama fabricado en acero.
                </p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-weight: bold; color: var(--primary);">Desde 599€</span>
                  <button style="color: var(--primary); font-weight: 600; background: none;">Detalles →</button>
                </div>
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
export class App {
  protected readonly title = signal('web-induapp');
}
