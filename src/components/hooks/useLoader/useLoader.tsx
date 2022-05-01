import React, { useState } from 'react'

import { UseLoaderValues } from './useLoader.type'

const useLoader = (status: boolean): UseLoaderValues => {
  const [isLoader, setLoader] = useState<boolean>(status)

  const handleUpdateLoader = (newStatus: boolean) => {
    setLoader(newStatus)
  }

  return {
    isLoader,
    setLoader: handleUpdateLoader
  }
}

export default useLoader
