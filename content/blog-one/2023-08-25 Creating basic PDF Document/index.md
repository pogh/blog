---
title: Creating basic PDF Document
date: "2023-08-25"
description: ""
---


PdfPig: Reads text content from PDF documents and supports document creation. Apache 2.0 licensed.

https://github.com/UglyToad/PdfPig

```csharp
string text = "The great ship Galactica, majestic and loving, strong and protecting, our home for these many years we've endured the wilderness of space. And now we near the end of our journey. Scouts and electronic surveillance confirm that we have reached our haven, that planet which is home to our ancestor brothers. Too many of our sons and daughters did not survive to share the fulfilment of our dream. We can only take comfort and find strength in that they did not die in vain: we have, at last, found Earth.";

PdfDocumentBuilder builder = new PdfDocumentBuilder();

PdfPageBuilder page = builder.AddPage(PageSize.A4);

// Fonts must be registered with the document builder prior to use to prevent duplication.
PdfDocumentBuilder.AddedFont font = builder.AddStandard14Font(Standard14Font.Helvetica);

int fontSize = 12;
int lineNumber = 1;
int margins = 50;

List<string> currentLineText = new();

foreach (string value in text.Split(" "))
{
	// This is our current line of text
	IReadOnlyList<Letter> currentLineMeasurements = page.MeasureText(
													string.Join(", ", currentLineText),
													fontSize,
													new PdfPoint(margins,
																 page.PageSize.Height - 50 - (lineNumber * fontSize)),
	font);

	// We need this to check whether adding an extra word will go over the margin
	IReadOnlyList<Letter> nextValueMeasurements = page.MeasureText(
													$", {value}",
													fontSize,
													new PdfPoint(margins,
																 page.PageSize.Height - 50 - (lineNumber * fontSize)),
																 font);

	// If the current line + the next work are still within the margin,
	// just add the word to the current line
	// If the current line + the next work go over the margin,
	// Add the current line to the document and start a new line
	if (currentLineMeasurements.Count > 0
	&& (currentLineMeasurements.Max(x => x.Width) + nextValueMeasurements.Max(x => x.Width) > page.PageSize.Width - (2 * margins))
	)
	{
		page.AddText(string.Join(" ", currentLineText),
					 fontSize,
					 new PdfPoint(50, page.PageSize.Height - 50 - (lineNumber * fontSize * 1.5)),
					 font);

		currentLineText.Clear();
		currentLineText.Add(value);

		lineNumber += 1;
	}
	else
	{
		currentLineText.Add(value);
	}
}

// Don't forget to add the final line
page.AddText(string.Join(", ", currentLineText), fontSize, new PdfPoint(50, page.PageSize.Height - 50 - (lineNumber * fontSize * 1.5)), font);

// Set the document properties
builder.DocumentInformation.Creator = System.Reflection.Assembly.GetExecutingAssembly().GetName().Name;
builder.DocumentInformation.Author = Environment.UserName;
builder.DocumentInformation.CreationDate = System.DateTime.Now.ToString("dd.MM.yyyy HH:mm");
builder.DocumentInformation.Title = "Foo";
builder.DocumentInformation.Producer = "Sally die PDF-Roboterin";

// Write out the document
byte[] documentBytes = builder.Build();
File.WriteAllBytes(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), "Example.pdf"), documentBytes);
```
