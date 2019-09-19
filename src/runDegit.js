const degit = require('degit')

const REPO = 'tehpsalmist/wrapper-playground'

module.exports = async () => {
  const degitter = degit(REPO, { force: true })

  degitter.on('info', info => info.code === 'SUCCESS' && console.log(info.message))

  const cloned = await degitter.clone(process.cwd())
    .catch(err => err instanceof Error ? err : new Error(JSON.stringify(err)))
    
  if (cloned instanceof Error) {
    return console.error(`Error running degit on ${REPO}: `, cloned)
  }

  return 'Success!'
}