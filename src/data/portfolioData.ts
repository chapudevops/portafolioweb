export interface Project {
  icon: string
  title: string
  desc: string
  tags: string[]
  github?: string
  demo?: string
}

export interface Experience {
  title: string
  company: string
  period: string
  highlights: string[]
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  items: Skill[]
}

export interface FileNode {
  name: string
  icon: string
  language?: string
  children?: FileNode[]
  content?: string
}

export const personalInfo = {
  name: 'Darlin Josue Saldarriaga Cruz',
  title: 'Ingeniero de Sistemas',
  role: 'Full Stack Developer & AI Automation',
  location: 'Perú',
  email: 'saldarriagacruz31@gmail.com',
  phone: '+51 993 978 303',
  linkedin: 'linkedin.com/in/darlin-saldarriaga',
  github: 'github.com/darlinsaldarriaga',
  web: 'darlinsaldarriaga.dev',
  about: `Ingeniero de Sistemas titulado y desarrollador de software con experiencia en desarrollo web, automatización e implementación de sistemas empresariales. Actualmente me desempeño como Líder Técnico en GKM Technology y fundador de Infinity Dev, donde desarrollo soluciones digitales para empresas utilizando tecnologías modernas e inteligencia artificial.`,
  stats: [
    '2+ años de experiencia',
    '10+ proyectos completados',
    '50+ usuarios capacitados',
  ],
}

export const projects: Project[] = [
  {
    icon: '🚀', title: 'SoPtickes IA',
    desc: 'Sistema de tickets inteligente con IA, clasificación automática y dashboard analítico.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI', 'Docker'],
    github: 'https://github.com/darlinsaldarriaga',
    demo: 'https://darlinsaldarriaga.dev',
  },
  {
    icon: '📦', title: 'ERP Empresarial',
    desc: 'Sistema de inventario, cotizaciones y órdenes que mejoró la eficiencia operativa en un 60%.',
    tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    github: 'https://github.com/darlinsaldarriaga',
    demo: 'https://darlinsaldarriaga.dev',
  },
  {
    icon: '🌐', title: 'Sitios Web Empresariales',
    desc: 'Desarrollo web para clientes corporativos con tecnologías modernas y diseño responsivo.',
    tags: ['React', 'Vue', 'Tailwind', 'Node.js'],
    github: 'https://github.com/darlinsaldarriaga',
    demo: 'https://darlinsaldarriaga.dev',
  },
  {
    icon: '🤖', title: 'Automatizaciones IA',
    desc: 'Flujos de automatización empresarial con n8n, MCP y agentes de IA personalizados.',
    tags: ['n8n', 'MCP', 'OpenAI', 'Python'],
    github: 'https://github.com/darlinsaldarriaga',
    demo: 'https://darlinsaldarriaga.dev',
  },
]

