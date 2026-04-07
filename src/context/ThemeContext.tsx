import React, { createContext, useContext, useEffect, useState } from 'react';

export type Mood = 'electric' | 'midnight' | 'romantic' | 'sky';

interface ThemeContextType {
  mood: Mood;
  setMood: (mood: Mood) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const moods: Record<Mood, Record<string, string>> = {
  electric: {
    '--bg-primary': '#121212',
    '--bg-secondary': '#1C1C1C',
    '--text-primary': '#FFFFFF',
    '--text-secondary': 'rgba(255, 255, 255, 0.6)',
    '--text-muted': 'rgba(255, 255, 255, 0.2)',
    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': 'rgba(255, 255, 255, 0.2)',
    '--color-brand-electric': '#00E5FF',
  },
  midnight: {
    '--bg-primary': '#05050A',
    '--bg-secondary': '#0A0A15',
    '--text-primary': '#F5F5F5',
    '--text-secondary': 'rgba(245, 245, 245, 0.7)',
    '--text-muted': 'rgba(245, 245, 245, 0.2)',
    '--glass-bg': 'rgba(255, 255, 255, 0.12)',
    '--glass-border': 'rgba(255, 255, 255, 0.15)',
    '--color-brand-electric': '#D4AF37', // Gold accent
  },
  romantic: {
    '--bg-primary': '#F5F2ED',
    '--bg-secondary': '#FFFFFF',
    '--text-primary': '#1A1A1A',
    '--text-secondary': 'rgba(26, 26, 26, 0.7)',
    '--text-muted': 'rgba(26, 26, 26, 0.1)',
    '--glass-bg': 'rgba(0, 0, 0, 0.08)',
    '--glass-border': 'rgba(0, 0, 0, 0.12)',
    '--color-brand-electric': '#E91E63', // Pink/Romantic accent
  },
  sky: {
    '--bg-primary': '#F0F4F8',
    '--bg-secondary': '#FFFFFF',
    '--text-primary': '#243B53',
    '--text-secondary': 'rgba(36, 59, 83, 0.7)',
    '--text-muted': 'rgba(36, 59, 83, 0.1)',
    '--glass-bg': 'rgba(36, 59, 83, 0.1)',
    '--glass-border': 'rgba(36, 59, 83, 0.15)',
    '--color-brand-electric': '#2B6CB0', // Blue accent
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mood, setMoodState] = useState<Mood>(() => {
    const saved = localStorage.getItem('app-mood');
    if (saved && (['electric', 'midnight', 'romantic', 'sky'] as string[]).includes(saved)) {
      return saved as Mood;
    }
    return 'electric';
  });

  const setMood = (newMood: Mood) => {
    setMoodState(newMood);
    localStorage.setItem('app-mood', newMood);
  };

  useEffect(() => {
    const root = document.documentElement;
    const colors = moods[mood] as Record<string, string>;
    
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value as string);
    });

    // Handle dark/light mode class for tailwind if needed
    if (mood === 'romantic' || mood === 'sky') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [mood]);

  return (
    <ThemeContext.Provider value={{ mood, setMood }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
