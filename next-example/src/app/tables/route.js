let data = [{ id: '123' }, { id: '4567' }];

export async function GET() {
  // Bsp Validation and status added
  //   if (!request.id) {
  //     return Response.json('Please Log In', { status: 403 });
  //   }
  return Response.json(data);
}
export async function POST(request) {
  const dataJson = await request.json();
  data.push(dataJson);
  //Hier wird das geschriebene object noch einmal zurück geschickt
  return Response.json(dataJson, { status: 201 });
}
export async function PUT(request) {}
export async function DELETE(request) {}
