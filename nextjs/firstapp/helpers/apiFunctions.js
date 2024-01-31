
export async function getUsers() {
    const res = await fetch('http://localhost:8080/users')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   const data=res.json()
    return data
  }