---
title: Creating an OpenXML Excel Document
date: "2023-08-23"
description: ""
---

```csharp
using (SpreadsheetDocument spreadsheet = SpreadsheetDocument.Create(
										Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), "Example.xlsx"),
										SpreadsheetDocumentType.Workbook)
										)
{
	//---------------------------------------------------------
	// Set document properties

	spreadsheet.PackageProperties.Title = "";
	spreadsheet.PackageProperties.Creator = "";
	spreadsheet.PackageProperties.Created = System.DateTime.Now;

	spreadsheet.AddExtendedFilePropertiesPart();
	spreadsheet.ExtendedFilePropertiesPart.Properties = new DocumentFormat.OpenXml.ExtendedProperties.Properties
	{
		Company = new DocumentFormat.OpenXml.ExtendedProperties.Company(""),
		Application = new DocumentFormat.OpenXml.ExtendedProperties.Application("Microsoft Excel")
	};

	//---------------------------------------------------------
	// Set up minimum spreadsheet document

	WorkbookPart workbookPart = spreadsheet.AddWorkbookPart();
	Workbook workbook = workbookPart.Workbook = new Workbook();

	//  --  -- 

	BookViews bookViews = workbook.AppendChild<BookViews>(new BookViews());
	WorkbookView workbookView = bookViews.AppendChild<WorkbookView>(new WorkbookView());

	//  --  -- 

	WorksheetPart worksheetPart = workbookPart.AddNewPart<WorksheetPart>("rId1");

	Sheets sheets = workbook.AppendChild<Sheets>(new Sheets());
	Sheet sheet = new Sheet() { Id = workbookPart.GetIdOfPart(worksheetPart), SheetId = 1, Name = "Sheet One" };
	sheets.Append(sheet);

	//---------------------------------------------------------
	// Set up document formating

	WorkbookStylesPart workbookStylesPart = workbookPart.AddNewPart<WorkbookStylesPart>();
	workbookStylesPart.Stylesheet = GetStylesheet();

	//---------------------------------------------------------

	using (OpenXmlWriter writer = OpenXmlWriter.Create(worksheetPart))
	{
		writer.WriteStartElement(new Worksheet());

		//-----------------------------------------------------
		// Column formating

		writer.WriteStartElement(new Columns());

		for (int n = 1; n <= 3; n += 1)
		{
			writer.WriteStartElement(new Column()
			{
				Min = Convert.ToUInt32(n),  // Column Id
				Max = Convert.ToUInt32(n),  // Column Id
				Width = 10 * n
				// Style = 1  // Text style
			});
			writer.WriteEndElement();  // Column
		}

		writer.WriteEndElement();  // Columns

		//-----------------------------------------------------

		writer.WriteStartElement(new SheetData());

		//-----------------------------------------------------

		{
			writer.WriteStartElement(new Row(), 
									new List<OpenXmlAttribute>() { 
										   new OpenXmlAttribute("r", 
																null, 
																"1") });  // row 1

			{
				writer.WriteStartElement(new Cell()
				{
					CellReference = "A1",
					DataType = CellValues.Number,
					StyleIndex = 0
				});
				writer.WriteElement(new CellValue("11.22"));
				writer.WriteEndElement();   // cell
			}

			{
				writer.WriteStartElement(new Cell()
				{
					CellReference = "B1",
					DataType = CellValues.String,
					StyleIndex = 1
				});
				writer.WriteElement(new CellValue("A text value in A1"));
				writer.WriteEndElement();   // cell
			}

			{
				writer.WriteStartElement(new Cell()
				{
					CellReference = "C1",
					DataType = CellValues.Date,
					StyleIndex = 2
				});
				writer.WriteElement(new CellValue(new DateTime(1970, 07, 15)));
				writer.WriteEndElement();   // cell
			}

			writer.WriteEndElement();       // row
		}

		//-----------------------------------------------------

		writer.WriteEndElement();           // sheetdata
		writer.WriteEndElement();           // worksheet
		writer.Close();
	}
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
private static Stylesheet GetStylesheet()
{
	return
		   new Stylesheet(
				  new Fonts(
					  // Index 0 - Default font.
					  new DocumentFormat.OpenXml.Spreadsheet.Font(
						  new FontName() { Val = "Calibri" },
						  new FontSize() { Val = 10 },
						  new Color() { Rgb = new HexBinaryValue() { Value = "000000" } }
						  )
				  ),
				  new Fills(
					  // Index 0 - Default fill.
					  new Fill(
						  new PatternFill() { PatternType = PatternValues.None }
						  ),
					  // Index 1
					  new Fill(
						  new PatternFill() { PatternType = PatternValues.Gray0625 }
						  ), // you need this unused fill or otherwise the next pattern fill doesn't work
					  // Index 2
					  new Fill(
						  new PatternFill()
						  {
							  PatternType = PatternValues.Solid,
							  ForegroundColor = new ForegroundColor() { Theme = 0, Tint = -0.2 },
							  BackgroundColor = new BackgroundColor() { Indexed = 64 }
						  }
					  )
				  ),
				  new Borders(
					  // Index 0 - Default border.
					  new Border(
						  new LeftBorder(),
						  new RightBorder(),
						  new TopBorder(),
						  new BottomBorder(),
						  new DiagonalBorder()
						  )
				  ),
				  new CellFormats(
					  // Index 0 - Default cell style
					  new CellFormat() { },
					  // Index 1 - Formating as 'Text'
					  new CellFormat() { FillId = 2, ApplyFill = true, NumberFormatId = 49, ApplyNumberFormat = true },
					  // Index 2 - Date Format
					  new CellFormat() { NumberFormatId = 14, ApplyNumberFormat = true }
				  )
			  );
}
```
