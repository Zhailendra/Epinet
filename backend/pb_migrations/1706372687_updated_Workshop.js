/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukaq5iy3hjezo9x")

  collection.name = "Workshop2"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ukaq5iy3hjezo9x")

  collection.name = "Workshop"

  return dao.saveCollection(collection)
})
