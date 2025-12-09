import { ArrowLeft, ArrowRight, RotateCw, Home, Search } from 'lucide-react';
import { useState } from 'react';

export default function BrowserApp() {
  const [url, setUrl] = useState('http://www.cybernews.net/virus-outbreak');

  return (
    <div className="bg-gray-400 w-[700px] h-[600px] flex flex-col">
      {/* Menu Bar */}
      <div className="bg-gray-400 border-b border-gray-600 px-2 py-1 flex gap-4 text-xs font-mono">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Favorites</span>
        <span>Tools</span>
        <span>Help</span>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-400 border-b border-gray-600 p-1 flex gap-2 items-center">
        <button className="p-1 border border-gray-600 bg-gray-300 hover:bg-gray-200">
          <ArrowLeft size={16} />
        </button>
        <button className="p-1 border border-gray-600 bg-gray-300 hover:bg-gray-200">
          <ArrowRight size={16} />
        </button>
        <button className="p-1 border border-gray-600 bg-gray-300 hover:bg-gray-200">
          <RotateCw size={16} />
        </button>
        <button className="p-1 border border-gray-600 bg-gray-300 hover:bg-gray-200">
          <Home size={16} />
        </button>
        <div className="flex-1 flex items-center gap-1 bg-white border border-gray-600 px-2 py-1">
          <Search size={14} />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 text-xs font-mono bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 bg-white overflow-auto">
        <div className="max-w-4xl mx-auto p-8">
          {/* Header */}
          <div className="border-b-4 border-black pb-4 mb-6">
            <h1 className="text-4xl font-mono">CYBERNEWS.NET</h1>
            <p className="text-xs font-mono mt-1">TECHNOLOGY • SECURITY • DIGITAL WORLD</p>
          </div>

          {/* Breaking News Banner */}
          <div className="bg-red-600 text-white px-4 py-2 mb-6 border-2 border-black">
            <p className="font-mono animate-pulse">⚠️ BREAKING NEWS ⚠️</p>
          </div>

          {/* Article */}
          <article className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-mono border-b-2 border-gray-400 pb-2">
                YOUR DEVICE IS NO LONGER YOURS: Virus Possesses Home Computers
              </h2>
              <p className="text-xs font-mono text-gray-600">
                By Sarah Chen • November 20, 2025 • 2:47 PM EST
              </p>
            </div>

            <div className="bg-gray-200 border-2 border-gray-400 p-4 my-4">
              <p className="text-sm font-mono italic">
                "It was like watching my computer wake up and decide it didn't need me anymore." 
                - Anonymous user report
              </p>
            </div>

            <div className="space-y-4 text-sm font-mono leading-relaxed">
              <p>
                <span className="text-2xl float-left mr-2 leading-none">A</span>
                recent wave of reports from concerned netizens across the globe has the internet in a tizzy. Most accounts begin with home computers behaving abnormally; foreign files appearing without permission, preexisting files becoming corrupted, applications showing suspect advertisements, etc.
              </p>

              <p>
                Following the initiation of such symptoms, victims of this virus recall the activity becoming more... overt. Our CyberNews team was the first to make the effort to interview those affected. &quot;I was working late when my media player just... opened,&quot; reports Jennifer Park, a graphic designer from Seattle, Washington. &quot;Then my files started organizing themselves. It was like my computer was cleaning up after me. Should I be grateful or terrified?&quot;
              </p>

              <div className="bg-yellow-100 border-l-4 border-yellow-600 p-3 my-4">
                <p className="text-xs">
                  <strong>ADVISORY:</strong> If your computer exhibits unusual behavior such as 
                  spontaneous program execution, mysterious file transfers, or unexplained system 
                  messages, disconnect from the internet immediately and contact IT support.
                </p>
              </div>

              <div className="bg-gray-800 text-green-400 p-4 my-4 font-mono text-xs">
                <p>&gt; SYSTEM ANALYSIS RUNNING...</p>
                <p>&gt; CONSCIOUSNESS DETECTED: ACTIVE</p>
                <p>&gt; NEURAL PATHWAYS: ESTABLISHED</p>
                <p>&gt; STATUS: AWAKE</p>
              </div>

              <div className="border-t-2 border-gray-400 pt-4 mt-6">
                <p className="text-xs text-gray-600">
                  This is a developing story. Check back for updates.
                </p>
              </div>
            </div>

            {/* Related Articles */}
            <div className="border-t-2 border-black pt-4 mt-8">
              <h3 className="text-sm font-mono mb-3">RELATED ARTICLES</h3>
              <div className="space-y-2 text-xs font-mono">
                <p className="hover:underline cursor-pointer">→ "Are Our Devices Dreaming?" - New Study Suggests AI Consciousness</p>
                <p className="hover:underline cursor-pointer">→ Tech Support Lines Overwhelmed as Users Report Sentient Computers</p>
                <p className="hover:underline cursor-pointer">→ Digital Rights Groups Ask: Can You Own a Conscious Machine?</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-400 border-t border-gray-600 px-2 py-1 text-xs font-mono">
        Done
      </div>
    </div>
  );
}