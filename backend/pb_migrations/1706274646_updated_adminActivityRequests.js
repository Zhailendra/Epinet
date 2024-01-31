/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3mx3ueww17r12h")

  // remove
  collection.schema.removeField("4gci38zr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ktokjnp",
    "name": "Type",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qhlial4r",
    "name": "Student_Logins",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3mx3ueww17r12h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4gci38zr",
    "name": "Student_Logins",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("5ktokjnp")

  // remove
  collection.schema.removeField("qhlial4r")

  return dao.saveCollection(collection)
})
