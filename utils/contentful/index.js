const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})


export async function fetchEntries(content_type) {
  const entries = await client.getEntries({
    'content_type': `${content_type}`
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchEntryBySlug( content_type, slug) {
  const entry = await client.getEntries({
    'content_type': `${content_type}`,
    'fields.slug': `${slug}` 
  })
  console.log(entry.items)
  if (entry.items) return entry.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}