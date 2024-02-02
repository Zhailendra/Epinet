/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ru1456kmr99pbih");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ru1456kmr99pbih",
    "created": "2024-01-29 01:17:08.856Z",
    "updated": "2024-01-29 01:23:11.930Z",
    "name": "Workshop",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "prziwuac",
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
        "id": "gyb4pv3i",
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
        "id": "hnqywm8d",
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
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "37nck5uk",
        "name": "test10",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
