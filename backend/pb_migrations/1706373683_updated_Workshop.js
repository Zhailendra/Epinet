/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0sswmmxw6hlyu1s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ftjuk4pa",
    "name": "test9",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "2017-01-01 00:00:00.000Z",
      "max": "2017-12-31 00:00:00.000Z"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0sswmmxw6hlyu1s")

  // remove
  collection.schema.removeField("ftjuk4pa")

  return dao.saveCollection(collection)
})
