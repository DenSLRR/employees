import { Component } from 'react';
import './App.css'



import AppFilter from './components/app-filter/app-filter'
import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/serach-panel/search-panel';
import EmployeesList from './components/employees-list/employees-list';
import EmployeesAddForm from './components/employees-add-form/employees-add-form';


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					name: 'John C.',
					salary: 500,
					increase: true,
					rise: false,
					id: 1,
				},
				{
					name: 'Artur S.',
					salary: 3000,
					increase: false,
					rise: false,
					id: 2,
				},
				{
					name: 'Ahmed C.',
					salary: 4000,
					increase: false,
					rise: false,
					id: 3,
				},
			],
		}
		this.maxId = 4
	}

	deleteItem = id => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id),
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		}

		

		this.setState(({ data }) => {
			const newArr = [...data, newItem]
			return {
				data: newArr,
			}
		})
	}

	onToggleIncrease = id => {
		// this.setState(({data}) => {
		// 	const index = data.findIndex(elem => elem.id === id);

		// 	const old = data[index];
		// 	const newItem = {...old, increase: !old.increase};
		// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

		// 	return {
		// 		data: newArr
		// 	}
		// })

		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, increase: !item.increase}
				}
			  return item;
			})
		}))

	}


	

	onToggleRise = id => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, rise: !item.rise}
				}
			  return item;
			})
		}))
	}

	render() {

		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;

		return (
			<div className='app'>
				<AppInfo employees={employees} increased={increased}/>

				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList 
					onDelete={this.deleteItem} 
					data={this.state.data}
					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRise} />
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		)
	}
}

export default App
