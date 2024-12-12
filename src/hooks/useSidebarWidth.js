import { useState } from 'react';

export function useSidebarWidth(initialWidth = 300) {
  const [widths, setWidths] = useState({
    explorer: initialWidth,
    search: initialWidth,
    git: initialWidth,
    debug: initialWidth
  });

  const updateWidth = (view, newWidth) => {
    setWidths(prev => ({
      ...prev,
      [view]: newWidth
    }));
  };

  return [widths, updateWidth];
}