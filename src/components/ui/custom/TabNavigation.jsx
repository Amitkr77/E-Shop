import { useRef, useEffect } from 'react';

export default function TabNavigation({ activeTab, onTabChange, tabs }) {
  const containerRef = useRef(null);

  // Simple swipe detection (you can enhance with better gesture library later)
  useEffect(() => {
    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (diff > 50) {
        // Swipe Left → Next Tab
        const currentIndex = tabs.findIndex(t => t.id === activeTab);
        if (currentIndex < tabs.length - 1) {
          onTabChange(tabs[currentIndex + 1].id);
        }
      } else if (diff < -50) {
        // Swipe Right → Previous Tab
        const currentIndex = tabs.findIndex(t => t.id === activeTab);
        if (currentIndex > 0) {
          onTabChange(tabs[currentIndex - 1].id);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [activeTab, onTabChange, tabs]);

  return (
    <div ref={containerRef} className="border-b border-zinc-100 mb-10 overflow-x-auto">
      <nav className="flex gap-8 pb-2 whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`pb-4 text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-zen-ink border-b-2 border-zen-ink'
                : 'text-zinc-400 hover:text-zinc-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}