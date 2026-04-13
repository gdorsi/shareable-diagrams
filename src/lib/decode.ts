export async function decodeFromHash(hash: string): Promise<string> {
  const compressed = Uint8Array.fromBase64(hash, { alphabet: 'base64url' })
  const ds = new DecompressionStream('gzip')
  const writer = ds.writable.getWriter()
  writer.write(compressed)
  writer.close()
  const reader = ds.readable.getReader()
  const chunks: Uint8Array[] = []
  while (true) {
    const { value, done } = await reader.read()
    if (done) break
    chunks.push(value)
  }
  const totalLength = chunks.reduce((sum, c) => sum + c.length, 0)
  const decompressed = new Uint8Array(totalLength)
  let offset = 0
  for (const chunk of chunks) {
    decompressed.set(chunk, offset)
    offset += chunk.length
  }
  return new TextDecoder().decode(decompressed)
}
