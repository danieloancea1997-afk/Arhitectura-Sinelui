declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

const isFbqAvailable = () => typeof window !== 'undefined' && typeof window.fbq === 'function'

export const trackPageView = () => {
  if (!isFbqAvailable()) {
    return
  }

  window.fbq?.('track', 'PageView')
}

export const trackViewContent = (contentName: string) => {
  if (!isFbqAvailable()) {
    return
  }

  window.fbq?.('track', 'ViewContent', {
    content_name: contentName,
    content_type: 'service',
  })
}

export const trackInitiateCheckout = (contentName: string) => {
  if (!isFbqAvailable()) {
    return
  }

  window.fbq?.('track', 'InitiateCheckout', {
    content_name: contentName,
    content_type: 'service',
  })
}

export const trackLead = (source: string) => {
  if (!isFbqAvailable()) {
    return
  }

  window.fbq?.('track', 'Lead', {
    content_name: source,
  })
}

type PurchasePayload = {
  value?: number
  packageName?: string
}

export const trackPurchase = ({ value, packageName }: PurchasePayload = {}) => {
  if (!isFbqAvailable()) {
    return
  }

  const payload: Record<string, string | number> = {
    currency: 'RON',
  }

  if (typeof value === 'number' && Number.isFinite(value)) {
    payload.value = value
  }

  if (packageName) {
    payload.content_name = packageName
    payload.content_type = 'service'
  }

  window.fbq?.('track', 'Purchase', payload)
}

export {}
