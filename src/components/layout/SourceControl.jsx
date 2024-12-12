import { IconBrandGithub } from '@tabler/icons-react';
import { githubInfo } from '../../constants/info';

function SourceControl() {
  const handleConnectGithub = () => {
    window.open(githubInfo.authUrl, '_blank');
  };

  return (
    <div className="w-full h-full bg-[#252526] p-4">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <IconBrandGithub size={48} />
        <h2 className="text-lg font-semibold">Source Control</h2>
        <p className="text-sm text-[#858585]">
          Connect to your GitHub account to showcase your projects and contributions.
        </p>
        <button
          onClick={handleConnectGithub}
          className="px-4 py-2 bg-[#2ea043] text-white rounded hover:bg-[#2c974b] transition-colors"
        >
          Connect to GitHub
        </button>
      </div>
    </div>
  );
}

export default SourceControl;