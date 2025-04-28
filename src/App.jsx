import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const extensoesParaLinguagens = {
  js: 'javascript',
  py: 'python',
  cpp: 'cpp',
  java: 'java',
  html: 'html',
  css: 'css',
  ts: 'typescript',
  json: 'json',
  md: 'markdown',
};

function detectarLinguagem(nomeArquivo) {
  const ext = nomeArquivo.split('.').pop();
  return extensoesParaLinguagens[ext] || 'plaintext';
}

export default function App() {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Bem-vindo ao Cyber-Code');

  const criarNovoArquivo = () => {
    const nomeArquivo = prompt('Digite o nome do arquivo (ex: app.js)');
    if (nomeArquivo) {
      const linguagemDetectada = detectarLinguagem(nomeArquivo);
      setLanguage(linguagemDetectada);
      setCode(`// Novo arquivo: ${nomeArquivo}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white font-sans">
      <div className="container mx-auto p-4">
        <header className="flex items-center justify-between p-4 bg-slate-900 rounded-lg shadow-xl transform transition-all hover:scale-105 duration-300">
          <div className="flex items-center gap-2">
            <img
              src="https://i.postimg.cc/RVyT3PLJ/imagem-2025-04-25-145709504.png"
              alt="Cyber-Code"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-3xl font-bold">Cyber-Code</h1>
          </div>
          <button
            onClick={criarNovoArquivo}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transform transition-all hover:scale-105 duration-300"
          >
            Novo Arquivo
          </button>
        </header>

        <div className="my-4 rounded-lg overflow-hidden shadow-xl">
          <Editor
            height="80vh"
            theme="vs-dark"
            language={language}
            value={code}
            onChange={(value) => setCode(value)}
            options={{
              fontSize: 14,
              minimap: { enabled: true },
              fontFamily: 'Fira Code, monospace',
              automaticLayout: true,
            }}
          />
        </div>

        <footer className="text-center text-gray-300 p-3 text-sm mt-8">
          By: Ed_Dev
        </footer>
      </div>
    </div>
  );
}
