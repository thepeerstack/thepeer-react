type EventResponse = {
  type: string
  data: undefined | Object
}
export interface GeneralProps {
  publicKey: string
  amount: string | number
  meta?: {
    [key: string]: any
  }
  currency: string
  onSuccess: (response: EventResponse) => void
  onError: (response: EventResponse) => void
  onClose: (response: EventResponse) => void
}

export interface SendProps {
  userReference: string
}
