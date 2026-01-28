export type theme = 'light' | 'dark' | 'system'

export type language = 'en' | 'es'

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: "admin" | "user"
}

