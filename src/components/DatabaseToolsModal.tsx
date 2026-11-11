import React, { useState } from 'react';
import { X, Download, Upload, RefreshCw, CheckCircle2, AlertTriangle, Copy } from 'lucide-react';
import { usePharmacy } from '../context/PharmacyContext';

interface DatabaseToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DatabaseToolsModal: React.FC<DatabaseToolsModalProps> = ({ isOpen, onClose }) => {
  const {
    medications,
    classifications,
    exportDatabaseJSON,
    importDatabaseJSON,
    resetDatabase
  } = usePharmacy();

  const [importStatus, setImportStatus] = useState<{ message: string; isError?: boolean } | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyClipboard = async () => {
    try {
      const jsonStr = exportDatabaseJSON();
      await navigator.clipboard.writeText(jsonStr);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleExport = () => {
    const jsonStr = exportDatabaseJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `pharmapedia_db_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const result = importDatabaseJSON(content);
        if (result.success) {
          setImportStatus({ message: 'Base de datos importada exitosamente.' });
          setTimeout(() => {
            onClose();
          }, 1200);
        } else {
          setImportStatus({ message: result.error || 'Error al importar archivo.', isError: true });
        }
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (window.confirm('¿Restablecer la base de datos a los medicamentos y clasificaciones iniciales de fábrica? Se perderán las modificaciones no respaldadas.')) {
      resetDatabase();
      setImportStatus({ message: 'Base de datos restablecida a los valores iniciales.' });
      setTimeout(() => {
        onClose();
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl p-6 space-y-5">
        
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Gestión & Respaldo de Base de Datos
            </h3>
            <span className="text-xs text-slate-400">
              {medications.length} fármacos · {classifications.length} clasificaciones registradas
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {importStatus && (
          <div
            className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
              importStatus.isError
                ? 'bg-rose-50 text-rose-800 border border-rose-200'
                : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
            }`}
          >
            {importStatus.isError ? <AlertTriangle className="w-4 h-4 shrink-0" /> : <CheckCircle2 className="w-4 h-4 shrink-0" />}
            <span>{importStatus.message}</span>
          </div>
        )}

        {/* Guide for Published Web Page Sync */}
        <div className="p-3.5 rounded-xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 text-xs space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-teal-900 dark:text-teal-200">
            <span className="text-base">🚀</span>
            <span>¿Cómo pasar tus cambios a la página web publicada?</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-[11.5px] leading-relaxed">
            Las modificaciones de nombres, imágenes y fármacos que realizas en este entorno de desarrollo se guardan en el navegador. Para que se vean en la <strong>página web publicada</strong>:
          </p>
          <ol className="list-decimal list-inside space-y-1 text-slate-700 dark:text-slate-200 font-medium text-[11px] pl-1">
            <li>Haz clic en <strong>"Exportar JSON"</strong> (o "Copiar JSON") en esta pantalla.</li>
            <li>Abre el enlace de tu web publicada (o compártela con tus usuarios).</li>
            <li>En la web publicada, haz clic en este mismo botón de Base de Datos y pulsa <strong>"Importar Respaldo JSON"</strong>.</li>
          </ol>
          <p className="text-[11px] text-teal-800 dark:text-teal-300 font-medium">
            💡 <em>Tip: Si deseas que los cambios queden grabados permanentemente en el código fuente para todos los usuarios sin que nadie tenga que importar nada, copia el JSON o compártenos en el chat los fármacos modificados.</em>
          </p>
        </div>

        <div className="space-y-4">
          
          {/* Export & Copy JSON */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                Exportar Catálogo Farmacológico
              </span>
              <span className="text-[11px] text-slate-500">
                Descargue un archivo JSON o cópielo al portapapeles con todos los medicamentos y fotos.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyClipboard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300 bg-white dark:bg-slate-800 border border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-950 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '¡Copiado!' : 'Copiar JSON'}</span>
              </button>
              <button
                type="button"
                onClick={handleExport}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Exportar JSON</span>
              </button>
            </div>
          </div>

          {/* Import */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                Importar Respaldo JSON
              </span>
              <span className="text-[11px] text-slate-500">
                Cargue una base de datos previamente exportada para sincronizar sus fotos y nombres.
              </span>
            </div>
            <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-100 rounded-lg shrink-0">
              <Upload className="w-3.5 h-3.5" />
              <span>Importar JSON</span>
              <input
                type="file"
                accept=".json,application/json"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Reset to Factory */}
          <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 flex items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-rose-900 dark:text-rose-200 block">
                Restablecer Base de Datos Inicial
              </span>
              <span className="text-[11px] text-rose-700 dark:text-rose-400">
                Restaura el vademécum preconfigurado con medicamentos de referencia.
              </span>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-white dark:bg-rose-950 border border-rose-300 dark:border-rose-800 hover:bg-rose-100 dark:hover:bg-rose-900 rounded-lg shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restablecer</span>
            </button>
          </div>

        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
