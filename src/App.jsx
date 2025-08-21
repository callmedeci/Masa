import LinksList from './components/Links/LinksList';
import Header from './Header';

const linksData = [
  { icon: 'youtube', shadow: 'rose' },
  { icon: 'discord', shadow: 'purple' },
  { icon: 'facebook', shadow: 'blue' },
  { icon: 'github', shadow: 'zinc' },
  { icon: 'twitter', shadow: 'sky' },
  { icon: 'linkedin', shadow: 'blue500' },
];

export default function App() {
  return (
    <section className='bg-ctp-mantle text-ctp-text w-full min-h-dvh flex items-center justify-center'>
      <div className='w-full h-full flex flex-col items-center justify-center max-w-sm md:max-w-2xl px-5 justify-self-center gap-6'>
        <Header />
        <LinksList links={linksData} />
      </div>
    </section>
  );
}
