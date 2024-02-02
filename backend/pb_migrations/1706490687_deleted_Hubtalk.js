/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rixscxz6ip3dlf8");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "rixscxz6ip3dlf8",
    "created": "2024-01-27 16:24:53.791Z",
    "updated": "2024-01-29 01:08:46.639Z",
    "name": "Hubtalk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jsmshk7q",
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
        "id": "3ixbltbj",
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
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
