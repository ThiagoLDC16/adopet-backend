export interface Media {
  url: string
  name: string
  type: string
}

export interface TimelineEvent {
  type: 'created' | 'investigating' | 'resolved'
  title: string
  description: string
  date: string
}

export interface Report {
  id: string
  anonymous: boolean
  userName?: string
  createdAt: string
  location: string
  status: 'pending' | 'investigating' | 'resolved'
  description: string
  media?: Media[]
  timeline?: TimelineEvent[]
}