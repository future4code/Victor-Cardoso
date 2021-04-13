import { connection } from './connection'
import { Task } from '../model/task'

const selectUserTasks = async (author_id: string): Promise<Task[]> => {
  return await connection
    .select('*')
    .from('to_do_list_tasks')
    .where({ author_id })
}

export default selectUserTasks
