import React from 'react'
import ContentCommon from './common/ContentCommon'
import { useLoaderData } from 'react-router-dom';

function ImportantTask() {
  const data = useLoaderData() as any[];
  return (
    <>
      <ContentCommon
        name="Important Tasks"
        data={data}
        isCompleteTask={false}
        isAllTask={false}
        isImportantTask={true} />
    </>
  )
}

export default ImportantTask
