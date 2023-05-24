interface MetaProps {
  [key: string]: any
}

export type EventResponse = {
  type: string
  event: string
  data: Object
}

export type Callback = (response: EventResponse) => void

export interface GeneralProps
  extends Record<
    string,
    string | number | MetaProps | Callback | boolean | undefined
  > {
  publicKey: string
  amount: string | number
  meta?: MetaProps
  currency?: string
  onSuccess: Callback
  onError: Callback
  onClose: Callback
  userReference: string
}

export interface CheckoutProps extends Omit<GeneralProps, 'userReference'> {
  email: string
}

type NestedFuncs = {
  setup: () => void
  open: () => void
}

export interface ThepeerProps {
  DirectCharge: (config: GeneralProps) => NestedFuncs
  Send: (config: GeneralProps) => NestedFuncs
  Checkout: (config: CheckoutProps) => NestedFuncs
}
