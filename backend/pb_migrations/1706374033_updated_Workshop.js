/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0sswmmxw6hlyu1s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jsiwod7r",
    "name": "test10",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0sswmmxw6hlyu1s")

  // remove
  collection.schema.removeField("jsiwod7r")

  return dao.saveCollection(collection)
})
