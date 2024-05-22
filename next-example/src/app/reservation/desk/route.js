let data = [{ test: '1234' }];

export async function GET() {
  console.log(data);
  return Response.json(data);
}

export async function POST(req) {
  const newItem = await req.json();
  data.push(newItem);
  console.log(data);
  return Response.json(newItem, { status: 201 });
}
