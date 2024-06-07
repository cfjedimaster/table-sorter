class TableSort extends HTMLElement {
	constructor() {
		super();
		this.data = [];
		this.lastSort = null;
		this.sortAsc = true;
	}
	
	connectedCallback() {
		let table = this.querySelector('table');

		// no table? end!
		if(!table) {
			console.warn('table-sort: No table found. Exiting.');
			return;
		}
		
		let numericColumns = [];
		if(this.hasAttribute('numeric')) {
			numericColumns = this.getAttribute('numeric').split(',').map(x => parseInt(x-1,10));
		}
		
		// require tbody and thead
		let tbody = table.querySelector('tbody');
		let thead = table.querySelector('thead');
		if(!tbody || !thead) {
			console.warn('table-sort: No tbody or thead found. Exiting.');
			return;			
		}
		
		let rows = tbody.querySelectorAll('tr');
		rows.forEach(r => {
			let datum = [];
			let row = r.querySelectorAll('td');
			row.forEach((r,i) => {
				if(numericColumns.indexOf(i) >= 0) datum[i] = parseInt(r.innerText,10);
				else datum[i] = r.innerText;
			});
			this.data.push(datum);
		});
		
		// Get our headers
		let headers = thead.querySelectorAll('th');
		headers.forEach((h,i) => {
			h.style.cursor = 'pointer';
			h.addEventListener('click', e => {
					this.sortCol(e,i);
			});
		});
		
		// copy body to this scope so we can use it again later
		this.tbody = tbody;

	}
	
	renderTable() {
		let newHTML = '';
		for(let i=0;i<this.data.length;i++) {
			let row = '<tr>';
			for(let c in this.data[i]) {
				row += `<td>${this.data[i][c]}</td>`;
			}
			row += '</tr>';
			newHTML += row;
		}
		this.tbody.innerHTML = newHTML;
	}
	
	sortCol(e,i) {
		let sortToggle = 1;
		if(this.lastSort === i) {
			this.sortAsc = !this.sortAsc;
			if(!this.sortAsc) sortToggle = -1;
		} else this.sortAsc = true;
		
		this.lastSort = i;
		
		this.data.sort((a,b) => {
			if(a[i] < b[i]) return -1 * sortToggle;
			if(a[i] > b[i]) return 1 * sortToggle;
			return 0;
		});
		
		this.renderTable();
	}
}

if(!customElements.get('table-sort')) customElements.define('table-sort', TableSort);
