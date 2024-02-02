/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ra6fpw3ld0bpj0z",
    "created": "2024-01-27 16:21:20.024Z",
    "updated": "2024-01-27 16:21:20.024Z",
    "name": "Workshop",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6rwkb3sa",
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
        "id": "lpsw1fpk",
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
        "id": "qtxrrd31",
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
        "id": "cn3e6gn9",
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
        "id": "0qnzghuy",
        "name": "test6",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "2017-01-01 00:00:00.000Z",
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
  const collection = dao.findCollectionByNameOrId("ra6fpw3ld0bpj0z");

  return dao.deleteCollection(collection);
})