let Boards = require('../models/board')

module.exports = {
  userBoards: {
    path: '/userboards',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Boards'
      Boards.find({creatorId: req.session.uid})
        .then(boards => {
          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  sharedBoards: {
    path: '/sharedBoards',
    reqType: 'get',
    method(req, res, next){
      Boards.find({collaborators: { $in: req.session.uid}})
        .then(boards => {
          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  createBoards: {
    path: '/userboards',
    reqType: 'post', 
    method(req, res, next){
      debugger
      let action = 'Create Board'
      Board.create(req.body)
      .then(board => {
        res.send(handleResponse(action, board))
      }).catch(error => {
        return next(handleResponse(action, null, error))
      })
    }
  }
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