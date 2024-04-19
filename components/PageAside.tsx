import * as React from 'react'

import { Block, ExtendedRecordMap } from 'notion-types'

import { getPageTweet } from '@/lib/get-page-tweet'

import { PageActions } from './PageActions'

export const PageAside: React.FC<{
  block: Block
  recordMap: ExtendedRecordMap
  isBlogPost: boolean
}> = ({ block, recordMap }) => {
  if (!block) {
    return null
  }

  const tweet = getPageTweet(block, recordMap)
  if (!tweet) {
    return null
  }

  return <PageActions tweet={tweet} />
}
