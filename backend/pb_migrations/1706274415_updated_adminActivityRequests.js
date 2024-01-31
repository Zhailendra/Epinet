/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3mx3ueww17r12h")

  // remove
  collection.schema.removeField("jcupfhde")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ouwnatda",
    "name": "Description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3mx3ueww17r12h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jcupfhde",
    "name": "Description",
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
  collection.schema.removeField("ouwnatda")

  return dao.saveCollection(collection)
})
