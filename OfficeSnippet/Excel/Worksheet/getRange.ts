module CodeSnippets {
    export function snippet_Worksheet_GetRange(): IInternalSnippet {
        return {
            name: "",
            category: "",
            showInAPIPlayground: true,
            
            setup: function () {
                // TODO: Documentation folk, please either fill this in (if needed), or remove!
                return Promise.resolve();
            },
            code: {
                jsOrTs: function () {
                    return Excel.run(function (ctx) {
                        var sheetName = "Sheet1";
                        var rangeAddress = "A1:F8";
                        var worksheet = ctx.workbook.worksheets.getItem(sheetName);
                        var range = worksheet.getRange(rangeAddress);
                        range.load('cellCount');
                        return ctx.sync().then(function () {
                            console.log(range.cellCount);
                        });
                    }).catch(function (error) {
                        console.log("Error: " + error);
                        if (error instanceof OfficeExtension.Error) {
                            console.log("Debug info: " + JSON.stringify(error.debugInfo));
                        }
                    });
                }
            },
            validator: function () {
                // TODO: Documentation folk, this test will FAIL until you fill in the appropriate validation!
                return Promise.reject(new Error("Validation not defined, test bound to fail!"));
            }
        }
    }
    
}