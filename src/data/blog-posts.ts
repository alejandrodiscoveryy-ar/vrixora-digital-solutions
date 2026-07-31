export type BlogSubSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
  subSections?: BlogSubSection[];
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  author: "Vrixora Solutions";
  coverImage: string;
  coverAlt: string;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  ogImage: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-saber-si-tu-negocio-genera-ganancias",
    title: "Como saber si tu negocio realmente esta generando ganancias",
    summary:
      "Aprende una forma practica de medir rentabilidad con indicadores simples para tomar decisiones sin depender de intuicion.",
    category: "Finanzas para negocios",
    publishedAt: "2026-07-30",
    readingMinutes: 7,
    author: "Vrixora Solutions",
    coverImage: "/blog/negocio-generando-ganancias.jpg",
    coverAlt: "Analisis de rentabilidad en un negocio de transporte",
    seoTitle: "Como saber si tu negocio genera ganancias | Blog Vrixora",
    seoDescription:
      "Guia clara para calcular utilidad real, punto de equilibrio y flujo de caja para saber si tu negocio gana dinero de verdad.",
    canonicalPath: "/blog/como-saber-si-tu-negocio-genera-ganancias",
    ogImage: "https://www.vrixora.com/blog/negocio-generando-ganancias.jpg",
    sections: [
      {
        title: "Empieza por separar ingresos, costos y gastos",
        paragraphs: [
          "Muchos negocios confunden vender mas con ganar mas. El primer paso es separar en categorias lo que entra y lo que sale.",
          "Si no distingues costos directos de operacion y gastos generales, el resultado que ves puede estar inflado y llevarte a decisiones equivocadas.",
        ],
        bullets: [
          "Ingresos: todo lo cobrado por tus servicios.",
          "Costos directos: combustible, mantenimiento, comisiones o pagos vinculados al servicio.",
          "Gastos operativos: telefono, internet, alquiler, salarios administrativos y otros fijos.",
        ],
      },
      {
        title: "Calcula utilidad bruta y utilidad neta cada semana",
        paragraphs: [
          "La utilidad bruta te muestra si tu operacion principal es saludable. La utilidad neta te confirma si el negocio completo esta siendo rentable.",
          "Haz este corte semanalmente para detectar desviaciones rapido, no solo al cierre del mes.",
        ],
        bullets: [
          "Utilidad bruta = ingresos - costos directos.",
          "Utilidad neta = utilidad bruta - gastos operativos.",
          "Si la utilidad neta cae por dos semanas seguidas, revisa precios, rutas y gastos recurrentes.",
        ],
      },
      {
        title: "Controla flujo de caja y punto de equilibrio",
        paragraphs: [
          "Un negocio puede ser rentable en papel y aun asi quedarse sin efectivo. Por eso debes mirar flujo de caja y punto de equilibrio en paralelo.",
        ],
        subSections: [
          {
            title: "Flujo de caja",
            paragraphs: [
              "Registra cuando realmente cobras y cuando realmente pagas. Esta vista evita sorpresas de liquidez.",
            ],
          },
          {
            title: "Punto de equilibrio",
            paragraphs: [
              "Define cuantas ventas o servicios necesitas para cubrir todos tus costos. A partir de ese punto, lo adicional es ganancia.",
            ],
          },
        ],
      },
      {
        title: "Toma decisiones con indicadores simples",
        paragraphs: [
          "No necesitas un sistema complejo para empezar. Necesitas consistencia en los datos y foco en pocos indicadores clave.",
        ],
        bullets: [
          "Margen neto (%): utilidad neta / ingresos.",
          "Costo por servicio: costos directos / cantidad de servicios.",
          "Variacion semanal de gastos: ayuda a detectar fugas rapido.",
        ],
        links: [
          { label: "Conoce nuestros servicios", href: "/servicios" },
          { label: "Descubre TukTuk Control", href: "/tuktuk" },
        ],
      },
    ],
  },
  {
    slug: "ventajas-de-digitalizar-la-gestion-de-un-vehiculo-electrico",
    title: "Ventajas de digitalizar la gestion de un vehiculo electrico",
    summary:
      "Descubre como pasar de libretas a registros digitales mejora control, reduce errores y acelera decisiones operativas.",
    category: "Operacion y productividad",
    publishedAt: "2026-07-24",
    readingMinutes: 6,
    author: "Vrixora Solutions",
    coverImage: "/blog/ventajas-digitalizar-vehiculo-electrico.jpg",
    coverAlt: "Gestion digital de vehiculo electrico con panel de indicadores",
    seoTitle: "Ventajas de digitalizar la gestion de un vehiculo electrico | Vrixora",
    seoDescription:
      "Beneficios concretos de registrar ingresos, gastos, kilometraje y mantenimiento en una app para operar con mas control.",
    canonicalPath: "/blog/ventajas-de-digitalizar-la-gestion-de-un-vehiculo-electrico",
    ogImage: "https://www.vrixora.com/blog/ventajas-digitalizar-vehiculo-electrico.jpg",
    sections: [
      {
        title: "Dejar el papel reduce errores desde el primer dia",
        paragraphs: [
          "Las notas manuales suelen perderse, duplicarse o quedar incompletas. En operacion diaria, eso afecta tus decisiones financieras.",
          "Con una herramienta digital, cada registro queda con estructura y fecha, lo que facilita revisar y comparar informacion.",
        ],
      },
      {
        title: "Tienes visibilidad inmediata de ingresos y gastos",
        paragraphs: [
          "Cuando los datos se registran en el momento, puedes ver resultados de la jornada sin esperar al cierre del mes.",
        ],
        bullets: [
          "Identificas rutas o turnos mas rentables.",
          "Detectas picos de gasto en combustible o mantenimiento.",
          "Ajustas precios y metas con datos reales.",
        ],
      },
      {
        title: "Mejoras mantenimiento y vida util del vehiculo",
        paragraphs: [
          "Un historial digital ayuda a no depender de memoria para saber cuando toca servicio, cambio de piezas o revision de bateria.",
        ],
        subSections: [
          {
            title: "Mantenimientos preventivos",
            bullets: [
              "Programar mantenimientos reduce paradas imprevistas.",
              "Registrar repuestos y fechas evita repetir trabajos.",
            ],
          },
          {
            title: "Control de bateria",
            paragraphs: [
              "Registrar voltaje de forma periodica permite anticipar caidas de rendimiento y planificar reemplazos.",
            ],
          },
        ],
      },
      {
        title: "La sincronizacion aporta continuidad operativa",
        paragraphs: [
          "Trabajar sin conexion y sincronizar despues permite operar en calles con cobertura inestable sin perder trazabilidad.",
          "Ademas, contar con respaldo facilita recuperacion de datos ante cambio o perdida de dispositivo.",
        ],
        links: [
          { label: "Ver TukTuk Control", href: "/tuktuk" },
          { label: "Hablar con nuestro equipo", href: "/soporte" },
        ],
      },
    ],
  },
  {
    slug: "como-controlar-ingresos-y-gastos-en-transporte",
    title: "Como controlar los ingresos y gastos de un negocio de transporte",
    summary:
      "Una metodologia practica para registrar operaciones diarias, organizar categorias y mejorar margen con decisiones basadas en datos.",
    category: "Gestion financiera",
    publishedAt: "2026-07-18",
    readingMinutes: 8,
    author: "Vrixora Solutions",
    coverImage: "/blog/control-ingresos-gastos-transporte.jpg",
    coverAlt: "Registro diario de ingresos y gastos en negocio de transporte",
    seoTitle: "Control de ingresos y gastos para transporte | Blog Vrixora",
    seoDescription:
      "Guia paso a paso para organizar finanzas de un negocio de transporte y tomar mejores decisiones con informacion diaria.",
    canonicalPath: "/blog/como-controlar-ingresos-y-gastos-en-transporte",
    ogImage: "https://www.vrixora.com/blog/control-ingresos-gastos-transporte.jpg",
    sections: [
      {
        title: "Define un metodo unico de registro diario",
        paragraphs: [
          "El control financiero empieza con disciplina. Si cada conductor o responsable anota distinto, no hay forma de comparar resultados.",
          "Establece campos obligatorios por jornada para que toda la operacion hable el mismo idioma.",
        ],
        bullets: [
          "Fecha y turno.",
          "Total de ingresos cobrados.",
          "Gastos del dia por categoria.",
          "Kilometraje recorrido.",
        ],
      },
      {
        title: "Clasifica gastos en categorias utiles",
        paragraphs: [
          "No basta con saber cuanto gastaste; necesitas saber en que. La categorizacion correcta permite encontrar oportunidades de ahorro.",
        ],
        bullets: [
          "Combustible o carga electrica.",
          "Mantenimiento preventivo y correctivo.",
          "Peajes, parqueos o permisos.",
          "Comisiones y gastos administrativos.",
        ],
      },
      {
        title: "Analiza resultados por periodo corto",
        paragraphs: [
          "Revisar datos semanalmente acelera mejoras. Un analisis mensual llega tarde cuando hay fugas de gasto o caidas de ingreso.",
        ],
        subSections: [
          {
            title: "Indicadores minimos recomendados",
            bullets: [
              "Ingreso promedio por dia.",
              "Gasto promedio por dia.",
              "Margen por jornada.",
              "Costo por kilometro.",
            ],
          },
          {
            title: "Alertas operativas",
            paragraphs: [
              "Si el gasto sube y el ingreso no crece al mismo ritmo, necesitas ajustar rutas, horarios o politicas de mantenimiento.",
            ],
          },
        ],
      },
      {
        title: "Digitaliza para escalar con control",
        paragraphs: [
          "Cuando pasas de una libreta a una aplicacion, ganas velocidad para registrar, analizar y decidir. Tambien reduces dependencia de una sola persona para consolidar datos.",
          "Un sistema digital bien implementado te permite crecer sin perder control financiero.",
        ],
        links: [
          { label: "Explora TukTuk Control", href: "/tuktuk" },
          { label: "Ver servicios de Vrixora", href: "/servicios" },
        ],
      },
    ],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getSortedBlogPosts = () =>
  [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

export const formatBlogDate = (isoDate: string) =>
  new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
