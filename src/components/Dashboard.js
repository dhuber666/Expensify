import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilters from './ExpenseFilters';

const Dashboard = () => (
    <div>
        <ExpenseFilters />
        <ExpenseList />
    </div>
)

export default Dashboard;