import { useState } from 'react';
import './App.css';
import { StatCard } from './components/StatCard';
import type { VocabularyTerm } from './types/VocabularyTerm';
import { vocabularyData } from './mocks/vocabulary';
import { GlassCard } from './components/GlassCard';


function App() {
  const [terms, setTerms] = useState<VocabularyTerm[]>(vocabularyData);
  const [isFlipped, setIsFlipped] = useState(false);
  const totalTerms = vocabularyData.length;
  const masteredCount = terms.filter(t => t.isMastered).length;
  
  return (
    <main className='p-8 max-w-4xl mx-auto'>
      <header className='flex justify-between items-center mb-12'>
        <h1 className='text-3xl font-black text-white italic tracking-tighter'>
          Dev English <span className='text-indigo-500'>.</span>
        </h1>
        <div className='flex gap-4'>
          <StatCard label='Total' value={totalTerms} color='blue'/>
          <StatCard label='Mastered' value={masteredCount} color='green'/>
        </div>
      </header>
      <div>
        <GlassCard term={terms[3]} isFlipped={isFlipped} onFlip={function (): void {
          setIsFlipped(!isFlipped)
        } }/>

      </div>
    </main>
  )
}

export default App;
