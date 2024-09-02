import { useLoaderData } from 'react-router-dom';
import ContentCommon from './common/ContentCommon';

function AllTask() {
  const data = useLoaderData() as any[];

  return (
    <>
      <ContentCommon name="All Tasks" data={data} />
    </>
  )
}

export default AllTask
