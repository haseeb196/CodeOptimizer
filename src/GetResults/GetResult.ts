/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface data {
  code: string;
}

const GetResult = async ({ code }: data) => {
  
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  };

  const data1 = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `optimize this code and make it shorter: ${code}` }],
    temperature: 0.7,
  };
  const url = "https://api.openai.com/v1/chat/completions";
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data1),
  };
  const res = await fetch(url, options);
  const datas = await res.json();

  const message = await datas.choices[0].message.content;

  return message;
};

export default GetResult;
