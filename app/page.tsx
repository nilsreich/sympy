'use client'
export default function Page() {

// make a fetch request
const handleClick = () => {
  fetch('./api/hello',
  
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: 'mike'})
    })
  .then(response => response.json())
  .then(json => console.log(json))
}

return (
<div>
  <div></div>
  <button onClick={handleClick}>get api</button>
</div>

  )
}
