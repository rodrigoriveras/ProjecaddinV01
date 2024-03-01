/* global Excel console */
//import { username } from './components/login';
//import getGlobal from 'GetGlobalObject'; does not work

// let user01 = getGlobal();
let username;
let password;
let passwordsent = "";
let usernamesent = "";

const insertText = async (text) => {
  // Write text to the top left cell.
  try {
    Excel.run(async (context) => {
      const sheet = context.workbook.worksheets.getActiveWorksheet();
      const range = sheet.getRange("A1");
      range.values = [[text]];
      range.format.autofitColumns();
      return context.sync();
    });
  } catch (error) {
    console.log("Error: " + error);
  }
};

export {insertText};

async function setup() {
  await Excel.run(async (context) => {
    context.workbook.worksheets.getItemOrNullObject("Sample").delete();
    const sheet = context.workbook.worksheets.add("Sample");

    const expensesTable = sheet.tables.add("A1:D1", true /*hasHeaders*/);
    expensesTable.name = "ExpensesTable";

    expensesTable.getHeaderRowRange().values = [["Date", "Merchant", "Category", "Amount"]];

    expensesTable.rows.add(null /*add at the end*/, [
      ["1/1/2017", "The Phone Company", "Communications", "$120"],
      ["1/2/2017", "Northwind Electric Cars", "Transportation", "$142"],
      ["1/5/2017", "Best For You Organics Company", "Groceries", "$27"],
      ["1/10/2017", "Coho Vineyard", "Restaurant", "$33"],
      ["1/11/2017", "Bellows College", "Education", "$350"],
      ["1/15/2017", "Trey Research", "Other", "$135"],
      ["1/15/2017", "Best For You Organics Company", "Groceries", "$97"]
    ]);

    sheet.getUsedRange().format.autofitColumns();
    sheet.getUsedRange().format.autofitRows();

    sheet.activate();
    await context.sync();
  });
}
export {setup};

async function getData() {
  await Excel.run(async (context) => {
    const sheet = context.workbook.worksheets.getItem("Sample");
    const expensesTable = sheet.tables.getItem("ExpensesTable");

    const headerRange = expensesTable.getHeaderRowRange().load("values");
    const bodyRange = expensesTable.getDataBodyRange().load("values");
    const columnRange = expensesTable.columns
      .getItem("MERCHANT")
      .getDataBodyRange()
      .load("values");
    const rowRange = expensesTable.rows.getItemAt(1).load("values");

    await sheet.context.sync();

    const headerValues = headerRange.values;
    const bodyValues = bodyRange.values;
    const merchantColumnValues = columnRange.values;
    const secondRowValues = rowRange.values;

    sheet.getRange("A18:A18").values = [["Results"]];
    sheet.getRange("A20:D20").values = headerValues;
    sheet.getRange("A21:D27").values = bodyValues;
    sheet.getRange("B30:B36").values = merchantColumnValues;
    sheet.getRange("A17:D17").values = secondRowValues;

    await context.sync();
  });
}

export {getData};
 

function getData01() { 
   Excel.run(async (context) => {
        const sheet = context.workbook.worksheets.getItem("Sample");
        var rowRangeUser = sheet.getCell(1, 2);
        var rowRangeUser01 = sheet.getCell(1, 3);
        rowRangeUser.load("values");
        rowRangeUser01.load("values");           
        await sheet.context.sync();   
        sheet.getCell(7, 7).values = rowRangeUser.values;
        sheet.getCell(7, 8).values = rowRangeUser01.values;
        getData03(rowRangeUser.values, rowRangeUser01.values); //(it works
        return rowRangeUser.values;
})
};
export {getData01} ;


function getData02() { 
  Excel.run(async (context) => {
    const sheet = context.workbook.worksheets.getItem("Sample");
    const expensesTable = sheet.tables.getItem("ExpensesTable");
    var rowRangeUser = sheet.getCell(1, 2);
    var rowRangeUser01 = sheet.getCell(1, 3);
    rowRangeUser.load("values");
    rowRangeUser01.load("values");  
    expensesTable.load("values");          
    await sheet.context.sync();   
    sheet.getCell(7, 7).values = rowRangeUser.values;
    sheet.getCell(7, 8).values = rowRangeUser01.values;
    getData03(rowRangeUser.values, rowRangeUser01.values); //(it works
    return rowRangeUser.values;
})
};

export {getData02} ;


function getData03(username03, password01){

  if (username == null) {
   usernamesent = username03.toString();
   passwordsent = password01.toString();
    console.log("The value is either undefined or null");
  } else {
    console.log("The value is neither undefined nor null");
  }

  
//  const username = usernamepass;
//value= username
//onChangeUsername ;
//return username, password;

}
export { usernamesent, passwordsent  } ;
