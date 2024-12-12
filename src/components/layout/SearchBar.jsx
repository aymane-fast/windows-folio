import { useState } from 'react';
import { 
  IconSearch, 
  IconRegex, 
  IconLetterCase, 
  IconAbc,
  IconX,
  IconArrowUp,
  IconArrowDown,
  IconReplace
} from '@tabler/icons-react';

function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [showReplace, setShowReplace] = useState(false);
  const [options, setOptions] = useState({
    matchCase: false,
    matchWholeWord: false,
    useRegex: false
  });

  const [searchResults] = useState([
    { file: 'src/components/bio.jsx', line: 15, text: 'Full Stack Developer' },
    { file: 'src/components/resume.jsx', line: 8, text: 'Senior Frontend Developer' },
    { file: 'src/components/projects.jsx', line: 12, text: 'Developer' }
  ]);

  return (
    <div className="w-full h-full bg-[#252526] flex flex-col">
      {/* Search Header */}
      <div className="p-2 border-b border-[#3c3c3c]">
        <div className="flex items-center gap-2 mb-2">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-[#3c3c3c] text-[#cccccc] px-2 py-1 rounded border border-[#3c3c3c] focus:outline-none focus:border-[#007acc]"
          />
          <button
            className={`p-1 rounded hover:bg-[#3c3c3c] ${options.matchCase ? 'bg-[#3c3c3c]' : ''}`}
            title="Match Case"
            onClick={() => setOptions(o => ({ ...o, matchCase: !o.matchCase }))}
          >
            <IconLetterCase size={16} />
          </button>
          <button
            className={`p-1 rounded hover:bg-[#3c3c3c] ${options.matchWholeWord ? 'bg-[#3c3c3c]' : ''}`}
            title="Match Whole Word"
            onClick={() => setOptions(o => ({ ...o, matchWholeWord: !o.matchWholeWord }))}
          >
            <IconAbc size={16} />
          </button>
          <button
            className={`p-1 rounded hover:bg-[#3c3c3c] ${options.useRegex ? 'bg-[#3c3c3c]' : ''}`}
            title="Use Regular Expression"
            onClick={() => setOptions(o => ({ ...o, useRegex: !o.useRegex }))}
          >
            <IconRegex size={16} />
          </button>
          <button
            className="p-1 rounded hover:bg-[#3c3c3c]"
            title="Toggle Replace"
            onClick={() => setShowReplace(!showReplace)}
          >
            <IconReplace size={16} />
          </button>
        </div>

        {showReplace && (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
              placeholder="Replace"
              className="flex-1 bg-[#3c3c3c] text-[#cccccc] px-2 py-1 rounded border border-[#3c3c3c] focus:outline-none focus:border-[#007acc]"
            />
          </div>
        )}
      </div>

      {/* Search Results */}
      <div className="flex-1 overflow-auto">
        {searchResults.map((result, i) => (
          <div
            key={i}
            className="px-4 py-2 hover:bg-[#2a2d2e] cursor-pointer flex items-center"
          >
            <div className="flex-1">
              <div className="text-[#cccccc]">{result.file}</div>
              <div className="text-[#858585] text-sm">
                Line {result.line}: {result.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;