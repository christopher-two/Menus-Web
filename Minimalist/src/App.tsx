import './App.css'

const menuCategories = [
  {
    title: 'Entradas y para Compartir',
    items: [
      { name: 'Chilapeños (3 piezas)', description: 'Chiles güeros envueltos en tocino, rellenos de camarón y queso crema. Acompañados de mermelada de chipotle y salsa de la casa, coronados con aderezo especial y queso parmesano.', price: 194.20 },
      { name: 'Papas Trufadas (300 g)', description: 'Crujientes papas a la francesa aromatizadas con aceite de trufa y espolvoreadas con queso parmesano.', price: 147.10 },
      { name: 'Ignacios (Nachos Especiales)', description: 'Totopos bañados en salsa de quesos, acompañados de salchicha polaca ahumada, tinga de zanahoria, aguacate y rodajas de jalapeño.', price: 187.00 },
      { name: 'Trío de Salchichas Asadas', description: 'Combinación parrillera de salchicha polaca ahumada, chorizo argentino y salchicha jumbo de pavo envuelta en tocino.', price: 210.60 },
      { name: 'Boneless en Tira (450 g)', description: 'Tiernas tiras de pechuga de pollo empanizadas y sazonadas.', price: 175.00 },
      { name: 'Alitas Asadas (500 g)', description: 'Alitas de pollo preparadas a la parrilla con el toque de la casa.', price: 170.00 },
    ]
  },
  {
    title: 'Hamburguesas de Autor',
    subtitle: 'Nuestros bollos artesanales incluyen vegetales frescos y aderezo especial.',
    items: [
      { name: 'Clásica', description: 'Carne de res (90 g) con queso cheddar fundido y tocino crujiente.', price: 105.00 },
      { name: 'Don King (Hawaiana)', description: 'Carne de res (120 g), combinación de quesos suizo y cheddar, tocino y piña en almíbar.', price: 147.00 },
      { name: 'Doble Meat Cheese', description: 'Para los amantes de la carne: doble porción de res (180 g total) con extra queso cheddar y tocino.', price: 199.00 },
      { name: 'Zarpa (Mar y Tierra)', description: 'Carne de res (120 g) y camarones (50 g) con piña en almíbar, tocino, mezcla de quesos, cebolla y pimientos caramelizados.', price: 183.00 },
      { name: 'DKBO (Pollo Frito)', description: '¡Crujiente y deliciosa! Pechuga de pollo frito (150 g) bañada en salsa BBQ, con queso suizo y salsa tártara.', price: 159.00 },
      { name: 'Dantesca (Camarón)', description: 'Camarones adobados (120 g) con extra queso cheddar, piña en almíbar, cebolla asada y tocino.', price: 183.00 },
    ]
  },
  {
    title: 'Baguettes y Especialidades',
    items: [
      { name: 'Baguette de Pollo', description: 'Pollo asado a las finas hierbas (150 g) con queso suizo, chimichurri argentino y vegetales de temporada.', price: 147.00 },
      { name: 'Choripán Argentino', description: 'Pan artesanal con chorizo argentino a la parrilla, auténtico chimichurri y vegetales frescos de temporada.', price: 147.00 },
    ]
  },
  {
    title: 'Hot Dogs Gourmet (Dogos)',
    subtitle: 'Elaborados con pan de gran tamaño, vegetales y aderezo especial.',
    items: [
      { name: 'Dogo Burger', description: 'Salchicha jumbo envuelta en tocino, carne de hamburguesa (90 g), queso cheddar, cebolla y pimientos caramelizados.', price: 159.00 },
      { name: 'Dogo Sonora', description: 'Salchicha polaca ahumada, queso cheddar, pepinillos, cebolla y pimientos caramelizados.', price: 159.00 },
      { name: 'Hot Dogo Tradicional', description: 'El clásico con un toque extra: salchicha jumbo envuelta en tocino y chiles jalapeños.', price: 130.00 },
    ]
  },
  {
    title: 'Sección Fresh (Ensaladas y Wraps)',
    items: [
      { name: 'Ensalada de la Casa', description: 'Mix de lechuga italiana, pimientos, cebolla morada, pepino, aguacate, jitomate y manzana verde con notas de queso suizo. Proteína sugerida: Res, Pollo o Camarón. Vinagreta: Aceite de Oliva o Frutal.', price: 88.00 },
      { name: 'Wraps Vegetales', description: 'Frescos rollos de lechuga rellenos de queso suizo, aguacate, jitomate y cebolla morada con un toque de mayo-mostaza y chimichurri. Proteína sugerida: Pollo o Camarón. Vinagreta: Frutal o Soya/BBQ.', price: 81.00 },
      { name: 'Ensalada Argento', description: 'Lechuga italiana, piña en almíbar, jitomate cherry, pimiento, tinga de zanahoria y pepinillos con toques de parmesano. Proteína sugerida: Chorizo Argentino, Pollo o Camarón. Vinagreta: Chimichurri o Soya/BBQ.', price: 81.00 },
    ]
  },
  {
    title: 'Menú Infantil',
    items: [
      { name: 'Nuggets de Pollo', description: 'Porción de nuggets (80 g) acompañados de papas a la francesa (120 g) y ensalada de la casa.', price: 105.00 },
      { name: 'Mini Burger', description: 'Bollito con carne de res (70 g), queso cheddar y vegetales de temporada.', price: 93.00 },
    ]
  }
]

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">DKB</div>
      </header>

      <main className="main-content">
        <div className="menu-content">
          <h1 className="menu-title">MENÚ DE LA CASA</h1>

          {menuCategories.map((category, index) => (
            <div key={index} className="menu-section">
              <h2>{category.title}</h2>
              {category.subtitle && <p className="subtitle">{category.subtitle}</p>}

              <div className="menu-list">
                {category.items.map((item, i) => (
                  <div key={i} className="menu-item">
                    <div className="item-header">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">MXN {item.price.toFixed(2)}</span>
                    </div>
                    <p className="item-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="logo-icon">
            <span></span><span></span><span></span>
          </div>
          <p className="developed-by">Desarrollado por Override</p>
        </div>
      </footer>
    </div>
  )
}

export default App
