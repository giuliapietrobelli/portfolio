export async function POST(req: { json: () => PromiseLike<{ name: any; email: any; message: any; }> | { name: any; email: any; message: any; }; }) {
  try {
    const { name, email, message } = await req.json(); // Ottieni i dati dal body della richiesta

    // URL dell'API Airtable
    const airtableApiUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`;

    // Prepara i dati che vuoi salvare in Airtable
    const data = {
      records: [
        {
          fields: {
            Name: name,
            Email: email,
            Message: message,
          },
        },
      ],
    };

    console.log('data: ', JSON.stringify(data, null, 2))

    // Fai la richiesta POST a Airtable usando fetch
    const response = await fetch(airtableApiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log('ERRORE: ', await response.json());
      throw new Error(`Errore durante la richiesta: ${response.statusText}`);
    }

    return new Response(JSON.stringify({ message: 'Dati salvati su Airtable!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Errore nel salvataggio su Airtable:', error);
    return new Response(JSON.stringify({ error: 'Errore durante il salvataggio su Airtable.' }), {
      status: 500,
    });
  }
}
