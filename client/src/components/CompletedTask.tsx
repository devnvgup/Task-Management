import { useLoaderData } from 'react-router-dom';
import ContentCommon from './common/ContentCommon'

function CompletedTask() {
  const data = useLoaderData() as any[];
  return (
    <>
      <ContentCommon
        name="Completed Tasks"
        data={data}
        isCompleteTask={true} 
        isAllTask={false}
        isImportantTask={false}
        />
    </>
  )
}

export default CompletedTask
