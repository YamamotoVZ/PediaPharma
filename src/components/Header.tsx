import React from 'react';
import { Plus, Sun, Moon, Database } from 'lucide-react';
import { usePharmacy } from '../context/PharmacyContext';

interface HeaderProps {
  onOpenDatabaseTools: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDatabaseTools }) => {
  const { activeTab, setActiveTab, openCreateForm, theme, toggleTheme } = usePharmacy();

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('home');
            }}
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-600 dark:bg-teal-500 text-white flex items-center justify-center shadow-xs">
              <svg className="w-4 h-4 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 4v16m-8-8h16" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>PharmaPedia</span>
          </a>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => setActiveTab('home')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'home'
                ? 'border-teal-600 text-teal-700 dark:border-teal-400 dark:text-teal-300 font-semibold'
                : 'border-transparent hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => setActiveTab('vademecum')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'vademecum'
                ? 'border-teal-600 text-teal-700 dark:border-teal-400 dark:text-teal-300 font-semibold'
                : 'border-transparent hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Medicamentos
          </button>
          <button
            onClick={() => setActiveTab('classifications')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'classifications'
                ? 'border-teal-600 text-teal-700 dark:border-teal-400 dark:text-teal-300 font-semibold'
                : 'border-transparent hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Clasificaciones
          </button>
          <button
            onClick={() => setActiveTab('interactions')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'interactions'
                ? 'border-teal-600 text-teal-700 dark:border-teal-400 dark:text-teal-300 font-semibold'
                : 'border-transparent hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Interacciones
          </button>
          <button
            onClick={() => setActiveTab('calculators')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
              activeTab === 'calculators'
                ? 'border-teal-600 text-teal-700 dark:border-teal-400 dark:text-teal-300 font-semibold'
                : 'border-transparent hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Calculadora Clínica
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Utility controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDatabaseTools}
            title="Herramientas de Base de Datos (JSON / Respaldo)"
            className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Herramientas de datos"
          >
            <Database className="w-4 h-4" />
          </button>

          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => openCreateForm()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Agregar Medicamento</span>
          </button>
        </div>

      </div>

      {/* Mobile nav row */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-200 dark:border-slate-800 px-2 py-2 bg-slate-50 dark:bg-slate-900 text-xs font-medium">
        <button
          onClick={() => setActiveTab('home')}
          className={`px-2 py-1 rounded cursor-pointer ${activeTab === 'home' ? 'text-teal-700 dark:text-teal-300 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Inicio
        </button>
        <button
          onClick={() => setActiveTab('vademecum')}
          className={`px-2 py-1 rounded cursor-pointer ${activeTab === 'vademecum' ? 'text-teal-700 dark:text-teal-300 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Medicamentos
        </button>
        <button
          onClick={() => setActiveTab('classifications')}
          className={`px-2 py-1 rounded cursor-pointer ${activeTab === 'classifications' ? 'text-teal-700 dark:text-teal-300 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Clasificaciones
        </button>
        <button
          onClick={() => setActiveTab('interactions')}
          className={`px-2 py-1 rounded cursor-pointer ${activeTab === 'interactions' ? 'text-teal-700 dark:text-teal-300 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Interacciones
        </button>
        <button
          onClick={() => setActiveTab('calculators')}
          className={`px-2 py-1 rounded cursor-pointer ${activeTab === 'calculators' ? 'text-teal-700 dark:text-teal-300 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Calculadora
        </button>
      </div>
    </header>
  );
};
