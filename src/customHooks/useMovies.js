import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function useMovies() {

  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const getData = async (url) => {
    try {
      const { data } = await axios.get(url)
        setData(data)
        setTotalPages(data.total_pages)
    } catch (error) {
        console.error('Error fetching data:', error);
        navigate("/not-found")
    }
  }
   
  return { getData, setCurrentPage, data, totalPages, currentPage }
}