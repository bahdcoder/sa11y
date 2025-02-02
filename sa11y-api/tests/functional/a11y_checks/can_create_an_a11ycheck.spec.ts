import app from '@adonisjs/core/services/app'
import drive from '@adonisjs/drive/services/main'
import { test } from '@japa/runner'
import { resolve } from 'node:path'
import testUtils from '@adonisjs/core/services/test_utils'
import A11YCheck from '#models/a11y_check'

test.group('Can create an a11y check', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  test('uploading a valid html file is accepted and sent to storage', async ({
    client,
    cleanup,
    assert,
  }) => {
    const fakeDisk = drive.fake('s3')

    const a11yCheckName = 'Google search page'

    cleanup(() => drive.restore('s3'))

    const response = await client
      .post('/api/v1/a11y-checks/')
      .field('name', a11yCheckName)
      .file('html', resolve(app.publicPath(), 'mock-files', 'test_html_file.html'))
      .send()

    const a11yCheck = await A11YCheck.first()

    assert.equal(a11yCheck?.name, a11yCheckName)

    response.assertStatus(201)
    response.assertBody({
      data: {
        name: a11yCheckName,
        a11yCheckId: a11yCheck?.id,
        transmitKey: `a11y-checks/${a11yCheck?.id}`,
      },
      description: 'The accessibility checks will begin running in the background.',
      message: 'We have received your file.',
    })

    fakeDisk.assertExists(`a11y-checks/${a11yCheck?.id}.html`)
  })

  test('uploading a file over 6MB is rejected with a clear warning')
  test('uploading a file with a non HTML extension is rejected with a clear warning')
  test('uploading no file is rejected with a clear warning')

  test('cannot create a check without providing a name for the a11y check', async ({ client }) => {
    const response = await client
      .post('/api/v1/a11y-checks/')
      .file('html', resolve(app.publicPath(), 'mock-files', 'test_html_file.html'))
      .send()

    response.assertStatus(422)
    response.assertBody({
      errors: [
        {
          field: 'name',
          message: 'The name field must be defined',
          rule: 'required',
        },
      ],
    })
  })
})
