// @ts-ignore
import React, { useCallback, useState } from 'react'

import Loader from '../display/Loader/Loader'

type LoaderObj = {
  loaderStatus: boolean
  loaderElement: React.ReactNode
  setLoader: any
}

const useLoader = (status: boolean): LoaderObj => {
  const [isLoader, setLoader] = useState<boolean>(status)

  return {
    loaderStatus: isLoader,
    loaderElement: isLoader ? <Loader /> : null,
    setLoader: useCallback((newStatus: boolean) => setLoader(newStatus), [])
  }
}

useLoader.deafultProps = {
  status: false
}

export default useLoader
