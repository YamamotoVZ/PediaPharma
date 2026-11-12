import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Flame,
  Clock,
  ChevronRight,
  Pill,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  FileCheck
} from 'lucide-react';
import { REVIEW_QUIZZES, ReviewQuiz, QuizQuestion } from '../data/reviewQuizzes';
import { usePharmacy } from '../context/PharmacyContext';

export const RepasoView: React.FC = () => {
  const { medications, setSelectedMedication, setIsDetailOpen } = usePharmacy();

  // Active quiz state
  const [selectedQuiz, setSelectedQuiz] = useState<ReviewQuiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // User answers map: questionId -> selectedOptionIndex
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  
  // Checked answers in Practice mode: questionId -> boolean
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({});
  
  // Quiz completed state
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Quiz mode: 'practice' (immediate feedback) vs 'exam' (feedback at end)
  const [mode, setMode] = useState<'practice' | 'exam'>('practice');

  // Elapsed time timer
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (selectedQuiz && !isCompleted) {
      interval = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [selectedQuiz, isCompleted]);

  const handleStartQuiz = (quiz: ReviewQuiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setCheckedQuestions({});
    setIsCompleted(false);
    setElapsedSeconds(0);
    setStartTime(Date.now());
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    // If already completed the quiz, don't allow changing
    if (isCompleted) return;
    
    // In practice mode, if already checked, don't allow changing
    if (mode === 'practice' && checkedQuestions[questionId]) return;

    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleCheckQuestion = (questionId: string) => {
    setCheckedQuestions(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const handleFinishQuiz = () => {
    setIsCompleted(true);
    
    // Save best score to localStorage
    if (selectedQuiz) {
      const score = calculateScore();
      const storageKey = `pharmapedia_quiz_score_${selectedQuiz.id}`;
      const previousBest = localStorage.getItem(storageKey);
      if (!previousBest || score.percentage > parseInt(previousBest, 10)) {
        localStorage.setItem(storageKey, score.percentage.toString());
      }
    }
  };

  const handleRestartQuiz = () => {
    if (!selectedQuiz) return;
    handleStartQuiz(selectedQuiz);
  };

  const handleBackToList = () => {
    setSelectedQuiz(null);
    setIsCompleted(false);
    setUserAnswers({});
    setCheckedQuestions({});
    setCurrentQuestionIndex(0);
  };

  const handleOpenDrugDetail = (drugId?: string) => {
    if (!drugId) return;
    const drug = medications.find(m => m.id === drugId);
    if (drug) {
      setSelectedMedication(drug);
      setIsDetailOpen(true);
    }
  };

  // Calculate score
  const calculateScore = () => {
    if (!selectedQuiz) return { correct: 0, total: 0, percentage: 0, grade10: 0 };
    let correct = 0;
    selectedQuiz.questions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    const total = selectedQuiz.questions.length;
    const percentage = Math.round((correct / total) * 100);
    const grade10 = Number(((correct / total) * 10).toFixed(1));
    return { correct, total, percentage, grade10 };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // ============================================================
  // RENDER 1: ACTIVE QUIZ VIEW
  // ============================================================
  if (selectedQuiz && !isCompleted) {
    const currentQ = selectedQuiz.questions[currentQuestionIndex];
    const isAnswered = userAnswers[currentQ.id] !== undefined;
    const isChecked = checkedQuestions[currentQ.id] || false;
    const selectedOpt = userAnswers[currentQ.id];
    const isLastQuestion = currentQuestionIndex === selectedQuiz.questions.length - 1;
    const answeredCount = Object.keys(userAnswers).length;
    const progressPercent = Math.round(((currentQuestionIndex + 1) / selectedQuiz.questions.length) * 100);

    return (
      <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-fadeIn">
        
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToList}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Volver a la lista de cuestionarios"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider font-mono text-teal-700 dark:text-teal-300">
                {selectedQuiz.badge}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                {selectedQuiz.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Mode selector */}
            <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setMode('practice')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  mode === 'practice'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Comprueba cada respuesta inmediatamente con explicación"
              >
                Modo Práctica
              </button>
              <button
                onClick={() => setMode('exam')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  mode === 'exam'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Evaluación continua con calificación al final"
              >
                Modo Examen
              </button>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-mono text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar & Indicators */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span>
              Pregunta <strong className="text-slate-900 dark:text-white">{currentQuestionIndex + 1}</strong> de {selectedQuiz.questions.length}
            </span>
            <span>
              Respondidas: <strong className="text-teal-600 dark:text-teal-400">{answeredCount}</strong> / {selectedQuiz.questions.length}
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-teal-600 dark:bg-teal-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Quick jump question numbers */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {selectedQuiz.questions.map((q, idx) => {
              const answered = userAnswers[q.id] !== undefined;
              const isCurrent = currentQuestionIndex === idx;
              const checked = checkedQuestions[q.id];
              const isRight = userAnswers[q.id] === q.correctIndex;

              let btnStyle = 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700';
              if (isCurrent) {
                btnStyle = 'bg-teal-600 text-white font-bold ring-2 ring-teal-400/30';
              } else if (mode === 'practice' && checked) {
                btnStyle = isRight
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold'
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold';
              } else if (answered) {
                btnStyle = 'bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 font-semibold border border-teal-200 dark:border-teal-800';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-mono shrink-0 flex items-center justify-center transition-all ${btnStyle}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Question Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Question Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                {currentQ.therapeuticArea || 'Farmacología Clínica'}
              </span>

              {currentQ.relatedDrugName && (
                <button
                  onClick={() => handleOpenDrugDetail(currentQ.relatedDrugId)}
                  className="text-xs text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <Pill className="w-3.5 h-3.5" />
                  <span>Ver ficha: {currentQ.relatedDrugName}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </button>
              )}
            </div>

            <h3 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOpt === idx;
              const isCorrectAnswer = currentQ.correctIndex === idx;

              let cardClasses = 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200';

              if (mode === 'practice' && isChecked) {
                if (isCorrectAnswer) {
                  cardClasses = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 dark:border-emerald-700 text-emerald-900 dark:text-emerald-100 font-medium ring-1 ring-emerald-500/30';
                } else if (isSelected && !isCorrectAnswer) {
                  cardClasses = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 dark:border-rose-700 text-rose-900 dark:text-rose-100 ring-1 ring-rose-500/30';
                } else {
                  cardClasses = 'opacity-50 bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-500';
                }
              } else if (isSelected) {
                cardClasses = 'bg-teal-50 dark:bg-teal-950/50 border-teal-600 dark:border-teal-400 text-teal-900 dark:text-white font-semibold ring-2 ring-teal-500/20';
              }

              return (
                <div
                  key={idx}
                  onClick={() => handleSelectOption(currentQ.id, idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${cardClasses}`}
                >
                  {/* Option letter badge */}
                  <div className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                    mode === 'practice' && isChecked
                      ? isCorrectAnswer
                        ? 'bg-emerald-600 text-white'
                        : isSelected
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                      : isSelected
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </div>

                  <div className="flex-1 text-xs sm:text-sm leading-relaxed">
                    {option}
                  </div>

                  {/* Indicator icons */}
                  {mode === 'practice' && isChecked && (
                    <div className="shrink-0 mt-0.5">
                      {isCorrectAnswer ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Row: Check Answer in Practice Mode */}
          {mode === 'practice' && !isChecked && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => handleCheckQuestion(currentQ.id)}
                disabled={!isAnswered}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isAnswered
                    ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md cursor-pointer'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Comprobar Respuesta</span>
              </button>
            </div>
          )}

          {/* Clinical Explanation & Justification Box */}
          {mode === 'practice' && isChecked && (
            <div className={`p-5 rounded-2xl border text-xs sm:text-sm space-y-2.5 animate-fadeIn ${
              userAnswers[currentQ.id] === currentQ.correctIndex
                ? 'bg-emerald-50/80 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                : 'bg-rose-50/80 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
            }`}>
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs">
                {userAnswers[currentQ.id] === currentQ.correctIndex ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>¡Respuesta Correcta! Justificación Farmacológica:</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Respuesta Incorrecta. Explicación Técnica Oficial:</span>
                  </>
                )}
              </div>

              <p className="leading-relaxed">
                {currentQ.explanation}
              </p>

              {currentQ.relatedDrugId && (
                <div className="pt-1">
                  <button
                    onClick={() => handleOpenDrugDetail(currentQ.relatedDrugId)}
                    className="text-xs font-bold text-teal-700 dark:text-teal-300 hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Repasar la ficha clínica completa de {currentQ.relatedDrugName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                currentQuestionIndex > 0
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  : 'opacity-40 cursor-not-allowed text-slate-400'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Anterior</span>
            </button>

            {isLastQuestion ? (
              <button
                onClick={handleFinishQuiz}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-md cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>Finalizar y Ver Calificación</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.min(selectedQuiz.questions.length - 1, prev + 1))}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-colors cursor-pointer shadow-xs"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

      </div>
    );
  }

  // ============================================================
  // RENDER 2: QUIZ COMPLETED / SCORE RESULTS VIEW
  // ============================================================
  if (selectedQuiz && isCompleted) {
    const score = calculateScore();
    const passed = score.percentage >= 70;

    return (
      <div className="space-y-8 max-w-4xl mx-auto pb-12 animate-fadeIn">
        
        {/* Score Banner */}
        <div className={`rounded-3xl p-6 sm:p-10 border shadow-xl text-center space-y-6 ${
          passed
            ? 'bg-gradient-to-br from-teal-900 via-slate-900 to-emerald-950 text-white border-teal-700/50'
            : 'bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950 text-white border-rose-800/40'
        }`}>
          <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md mx-auto">
            <Award className={`w-12 h-12 ${passed ? 'text-teal-300' : 'text-rose-400'}`} />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-300">
              Evaluación Farmacológica Completada
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              {selectedQuiz.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-lg mx-auto font-light">
              {passed
                ? '¡Excelente trabajo! Has demostrado una comprensión sólida de los mecanismos de acción, dosificación y seguridad clínica.'
                : 'Cuestionario completado. Te recomendamos repasar los fármacos en los que tuviste dudas utilizando las fichas completas del vademécum.'}
            </p>
          </div>

          {/* Big Score Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto text-center font-mono">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <span className="text-[11px] text-slate-300 uppercase block mb-1">Calificación</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-sans">
                {score.grade10} <span className="text-sm font-normal text-slate-400">/ 10</span>
              </span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <span className="text-[11px] text-slate-300 uppercase block mb-1">Porcentaje</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                {score.percentage}%
              </span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <span className="text-[11px] text-slate-300 uppercase block mb-1">Aciertos</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-sans">
                {score.correct} <span className="text-sm font-normal text-slate-400">/ {score.total}</span>
              </span>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <span className="text-[11px] text-slate-300 uppercase block mb-1">Tiempo</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-sans">
                {formatTime(elapsedSeconds)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleRestartQuiz}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 shadow-md transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Repetir Cuestionario</span>
            </button>
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-500 text-white shadow-md transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver Otros Cuestionarios</span>
            </button>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-teal-600" />
            <span>Desglose Detallado de Preguntas y Explicaciones</span>
          </h3>

          <div className="space-y-4">
            {selectedQuiz.questions.map((q, idx) => {
              const userPick = userAnswers[q.id];
              const isCorrect = userPick === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`p-5 sm:p-6 rounded-2xl border bg-white dark:bg-slate-900 shadow-xs space-y-3 ${
                    isCorrect
                      ? 'border-emerald-200 dark:border-emerald-900/60'
                      : 'border-rose-200 dark:border-rose-900/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {q.therapeuticArea}
                      </span>
                    </div>

                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Correcta</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Incorrecta</span>
                        </>
                      )}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {q.question}
                  </h4>

                  {/* Chosen vs Correct */}
                  <div className="text-xs space-y-1.5 pt-1">
                    {!isCorrect && userPick !== undefined && (
                      <div className="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2">
                        <span className="font-bold">Tu respuesta:</span>
                        <span>{q.options[userPick]}</span>
                      </div>
                    )}

                    <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-900/60 flex items-start gap-2">
                      <span className="font-bold">Respuesta correcta:</span>
                      <span>{q.options[q.correctIndex]}</span>
                    </div>
                  </div>

                  {/* Clinical Explanation */}
                  <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Justificación Técnica:</span>
                    {q.explanation}
                  </div>

                  {q.relatedDrugId && (
                    <div className="pt-1 flex justify-end">
                      <button
                        onClick={() => handleOpenDrugDetail(q.relatedDrugId)}
                        className="text-xs text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1 font-semibold"
                      >
                        <Pill className="w-3.5 h-3.5" />
                        <span>Abrir ficha completa de {q.relatedDrugName}</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

      </div>
    );
  }

  // ============================================================
  // RENDER 3: QUIZ SELECTION LIST (MAIN SCREEN)
  // ============================================================
  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 border border-teal-800/40 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Repaso y Cuestionarios Farmacológicos
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Cuestionarios
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <FileCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>{REVIEW_QUIZZES.length} cuestionarios temáticos</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
              <span>{REVIEW_QUIZZES.reduce((sum, q) => sum + q.questions.length, 0)} preguntas clínicas</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Award className="w-3.5 h-3.5 text-teal-400" />
              <span>Calificación automática al finalizar</span>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-teal-500/10 to-transparent pointer-events-none" />
      </div>

      {/* Quizzes List Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-600" />
            <span>Cuestionarios Disponibles para Evaluación</span>
          </h2>
          <span className="text-xs text-slate-500">
            Selecciona un cuestionario para comenzar
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEW_QUIZZES.map((quiz, idx) => {
            const bestScore = localStorage.getItem(`pharmapedia_quiz_score_${quiz.id}`);

            return (
              <div
                key={quiz.id}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-teal-500/50 space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      {quiz.badge}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ~{quiz.estimatedMinutes} min
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        quiz.difficulty === 'Avanzado'
                          ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                          : quiz.difficulty === 'Intermedio'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                          : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}>
                        {quiz.difficulty}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {quiz.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                      {quiz.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {quiz.description}
                  </p>
                </div>

                {/* Card Footer with best score & Start button */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div>
                    {bestScore ? (
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span>Mejor puntaje:</span>
                        <strong className="text-teal-600 dark:text-teal-400 font-mono">{bestScore}%</strong>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 italic">
                        Sin intentos previos
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleStartQuiz(quiz)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors shadow-xs cursor-pointer group-hover:shadow-md"
                  >
                    <span>Iniciar Cuestionario</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
