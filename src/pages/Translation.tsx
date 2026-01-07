import { useState } from 'react'
import './Translation.css'

function Translation() {
  const [sourceText, setSourceText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [sourceLang, setSourceLang] = useState('ko')
  const [targetLang, setTargetLang] = useState('en')
  const [isLoading, setIsLoading] = useState(false)

  const languages = [
    { code: 'ko', name: '한국어' },
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
    { code: 'zh', name: '中文' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ]

  const handleTranslate = async () => {
    if (!sourceText.trim()) return

    setIsLoading(true)
    // TODO: API 연동 부분
    // 현재는 데모 목적으로 딜레이만 추가
    setTimeout(() => {
      setTranslatedText(`[번역됨] ${sourceText}`)
      setIsLoading(false)
    }, 1000)
  }

  const swapLanguages = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
    setSourceText(translatedText)
    setTranslatedText(sourceText)
  }

  return (
    <div className="translation-container">
      <header className="translation-header">
        <h1>TransFlow</h1>
      </header>

      <div className="translation-main">
        <div className="language-selector">
          <select 
            value={sourceLang} 
            onChange={(e) => setSourceLang(e.target.value)}
            className="lang-select"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>

          <button 
            onClick={swapLanguages}
            className="swap-button"
            aria-label="언어 교환"
          >
            ⇄
          </button>

          <select 
            value={targetLang} 
            onChange={(e) => setTargetLang(e.target.value)}
            className="lang-select"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="translation-boxes">
          <div className="text-box">
            <textarea
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              placeholder="번역할 텍스트를 입력하세요..."
              className="text-input"
            />
            <div className="text-info">
              {sourceText.length} / 5000
            </div>
          </div>

          <div className="text-box">
            <div className="text-output">
              {isLoading ? (
                <div className="loading">번역 중...</div>
              ) : (
                translatedText || '번역 결과가 여기에 표시됩니다'
              )}
            </div>
          </div>
        </div>

        <button 
          onClick={handleTranslate}
          disabled={!sourceText.trim() || isLoading}
          className="translate-button"
        >
          {isLoading ? '번역 중...' : '번역하기'}
        </button>
      </div>
    </div>
  )
}

export default Translation

