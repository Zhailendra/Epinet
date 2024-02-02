/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ru1456kmr99pbih")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqadfkiy",
    "name": "test2",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": "2017-12-31 00:00:00.000Z"
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "drvn7g6x",
    "name": "test6",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "2017-01-01 00:00:00.000Z",
      "max": "2017-12-31 00:00:00.000Z"
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8nkzmydi",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "37nck5uk",
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
  const collection = dao.findCollectionByNameOrId("ru1456kmr99pbih")

  // remove
  collection.schema.removeField("qqadfkiy")

  // remove
  collection.schema.removeField("drvn7g6x")

  // remove
  collection.schema.removeField("8nkzmydi")

  // remove
  collection.schema.removeField("37nck5uk")

  return dao.saveCollection(collection)
})
