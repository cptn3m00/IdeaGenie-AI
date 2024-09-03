"use client"

import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSec from './_components/TemplateListSec'

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>("")

  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />

      {/* Template List Section */}
      <TemplateListSec userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard
