import { ChartsList } from '@components/ChartsList';
import { SearchBox } from '@components/SearchBox';
import { DataType } from '@typings/chart-data';

export default async function Home() {
  const data: DataType[] = await fetch('https://storage.googleapis.com/clika-public-interview-resources/data.json',{ cache:"no-cache" }).then(res=> res.json());
  const uniqueNames = Array.from(new Set(data.map((entry) => entry.name)));
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="w-[800px] pb-12">
        <SearchBox />
      </section>
      <section>
        <ChartsList uniqueNames={uniqueNames} data={data}/>
      </section>
    </main>
  )
}
