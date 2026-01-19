import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';
import usersFromServer from '../../api/users';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const user = usersFromServer.find(u => u.id === todo.userId);

  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
