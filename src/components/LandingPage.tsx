'use client'
import React, { useState } from 'react';
import { ServicesSection, ProjectsSection } from '@/components/Sections';
import PDFDownloadButton from '@/components/PDFDownloadButton';
import { Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://formspree.io/f/xbldylal', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
        });
        setFormData({ nombre: '', correo: '', mensaje: '' });
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="space-y-9">
            <h1 className="text-5xl font-bold leading-[3.5rem]">Construyendo sueños y transformando espacios, con más de una década <br />de experiencia</h1>
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
            <h2 className="text-black text-1xl">En Grupo Fom, nos especializamos en la construcción e ingeniería, transformando sueños en realidad y espacios en obras de excelencia durante más de 10 años. Nos comprometemos a entregar proyectos que cumplen con los más altos estándares de calidad, eficiencia y puntualidad, adaptándonos a las necesidades y expectativas de cada cliente.</h2>
            <p className="text-gray-600">
            Misión: Brindar servicios de construcción e ingeniería de alta calidad, con estricta puntualidad y eficiencia, ofreciendo soluciones legales, innovadoras y efectivas que respondan a las necesidades más exigentes de nuestros clientes. Incorporamos las últimas tendencias del sector para optimizar los procesos y garantizar un producto final superior.
            </p>
            <p className="text-gray-600">
            Visión: Ser reconocidos como la empresa de ingeniería más confiable de nuestro país, destacándonos por nuestra seguridad, innovación y compromiso con la satisfacción del cliente. Evolucionamos constantemente para ofrecer productos y servicios de calidad, garantizando la solidez y sostenibilidad de nuestra empresa.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-black text-3xl font-bold">10+</div>
                <div className="text-sm text-gray-600">años en el mercado</div>
              </div>
              <div>
                <div className="text-black text-3xl font-bold">40+</div>
                <div className="text-sm text-gray-600">proyectos exitosos en los que hemos participado</div>
              </div>
              <div>
                <div className="text-black text-3xl font-bold">900K+</div>
                <div className="text-sm text-gray-600">m³ de movimiento de tierra</div>
              </div>
            </div>
            <PDFDownloadButton/>
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
                name="nombre"
                className="w-full p-3 rounded-md border border-red-500 bg-transparent"
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block mb-2">Correo</label>
              <input
                type="email"
                name="correo"
                className="w-full p-3 rounded-md border border-red-500 bg-transparent"
                value={formData.correo}
                onChange={(e) => setFormData({...formData, correo: e.target.value})}
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block mb-2">Mensaje</label>
              <textarea
                name="mensaje"
                className="w-full p-3 rounded-md border border-red-500 bg-transparent h-32"
                value={formData.mensaje}
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Mensaje de estado */}
            {submitStatus.message && (
              <div 
                className={`p-4 rounded-md ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-600/20 text-green-100' 
                    : 'bg-red-600/20 text-red-100'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
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
                ✉️ direccion@grupofom.info
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