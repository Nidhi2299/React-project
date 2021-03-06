import ExpenseItem from "../ExpenseItem";
const SearchedExpenses = (props) => {
   /* if (props.list.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
      }*/
    
      return (
        <ul className='expenses-list'>
          {
            props.list.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            
            ))
          }
         
          
        </ul>
      
      );
}
export default SearchedExpenses;