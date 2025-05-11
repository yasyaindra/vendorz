import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
  });
  return (
    <div>
      <h1>Our Data</h1>
      <ol>
        {data?.docs.map((item) => <li key={item.id}>{item.name}</li>)}
        {data?.docs.length === 0 && <p>No data found</p>}
      </ol>
    </div>
  );
}
