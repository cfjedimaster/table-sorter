# `<table-sorter>`

A simple web component that adds sorting to a table. Given a simple table, wrap the contents with `<table-sort>`, load the component via a script tag, and the table will become sortable.

Check out the [demo](https://cfjedimaster.github.io/table-sorter/demo.html).

## Usage

Your table must contain a `<thead>` and `<tbody>` tag pair.

There's only one optional argument, `numeric`, which represents the table columns that should be treated as numbers when sorted. Can be a comma-delimited list and column numbers begin with 1 because that just makes sense. 

## Example 

Note that `numeric="4"` here means to sort the fourth column, "Age", numerically.

```html
<table-sort numeric="4">
<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Breed</th>
			<th>Gender</th>
			<th>Age</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Luna</td>
			<td>Domestic Shorthair</td>
			<td>Female</td>
			<td>11</td>
		</tr>
		<!-- lots of rows -->
		<tr>
			<td>Apollo</td>
			<td>Persian</td>
			<td>Male</td>
			<td>3</td>
		</tr>	
	</tbody>

</table>
</table-sort>
```

## Installation

Via [npm](https://www.npmjs.com/package/@raymondcamden/table-sorter) or download [table-sorter.js](./table-sorter.js) directly.

```
npm i @raymondcamden/table-sorter
```