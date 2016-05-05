(function () {
	"use strict";
	var response = {
		'books': [
			{
				'id': 1,
				'name': 'Da Vinci Code',
				'author': 'Dan Brown',
				'published_year': 2003
        	},
			{
				'id': 2,
				'name': 'Digital Fortress',
				'author': 'Dan Brown',
				'published_year': 1998
        	},
			{
				'id': 3,
				'name': 'Catcher in the Rye',
				'author': 'J D Salinger',
				'published_year': 1951
        	}
		]
	};

	var SORT = {
		UNSORTED: 0,
		ASCENDING: 1,
		DESCENDING: 2
	};

	function createTableHeading(headings) {
		var tableHeading = "<tr>";

		headings.forEach(function (column) {
			tableHeading += "<th data-name='" + column + "'>" + column + "</th>";
		});

		tableHeading += "</tr>";

		return tableHeading;
	}

	function createTableRows(rowData) {
		var tableRow = "";

		rowData.forEach(function (row) {
			tableRow += "<tr class='tableRow'>";
			tableRow += "<td class='name'>" + row.name + "</td>";
			tableRow += "<td class='author'>" + row.author + "</td>";
			tableRow += "<td class='published_year'>" + row.published_year + "</td>";
			tableRow += "</tr>";
		});

		return tableRow;
	}

	function sortAscending(columnName, a, b) {
		var x = a[columnName],
			y = b[columnName];
		return x < y ? -1 : (x > y ? 1 : 0);
	}

	function sortDescending(columnName, a, b) {
		var x = a[columnName],
			y = b[columnName];
		return x < y ? 1 : (x > y ? -1 : 0);
	}

	function sortTableData(columnElem, tableId, tableConfig, index) {
		var columnName = columnElem.attributes[0].nodeValue,
			tableData = tableConfig.tableData,
			sortOrder = tableConfig.sortOrder[index],
			name = document.querySelectorAll("#" + tableId + " .tableRow .name"),
			author = document.querySelectorAll("#" + tableId + " .tableRow .author"),
			publishedYear = document.querySelectorAll("#" + tableId + " .tableRow .published_year");

		if (sortOrder === SORT.UNSORTED || sortOrder === SORT.DESCENDING) {
			tableData.sort(sortAscending.bind(null, columnName));
			tableConfig.sortOrder[index] = SORT.ASCENDING;
		} else {
			tableData.sort(sortDescending.bind(null, columnName));
			tableConfig.sortOrder[index] = SORT.DESCENDING;
		}

		tableData.forEach(function (data, index) {
			name[index].innerHTML = data.name;
			author[index].innerHTML = data.author;
			publishedYear[index].innerHTML = data.published_year;
		});

		displaySortArrow(columnName, tableId, tableConfig, index);

	}

	function displaySortArrow(columnName, tableId, tableConfig, index) {
		// highlight table heading
		var tableHeadings = document.querySelectorAll("#" + tableId + " th"),
			th, i,
			currentColumnName;

		for (i = 0; i < tableHeadings.length; i++) {
			th = tableHeadings[i];
			currentColumnName = th.attributes[0].nodeValue;

			if (columnName === currentColumnName) {
				if (tableConfig.sortOrder[index] === SORT.ASCENDING) {
					th.innerHTML = currentColumnName + "&#9650";
				} else {
					th.innerHTML = currentColumnName + "&#9660";
				}
			} else {
				th.innerHTML = currentColumnName;
			}
		}
	}

	function addClickListeners(tableId, tableConfig) {
		var tableHeadings = document.querySelectorAll("#" + tableId + " th"),
			i, column;

		for (i = 0; i < tableHeadings.length; i++) {
			column = tableHeadings[i];
			column.addEventListener("click", sortTableData.bind(null, column, tableId, tableConfig, i));
		}
	}

	function createTables(config) {
		var tableCount = config.length,
			table,
			tableId,
			container = document.querySelector(".container"),
			i;

		for (i = 0; i < tableCount; i++) {
			tableId = "table" + (i + 1);

			table = document.createElement("table");
			table.id = tableId;

			table.innerHTML = "<tbody>" + createTableHeading(config[i].tableHeadings) + createTableRows(config[i].tableData) + "</tbody>";
			container.appendChild(table);

			addClickListeners(tableId, config[i]);
		}
	}

	function init() {
		var tableConfig = [
			{
				tableHeadings: ["name", "author", "published_year"],
				tableData: response.books,
				sortOrder: [SORT.UNSORTED, SORT.UNSORTED, SORT.UNSORTED]
			}
		];

		// API call to server, fetch books data and set it into tableConfig at respective index.
		// Create the config required to render multiple tables.
		// In our case, we are creating only one table.

		createTables(tableConfig);
	}

	window.onload = init;

})();
