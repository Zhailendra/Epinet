/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ru1456kmr99pbih")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnqywm8d",
    "name": "test",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "choice1",
        "choice2"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ru1456kmr99pbih")

  // remove
  collection.schema.removeField("hnqywm8d")

  return dao.saveCollection(collection)
})