export const experience: Experience[] = [
  {
    title: 'Líder Técnico - Desarrollo de Software',
    company: 'GKM Technology SAC',
    period: '2026 - Actualidad',
    highlights: [
      'Dirección técnica de proyectos de software',
      'Arquitectura de sistemas escalables',
      'Liderazgo y gestión de equipo de desarrollo',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'GKM Technology SAC',
    period: '2025',
    highlights: [
      'Desarrollo de aplicaciones web full stack',
      'Integración de APIs REST y servicios',
      'Implementación de soluciones escalables',
    ],
  },
  {
    title: 'Administrador de Sistemas',
    company: 'GKM Technology SAC',
    period: '2025',
    highlights: [
      'Implementación de ERP empresarial (+60% eficiencia)',
      'Reducción de tiempos de entrega en 20%',
      'Capacitación a más de 50 usuarios',
    ],
  },
  {
    title: 'Desarrollador de Software Junior',
    company: 'GKM Technology SAC',
    period: '2024',
    highlights: [
      'Desarrollo de módulos ERP',
      'Trabajo con TCL y Xiaomi',
      'Soporte a sistemas empresariales',
    ],
  },
  {
    title: 'Soporte TI de Campo',
    company: 'GKM Technology SAC',
    period: '2024',
    highlights: [
      'Soporte técnico presencial a usuarios',
      'Mantenimiento de infraestructura TI',
      'Atención y resolución de incidencias',
    ],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Angular', level: 70 },
      { name: 'Vue', level: 65 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Python', level: 88 },
      { name: 'Laravel', level: 80 },
      { name: 'Node.js', level: 78 },
      { name: 'PHP', level: 75 },
      { name: 'Java', level: 60 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'Linux', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 65 },
      { name: 'Git', level: 90 },
    ],
  },
  {
    title: 'IA & Automatización',
    items: [
      { name: 'OpenAI API', level: 85 },
      { name: 'n8n', level: 80 },
      { name: 'Python IA', level: 78 },
      { name: 'MCP', level: 70 },
    ],
  },
  {
    title: 'Bases de Datos',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'SQL Server', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
]

export const certifications: string[] = [
  'Desarrollo Web y Aplicaciones Móviles - UCV',
  'Power BI - UPC',
  'SCRUM',
  'Introducción a la Ciberseguridad - Cisco',
  'Iniciación al Desarrollo con IA - BIG School',
  'Development and Basic Concepts of Cloud Computing - Huawei ICT Academy',
]

export const education = {
  university: 'Universidad César Vallejo',
  career: 'Ingeniería de Sistemas',
  year: 'Titulado (2025)',
  awards: [
    'Quinto Superior (2024)',
    'Tercio Superior (2025)',
  ],
}

const fileContent = {
  'README.md': `# Hola, soy Darlin Saldarriaga 👋

**Ingeniero de Sistemas** | **Full Stack Developer** | **AI Automation**

Apasionado por la ciberseguridad y el desarrollo web. Especializado en crear soluciones empresariales escalables con tecnologías modernas e inteligencia artificial.

---

### 🌟 Sobre mí

Ingeniero de Sistemas titulado con experiencia en desarrollo full stack, automatización de procesos empresariales e implementación de sistemas ERP.

### 📊 Estadísticas rápidas

- \`+2 años\` de experiencia profesional
- \`+10 proyectos\` completados exitosamente
- \`+50 usuarios\` capacitados en sistemas empresariales

### 💻 Stack Principal

| Tecnología | Nivel |
|------------|-------|
| React      | 92%   |
| Python     | 88%   |
| TypeScript | 85%   |
| Laravel    | 80%   |
| Linux      | 85%   |

### 📫 Contacto

- Email: saldarriagacruz31@gmail.com
- LinkedIn: /in/darlin-saldarriaga
- GitHub: /darlinsaldarriaga
- Web: darlinsaldarriaga.dev

> "La tecnología es mejor cuando une a las personas."`,
  'SOBRE_MI.js': `/**
 * @fileoverview Información personal de Darlin Saldarriaga
 * @author Darlin Josue Saldarriaga Cruz
 * @version 1.0.0
 */

const developer = {
  nombre: 'Darlin Josue Saldarriaga Cruz',
  titulo: 'Ingeniero de Sistemas',
  rol: 'Full Stack Developer & AI Automation',
  ubicacion: 'Perú',
  idiomas: ['Español (Nativo)', 'Inglés (Técnico)'],
  disponibilidad: 'Full-time | Remoto | Presencial',

  experiencia: '2+ años',
  proyectosCompletados: 10,
  usuariosCapacitados: 50,

  intereses: [
    'Desarrollo Web Full Stack',
    'Inteligencia Artificial',
    'Ciberseguridad',
    'Automatización Empresarial',
    'Arquitectura de Software',
  ],

  educacion: {
    universidad: 'Universidad César Vallejo',
    carrera: 'Ingeniería de Sistemas',
    estado: 'Titulado (2025)',
    logros: ['Quinto Superior', 'Tercio Superior'],
  },

  certificaciones: [
    'Desarrollo Web y Apps Móviles - UCV',
    'Power BI - UPC',
    'SCRUM',
    'Ciberseguridad - Cisco',
    'Desarrollo con IA - BIG School',
    'Cloud Computing - Huawei ICT Academy',
  ],
};

export default developer;`,
  'EXPERIENCIA.json': `{
  "empresa": "GKM Technology SAC",
  "ubicacion": "Perú",
  "industria": "Tecnología / Software",
  "experiencia": [
    {
      "cargo": "Líder Técnico - Desarrollo de Software",
      "periodo": "2026 - Actualidad",
      "logros": [
        "Dirección técnica de proyectos de software",
        "Arquitectura de sistemas escalables",
        "Liderazgo y gestión de equipo de desarrollo"
      ]
    },
    {
      "cargo": "Full Stack Developer",
      "periodo": "2025",
      "logros": [
        "Desarrollo de aplicaciones web full stack",
        "Integración de APIs REST y servicios",
        "Implementación de soluciones escalables"
      ]
    },
    {
      "cargo": "Administrador de Sistemas",
      "periodo": "2025",
      "logros": [
        "Implementación de ERP empresarial",
        "Reducción de tiempos de entrega en 20%",
        "Capacitación a más de 50 usuarios"
      ]
    },
    {
      "cargo": "Desarrollador de Software Junior",
      "periodo": "2024",
      "logros": [
        "Desarrollo de módulos ERP",
        "Trabajo con TCL y Xiaomi",
        "Soporte a sistemas empresariales"
      ]
    },
    {
      "cargo": "Soporte TI de Campo",
      "periodo": "2024",
      "logros": [
        "Soporte técnico presencial a usuarios",
        "Mantenimiento de infraestructura TI",
        "Atención y resolución de incidencias"
      ]
    }
  ]
}`,
  'HABILIDADES.ts': `interface Skill {
  name: string;
  level: number;
  category: Category;
}

type Category =
  | 'Frontend'
  | 'Backend'
  | 'DevOps & Cloud'
  | 'IA & Automatización'
  | 'Bases de Datos';

const skillCategories: Category[] = [
  'Frontend',
  'Backend',
  'DevOps & Cloud',
  'IA & Automatización',
  'Bases de Datos',
];

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 92, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'Angular', level: 70, category: 'Frontend' },
  { name: 'Vue', level: 65, category: 'Frontend' },

  // Backend
  { name: 'Python', level: 88, category: 'Backend' },
  { name: 'Laravel', level: 80, category: 'Backend' },
  { name: 'Node.js', level: 78, category: 'Backend' },
  { name: 'PHP', level: 75, category: 'Backend' },
  { name: 'Java', level: 60, category: 'Backend' },

  // DevOps
  { name: 'Linux', level: 85, category: 'DevOps & Cloud' },
  { name: 'Docker', level: 75, category: 'DevOps & Cloud' },
  { name: 'AWS', level: 65, category: 'DevOps & Cloud' },
  { name: 'Git', level: 90, category: 'DevOps & Cloud' },

  // IA
  { name: 'OpenAI API', level: 85, category: 'IA & Automatización' },
  { name: 'n8n', level: 80, category: 'IA & Automatización' },
  { name: 'Python IA', level: 78, category: 'IA & Automatización' },
  { name: 'MCP', level: 70, category: 'IA & Automatización' },

  // DB
  { name: 'MySQL', level: 85, category: 'Bases de Datos' },
  { name: 'SQL Server', level: 75, category: 'Bases de Datos' },
  { name: 'PostgreSQL', level: 70, category: 'Bases de Datos' },
];

function getSkillsByCategory(category: Category): Skill[] {
  return skills.filter((s) => s.category === category);
}

function getAverageLevel(): number {
  const total = skills.reduce((acc, s) => acc + s.level, 0);
  return Math.round(total / skills.length);
}

export { skills, skillCategories, getSkillsByCategory, getAverageLevel };
export type { Skill, Category };`,
  'sistema-inventario.php': `<?php
/**
 * Sistema de Inventario - Módulo Principal
 * 
 * Sistema de gestión de inventario empresarial
 * con control de stock, alertas y reportes.
 * 
 * @author Darlin Saldarriaga
 * @version 2.0.0
 */

namespace App\\Modules\\Inventory;

use App\\Core\\Database;
use App\\Core\\Logger;

class InventoryManager
{
    private Database $db;
    private Logger $logger;
    
    public function __construct(Database $db)
    {
        $this->db = $db;
        $this->logger = new Logger('inventory');
    }
    
    /**
     * Obtiene todos los productos del inventario
     * 
     * @param array $filters Filtros opcionales
     * @return array
     */
    public function getProducts(array $filters = []): array
    {
        $query = "SELECT * FROM products WHERE 1=1";
        $params = [];
        
        if (!empty($filters['category'])) {
            $query .= " AND category_id = :category";
            $params[':category'] = $filters['category'];
        }
        
        if (!empty($filters['search'])) {
            $query .= " AND (name LIKE :search OR sku LIKE :search)";
            $params[':search'] = "%{$filters['search']}%";
        }
        
        $query .= " ORDER BY name ASC";
        
        return $this->db->fetchAll($query, $params);
    }
    
    /**
     * Actualiza el stock de un producto
     */
    public function updateStock(int $productId, int $quantity): bool
    {
        $product = $this->db->fetch(
            "SELECT * FROM products WHERE id = :id",
            [':id' => $productId]
        );
        
        if (!$product) {
            $this->logger->warning(
                "Producto no encontrado: {$productId}"
            );
            return false;
        }
        
        $newStock = $product['stock'] + $quantity;
        
        // Alerta de stock bajo
        if ($newStock < $product['min_stock']) {
            $this->sendLowStockAlert($product, $newStock);
        }
        
        return $this->db->execute(
            "UPDATE products SET stock = :stock, 
             updated_at = NOW() WHERE id = :id",
            [
                ':stock' => $newStock,
                ':id' => $productId
            ]
        );
    }
    
    /**
     * Genera reporte de inventario
     */
    public function generateReport(): array
    {
        return [
            'total_products' => $this->db->fetchColumn(
                "SELECT COUNT(*) FROM products"
            ),
            'low_stock' => $this->db->fetchAll(
                "SELECT * FROM products 
                 WHERE stock <= min_stock"
            ),
            'total_value' => $this->db->fetchColumn(
                "SELECT SUM(price * stock) FROM products"
            ),
        ];
    }
    
    private function sendLowStockAlert(array $product, int $newStock): void
    {
        $this->logger->alert(
            "Stock bajo: {$product['name']} - " .
            "Stock actual: {$newStock}"
        );
        // Enviar notificación al administrador
    }
}`,
  'sistema-cotizaciones.php': `<?php
/**
 * Sistema de Cotizaciones - Módulo API
 * 
 * API RESTful para gestión de cotizaciones
 * con generación de PDF y seguimiento.
 * 
 * @author Darlin Saldarriaga
 * @version 1.5.0
 */

namespace App\\Modules\\Quotations;

use App\\Core\\Database;
use App\\Core\\PDFGenerator;
use App\\Core\\Validator;

class QuotationController
{
    private Database $db;
    private PDFGenerator $pdf;
    private Validator $validator;
    
    public function __construct()
    {
        $this->db = new Database();
        $this->pdf = new PDFGenerator();
        $this->validator = new Validator();
    }
    
    /**
     * Crea una nueva cotización
     */
    public function create(array $data): array
    {
        $rules = [
            'client_id' => 'required|integer',
            'items' => 'required|array',
            'notes' => 'string|max:500',
            'valid_until' => 'required|date',
        ];
        
        if (!$this->validator->validate($data, $rules)) {
            return [
                'success' => false,
                'errors' => $this->validator->getErrors()
            ];
        }
        
        $total = $this->calculateTotal($data['items']);
        $quotationNumber = $this->generateNumber();
        
        $id = $this->db->insert('quotations', [
            'number' => $quotationNumber,
            'client_id' => $data['client_id'],
            'total' => $total,
            'status' => 'pending',
            'valid_until' => $data['valid_until'],
            'notes' => $data['notes'] ?? '',
            'created_at' => date('Y-m-d H:i:s'),
        ]);
        
        foreach ($data['items'] as $item) {
            $this->db->insert('quotation_items', [
                'quotation_id' => $id,
                'description' => $item['description'],
                'quantity' => $item['quantity'],
                'unit_price' => $item['unit_price'],
                'subtotal' => $item['quantity'] * $item['unit_price'],
            ]);
        }
        
        $this->pdf->generateQuotation($id);
        
        return [
            'success' => true,
            'quotation_id' => $id,
            'number' => $quotationNumber,
            'total' => $total,
        ];
    }
    
    private function calculateTotal(array $items): float
    {
        return array_reduce($items, function ($sum, $item) {
            return $sum + ($item['quantity'] * $item['unit_price']);
        }, 0.0);
    }
    
    private function generateNumber(): string
    {
        $year = date('Y');
        $count = $this->db->fetchColumn(
            "SELECT COUNT(*) FROM quotations 
             WHERE YEAR(created_at) = :year",
            [':year' => $year]
        );
        return "COT-{$year}-" . str_pad($count + 1, 5, '0', STR_PAD_LEFT);
    }
}`,
  'infinitydev.jsx': `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Zap, Globe } from 'lucide-react';

/**
 * InfinityDev - Landing Page Component
 * 
 * Página principal de Infinity Dev, estudio de
 * desarrollo web y automatización con IA.
 * 
 * @author Darlin Saldarriaga
 */

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Desarrollo Web',
    desc: 'Sitios y aplicaciones web modernas con React, Next.js y tecnologías cloud.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Automatización IA',
    desc: 'Flujos inteligentes con n8n, agentes de IA y automatización empresarial.',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Soluciones ERP',
    desc: 'Sistemas de gestión empresarial personalizados y escalables.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Consultoría Tech',
    desc: 'Asesoría en arquitectura de software y transformación digital.',
  },
];

export default function InfinityDev() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="infinity-dev">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container"
      >
        <h1>Infinity Dev</h1>
        <p className="subtitle">
          Desarrollo Web & Automatización con IA
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={\`service-card \${
                index === activeService ? 'active' : ''
              }\`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveService(index)}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}`,
  'ecommerce-react.jsx': `import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * E-commerce - Carrito de Compras Component
 * 
 * Componente de carrito de compras con estado
 * global, persistencia y animaciones.
 * 
 * @author Darlin Saldarriaga
 */

const initialProducts = [
  {
    id: 1,
    name: 'Laptop Pro 15"',
    price: 2499.99,
    category: 'Electrónica',
    stock: 10,
    image: '/products/laptop.jpg',
  },
  {
    id: 2,
    name: 'Monitor 27" 4K',
    price: 599.99,
    category: 'Electrónica',
    stock: 15,
    image: '/products/monitor.jpg',
  },
  {
    id: 3,
    name: 'Teclado Mecánico',
    price: 149.99,
    category: 'Accesorios',
    stock: 30,
    image: '/products/keyboard.jpg',
  },
  {
    id: 4,
    name: 'Mouse Inalámbrico',
    price: 89.99,
    category: 'Accesorios',
    stock: 25,
    image: '/products/mouse.jpg',
  },
];

interface CartItem {
  productId: number;
  quantity: number;
}

export default function EcommerceApp() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const addToCart = useCallback((productId: number) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.productId === productId
      );
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart((prev) =>
      prev.filter((item) => item.productId !== productId)
    );
  }, []);

  const getTotal = useCallback(() => {
    return cart.reduce((total, item) => {
      const product = initialProducts.find(
        (p) => p.id === item.productId
      );
      return total + (product?.price ?? 0) * item.quantity;
    }, 0);
  }, [cart]);

  const categories = [
    'Todas',
    ...new Set(initialProducts.map((p) => p.category)),
  ];

  const filteredProducts =
    selectedCategory === 'Todas'
      ? initialProducts
      : initialProducts.filter(
          (p) => p.category === selectedCategory
        );

  return (
    <div className="ecommerce-app">
      <header>
        <h1>TechStore</h1>
        <div className="cart-info">
          🛒 {cart.length} items
        </div>
      </header>

      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cat === selectedCategory ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="product-card"
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">\${product.price.toFixed(2)}</p>
              <p className="stock">
                Stock: {product.stock} unidades
              </p>
              <button onClick={() => addToCart(product.id)}>
                Agregar al carrito
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {cart.length > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="cart-panel"
        >
          <h2>Carrito de Compras</h2>
          {cart.map((item) => {
            const product = initialProducts.find(
              (p) => p.id === item.productId
            );
            return (
              <div key={item.productId} className="cart-item">
                <span>{product?.name}</span>
                <span>x{item.quantity}</span>
                <span>
                  \${((product?.price ?? 0) * item.quantity).toFixed(2)}
                </span>
                <button onClick={() => removeFromCart(item.productId)}>
                  ✕
                </button>
              </div>
            );
          })}
          <div className="cart-total">
            Total: \${getTotal().toFixed(2)}
          </div>
        </motion.div>
      )}
    </div>
  );
}`,
  'CERTIFICADOS.pdf': `CERTIFICACIONES - Darlin Josue Saldarriaga Cruz
══════════════════════════════════════════

 1. ✅ Desarrollo Web y Aplicaciones Móviles
    Institución: Universidad César Vallejo
    Año: 2024
    Estado: Completado

 2. ✅ Power BI
    Institución: Universidad Peruana de Ciencias Aplicadas (UPC)
    Año: 2024
    Estado: Completado

 3. ✅ SCRUM
    Institución: Certificación Internacional
    Año: 2024
    Estado: Completado

 4. ✅ Introducción a la Ciberseguridad
    Institución: Cisco Networking Academy
    Año: 2024
    Estado: Completado

 5. ✅ Iniciación al Desarrollo con IA
    Institución: BIG School
    Año: 2025
    Estado: Completado

 6. ✅ Development and Basic Concepts of Cloud Computing
    Institución: Huawei ICT Academy
    Año: 2025
    Estado: Completado

══════════════════════════════════════════
 Total: 6 certificaciones completadas`,
  'CONTACTO.env': `# === CONTACTO - Darlin Saldarriaga ===
# Full Stack Developer & AI Automation
# =========================================

# Información Personal
NOMBRE=Darlin Josue Saldarriaga Cruz
TITULO=Ingeniero de Sistemas
ROL=Full Stack Developer & AI Automation
UBICACION=Perú

# Contacto Directo
EMAIL=saldarriagacruz31@gmail.com
TELEFONO=+51 993 978 303
SITIO_WEB=https://darlinsaldarriaga.dev

# Redes Profesionales
LINKEDIN=https://linkedin.com/in/darlin-saldarriaga
GITHUB=https://github.com/darlinsaldarriaga

# Redes Sociales
WHATSAPP=https://wa.me/51993978303

# Preferencias
IDIOMAS=Español(Nativo),Inglés(Técnico)
DISPONIBILIDAD=Full-time|Remoto|Presencial
ZONA_HORARIA=America/Lima

# Configuración
PORT=3000
NODE_ENV=production
API_VERSION=v1`,
}

export const portfolioFiles: FileNode[] = [
  {
    name: 'README.md',
    icon: '📄',
    language: 'markdown',
  },
  {
    name: 'SOBRE_MI.js',
    icon: '📄',
    language: 'javascript',
  },
  {
    name: 'EXPERIENCIA.json',
    icon: '📄',
    language: 'json',
  },
  {
    name: 'HABILIDADES.ts',
    icon: '📄',
    language: 'typescript',
  },
  {
    name: 'PROYECTOS',
    icon: '📁',
    children: [
      {
        name: 'sistema-inventario.php',
        icon: '📄',
        language: 'php',
      },
      {
        name: 'sistema-cotizaciones.php',
        icon: '📄',
        language: 'php',
      },
      {
        name: 'infinitydev.jsx',
        icon: '📄',
        language: 'jsx',
      },
      {
        name: 'ecommerce-react.jsx',
        icon: '📄',
        language: 'jsx',
      },
    ],
  },
  {
    name: 'CERTIFICADOS.pdf',
    icon: '📄',
    language: 'text',
  },
  {
    name: 'CONTACTO.env',
    icon: '📄',
    language: 'env',
  },
]

export function getFileContent(node: FileNode): string {
  const path = getNodePath(node)
  const key = path.split('/').pop() || node.name
  return fileContent[key as keyof typeof fileContent] || ''
}

export function getNodePath(node: FileNode, tree: FileNode[] = portfolioFiles, parentPath = ''): string {
  for (const n of tree) {
    const currentPath = parentPath ? `${parentPath}/${n.name}` : n.name
    if (n === node) return currentPath
    if (n.children) {
      const found = getNodePath(node, n.children, currentPath)
      if (found) return found
    }
  }
  return node.name
}
