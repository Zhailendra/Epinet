/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  // remove
  collection.schema.removeField("iqn8yy4o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qrn5pdnd",
    "name": "coorganizer",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kcg6882gro8zxfw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqn8yy4o",
    "name": "coorganizer",
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
  collection.schema.removeField("qrn5pdnd")

  return dao.saveCollection(collection)
})
