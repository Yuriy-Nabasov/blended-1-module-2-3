import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todoArray, onDelete }) => {
  return (
    <Grid>
      {todoArray.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem data={item} index={index} onDelete={onDelete} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
