/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  collection.listRule = "organizer = @request.auth.id"

  return dao.saveCollection(collection)
})
