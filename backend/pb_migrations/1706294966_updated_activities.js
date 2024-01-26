/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  collection.listRule = "@request.auth.id != \"\" && @request.data.organizer.id = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && @request.data.organizer.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  collection.listRule = "@request.auth.id != \"\" && organizer.name = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" && organizer.name = @request.auth.id"

  return dao.saveCollection(collection)
})
