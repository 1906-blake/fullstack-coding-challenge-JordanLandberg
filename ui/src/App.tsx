import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import GroceryListAllComponent from './components/grocery-list/grocery-list-all.component';
import GroceryListWithItemsComponent from './components/grocery-list/grocery-list-items.component';
import { store } from './store';
import NavBarComponent from './components/navbar/navbar.component';


const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                 <NavBarComponent />
                    {/* The switch will only render the first route to match */}
            
                    <Switch>
                        <Route path="/groceries/lists" component={GroceryListAllComponent} />
                        <Route path="/groceries/items" component={GroceryListWithItemsComponent} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>

    );
}

export default App;
