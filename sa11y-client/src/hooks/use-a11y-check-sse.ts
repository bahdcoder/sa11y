import { transmit } from "@/lib/transmit"
import { Subscription } from "@adonisjs/transmit-client"
import { useEffect, useRef } from "react"

export function useA11yCheckSse(
  a11yCheckId: string | undefined,
  onMessage?: <T>(message: T) => void
) {
  const subscriptionRef = useRef<Subscription | null>(null)

  useEffect(() => {
    if (!a11yCheckId || !onMessage) {
      return
    }

    if (subscriptionRef.current) {
      return
    }

    async function createSubscription() {
      const subscription = transmit.subscription(`a11y-checks/${a11yCheckId}`)

      await subscription.create()

      subscriptionRef.current = subscription

      if (onMessage) {
        subscription.onMessageOnce(onMessage)
      }
    }

    createSubscription()

    return () => {
      subscriptionRef.current?.delete()
    }
  }, [a11yCheckId, onMessage])
}
