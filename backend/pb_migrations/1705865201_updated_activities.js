/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4taoyo7n",
    "name": "organizerEmail",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  // remove
  collection.schema.removeField("4taoyo7n")

  return dao.saveCollection(collection)
})
