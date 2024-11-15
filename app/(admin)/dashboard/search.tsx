'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function SearchBar() {
  const pathname = usePathname();
  const router = useRouter();
  const search = useSearchParams();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const params = new URLSearchParams(search);
    if (value) {
      params.set('page', '1');
      params.set('query', value);
    } else {
      params.delete('query');
    }
    return router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <h1>Get query params</h1>
      <h1>searche: {search}</h1>
      <input
        type='text'
        className='border p-2'
        onChange={handleSearch}
        defaultValue={search.get('query')?.toString()}
      />
    </div>
  );
}
