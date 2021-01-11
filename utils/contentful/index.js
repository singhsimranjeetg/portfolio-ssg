const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})


export async function fetchEntries() {
  const entries = await client.getEntries({
    'content_type': 'post'
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchEntryBySlug(slug) {
  const entry = await client.getEntries({
    'fields.slug': `${slug}`,
    'content_type': 'post'
  })
  console.log(entry.items)
  if (entry.items) return entry.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}