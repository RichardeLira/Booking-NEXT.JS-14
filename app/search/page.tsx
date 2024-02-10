import { notFound } from 'next/navigation'
import React from 'react'

type SearchParams = {
  url: URL
  group_adults: string
  group_children: string
  no_rooms: string
  checkin: string
  checkout: string
}
type props = {
  searchParams: SearchParams
}

async function SearchPage({ searchParams }: props) {
  if (!searchParams.url) return notFound()

  const results = await fetchResults(searchParams)
  return <div>search</div>
}

export default SearchPage
