
module.exports = errorFormatter = e => {
    let errors = {}
    const allErrors = e.substring(e.indexOf(':') + 1).trim()
    const allErrorsInArrayFormat = allErrors.split(',').map(err => err.trim())

    if(allErrorsInArrayFormat){
        allErrorsInArrayFormat.map(error => {
            const [key, value] = error.split(':').map(err => err.trim())
            errors[key] = value
        })
    }
   
    return errors
}