export async function POST(req) {
  try {
    const body = await req.json();

    await fetch(
      "https://script.google.com/macros/s/AKfycbwctHkO_ha9IMBbi9QlU1vLJbW7vWzkIkPtxyIF47CydZHP4CnJT4HNECygZbqfihaC/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
