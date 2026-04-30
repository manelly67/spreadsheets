import { Contenido } from "./class-content";

const project1 = new Contenido('langES');
project1.titleAbout = 'Hojas de cálculo para la gestión de pequeñas empresas';
project1.textContentAbout = 'Diseño de hojas de cálculo en Google Sheets con tablas dinámicas y estructuradas para generar consolidados automáticos por mes, año, categorías y parámetros varios.  Se implementan fórmulas avanzadas como QUERY, FILTER, INDEX, MATCH y VLOOKUP para extraer y consolidar datos complejos bajo solicitud específica, garantizando precisión y agilidad en el análisis.';
project1.subtitle1 = 'Diseño estructurado mediante módulos';
project1.headContactMe = '';
project1.textContactMe = '';
project1.projectName = '';
project1.projectDescription1 =
  'Módulo de Ventas';
project1.projectDescription1_array = [
  'Tabla base con lista de productos, precios, características.',
  'Tabla de entrada de datos del detalle de las ventas.',
  'Validación de datos y anexo para cuadre del día.',
  'Informe consolidado por mes, por productos, por canal de venta y parámetros a solicitud.',
];
project1.projectDescription2 =
  'Módulo de Gastos';
project1.projectDescription2_array = [
  'Tabla de entrada de datos del detalle de los gastos.',
  'Tabla base con categorías de gastos.',
  'Anexo para mano de obra.',
  'Informe consolidado por mes, por categoría, por proveedor y parámetros a solicitud.',
];
project1.projectDescription3 =
  'Módulo de Costos';
project1.projectDescription3_array = [
  'Tabla base con precios unitarios de materiales.',
  'Tablas integradas formuladas que permiten dados parámetros calcular el costo de los materiales de cada producto y definir un precio sugerido de venta.',
  'Generador del costo total de materia prima con base a los productos vendidos. (requiere tener el modulo de ventas)',
];
project1.projectDescription4 =
  'Módulo Gestión Consolidada';
project1.projectDescription4_array = [
  'Requiere previamente de al menos módulo de venta y módulo de gastos.',
  'Hoja formulada para reflejar el resultado de la gestión por mes y acumulado al año.',
];

project1.projectDescription5_array = [
  'En todos los módulos, la información se actualiza automáticamente con cada entrada de datos.',
  'Reutilizable para años subsiguientes.',
  'Adaptado a las necesidades de cada cliente',
];

project1.projectDescription6 =
  'Dashboards y Scripts';
project1.projectDescription6_array = [
  'Dashboard desde','por cuatro gráficos.',
  'Scripts diseñados en Google Apps Script a solicitud, para tareas repetitivas o específicas, desde', 'dependiendo de la complejidad.',
];


project1.language = 'español';

const arrayProjects = [
  project1
];

export { arrayProjects };