const getSchoolRoute = require('./getSchool')
const postSchoolRoute = require('./postSchool')
function Routes(app){
    app.use('/',getSchoolRoute)
    app.use('/',postSchoolRoute)
}

module.exports = Routes;