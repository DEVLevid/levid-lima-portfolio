import { ArrowBendUpRight } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

export default function Collapsible({ title, children }: CollapsibleProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = open ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [open]);

  return (
    <div className="w-4/5">
      <div
        onClick={toggle}
        className="flex items-center bg-gray-300 text-gray-950 h-auto p-4 rounded-xl cursor-pointer"
      >
        <h1 className="bg-transparent text-2xl font-mono ml-4">{title}</h1>
        <div className={`ml-auto transition-transform duration-500 ${open ? 'rotate-90' : 'rotate-0'}`}>
          {<ArrowBendUpRight size={20} />}
        </div>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
        style={{ maxHeight: '0px' }}
      >
        <div className="p-4 mt-4 bg-gray-300 rounded h-fit text-gray-950 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
