import colors from 'colors'

const logger = (req, res, next) => {
  const methodColors = {
    GET: 'green',
    POST: 'yellow',
    PUT: 'blue',
    DELETE: 'red',
  }

  const color = methodColors[req.method] || 'white'

  console.log(
    `Method: ${req.method}, URL: ${req.originalUrl} Protocol: ${req.protocol}`[
      color
    ]
  )
  next()
}

export default logger
