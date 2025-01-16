'use client'
import React, { useState } from 'react';
import { Wrench, Building, PaintBucket, Ruler, Truck, HardHat, Code, Palette, Database, Globe, Lock, HomeIcon } from 'lucide-react';

// Servicios data
const services = [
  {
    id: 1,
    title: "Desbroces",
    description: "Limpieza y preparación de terrenos para proyectos agrícolas, industriales o residenciales.",
    icon: HomeIcon
  },
  {
    id: 2,
    title: "Construcción de Caminos",
    description: "Diseño, nivelación y construcción de caminos seguros y duraderos, adaptados a cualquier tipo de terreno.",
    icon: Building
  },
  {
    id: 3,
    title: "Acondicionamientos",
    description: "Preparación de terrenos para proyectos específicos, incluyendo nivelación, compactación y drenaje.",
    icon: PaintBucket
  },
  {
    id: 4,
    title: "Excavaciones",
    description: "Excavación profesional para cimentaciones, zanjas, piscinas y cualquier obra que requiera movimiento de tierra.",
    icon: Ruler
  },
  {
    id: 5,
    title: "Transportes y Logística",
    description: "Coordinación eficiente para el transporte de materiales y maquinaria, asegurando puntualidad y calidad en cada proyecto.",
    icon: Truck
  },
  {
    id: 6,
    title: "Tiro de Material",
    description: "Recolección y disposición de materiales sobrantes, escombros o tierra en lugares autorizados.",
    icon: HardHat
  }
];

// Proyectos data
const projects = [
  {
    id: 1,
    title: "Parque Fotovoltaico Esperanza",
    description: "Realizamos movimientos de tierra y acondicionamiento para la construcción de este importante proyecto de energía renovable.",
    icon: Building
  },
  {
    id: 2,
    title: "Parque Fotovoltaico Girasol",
    description: "Participamos en la preparación y desarrollo del terreno para uno de los parques solares más destacados de la región.",
    icon: Globe
  },
  {
    id: 3,
    title: "Línea de Transmisión de 230kV San Pedro - Cotuí (111 km)",
    description: "Ejecutamos trabajos de movimiento de tierra y acondicionamiento en una línea de transmisión clave para la infraestructura energética nacional.",
    icon: Palette
  },
  {
    id: 4,
    title: "Camino de Acceso a la Línea de Transmisión de 230kV Piedra Blanca - Bonao III",
    description: "Diseñamos y construimos caminos de acceso, garantizando una conexión eficiente para este proyecto eléctrico.",
    icon: Wrench
  },
  {
    id: 5,
    title: "Caminos de Acceso para la Línea de Transmisión de 345kV Punta Catalina Julio Sauri",
    description: "Realizamos movimientos de tierra y construcción de caminos para asegurar el transporte y mantenimiento de esta línea estratégica.",
    icon: Lock
  },
  {
    id: 6,
    title: "Caminos de Acceso para la Línea de Transmisión de 138kV Pizarrete - Cruce de San Juan",
    description: "Llevamos a cabo la preparación y construcción de caminos de acceso para facilitar la instalación y operación de esta línea de transmisión eléctrica.",
    icon: HomeIcon
  }
];

// Update your Services Section in the main component:
const ServicesSection = () => (
  <section id="servicios" className="py-20 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-black text-3xl font-bold mb-12">Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div key={service.id} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <IconComponent className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-black text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Update your Projects Section in the main component:
const ProjectsSection = () => (
  <section id="proyectos" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-black text-3xl font-bold mb-12">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => {
          const IconComponent = project.icon;
          return (
            <div key={project.id} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <IconComponent className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-black text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Replace your existing services and projects sections with these components
// in your main LandingPage component

export { ServicesSection, ProjectsSection };