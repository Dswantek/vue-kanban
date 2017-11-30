let Users = require('../models/user')
let Boards = require('../models/board')
let Lists = require('../models/list')


module.exports = {
    getListsByBoard: {
        path: '/boards/:boardId/lists',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Lists By Board'
            Users.findById(req.session.uid)
                .then(user => {
                    Lists.find({ boardId: req.params.boardId })
                        .then(lists => {
                            res.send(handleResponse(action, lists))
                        })
                        .catch(error => {
                            return next(handleResponse(action, null, error))
                        })
                })
                .catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },

}

function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}