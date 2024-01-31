/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  // remove
  collection.schema.removeField("qgdpbgcw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xs3ecjdj",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Hub",
        "Workshop",
        "Focusgroup"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qgdpbgcw",
    "name": "type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("xs3ecjdj")

  return dao.saveCollection(collection)
})
