/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  collection.listRule = "@request.auth.name = organizer"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  collection.listRule = "@request.auth.name = name"

  return dao.saveCollection(collection)
})
