let Users = require('../models/user')
let Boards = require('../models/board')
let Lists = require('../models/list')


module.exports = {
    getListsByBoard: {
        path: '/boards/:boardId/lists',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Lists By Board'
            Lists.find({ boardId: req.params.boardId })
                .then(lists => {
                    res.send(handleResponse(action, lists))
                })
                .catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    // createList: {
    //     path: '/boards/:boardId/lists',
    //     reqType: 'post',
    //     method(req, res, next) {
    //         debugger
    //         let action = 'Create New List On Board'
    //         List.create(req.body)
    //             .then(list => {
    //                 debugger
    //                 console.log(res)
    //                 res.send(handleResponse(action, list))
    //             })
    //             .catch(error => {
    //                 return next(handleResponse(action, null, error))
    //             })
    //     }
    // }

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