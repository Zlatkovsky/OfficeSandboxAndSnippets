module CodeSnippets {
    export function snippet_RangeBorder_Setter(): IInternalSnippet {
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
						var range = ctx.workbook.worksheets.getItem(sheetName).getRange(rangeAddress);
						range.format.borders.getItem('InsideHorizontal').style = 'Continuous';
						range.format.borders.getItem('InsideVertical').style = 'Continuous';
						range.format.borders.getItem('EdgeBottom').style = 'Continuous';
						range.format.borders.getItem('EdgeLeft').style = 'Continuous';
						range.format.borders.getItem('EdgeRight').style = 'Continuous';
						range.format.borders.getItem('EdgeTop').style = 'Continuous';
						return ctx.sync();
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