import { useState } from 'react'
import axios from "axios"

export default function useMovies() {
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const getData = async (url) => {
    try {
      const { data } = await axios.get(url)
        setData(data)
        setTotalPages(data.total_pages)
    } catch (error) {
      setError(error);
    }}
   
  return { getData, setCurrentPage, data, totalPages, currentPage }
}