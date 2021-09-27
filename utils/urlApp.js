exports.URL_WEB = process.env.NODE_ENV === 'production'
    ? process.env.URL_WEB
    : process.env.URL_LOCAL