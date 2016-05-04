(function () {
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

	function createTableHeading(headings) {
		var tableHeading = "<tr>";

		headings.forEach(function (column) {
			tableHeading += "<th>" + column + "</th>";
		});

		tableHeading += "</tr>"

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

	function createTables(config) {
		var tableCount = config.tableCount,
			table,
			tableId,
			tHeading;

		var container = document.querySelector(".container");

		for (var i = 0; i < tableCount; i++) {
			tableId = "table" + (i + 1);

			table = document.createElement("table");
			table.id = tableId;

			table.innerHTML = "<tbody>" + createTableHeading(config.tableHeadings[i]) + createTableRows(config.tableData[i]) + "</tbody>";
			container.appendChild(table);

			attachSortListeners(tableId, config.tableData[i]);
		}
	}

	function attachSortListeners(tableId, tableData) {
		var columns = document.querySelectorAll("#" + tableId + " th");

		for (var i = 0; i < columns.length; i++) {
			var c = columns[i];
			c.addEventListener("click", sortTableData.bind(null, c.innerHTML, tableId, tableData));
		};
	}

	function sortTableData(columnName, tableId, tableData) {
		console.log("sort data on columnName = " + columnName + " and tableData = ", tableData);
		tableData.sort(function (a, b) {
			if (a[columnName] < b[columnName]) {
				return -1;
			} else if (a[columnName] > b[columnName]) {
				return 1;
			} else {
				return 0;
			}
		});

		console.log("sorted table = ", tableData);

		var tableRow = document.querySelectorAll("#" + tableId + " .tableRow");
		var name = document.querySelectorAll("#" + tableId + " .tableRow .name");
		var author = document.querySelectorAll("#" + tableId + " .tableRow .author");
		var publishedYear = document.querySelectorAll("#" + tableId + " .tableRow .published_year");

		tableData.forEach(function (data, index) {
			name[index].innerHTML = data.name;
			author[index].innerHTML = data.author;
			publishedYear[index].innerHTML = data.published_year;
		});
	}

	function init() {
		var tableConfig = {
			tableCount: 1,
			tableHeadings: [
				["name", "author", "published_year"]
			],
			tableData: []
		};

		// API call to server, fetch books data and set it to tableConfig.tableData at respective index.
		// Create the config required to render multiple tables.
		// In our case, we are creating only one table.
		tableConfig.tableData[0] = response.books;

		createTables(tableConfig);
	}

	window.onload = init;

})();