/* ============================================================
   CONFIGURACIÓN DEL PRODUCTO — Bolso Impermeable
   VG Shop · Editá SOLO este archivo para precio, textos, IDs e imágenes.
   ============================================================ */
const PRODUCT_CONFIG = {
  id: "bolso-impermeable",
  origin: "landing_bolso_impermeable",
  category: "Viajes / Organización",
  brand: "VG Shop",
  name: "Bolsón de Viaje Impermeable",
  shortName: "Bolso Impermeable",

  // Precio ÚNICO visible en toda la página (guaraníes, sin puntos).
  price: 199000,
  currency: "PYG",

  // ====== ANALYTICS (reutilizados de la infra VG Shop) ======
  metaPixelId: "2141006803281667",       // Meta Pixel / conjunto VENTA CAPI
  tiktokPixelId: "D9C46VBC77U7PB56S7NG", // TikTok Pixel (activo)
  ga4Id: "G-8WM6CYEB73",                 // GA4 real compartido VG Shop
  gtmId: "GTM-XXXXXXX",                  // ← PLACEHOLDER: pegá tu contenedor GTM (opcional)
  clarityId: "PEGAR_AQUI",               // ← PLACEHOLDER: Microsoft Clarity ID (opcional)
  whatsapp: "595972738779",              // Contacto WhatsApp VG Shop

  // ====== BACKEND (Supabase compartido con las demás landings) ======
  supabaseUrl: "https://roruinqorwgolcrhhmpm.supabase.co",
  supabaseAnonKey: "sb_publishable_aRPb1yNunMEheat00BxwtQ_Uft732KJ",
  supabaseTable: "pedidos_web",

  // ====== IMAGEN PRINCIPAL + GALERÍA ======
  hero: "img/Negro.jpg",
  gallery: [
    { src: "img/Negro.jpg", cap: "Bolso impermeable color negro" },
    { src: "img/Gris.jpg", cap: "Bolso impermeable color gris" },
    { src: "img/Lila.jpeg", cap: "Bolso impermeable color lila" },
    { src: "img/rosa.jpeg", cap: "Bolso impermeable color rosa" }
  ],

  // ====== PANEL DE FUNCIONES (editable en vivo con ?config=1 o Ctrl+Shift+C) ======
  features: {
    announcementBar: true,   // Barra superior con beneficios
    stickyMobileBar: true,   // Barra fija de compra en mobile
    stockUrgency: true,      // Contador de stock "Quedan XX unidades"
    floatingWhats: true,     // Botón flotante de WhatsApp
    backToTop: true          // Botón "volver arriba"
  },

  urgency: {
    stockStart: 41,          // Unidades iniciales del contador (stock real, sin temporizadores falsos)
    stockMin: 7              // No baja de este número
  }
};

// Ciudades de Paraguay para autocompletar y prueba social
const PY_CITIES = [
  "Asunción", "Ciudad del Este", "San Lorenzo", "Luque", "Capiatá",
  "Lambaré", "Fernando de la Mora", "Limpio", "Ñemby", "Encarnación",
  "Mariano Roque Alonso", "Villa Elisa", "Itauguá", "Caaguazú",
  "Coronel Oviedo", "Presidente Franco", "Villarrica", "Hernandarias",
  "San Antonio", "Concepción", "Pilar", "Caacupé", "Areguá",
  "Paraguarí", "Villa Hayes", "Itá", "Guarambaré", "Pedro Juan Caballero"
];

// Zonas con delivery a domicilio (el resto va por transportadora)
const DELIVERY_CITIES = [
  "Asunción", "San Lorenzo", "Luque", "Capiatá", "Lambaré",
  "Fernando de la Mora", "Limpio", "Ñemby", "Mariano Roque Alonso",
  "Villa Elisa", "Itauguá", "San Antonio", "Areguá", "Itá",
  "Guarambaré", "Villa Hayes", "Ypané"
];

// Exponer en window
window.PRODUCT_CONFIG = PRODUCT_CONFIG;
window.PY_CITIES = PY_CITIES;
window.DELIVERY_CITIES = DELIVERY_CITIES;
