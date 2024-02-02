/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0sswmmxw6hlyu1s",
    "created": "2024-01-27 16:25:42.175Z",
    "updated": "2024-01-27 16:25:42.175Z",
    "name": "Workshop",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gv3b9akb",
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
        "id": "he56e1zj",
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
        "id": "7v8qjic0",
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
        "id": "gx6e2tth",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0sswmmxw6hlyu1s");

  return dao.deleteCollection(collection);
})
