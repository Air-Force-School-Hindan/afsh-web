import React from 'react';
import { useFormStatus } from 'react-dom';
import { Send } from 'lucide-react';

interface SubmitButtonProps {
  label: string;
}

export function SubmitButton({ label }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full px-8 py-3 bg-af-blue hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-500 ease-out transform flex items-center justify-center gap-2 shadow-lg ${
        pending ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
      }`}
    >
      <Send size={18} className={pending ? 'animate-pulse' : ''} />
      {pending ? 'Sending...' : label}
    </button>
  );
}
