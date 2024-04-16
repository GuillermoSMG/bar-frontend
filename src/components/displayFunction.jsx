import React, { useEffect, useState } from 'react'
import { getData } from '../services/fetch.js'

export default function CatalogDisplay({texto}) {
    const [data, setData] = useState([])
    useEffect(() => { fetch ('src\\mocks\\bebidas.json')
    .then(res => res.json())
    .then(res => setData(res))
    }, [])
    console.log(data)
  return (
    <ul>
      {data?.map(data => (<li>{data.Nombre}</li>))}
    </ul>
  )
}