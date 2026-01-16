export async function POST(req) {
  try {
    const data = await req.json();

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbwgQ8wQVIlTf9G2UodwRjQML2IwM16X0Y777gyqD_CQp_Uitlu8L-Shuqqk_S32M8mHAg/execE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      return new Response(
        JSON.stringify({ success: false }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch {
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}
