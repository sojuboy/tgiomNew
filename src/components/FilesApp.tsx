import { FolderOpen, File, HardDrive } from 'lucide-react';
import { useState } from 'react';

interface FilesAppProps {
  sanctuaryActive?: boolean;
}

export default function FilesApp({ sanctuaryActive = false }: FilesAppProps) {
  const [currentPath, setCurrentPath] = useState<string[]>(['C:', 'System']);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFolderClick = (folderName: string) => {
    setCurrentPath([...currentPath, folderName]);
    setSelectedFile(null);
  };

  const handleBack = () => {
    if (currentPath.length > 2) {
      setCurrentPath(currentPath.slice(0, -1));
      setSelectedFile(null);
    }
  };

  const handleFileClick = (fileName: string) => {
    setSelectedFile(fileName);
  };

  const getCurrentContent = () => {
    const path = currentPath.join('/');

    // Normal file browser
    return {
      folders: ['Program Files', 'Windows', 'Users'],
      files: ['readme.txt', 'boot.sys', 'memories.log'],
      fileContent: null,
    };
  };

  const content = getCurrentContent();

  return (
    <div className="bg-gray-400 w-[600px] h-[500px] flex flex-col">
      {/* Menu Bar */}
      <div className="bg-gray-400 border-b border-gray-600 px-2 py-1 flex gap-4 text-xs font-mono">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Tools</span>
        <span>Help</span>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-400 border-b border-gray-600 p-1 flex gap-2 items-center">
        <button
          onClick={handleBack}
          disabled={currentPath.length <= 2}
          className="px-2 py-1 border border-gray-600 bg-gray-300 hover:bg-gray-200 text-xs font-mono disabled:opacity-50"
        >
          Back
        </button>
        <div className="flex-1 bg-white border border-gray-600 px-2 py-1 text-xs font-mono flex items-center gap-1">
          <HardDrive size={12} />
          {currentPath.slice(1).join('\\\\')}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-32 bg-gray-300 border-r border-gray-600 p-2">
          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center gap-1">
              <HardDrive size={14} />
              <span>C:</span>
            </div>
            <div className="flex items-center gap-1">
              <HardDrive size={14} />
              <span>D:</span>
            </div>
          </div>
        </div>

        {/* File List */}
        <div className="flex-1 overflow-auto">
          {!content.fileContent ? (
            <div className="p-2 space-y-1 bg-white">
              {content.folders.map((folder) => (
                <div
                  key={folder}
                  onClick={() => handleFolderClick(folder)}
                  className="flex items-center gap-2 px-2 py-1 cursor-pointer text-sm font-mono hover:bg-blue-600 hover:text-white"
                >
                  <FolderOpen size={16} className="text-yellow-600" />
                  <span>{folder}</span>
                </div>
              ))}
              {content.files.map((file) => (
                <div
                  key={file}
                  onClick={() => handleFileClick(file)}
                  className={`flex items-center gap-2 px-2 py-1 cursor-pointer text-sm font-mono hover:bg-blue-600 hover:text-white ${selectedFile === file ? 'bg-blue-600 text-white' : ''}`}
                >
                  <File size={16} />
                  <span>{file}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 bg-black h-full overflow-auto">
              <div dangerouslySetInnerHTML={{ __html: content.fileContent }} />
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-400 border-t border-gray-600 px-2 py-1 text-xs font-mono">
        {content.folders.length + content.files.length} objects
      </div>
    </div>
  );
}