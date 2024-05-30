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
					id: 1,
				},
				{
					name: 'Artur S.',
					salary: 3000,
					increase: false,
					id: 2,
				},
				{
					name: 'Ahmed C.',
					salary: 4000,
					increase: false,
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
    id: this.maxId++
  }

  this.setState(({data}) => {
    const newArr = [...data, newItem];
    return {
      data: newArr
    }
  })


}

	render() {
		return (
			<div className='app'>
				<AppInfo />

				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList onDelete={this.deleteItem} data={this.state.data} />
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		)
	}
}

export default App
