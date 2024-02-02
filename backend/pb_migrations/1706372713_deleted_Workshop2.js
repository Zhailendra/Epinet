/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ukaq5iy3hjezo9x");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ukaq5iy3hjezo9x",
    "created": "2024-01-27 16:21:51.944Z",
    "updated": "2024-01-27 16:24:47.666Z",
    "name": "Workshop2",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pfl8aiq8",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "q1ysxm0w",
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
      },
      {
        "system": false,
        "id": "hczlvxqb",
        "name": "test",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "choice1",
            "choice2"
          ]
        }
      },
      {
        "system": false,
        "id": "mrbks1ew",
        "name": "test2",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": "2017-12-31 00:00:00.000Z"
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
