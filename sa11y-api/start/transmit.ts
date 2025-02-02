import type { HttpContext } from '@adonisjs/core/http'
import transmit from '@adonisjs/transmit/services/main'

transmit.authorize<{ a11yCheckId: string }>(
  'a11y-checks/:id',
  (_ctx: HttpContext, { a11yCheckId }) => {
    // TODO: Implement authorization to enture user has permission to listen to the status of this a11y check
    console.log({ a11yCheckId })
    return true
  }
)
