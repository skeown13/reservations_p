// Bring in data from other files

let tableData = require("../data/tableData")
let waitingListData = require("../data/waitingListData")

// Routes

module.exports = function(app) {
  app.get("/api/tables", function(req, res) {
    res.json(tableData)
  })

  app.get("/api/waitingList", function(req, res) {
    res.json(waitingListData)
  })

  app.post("/api/tables", function(req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body)
      res.json(true)
    } else {
      waitingListData.push(req.body)
      res.json(false)
    }
  })
}