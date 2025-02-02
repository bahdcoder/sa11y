;(async () => {
  return new Promise((resolve) => {
    HTMLCS.process('WCAG2AA', document, () => {
      const errors = HTMLCS.getMessages().map((message) => ({
        type: message.type,
        code: message.code,
        message: message.msg,
        element: message.element.outerHTML,
      }))
      resolve(errors)
    })
  })
})()
