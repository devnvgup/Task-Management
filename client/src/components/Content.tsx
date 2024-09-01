import React, { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AllTask from './AllTask';
import ImportantTask from './ImportantTask';
import CompletedTask from './CompletedTask';
import DoItNowTask from './DoItNowTask';

function Content() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const currentPath = pathSegments[1];
  const [componentNode, setComponentNode] = useState<ReactNode>(<AllTask />)
  useEffect(() => {
    if (currentPath === "allTask") {
      setComponentNode(<AllTask />)
    } else if (currentPath === "importantTask") {
      setComponentNode(<ImportantTask />)
    } else if (currentPath === "completedTask") {
      setComponentNode(<CompletedTask />)
    } else if (currentPath === "doItNowTask") {
      setComponentNode(<DoItNowTask />)
    }
  }, [currentPath])

  return (
    <>
    {componentNode}
    </>
  )
}

export default Content
