'use client'

import { useState } from 'react'

function JSONFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError('')
    } catch (e: any) {
      setError(e.message || 'Invalid JSON')
      setOutput('')
    }
  }

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError('')
    } catch (e: any) {
      setError(e.message || 'Invalid JSON')
      setOutput('')
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">JSON Formatter</h2>
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Input JSON
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"name": "example", "value": 123}'
            className="w-full rounded-lg border border-gray-300 bg-white p-3 font-mono text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            rows={6}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={formatJSON}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Format
          </button>
          <button
            onClick={minifyJSON}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Minify
          </button>
        </div>
        {error && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">{error}</div>}
        {output && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Output</label>
              <button
                onClick={copyToClipboard}
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                Copy
              </button>
            </div>
            <textarea
              value={output}
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 font-mono text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              rows={6}
            />
          </div>
        )}
      </div>
    </div>
  )
}

function Base64Encoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [error, setError] = useState('')

  const isValidBase64 = (str: string): boolean => {
    try {
      const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/
      return base64Regex.test(str.trim())
    } catch {
      return false
    }
  }

  const handleInputChange = (value: string) => {
    setInput(value)
    setError('')
    setOutput('')
    
    // Auto-detect if it's Base64 and switch to decode mode
    if (value.trim() && isValidBase64(value.trim())) {
      // Check if it looks like Base64 (has padding or typical Base64 characters)
      if (value.includes('=') || /^[A-Za-z0-9+/]+=*$/.test(value.trim())) {
        setMode('decode')
      }
    }
  }

  const handleConvert = () => {
    setError('')
    setOutput('')
    
    try {
      if (mode === 'encode') {
        if (!input.trim()) {
          setError('Please enter text to encode')
          return
        }
        setOutput(btoa(unescape(encodeURIComponent(input))))
      } else {
        if (!input.trim()) {
          setError('Please enter Base64 string to decode')
          return
        }
        // Clean the input (remove whitespace)
        const cleanedInput = input.trim().replace(/\s/g, '')
        
        if (!isValidBase64(cleanedInput)) {
          setError('Invalid Base64 string')
          return
        }
        
        try {
          const decoded = atob(cleanedInput)
          // Try to decode as UTF-8
          setOutput(decodeURIComponent(escape(decoded)))
        } catch (e: any) {
          setError('Failed to decode. The Base64 string may be invalid or corrupted.')
        }
      }
    } catch (e: any) {
      setError('Error: ' + (e.message || 'Invalid input'))
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Base64 Encoder/Decoder</h2>
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setMode('encode')}
            className={`rounded-lg px-4 py-2 transition-colors ${
              mode === 'encode'
                ? 'bg-blue-600 text-white'
                : 'border border-gray-300 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            Encode
          </button>
          <button
            onClick={() => setMode('decode')}
            className={`rounded-lg px-4 py-2 transition-colors ${
              mode === 'decode'
                ? 'bg-blue-600 text-white'
                : 'border border-gray-300 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            Decode
          </button>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
          </label>
          <textarea
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={mode === 'encode' ? 'Enter text...' : 'Enter base64 string (e.g., 8gfpB+U2Hwf5MFIAoHdnwg==)...'}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 font-mono text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            rows={4}
          />
        </div>
        <button
          onClick={handleConvert}
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          {mode === 'encode' ? 'Encode' : 'Decode'}
        </button>
        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}
        {output && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Result</label>
              <button
                onClick={copyToClipboard}
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                Copy
              </button>
            </div>
            <textarea
              value={output}
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 font-mono text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              rows={4}
            />
          </div>
        )}
      </div>
    </div>
  )
}

function UUIDGenerator() {
  const [uuids, setUuids] = useState<string[]>([])
  const [count, setCount] = useState(1)

  const generateUUID = () => {
    const newUuids: string[] = []
    for (let i = 0; i < count; i++) {
      newUuids.push(crypto.randomUUID())
    }
    setUuids(newUuids)
  }

  const copyToClipboard = (uuid: string) => {
    navigator.clipboard.writeText(uuid)
  }

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join('\n'))
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">UUID Generator</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Count:</label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
            className="w-20 rounded-lg border border-gray-300 bg-white p-2 text-center dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={generateUUID}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Generate
          </button>
        </div>
        {uuids.length > 0 && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">UUIDs</label>
              {uuids.length > 1 && (
                <button
                  onClick={copyAll}
                  className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                >
                  Copy All
                </button>
              )}
            </div>
            <div className="space-y-2">
              {uuids.map((uuid, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800"
                >
                  <code className="text-sm text-gray-900 dark:text-white">{uuid}</code>
                  <button
                    onClick={() => copyToClipboard(uuid)}
                    className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Developer Tools</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Free online tools to help with your development workflow
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <JSONFormatter />
        <Base64Encoder />
        <UUIDGenerator />
      </div>
    </div>
  )
}
