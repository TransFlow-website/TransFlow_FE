import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 300000, // 5분 (418개 텍스트 노드 번역 시간 고려)
})

export interface TranslationRequest {
  url: string
  targetLang: string
  sourceLang?: string
}

export interface TranslationResponse {
  originalUrl: string
  // 텍스트 번역 결과 (하위 호환성)
  originalText?: string
  translatedText?: string
  // HTML 번역 결과 (새 필드)
  originalHtml?: string
  translatedHtml?: string
  css?: string
  sourceLang?: string
  targetLang?: string
  success: boolean
  errorMessage?: string
}

export interface HtmlTranslationRequest {
  html: string
  targetLang: string
  sourceLang?: string
}

export const translationApi = {
  // 웹페이지 번역
  translateWebPage: async (request: TranslationRequest): Promise<TranslationResponse> => {
    const response = await apiClient.post<TranslationResponse>('/translate/webpage', request)
    return response.data
  },

  // HTML 문자열 직접 번역
  translateHtml: async (request: HtmlTranslationRequest): Promise<TranslationResponse> => {
    const response = await apiClient.post<TranslationResponse>('/translate/html', request)
    return response.data
  },

  // 헬스체크
  healthCheck: async (): Promise<string> => {
    const response = await apiClient.get<string>('/translate/health')
    return response.data
  },
}

export default apiClient

