module CodeSnippets {
    export function snippet_Chart_GetImage(): IInternalSnippet {
        return {
            name: "Get Image",
            category: "Chart",
            showInAPIPlayground: true,
            setup: function () {
                // TODO: Documentation folk, please either fill this in (if needed), or remove!
                return Promise.resolve();
            },
            code: {
                jsOrTs: function () {
                    return Excel.run(function (ctx) {
                        var chart = ctx.workbook.worksheets.getItem("Sheet1").charts.getItem("Chart1");
                        var image = chart.getImage();
                        return ctx.sync();
                    }).catch(function (error) {
                        console.log("Error: " + error);
                        if (error instanceof OfficeExtension.Error) {
                            console.log("Debug info: " + JSON.stringify(error.debugInfo));
                        }
                    });
                }
            },
            validator: function() {
                // TODO: Documentation folk, this test will FAIL until you fill in the appropriate validation!
                return Promise.reject(new Error("Validation not defined, test bound to fail!"));
            }
        }
    }
    
}