/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q5dnr0n61qx6lm5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "q5dnr0n61qx6lm5",
    "created": "2024-01-27 16:21:19.983Z",
    "updated": "2024-01-27 16:24:47.623Z",
    "name": "Hubtalk2",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6bvkpf2b",
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
        "id": "tofe8yop",
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
