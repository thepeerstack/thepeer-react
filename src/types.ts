export type GeneralProps = {
  publicKey: string
  amount: string | number
  meta?: {
    [key: string]: any
  }
  currency: string
  onSuccess: Function
  onError: Function
  onClose: Function
}

export type SendProps = {
  userReference: string
}
