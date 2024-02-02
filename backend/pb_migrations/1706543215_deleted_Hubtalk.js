/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hhs386qg157y83y");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "hhs386qg157y83y",
    "created": "2024-01-29 01:11:33.418Z",
    "updated": "2024-01-29 15:45:31.430Z",
    "name": "Hubtalk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tvwjhxcr",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "guxo9n8q",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "id = @request.auth.id",
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
