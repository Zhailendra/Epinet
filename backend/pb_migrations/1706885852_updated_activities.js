/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  collection.listRule = "organizer.id = @request.auth.id || @request.auth.adm = true"
  collection.viewRule = "organizer.id = @request.auth.id"
  collection.updateRule = "organizer.id = @request.auth.id || @request.auth.adm = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  collection.listRule = "organizer.id ?= @request.auth.id || @request.auth.adm = true"
  collection.viewRule = "organizer.id ?= @request.auth.id"
  collection.updateRule = "organizer.id ?= @request.auth.id || @request.auth.adm = true"

  return dao.saveCollection(collection)
})
