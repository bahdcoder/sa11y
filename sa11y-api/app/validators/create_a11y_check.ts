import vine from '@vinejs/vine'

export const CreateA11yCheckValidator = vine.compile(
  vine.object({
    html: vine.file({
      size: '6mb',
      extnames: ['html'],
    }),
    name: vine.string().minLength(3).maxLength(24),
    runner: vine.enum(['html-code-sniffer', 'ai']).optional(),
    reporter: vine.enum(['json', 'csv']).optional(),
  })
)
