import { useRef, useState, useEffect } from 'react';
import { Square, Circle, Pencil, Eraser, Pipette, PaintBucket, Type } from 'lucide-react';

export default function PaintApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [tool, setTool] = useState<'pencil' | 'eraser' | 'fill'>('pencil');

  const colors = [
    '#000000', '#808080', '#800000', '#FF0000', '#808000', '#FFFF00', '#008000', '#00FF00',
    '#008080', '#00FFFF', '#000080', '#0000FF', '#800080', '#FF00FF', '#FFFFFF', '#C0C0C0',
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
      }
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing && e.type !== 'mousedown') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === 'pencil') {
      ctx.strokeStyle = currentColor;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else if (tool === 'eraser') {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x - 5, y - 5, 10, 10);
    }
  };

  return (
    <div className="bg-gray-400 w-[600px]">
      {/* Menu Bar */}
      <div className="bg-gray-400 border-b border-gray-600 px-2 py-1 flex gap-4 text-xs font-mono">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Options</span>
        <span>Help</span>
      </div>

      {/* Toolbar */}
      <div className="flex gap-2 p-2 border-b border-gray-600">
        <div className="flex flex-col gap-1 border-r border-gray-600 pr-2">
          <button
            onClick={() => setTool('pencil')}
            className={`p-1 border ${tool === 'pencil' ? 'bg-white' : 'bg-gray-400'} border-gray-600 hover:bg-gray-300`}
            title="Pencil"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => setTool('eraser')}
            className={`p-1 border ${tool === 'eraser' ? 'bg-white' : 'bg-gray-400'} border-gray-600 hover:bg-gray-300`}
            title="Eraser"
          >
            <Eraser size={16} />
          </button>
          <button className="p-1 border bg-gray-400 border-gray-600 hover:bg-gray-300" title="Fill">
            <PaintBucket size={16} />
          </button>
          <button className="p-1 border bg-gray-400 border-gray-600 hover:bg-gray-300" title="Pick Color">
            <Pipette size={16} />
          </button>
          <button className="p-1 border bg-gray-400 border-gray-600 hover:bg-gray-300" title="Text">
            <Type size={16} />
          </button>
          <button className="p-1 border bg-gray-400 border-gray-600 hover:bg-gray-300" title="Rectangle">
            <Square size={16} />
          </button>
          <button className="p-1 border bg-gray-400 border-gray-600 hover:bg-gray-300" title="Circle">
            <Circle size={16} />
          </button>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-white border-2 border-gray-600 overflow-auto">
          <canvas
            ref={canvasRef}
            width={560}
            height={400}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={draw}
            onMouseLeave={stopDrawing}
            className="cursor-crosshair"
          />
        </div>
      </div>

      {/* Color Palette */}
      <div className="p-2 flex gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 border-2 border-gray-600" style={{ backgroundColor: currentColor }} />
            <div className="w-8 h-8 border-2 border-gray-600 bg-white" />
          </div>
        </div>
        <div className="grid grid-cols-8 gap-0.5">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setCurrentColor(color)}
              className="w-5 h-5 border border-gray-600 hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-400 border-t border-gray-600 px-2 py-1 text-xs font-mono">
        For Help, click Help menu
      </div>
    </div>
  );
}
