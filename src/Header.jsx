import InfoList from './components/Infos/InfoList';

export default function Header() {
  const infos = [
    { context: 'Yunes', color: 'green', icon: 'user' },
    { context: '30 C', color: 'mauve', icon: 'sun' },
    {
      context: '3:32 AM',
      color: 'peach',
      icon: 'time',
    },
    {
      context: 'Nov 14',
      color: 'pink',
      icon: 'calendar',
    },
  ];

  const dateOptions = { month: 'short', day: '2-digit' };
  const hourOptions = { hour: 'numeric', minute: '2-digit' };

  infos.at(-1).context = Intl.DateTimeFormat('en-US', dateOptions).format(
    new Date()
  );

  infos.at(-2).context = Intl.DateTimeFormat('en-US', hourOptions).format(
    new Date()
  );

  return (
    <header className='flex flex-col w-full h-full md:items-center justify-center'>
      <pre className='text-clip text-ctp-blue text-xs md:text-xl xl:text-2xl relative text-center'>
        {`
███╗   ███╗ █████╗ ███████╗ █████╗ 
████╗ ████║██╔══██╗██╔════╝██╔══██╗
██╔████╔██║███████║███████╗███████║
██║╚██╔╝██║██╔══██║╚════██║██╔══██║
██║ ╚═╝ ██║██║  ██║███████║██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
    `}
      </pre>
      <InfoList infos={infos} />
    </header>
  );
}
