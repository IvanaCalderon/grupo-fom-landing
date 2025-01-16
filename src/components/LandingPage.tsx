'use client'
import React, { useState } from 'react';
import { ServicesSection, ProjectsSection } from '@/components/Sections';
import { Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Función para scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white py-4 px-6 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">GRUPO F.O.M</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="hover:text-gray-200"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')} 
              className="hover:text-gray-200"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')} 
              className="hover:text-gray-200"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contactanos')} 
              className="hover:text-gray-200"
            >
              Contáctanos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-blue-800 border-t border-blue-700">
            <div className="flex flex-col px-4 py-4 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('inicio');
                  setIsMenuOpen(false);
                }} 
                className="hover:text-gray-200 text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => {
                  scrollToSection('servicios');
                  setIsMenuOpen(false);
                }} 
                className="hover:text-gray-200 text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => {
                  scrollToSection('proyectos');
                  setIsMenuOpen(false);
                }} 
                className="hover:text-gray-200 text-left"
              >
                Proyectos
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contactanos');
                  setIsMenuOpen(false);
                }} 
                className="hover:text-gray-200 text-left"
              >
                Contáctanos
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="bg-blue-800 text-white py-20 px-6 pt-32">
        <div className="flex items-center justify-center max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">Construyendo sueños</h1>
            <button 
              onClick={() => scrollToSection('contactanos')}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
            >
              Contáctanos ya
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-red-600 rounded-lg"></div>
            <img
              src="/images/hero-image.jpg" 
              alt="Construction site"
              className="relative z-10 rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="flex items-center justify-center max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/project-1.jpg" alt="Project 1" className="w-full lg:max-h-[227px] lg:min-h-[227px] min-h-[131px] max-h-[131px] rounded-lg" />
            <img src="/images/project-2.jpg" alt="Project 2" className="w-full lg:max-h-[227px] lg:min-h-[227px] min-h-[131px] max-h-[131px] rounded-lg" />
            <img src="/images/project-3.jpg" alt="Project 3" className="w-full lg:max-h-[227px] lg:min-h-[227px] min-h-[131px] max-h-[131px] rounded-lg" />
            <img src="/images/project-4.jpg" alt="Project 4" className="w-full lg:max-h-[227px] lg:min-h-[227px] min-h-[131px] max-h-[131px] rounded-lg" />
          </div>
          <div className="space-y-6">
            <h2 className="text-black text-3xl font-bold">Lorem Ipsum is simply dummy text of the printing</h2>
            <p className="text-gray-600">
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-black text-3xl font-bold">400+</div>
                <div className="text-sm text-gray-600">Lorem Ipsum has been</div>
              </div>
              <div>
                <div className="text-black text-3xl font-bold">200+</div>
                <div className="text-sm text-gray-600">when an unknown printer took</div>
              </div>
              <div>
                <div className="text-black text-3xl font-bold">84%</div>
                <div className="text-sm text-gray-600">printer took a galley of type</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
        <ServicesSection />

      {/* Projects Section */}
        <ProjectsSection />

      {/* Contact Section */}
      <section id="contactanos" className="bg-blue-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="block mb-2">Nombre</label>
              <input
                type="text"
                className="w-full p-3 rounded-md border border-red-500 bg-transparent"
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Correo</label>
              <input
                type="email"
                className="w-full p-3 rounded-md border border-red-500 bg-transparent"
                value={formData.correo}
                onChange={(e) => setFormData({...formData, correo: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Mensaje</label>
              <textarea
                className="w-full p-3 rounded-md border border-red-500 bg-transparent h-32"
                value={formData.mensaje}
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-black py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GRUPO F.O.M</h3>
            <p className="text-gray-800">
              Construyendo sueños y transformando espacios desde hace más de 10 años.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-gray-800 hover:text-gray-400">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="text-gray-800 hover:text-gray-400">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('proyectos')} className="text-gray-800 hover:text-gray-400">
                  Proyectos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contactanos')} className="text-gray-800 hover:text-gray-400">
                  Contáctanos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-800">
                📍 Auto.6 de noviembre/ 300 mts entrada Najayo Arriba/ San Cristobal 
              </li>
              <li className="text-gray-800">
                📞 [Teléfono]
              </li>
              <li className="text-gray-800">
                ✉️ [Email]
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Síguenos</h3>
            <ul className="space-y-2">
              <li className="text-gray-800">
                <a href="https://www.facebook.com/grupo.fom/?locale=es_LA" target="_blank" className="text-gray-800 hover:text-gray-400">
                    Facebook
                </a>
              </li>
              <li className="text-gray-800">
                <a href="https://www.instagram.com/grupo_fom/" target="_blank" className="text-gray-800 hover:text-gray-400">
                    Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-700">
          <p className="text-center text-black">
            © {new Date().getFullYear()} GRUPO F.O.M. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
    
  );
};

export default LandingPage;