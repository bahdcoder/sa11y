/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import transmit from '@adonisjs/transmit/services/main'

const A11yController = () => import('#controllers/v1/a11y_controller')

router
  .group(() => {
    router
      .group(() => {
        router.get('/', [A11yController, 'index']).as('a11y-checks.index')
        router.post('/', [A11yController, 'store']).as('a11y-checks.store')
        router
          .get('/:id', [A11yController, 'show'])
          .where('id', router.matchers.uuid())
          .as('a11y-checks.show')
      })
      .prefix('a11y-checks')
  })
  .prefix('api/v1')

transmit.registerRoutes()
