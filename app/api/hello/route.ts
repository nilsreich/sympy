export async function POST(request: Request) {
  const {name} = await request.json();
console.log(name)
  return new Response({ 'message': name });
}
