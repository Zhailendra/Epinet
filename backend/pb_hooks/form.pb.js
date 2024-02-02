/// <reference path="../pb_data/types.d.ts" />

onAfterBootstrap((e) => {
    const charCodesToStr = (val) => {
        let res = "";
        val.forEach((element) => {
            res += String.fromCharCode(element);
        })
        return res;
    }

    const jsonFieldToSchema = (field, schemaField = new SchemaField) => {

        schemaField.name = field.name;
        schemaField.type = field.type;
        schemaField.required = field.required;
        schemaField.options = field.options;

        switch (field.type) {
            case "textarea":
                schemaField.type = "text";
                break;
            case "select":
                schemaField.options.values = [];
                field.options.choices.forEach((value) => {
                    schemaField.options.values = [...schemaField.options.values, value.value];
                })
                break;

        }
        return schemaField;
    }

    const setCollection = (collection, form) => {
        const data = new CollectionUpsertForm($app, collection)

        data.name = form.name;
        data.type = "base";
        data.listRule = "id = @request.auth.id"
        data.viewRule = null
        data.createRule = ""
        data.updateRule = null
        data.deleteRule = null

        form.fields.forEach((field) => {
            data.schema.addField(jsonFieldToSchema(field))
        })
        data.schema.addField(new SchemaField({
            name: "student",
            type: "relation",
            required: true,
            options:  {
                maxSelect:     1,
                collectionId:  "_pb_users_auth_"
            } }))
        return data;
    }

    const configEncoded = $os.readFile("./pb_hooks/FormData.json")
    const config = JSON.parse(charCodesToStr(configEncoded));

    config.forms.forEach((form) => {
        try {
            const collection = $app.dao().findCollectionByNameOrId(form.name);
            const data = new CollectionUpsertForm($app, collection)

            data.name = form.name;
            form.fields.forEach((field) => {
                var colfield = data.schema.getFieldByName(field.name);

                if (colfield == null) {
                    data.schema.addField(jsonFieldToSchema(field));
                }
            })

            data.submit();
        } catch (e) {
            const collection = new Collection();
            const data = setCollection(collection, form);

            data.submit();
        }
    })
})

onModelAfterCreate((e) => {
    const charCodesToStr = (val) => {
        let res = "";
        val.forEach((element) => {
            res += String.fromCharCode(element);
        })
        return res;
    }

    const jsonFieldToSchema = (field, schemaField = new SchemaField) => {

        schemaField.name = field.name;
        schemaField.type = field.type;
        schemaField.required = field.required;
        schemaField.options = field.options;

        switch (field.type) {
            case "textarea":
                schemaField.type = "text";
                break;
            case "select":
                schemaField.options.values = [];
                field.options.choices.forEach((value) => {
                    schemaField.options.values = [...schemaField.options.values, value.value];
                })
                break;

        }
        return schemaField;
    }

    const configEncoded = $os.readFile("./pb_hooks/FormData.json")
    const config = JSON.parse(charCodesToStr(configEncoded));

    console.log(e.model.tableName())
    console.log(e.model.id)
    config.forms.forEach((form) => {
        if (form.name !== e.model.tableName()) {
            return;
        }
        const collection = $app.dao().findCollectionByNameOrId("activities");
        const data = $app.dao().findRecordById(e.model.tableName(), e.model.id);
        const record = new Record(collection)
        const forms = new RecordUpsertForm($app, record)
        const newData = {
            "organizer": data.get("student"),
            "title": data.get("name"),
            "description": data.get("description"),
            "type": form.name,
            "room": data.get("room"),
            "status": "waiting_validation"
        }

        forms.loadData(newData)
        forms.submit();
    })
})
