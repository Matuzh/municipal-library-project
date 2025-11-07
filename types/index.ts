export interface News {
  id: string
  title: string
  description: string
  date: string
  category: 'urgent' | 'new' | 'program' | 'event'
  icon: string
  link: string
}

export interface Event {
  id: string
  title: string
  date: string
  description: string
  location?: string
  category: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  link: string
  available: boolean
}

export interface OpeningHours {
  day: string
  hours: string
  isOpen: boolean
}

export interface Statistics {
  books: number
  readers: number
  events: number
  ebooks: number
}

export interface ContactInfo {
  phone: string
  email: string
  address: {
    street: string
    city: string
    postalCode: string
    region: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface LibraryMetadata {
  name: string
  shortName: string
  description: string
  founded?: string
  patron?: string
}
