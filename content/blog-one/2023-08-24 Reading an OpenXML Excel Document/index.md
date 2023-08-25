---
title: Reading an OpenXML Excel Document
date: "2023-08-24"
description: ""
---

```csharp
// Open the document for editing.
using (SpreadsheetDocument spreadsheetDocument = SpreadsheetDocument.Open(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), "Example.xlsx"), false))
{
	WorkbookPart workbookPart = spreadsheetDocument.WorkbookPart;

	// ----------------------------------------------------------------------------------

	WorksheetPart worksheetPart = (WorksheetPart)workbookPart.Parts.First(x => x.OpenXmlPart.GetType() == typeof(WorksheetPart)).OpenXmlPart;

	int n = -1;
	Dictionary<int, int> numberFormats = workbookPart.WorkbookStylesPart.Stylesheet.CellFormats.ChildElements.OfType<CellFormat>()
		.ToDictionary(x => n += 1, y => Convert.ToInt32((string)y.NumberFormatId));

	IEnumerable<SharedStringItem> sharedStringTable = workbookPart.SharedStringTablePart.SharedStringTable.Elements<SharedStringItem>();

	// ----------------------------------------------------------------------------------

	Regex cellRefRegex = new Regex(@"^(?:[A-Z])(\d+)$");                    // Test for value cell reference
	Regex dateRegex = new Regex(@"^[2][0][0-9][0-9][01][0-9][0-3][0-9]$");  // Test for yyyyMMdd date values

	// ----------------------------------------------------------------------------------

	OpenXmlReader reader = OpenXmlReader.Create(worksheetPart);

	while (reader.Read())
	{
		if (reader.ElementType == typeof(Row))                          // If we have a row element...
		{
			Row worksheetRow = (Row)reader.LoadCurrentElement();        // ... read the entire row in

			// Loop through the cells in the row
			foreach (Cell child in worksheetRow.ChildElements.OfType<Cell>())
			{
				// Check that we have a cell with a value (i.e. it has a cell reference)
				string cellRef = child.CellReference.Value.ToUpper();
				Match match1 = cellRefRegex.Match(cellRef);

				if (match1.Success)
				{
					int row = Convert.ToInt32(match1.Groups[1].Value);
					char colName = Convert.ToChar(cellRef.Substring(0, 1));

					string cellValue = null;
					if (child.CellValue != null)
					{
						string dateType = child.DataType;
						int styleIndexid = Convert.ToInt32((string)child.StyleIndex);
						int numberFormatId = numberFormats[styleIndexid];

						// Defined as date
						if (dateType == "d")
							cellValue = Convert.ToDateTime(child.CellValue.Text).ToString("u");

						// Formated as date
						else if (numberFormatId == 14)
							cellValue = DateTime.FromOADate(System.Convert.ToInt32(child.CellValue.Text)).ToString("u");

						// Strings which are stored in the share string table
						else if (dateType == "s")
							cellValue = sharedStringTable.Take(Convert.ToInt32(child.CellValue.Text) + 1).Last().InnerText;

						else
							cellValue = child.CellValue.Text;

						Debug.WriteLine(cellValue);
					}
				}
			}
		}
	}
	spreadsheetDocument.Close();
	spreadsheetDocument.Dispose();
}
```


```csharp
/*
 0 General 
 1 0 
 2 0.00 
 3 #,##0 
 4 #,##0.00 
 9 0% 
10 0.00% 
11 0.00E+00 
12 # ?/? 
13 # ??/?? 
14 mm-dd-yy 
15 d-mmm-yy 
16 d-mmm 
17 mmm-yy 
18 h:mm AM/PM 
19 h:mm:ss AM/PM 
20 h:mm 
21 h:mm:ss 
22 m/d/yy h:mm 
37 #,##0 ;(#,##0) 
38 #,##0 ;Red 
39 #,##0.00;(#,##0.00) 
40 #,##0.00;Red 
45 mm:ss 
46 [h]:mm:ss 
47 mmss.0 
48 ##0.0E+0 
49 @
*/

```
