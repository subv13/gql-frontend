export var SortOrder;
(function (SortOrder) {
    SortOrder["Asc"] = "ASC";
    SortOrder["Desc"] = "DESC";
})(SortOrder || (SortOrder = {}));
export var SortableFields;
(function (SortableFields) {
    SortableFields["Category"] = "CATEGORY";
    SortableFields["Id"] = "ID";
    SortableFields["Name"] = "NAME";
})(SortableFields || (SortableFields = {}));
export var Status;
(function (Status) {
    Status["Error"] = "ERROR";
    Status["Ok"] = "OK";
})(Status || (Status = {}));
const result = {
    "__schema": {
        "types": [
            {
                "kind": "UNION",
                "name": "CreateProductError",
                "possibleTypes": [
                    {
                        "name": "ProductAlreadyExistsError"
                    }
                ]
            },
            {
                "kind": "UNION",
                "name": "UpdateProductError",
                "possibleTypes": [
                    {
                        "name": "ProductDoesntExistsError"
                    }
                ]
            }
        ]
    }
};
export default result;
//# sourceMappingURL=graphql.js.map