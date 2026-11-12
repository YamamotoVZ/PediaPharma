import React, { useState, useMemo } from 'react';
import {
  Video,
  Play,
  Search,
  Filter,
  X,
  ExternalLink,
  Clock,
  Award,
  BookOpen,
  ArrowRight,
  Layers,
  Sparkles,
  CheckCircle2,
  Tv
} from 'lucide-react';
import { usePharmacy } from '../context/PharmacyContext';
import { EDUCATIONAL_VIDEOS } from '../data/educationalVideos';
import { EducationalVideo } from '../types/pharmacy';

export const VideosView: React.FC = () => {
  const { classifications, setActiveTab, setFilterClassification } = usePharmacy();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClassificationFilter, setSelectedClassificationFilter] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'Básico' | 'Intermedio' | 'Avanzado'>('all');
  const [activeVideo, setActiveVideo] = useState<EducationalVideo | null>(null);

  // Filtered video list
  const filteredVideos = useMemo(() => {
    return EDUCATIONAL_VIDEOS.filter(video => {
      // Classification match
      if (selectedClassificationFilter !== 'all' && video.classificationId !== selectedClassificationFilter) {
        return false;
      }

      // Difficulty match
      if (selectedDifficulty !== 'all' && video.difficulty !== selectedDifficulty) {
        return false;
      }

      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = video.title.toLowerCase().includes(q);
        const matchesChannel = video.channelName.toLowerCase().includes(q);
        const matchesClass = video.classificationName.toLowerCase().includes(q);
        const matchesDesc = video.description.toLowerCase().includes(q);
        const matchesTopics = video.topics.some(t => t.toLowerCase().includes(q));
        const matchesDrugs = video.recommendedKeyDrugs.some(d => d.toLowerCase().includes(q));

        if (!matchesTitle && !matchesChannel && !matchesClass && !matchesDesc && !matchesTopics && !matchesDrugs) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedClassificationFilter, selectedDifficulty]);

  const handleOpenDrugsForClassification = (classificationId: string) => {
    setFilterClassification(classificationId);
    setActiveTab('vademecum');
    setActiveVideo(null);
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      
      {/* ============================================================
          1. HERO HEADER
         ============================================================ */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 border border-teal-800/40 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wide uppercase">
            <Video className="w-3.5 h-3.5" />
            <span>Videos farmacológicos</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Videos de Clasificaciones Farmacológicas
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Videos organizados según las clasificaciones farmacológicas.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Tv className="w-3.5 h-3.5 text-teal-400" />
              <span>{EDUCATIONAL_VIDEOS.length} clases audiovisuales</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>19 grupos terapéuticos cubiertos</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Award className="w-3.5 h-3.5 text-teal-400" />
              <span>Canales médicos verificados</span>
            </div>
          </div>
        </div>

        {/* Decorative background blur and grid */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-teal-500/10 to-transparent pointer-events-none" />
      </div>

      {/* ============================================================
          2. FILTERS AND SEARCH BAR
         ============================================================ */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
          
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por tema, diana molecular, fármaco o canal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Classification Dropdown Selector */}
          <div className="md:col-span-4">
            <select
              value={selectedClassificationFilter}
              onChange={(e) => setSelectedClassificationFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">Todas las clasificaciones farmacológicas ({EDUCATIONAL_VIDEOS.length})</option>
              {classifications.map(c => {
                const count = EDUCATIONAL_VIDEOS.filter(v => v.classificationId === c.id).length;
                return (
                  <option key={c.id} value={c.id}>
                    {c.name} {count > 0 ? `(${count})` : ''}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="md:col-span-3 flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-xl">
            <button
              onClick={() => setSelectedDifficulty('all')}
              className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-colors ${
                selectedDifficulty === 'all'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedDifficulty('Básico')}
              className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-colors ${
                selectedDifficulty === 'Básico'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Básico
            </button>
            <button
              onClick={() => setSelectedDifficulty('Intermedio')}
              className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-colors ${
                selectedDifficulty === 'Intermedio'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Intermedio
            </button>
            <button
              onClick={() => setSelectedDifficulty('Avanzado')}
              className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-colors ${
                selectedDifficulty === 'Avanzado'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Avanzado
            </button>
          </div>

        </div>

        {/* Quick Classification Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs pt-1">
          <span className="font-bold text-slate-400 dark:text-slate-500 shrink-0 text-[11px] uppercase tracking-wider">
            Accesos rápidos:
          </span>
          <button
            onClick={() => setSelectedClassificationFilter('all')}
            className={`px-2.5 py-1 rounded-lg shrink-0 transition-colors ${
              selectedClassificationFilter === 'all'
                ? 'bg-teal-600 text-white font-bold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Todos ({EDUCATIONAL_VIDEOS.length})
          </button>
          {classifications.slice(0, 8).map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedClassificationFilter(c.id)}
              className={`px-2.5 py-1 rounded-lg shrink-0 transition-colors ${
                selectedClassificationFilter === c.id
                  ? 'bg-teal-600 text-white font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {c.name.replace(/^\d+\.\s*/, '')}
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================
          3. VIDEO CARDS GRID
         ============================================================ */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>
            Mostrando <strong className="text-slate-900 dark:text-white">{filteredVideos.length}</strong> de {EDUCATIONAL_VIDEOS.length} videos disponibles
          </span>
          {(searchQuery || selectedClassificationFilter !== 'all' || selectedDifficulty !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedClassificationFilter('all');
                setSelectedDifficulty('all');
              }}
              className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map(video => (
              <div
                key={video.id}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:border-teal-500/50"
              >
                {/* Thumbnail Container with Play Overlay */}
                <div
                  onClick={() => setActiveVideo(video)}
                  className="relative aspect-16/9 bg-slate-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-teal-600/90 group-hover:bg-teal-500 text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-all">
                      <Play className="w-5 h-5 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1 font-semibold">
                    <Clock className="w-3 h-3 text-teal-400" />
                    <span>{video.duration}</span>
                  </div>

                  {/* Difficulty Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {video.difficulty}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    
                    {/* Classification Tag */}
                    <button
                      onClick={() => setSelectedClassificationFilter(video.classificationId)}
                      className="text-[11px] font-bold text-teal-700 dark:text-teal-300 hover:underline uppercase tracking-wide block text-left"
                    >
                      {video.classificationName}
                    </button>

                    {/* Title */}
                    <h3
                      onClick={() => setActiveVideo(video)}
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug cursor-pointer group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
                    >
                      {video.title}
                    </h3>

                    {/* Channel */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-teal-600" />
                        {video.channelName}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>

                    {/* Topics covered */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {video.topics.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveVideo(video)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-200 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Reproducir Clase</span>
                    </button>

                    <button
                      onClick={() => handleOpenDrugsForClassification(video.classificationId)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                      title="Ver medicamentos registrados en esta clasificación"
                    >
                      <span>Medicamentos</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center space-y-3">
            <Video className="w-10 h-10 mx-auto text-slate-400" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No se encontraron videos con los filtros seleccionados
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Intente con otro término de búsqueda o seleccione otra clasificación farmacológica.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedClassificationFilter('all');
                setSelectedDifficulty('all');
              }}
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>

      {/* ============================================================
          4. INTERACTIVE VIDEO PLAYER MODAL
         ============================================================ */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
            
            {/* Modal Top Header */}
            <div className="px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/90">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                  Reproduciendo Clase Farmacológica
                </span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="text-xs text-slate-500 font-semibold">
                  {activeVideo.channelName}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  title="Abrir directamente en YouTube"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Abrir en YouTube</span>
                </a>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player (Responsive 16:9 Iframe) */}
            <div className="relative aspect-16/9 w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            </div>

            {/* Modal Body / Information */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 font-mono uppercase">
                    {activeVideo.classificationName}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <span className="text-xs text-slate-500">
                    Duración: {activeVideo.duration}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 font-semibold">
                    Nivel {activeVideo.difficulty}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  {activeVideo.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {activeVideo.description}
              </p>

              {/* Topics Grid */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider font-mono text-slate-800 dark:text-slate-200 block">
                  Temas y Conceptos Abordados en la Clase:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeVideo.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Drugs in PharmaPedia */}
              {activeVideo.recommendedKeyDrugs && activeVideo.recommendedKeyDrugs.length > 0 && (
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      Fármacos representativos en PharmaPedia:
                    </span>
                    {activeVideo.recommendedKeyDrugs.map((drug, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        {drug}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenDrugsForClassification(activeVideo.classificationId)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-xl transition-colors shadow-xs"
                  >
                    <span>Ver Medicamentos de este grupo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
